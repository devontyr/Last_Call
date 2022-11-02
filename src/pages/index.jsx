import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Head from "next/head";
import Select from "react-select";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import Login from "../components/Login";


function Home() {

  const [currentName, setCurrentName] = useState()
  const [recievedName, setRecievedName] = useState([])

  const saveUserName = async () => {
    const response = await fetch("/api/saveValue", {
      method: "POST",
      body: JSON.stringify({
        bodyData: {currentName},
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json()
    console.log(data)
    return data;

  };


  const getUserName = async () => {
    const response = await fetch("/api/getValue", {
      method: "POST",
      body: JSON.stringify({
        value: {currentName}
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json()
    console.log(data)
    setRecievedName(data)
    return data;

  };

  function handleInputChange(e) {
    setCurrentName(e.target.value)
  }


  return (
    <div>
{/* 
      <NavBar/> */}

      <div className={styles.container}>
      DEMO
      <input onChange={handleInputChange}>
      </input>
      <button onClick={() => saveUserName()}> Set name</button>
      <br/>
      <button onClick={() => getUserName()}> Get name</button>
      {recievedName != undefined ? recievedName.map((value) => <div key = {value.id}> {value.exampleColumn} </div>) : " "}
    </div> 
      <Login />

    </div>
  );
}

export default Home;










