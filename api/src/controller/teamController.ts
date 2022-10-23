import {Request, Response} from 'express';

var functions = require('../functions/teamFunctions');

// GET
const getAllTeams = async (req: Request, res: Response) => {
    const [response, status] = await functions.allTeams();
    res.status(status).json(response);
}

const getTeamById = async (req: Request, res: Response) => {
    const [response, status] = await functions.teamById(req.params.id);
    res.status(status).json(response);
}

// POST
const createTeam = async (req: Request, res: Response) => {
    const [response, status] = await functions.createTeam(req.body.name, req.body.colors, req.body.symbols, req.body.anthem, req.body.city, req.body.nation, req.body.confederation, req.body.federation, req.body.championship, req.body.foundation, req.body.owner, req.body.president, req.body.manager, req.body.stadium, req.body.places, req.body.website, req.body.trophies);
    res.status(status).json(response);
}

// PUT
const updateTeam = async (req: Request, res: Response) => {
    const [response, status] = await functions.updateTeam(req.params.id, req.body.name, req.body.colors, req.body.symbols, req.body.anthem, req.body.city, req.body.nation, req.body.confederation, req.body.federation, req.body.championship, req.body.foundation, req.body.owner, req.body.president, req.body.manager, req.body.stadium, req.body.places, req.body.website, req.body.trophies);
    res.status(status).json(response);
}

// DELETE
const deleteTeam = async (req: Request, res: Response) => {
    const [response, status] = await functions.deleteTeam(req.params.id);
    res.status(status).json(response);
}

const deleteAllTeams = async (req: Request, res: Response) => {
    const [response, status] = await functions.deleteAllTeams();
    res.status(status).json(response);
}

module.exports = {
    // GET
    getAllTeams,
    getTeamById,
    // POST
    createTeam,
    // PUT
    updateTeam,
    // DELETE
    deleteTeam,
    deleteAllTeams
}