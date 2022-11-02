import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import Head from "next/head";
import Select from "react-select";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import Login from "../components/Login";

function Home() {
    const [crushName, setCrushName] = useState();
    const [isSignedIn, setSignedIn] = useState(false);
    const [recievedName, setRecievedName] = useState([]);
    const [myName, setMyName] = useState("n/a");

    const saveCrush = async () => {
        const response = await fetch("/api/saveValue", {
            method: "POST",
            body: JSON.stringify({
                myName: myName,
                crushName: crushName,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        getCrushList();
        return data;
    };

    const getCrushList = async () => {
        const response = await fetch("/api/getValue", {
            method: "POST",
            body: JSON.stringify({
                user: myName,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        setRecievedName(data);
        return data;
    };

    const handleCrushName = (e) => {
        console.log(e.target.value);
        setCrushName(e.target.value);
    };

    const setNameFunction = (name) => {
        setMyName(name);
        getCrushList();
    };

    return (
        <div>
            {/* ternary expression if(myName = n/a), then show login button, else, show name of user logged in */}
            {myName == "n/a" ? (
                <div>
                    {" "}
                    Please sign in:
                    <Login
                        setName={setNameFunction}
                        setSignedIn={setSignedIn}
                    />
                </div>
            ) : (
                <div>{myName}</div>
            )}
            <div className={styles.container}>
                <br></br>
                Crush Name: <input onChange={handleCrushName}></input>
                <button onClick={() => saveCrush()}>Save Crush</button>
                <br></br>
                <br></br>
                Your Crushes:
                {recievedName != undefined
                    ? recievedName.map((value) => (
                          <div key={value.id}> {value.crushEmail} </div>
                      ))
                    : " "}
            </div>
        </div>
    );
}

export default Home;
