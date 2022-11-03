import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Head from "next/head";
import Select from "react-select";
import styles from "../styles/Home.module.scss";
import NavBar from "./NavBar";


function Submit() {

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
        <head>
            <title> Last Call | Home </title>
            <meta name="description" content="Last Call matches you with your mutual
            crushes. Matches are sent exclusivley to Midd students who've participated in
            Last Call and have both individually listed eachother as a crush." />
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="HomePage.jsx">Home</a></li>
                        <li><a href="AboutPage.jsx">About</a></li>
                        <li><a href="Submit.jsx">Submit a Crush</a></li>
                    </ul>
                </nav>
                <hr/>
                <h1>Last Call</h1>
                {/* TODO: find background image */}
            </header>

            {/* <NavBar/> */}
            <div className={styles.container}>
                Email address (ie. jdoe@middlebury.edu)
                <input onChange={handleInputChange}></input>
                <button onClick={() => saveUserName()}> Submit Name</button>
                <br/>
                <button onClick={() => getUserName()}> Get name</button>
                {recievedName != undefined ? recievedName.map((value) => <div key = {value.id}> {value.exampleColumn} </div>) : " "}
            </div> 

            <hr/>
            <footer>
                <h3>Last Call</h3>
            </footer>
        </body>
        </div>
  );
}

export default Submit;