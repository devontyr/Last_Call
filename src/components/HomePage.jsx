import { flexbox, width } from "@mui/system";
import React from "react";
import styles from "../components/Home.module.css";

function HomePage(){
    return (
        <div style={{
            backgroundImage: "url(/images/greenphone.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: '100vw',
            height: '100vh'   
        }}>
        <body>
            <header>
                <h1 className="title_text"> Last Call </h1>
            </header>
        </body>
        </div>
    )
}

export default HomePage;