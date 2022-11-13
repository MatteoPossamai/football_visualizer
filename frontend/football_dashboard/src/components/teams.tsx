import Header from "./header";

function Teams(teams: any) {
  return (
    <>
        <Header />
        <div className="teamsPage">
            <br ></br>
            <h1 className="header-title">TEAMS PAGE</h1>
            <h3>Here is the page into you can find each team in our database. Search the one you are interested
                in, click on it and find all the informations about it. You can also request to add a new team
                in the database, at <a href="">this page</a>.
            </h3>
        </div>
    </>
  )
}

export default Teams;