import React from "react"
import { UncontrolledTooltip } from "reactstrap"
import { Link } from "react-router-dom"
import images from "assets/images"

const contactListColumns = () => [
  {
    dataField: "img",
    text: "#",
  },
  {
    text: "Name",
    dataField:"name",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    text: "Tags",
    dataField: "tags",
    sort: true,
  },
  {
    dataField: "projects",
    text: "Projects",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
  },
]

export default contactListColumns
