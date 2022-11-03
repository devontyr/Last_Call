import styles from ".//NavBar.module.css";

function NavBar({ currentPage, updatePage }) {
    return (
        <div className={styles.navBarStyle}>
            <head>
                <title> Last Call </title>
                <meta
                    name="description"
                    content="Last Call matches you with your mutual
            crushes. Matches are sent exclusivley to Midd students who've participated in
            Last Call and have both individually listed eachother as a crush."
                />
            </head>

            <button onClick={() => updatePage("HomePage")}>Home</button>
            <button onClick={() => updatePage("AboutPage")}>About</button>
            <button onClick={() => updatePage("SubmitPage")}>Crushes</button>
        </div>
    );
}

export default NavBar;
