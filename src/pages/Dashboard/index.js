import React, { useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import MetaTags from "react-meta-tags"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user"
import MiniWidget from "./mini-widget"
import Earning from "./earning"
import Activity from "./Activity"

const Dashboar = props => {
  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ];
  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
          Yghor Meira | Dashboard
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboard" breadcrumbItem="Admin" />

          {/* Card User */}
          <CardUser />

          <Row>
              <Row>
                {/*mimi widgets */}
                <MiniWidget reports={reports} />
              </Row>
          </Row>

          <Row>
            {/* Activy */}
            <Activity />
            
            {/* earning */}
            <Earning />
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboar
