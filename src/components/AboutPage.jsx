import styles from "./AboutPage.module.css";

function AboutPage(){
    return (
        <div>
        <body>
            <header>
                <h1>Last Call</h1>
            </header>
            <section>
                <h2>About</h2>
                <h4>Last Call is one last chance to connect before the semster ends!
                    Last Call matches you with your mutual crushes: enter as many as you 
                    want! There is no limit on love. Matches are sent exclusivley to Midd 
                    students who've participated in Last Call and have both individually 
                    listed eachother as a crush. </h4>
                <img src="/images/greenphone.jpg" alt="greenphone" />
                <p>For example, take Jane and John. Jane lists John as her crush. 
                    John lists Jane as his crush. Last call sends both Jane and John
                    a notification that they have matched as eachothers' crushes. A love
                    story begins. </p>
                <p>However, take Suzie and Sally. Suzie lists Sally as her crush. But Sally
                    does not list Suzie as one of hers. Nothing happens. Suzie's secret crush 
                    remains a secret. Love will have to find another way. </p>
            </section>
        </body>
        </div>
    )
}

export default AboutPage;