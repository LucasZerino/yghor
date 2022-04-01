import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import PropTypes from "prop-types"
import { isEmpty } from "lodash"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import { withRouter } from "react-router-dom"
import "assets/scss/datatables.scss"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import { getWallet as onGetWallet } from "store/actions"
import WalletActivities from "./walletActivities"
import WalletStats from "./walletStats"
import WalletOverView from "./walletOverView"

//redux
import { useSelector, useDispatch } from "react-redux"
const CryptoWallet = props => {
  const dispatch = useDispatch()

  const { wallet } = useSelector(state => ({
    wallet: state.crypto.wallet,
  }))

  const [isMenu, setIsMenu] = useState(false)
  const [activeTab, setActiveTab] = useState("1")

  useEffect(() => {
    dispatch(onGetWallet())
  }, [onGetWallet])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Yghor Meira | Faturamento</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Faturamento" breadcrumbItem="Fluxo de Caixa" />
          {!isEmpty(wallet) && (
            <Row>
              <Col xl="12">
                <WalletStats
                  wallet={wallet}
                  isMenu={isMenu}
                  toggleMenu={toggleMenu}
                />
              </Col>
            </Row>
          )}
          <Row>
            <Col lg="12">
              {!isEmpty(wallet["walletHistory"]) && (
                <WalletActivities
                  walletHistory={wallet["walletHistory"]}
                  activeTab={activeTab}
                  toggleTab={toggleTab}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

CryptoWallet.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
}

export default withRouter(CryptoWallet)
