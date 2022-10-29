var client = require('../db');

// GET 
const allTeams = async () : Promise<any> => {
    try{
        const response = await client.query('SELECT * FROM team;');
        return [response.rows, 200];
    }catch(err){
        console.log(err);
    }
};

const teamById = async (id: number) : Promise<any> => {
    try{
        const response = await client.query('SELECT * FROM team WHERE id = $1;', [id]);
        if (response.rows.length > 0){
            return [response.rows[0], 200];
        }else{
            return [{message: 'Team not found'}, 404];
        }
    }catch(err){
        console.log(err);
    }
}

// POST
const createTeam = async (name: string, colors: string, symbols:string, anthem:string, city:string, nation:string,
    confederation:string, federation:string, championship: string, foundation: number, owner: string, president:string,
    manager:string, stadium:string, stadium_capacity:string, places:string, website:string, trophies:string) : Promise<any> => {
    try{
        const response = await client.query('INSERT INTO team (name, colors, symbols, anthem, city, nation, confederation, federation, championship, foundation, owner, president, manager, stadium, stadium_capacity, places, website, trophies) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *;', [name, colors, symbols, anthem, city, nation, confederation, federation, championship, foundation, owner, president, manager, stadium, stadium_capacity, places, website, trophies]);
        return [response.rows[0], 201];
    }catch(err){
        console.log(err);
    }

};

// PUT
const updateTeam = async (id: number, name: string, colors: string, symbols:string, anthem:string, city:string, nation:string,
    confederation:string, federation:string, championship: string, foundation: number, owner: string, president:string,
    manager:string, stadium:string, stadium_capacity:string, places:string, website:string, trophies:string) : Promise<any> => {
    try{
        const response = await client.query('UPDATE team SET name = $1, colors = $2, symbols = $3, anthem = $4, city = $5, nation = $6, confederation = $7, federation = $8, championship = $9, foundation = $10, owner = $11, president = $12, manager = $13, stadium = $14, stadium_capacity = $19, places = $15, website = $16, trophies = $17 WHERE id = $18 RETURNING *;', [name, colors, symbols, anthem, city, nation, confederation, federation, championship, foundation, owner, president, manager, stadium, places, website, trophies, id, stadium_capacity]);
        return [response.rows[0], 200];
    }catch(err){
        console.log(err);
    }
};

// DELETE
const deleteTeam = async (id: number) : Promise<any> => {
    try{
        const response = await client.query('DELETE FROM team WHERE id = $1 RETURNING *;', [id]);
        return [response.rows[0], 200];
    }catch(err){
        console.log(err);
    }
};

const deleteAllTeams = async () : Promise<any> => {
    try{
        const response = await client.query('DELETE FROM team;');
        return [response.rows, 200];
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    // GET
    allTeams,
    teamById,
    // POST
    createTeam,
    // PUT
    updateTeam,
    // DELETE
    deleteTeam,
    deleteAllTeams
};