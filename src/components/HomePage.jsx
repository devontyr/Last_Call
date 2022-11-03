import styles from "../components/Home.module.css";

function HomePage(){
    return (
        <div>
        <head>
            <title> Last Call </title>
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

            <hr/>
            <footer>
                <h3>Last Call</h3>
            </footer>
        </body>
        </div>
    )
}

export default HomePage;