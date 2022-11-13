var client = require('../db');
var {spawn} = require('child_process');

//http://localhost:3000/v1/api/dbUpdate/update/all/teams/sudoUpdateAllTeams

// IMPORT utility internal functions
var playersFunction = require('../functions/playerFunctions');
var teamsFunction = require('../functions/teamFunctions');
var linksFunction = require('../functions/linkFunction');

// PUT
const updateAllPlayers = async () : Promise<any> => {
    try{
        // Delete all players from the database
        await client.query('DELETE FROM players');
        console.log("All players deleted from the database");
        // Get all links from the database
        const links = await linksFunction.getAllLinks();
        console.log("All links retrieved from the database");
        // For each link, run the python script to get all players and team info
        for (let i = 0; i < links.length; i++) {
            // Run the python script
            const pythonScraper = spawn('python', ['../../../scraper/main.py', String(links[i].link), 'players']);
            // Get the output from the python script
            pythonScraper.stdout.on('data', function (data: any) {
                console.log(data.toString());
               });
            pythonScraper.on('close', (code: any) => {
                console.log(`child process close all stdio with code ${code}`);
            });
        }
        return ["Updating all players", 200];
    }catch(err){
        return err;
    }
}

const updateAllTeams = async () : Promise<any> => {
    console.log("Updating all teams");
    return ["Updating all teams", 200];
}

module.exports = {
    // PUT
    updateAllPlayers,
    updateAllTeams
}