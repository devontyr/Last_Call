import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import Head from "next/head";
import Select from "react-select";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Submit from "../components/Submit";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";

function Home() {
    const [page, setPage] = useState("HomePage");
    const updatePage = (newPage) => {
        setPage(newPage);
    };
    return (
        <div>
            <NavBar currentPage={page} updatePage={updatePage} />
            {(() => {
                switch (page) {
                    case "HomePage":
                        return <HomePage />;
                    case "AboutPage":
                        return <AboutPage />;
                    case "SubmitPage":
                        return <Submit />;
                    default:
                        return null;
                }
            })()}

            <footer>
                <h3>🤫🤫🤫 Last Call 🤫🤫🤫</h3>
            </footer>
        </div>
    );
}

export default Home;
