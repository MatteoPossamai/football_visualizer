var client = require('../db');

// GET
const getAllLinks = async () : Promise<any> => {
    try {
        const result = await client.query('SELECT * FROM links');
        return result.rows;
    } catch (err) {
        return err;
    }
}

const getLinkById = async (id: number) : Promise<any> => {
    try {
        const result = await client.query('SELECT * FROM links WHERE id = $1', [id]);
        return result.rows;
    } catch (err) {
        return err;
    }
}

// POST
const addLink = async (url:string) : Promise<any> => {
    try {
        const result = await client.query('INSERT INTO links (url) VALUES ($1) RETURNING *', [url]);
        return result.rows;
    } catch (err) {
        return err;
    }
}

// PUT
const updateLinkById = async (id: number, url:string, team_id: number) : Promise<any> => {
    try {
        const result = await client.query('UPDATE links SET url = $1, team_id = $2 WHERE id = $3 RETURNING *', [url, team_id, id]);
        return result.rows;
    } catch (err) {
        return err;
    }
}

// DELETE
const deleteLinkById = async (id: number) : Promise<any> => {
    try {
        const result = await client.query('DELETE FROM links WHERE id = $1 RETURNING *', [id]);
        return result.rows;
    } catch (err) {
        return err;
    }
}

module.exports = {
    // GET
    getAllLinks,
    getLinkById,
    // POST
    addLink,
    // PUT
    updateLinkById,
    // DELETE
    deleteLinkById
}