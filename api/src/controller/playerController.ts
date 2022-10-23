import {Request, Response} from 'express';

var functions = require('../functions/playerFunctions');

// GET
const getAllPlayers = async (req: Request, res: Response) => {
    const [response, status] = await functions.allPlayers();
    res.status(status).json(response);
}

const getPlayerById = async (req: Request, res: Response) => {
    const [response, status] = await functions.playerById(req.params.id);
    res.status(status).json(response);
}

const getPlayersByTeam = async (req: Request, res: Response) => {
    const [response, status] = await functions.playersByTeam(req.params.id);
    res.status(status).json(response);
}

// POST
const createPlayer = async (req: Request, res: Response) => {
    const [response, status] = await functions.createPlayer(req.body.name, req.body.number, req.body.role, req.body.nationality, req.body.teamId);
    res.status(status).json(response);
}

// PUT
const updatePlayer = async (req: Request, res: Response) => {
    const [response, status] = await functions.updatePlayer(req.params.id, req.body.name, req.body.number, req.body.role, req.body.nationality, req.body.teamId);
    res.status(status).json(response);
}

// DELETE
const deletePlayer = async (req: Request, res: Response) => {
    const [response, status] = await functions.deletePlayer(req.params.id);
    res.status(status).json(response);
}

const deleteAllPlayers = async (req: Request, res: Response) => {
    const [response, status] = await functions.deleteAllPlayers();
    res.status(status).json(response);
}

module.exports = {
    // GET
    getAllPlayers,
    getPlayerById,
    getPlayersByTeam,
    // POST
    createPlayer,
    // PUT
    updatePlayer,
    // DELETE
    deletePlayer,
    deleteAllPlayers
}
        