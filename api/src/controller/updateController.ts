import {Request, Response} from 'express';

var functions = require('../functions/updateFunctions');

const sudoUpdateAllPlayers = async (req: Request, res: Response) => {
    const [response, status] = await functions.updateAllPlayers();
    res.status(status).json(response);
}

const sudoUpdateAllTeams = async (req: Request, res: Response) => {
    const [response, status] = await functions.updateAllTeams();
    res.status(status).json(response);
}

module.exports = {
    // PUT
    sudoUpdateAllPlayers,
    sudoUpdateAllTeams
}