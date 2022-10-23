var client = require('../db');

// GET
const allPlayers = async () : Promise<any> => {
    try{
        const response = await client.query('SELECT * FROM player;');
        return [response.rows, 200];
    }catch(err){
        console.log(err);
    }
}

const playerById = async (id: number) : Promise<any> => {
    try{
        const response = await client.query('SELECT * FROM player WHERE id = $1;', [id]);
        if (response.rows.length > 0){
            return [response.rows[0], 200];
        }else{
            return [{message: 'Player not found'}, 404];
        }
    }catch(err){
        console.log(err);
    }
}

const playersByTeam = async (teamId: number) : Promise<any> => {
    try{
        const response = await client.query('SELECT * FROM player WHERE team_id = $1;', [teamId]);
        if (response.rows.length > 0){
            return [response.rows, 200];
        }else{
            return [{message: 'Players not found'}, 404];
        }
    }catch(err){
        console.log(err);
    }
}

// POST
const createPlayer = async (name: string, number: number, role: string, nationality: string, teamId: number) : Promise<any> => {
    try{
        const response = await client.query('INSERT INTO player (name, number, role, nationality, team_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [name, number, role, nationality, teamId]);
        return [response.rows[0], 201];
    }catch(err){
        console.log(err);
    }

}

// PUT
const updatePlayer = async (id: number, name: string, age: number, position: string, teamId: number) : Promise<any> => {
    try{
        const response = await client.query('UPDATE player SET name = $1, age = $2, position = $3, team_id = $4 WHERE id = $5 RETURNING *;', [name, age, position, teamId, id]);
        return [response.rows[0], 200];
    }catch(err){
        console.log(err);
    }
}

// DELETE
const deletePlayer = async (id: number) : Promise<any> => {
    try{
        const response = await client.query('DELETE FROM player WHERE id = $1 RETURNING *;', [id]);
        return [response.rows[0], 200];
    }catch(err){
        console.log(err);
    }
}

const deleteAllPlayers = async () : Promise<any> => {
    try{
        const response = await client.query('DELETE FROM player;');
        return [response.rows, 200];
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    // GET
    allPlayers,
    playerById,
    playersByTeam,
    // POST
    createPlayer,
    // PUT
    updatePlayer,
    // DELETE
    deletePlayer,
    deleteAllPlayers
}