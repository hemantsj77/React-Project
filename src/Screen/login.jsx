import React, { useState } from 'react'

import "./Styles/LoginScreen.scss"
import { useNavigate } from 'react-router-dom'
const login = () => {
  const nav = useNavigate();

  //userstate hook declaration and initialization
  const [data, setdata] = useState({
    username: "",
    pwd: ""
  })
  //function to handle the input change
  const dataHandler = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const dataFetcher = () => {
    console.log(data)
  }
  const navigator = () => {
    nav("/signup")
  }
  return (
    <div className="container">
      <div className="child-div">
        <form method='get'>
          <label htmlFor="username">username</label>
          <input id="username" type="text" name='username' placeholder='username' value={data.username} onChange={dataHandler} />
          <label htmlFor="password">password</label>
          <input id='pwd' type="password" name='pwd' placeholder='password' value={data.pwd} onChange={dataHandler} />
          <button onClick={dataFetcher}></button>
          <p>New to this website?Consider <span style={{ cursor: 'pointer', color: 'blue' }} onClick={navigator}>sign up</span></p>
          <div></div>
        </form>
      </div>
    </div>
  )
}

export default login