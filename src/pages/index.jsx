import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import Head from "next/head";
import Select from "react-select";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Submit from "../components/Submit"
import HomePage from "../components/HomePage"
import AboutPage from "../components/AboutPage"


function Home() {
  


  return (
    <div>
      <head>
        <title> Last Call </title>
          <meta name="description" content="Last Call matches you with your mutual
            crushes. Matches are sent exclusivley to Midd students who've participated in
            Last Call and have both individually listed eachother as a crush." />
      </head>
    
      <Submit></Submit>

      <footer>
        <h3>Last Call</h3>
      </footer>
    </div>    
  )
}

export default Home;