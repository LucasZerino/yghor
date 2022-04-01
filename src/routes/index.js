import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Calendario

import Calender from "../pages/calendar/index"

//E-mail de Cobrança

import TasksCreate from "../pages/Tasks/tasks-create"

//Add Paciente
import EcommerceAddProduct from "pages/Cadastro/EcommerceAddProduct"
//Lista de contatos

import ContactsList from "pages/Clientes/contatoslist"

//Faturamento
import cryptoWallet from "pages/Faturamento/crypto-wallet"

//Kanban

// import TasksKanban from "pages/Kanban/tasks-kanban"


const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },

  //Calendar
  { path: "/calendario", component: Calender },

  //Cobranças
  { path: "/cobranca", component: TasksCreate },

  //Add client
  { path: "/novocliente", component: EcommerceAddProduct },

  //Lista de contatos

  { path: "/clientes", component: ContactsList },

  //Faturamento
  { path: "/faturamento", component: cryptoWallet },

  //Kanban

  // { path: "/kanban", component: TasksKanban },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
