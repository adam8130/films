import React from "react";
import Router from "./Router/Router";
import Tabbar from "./Views/Tabbar/Tabbar";



export default function App() {

    const item = [
      {id: '/home', url: '/home', title: '電影'},
      {id: '/cinemas', url: '/cinemas', title: '影院'},
      {id: '/profile', url: '/profile', title: '我的'}
    ]

  return (
    <Router>
      <Tabbar item={item} clickColor='blue' fixed='bottom'/>
    </Router>
  )
}
