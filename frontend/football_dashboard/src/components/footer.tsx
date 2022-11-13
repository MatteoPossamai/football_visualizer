function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__block">
                    <h2 className="footer__title">Develper Contacts</h2>
                    <a href='https://github.com/MatteoPossamai'>GITHUB Profile</a><br />
                    <a href='https://matteopossamai.netlify.app/'>Personal Website</a><br />
                    <a href='https://www.linkedin.com/in/matteo-possamai-784988191/'>LinkedIn Profile</a><br />
                    <a href='https://medium.com/@mpossamaim'>Medium Profile</a><br />
                    <a href='https://twitter.com/MatteoPossamai_'>Twitter Profile</a><br />
                </div>
                <div className="footer__block">
                    <h2 className="footer__title">API Information</h2>
                    <p>All the data that you can find on this page are actively scaped from <a href="https://www.wikipedia.org/">WIKIPEDIA</a> and
                    they are all available here for free as the main source of them let it. The API is private for now. If you want some information
                    about that, contact the developer via one of the contacts provided.  </p>
                </div>
                <div className="footer__block">
                    <h2 className="footer__title">About the Project</h2>
                    <p>This project is a personal project that I started to learn more fullstack concepts and technologies. I'm a big fan of football and I wanted to put
                        a big amout of data in the same dashboard online. If you want to check out the codebase, here is the link: <br /><a href="https://github.com/MatteoPossamai/football_visualizer">Github Repository</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;