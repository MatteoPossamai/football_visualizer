function About() {
    return (
        <div className="about">
            <h1>Football dashboard - About page</h1>
            <article>
                <section>
                    <h3>What is this project?</h3>
                    <p className="about-p">This project is a personal project that I started to learn more fullstack concepts and technologies. I'm a big fan of football and I wanted to put
                        a big amout of data in the same dashboard online. If you want to check out the codebase, here is the link: <a href="https://github.com/MatteoPossamai/football_visualizer">Github Repository</a>
                    <br /></p>
                </section>
                <section>
                    <h3>What is the data source?</h3>
                    <p className="about-p">The data is taken from the <a href="https://www.wikipedia.org/">Wikipedia</a>. The data are scraped direcly from the Wikipedia pages and then stored in a database.
                    This way, the data remains free and open to everyone, but more fruible and easy to use. The scraping is done with a python script that you can find in the repository.
                    <br /></p>
                </section>
                <section>
                    <h3>What is the technology stack?</h3>
                    <p className="about-p">The frontend is built with React and Typescript. The backend is built with Node.js and Express. The database is a PostgreSQL database.
                    The cluster is provided by <a href="https://www.elephantsql.com/">ElephantSQL</a>. All the data are stored there every given interval of time.<br /></p>
                </section>
                <section>
                    <h3>What is the data?</h3>
                    <p className="about-p">The data in this dashboard are all the most important informations about clubs and teams, like
                    where the club is based, the owner, all the trophies where applicable and the roaster of the team. 
                    The data are updated every 24 hours, so you can always have the most recent data.<br /></p>
                </section>
                <section>
                    <h3>What is the future of this project?</h3>
                    <p className="about-p">I want to add more data and more features to this project. I want to add more data about the players, like the stats and the history of the player.
                    I also want to add more features, like a search bar to search for a specific club or player.<br /></p>
                </section>
            </article>
        </div>
    )
}

export default About;