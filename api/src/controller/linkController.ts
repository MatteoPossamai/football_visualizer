import {Request, Response} from 'express';

var functions = require('../functions/linkFunction');

// http://localhost:3000/v1/api/links/

// GET
const getAllLinks = async (req: Request, res: Response) => {
    const [response, status] = await functions.allLinks();
    res.status(status).json(response);
}

const getLinkById = async (req: Request, res: Response) => {
    const [response, status] = await functions.linkById(req.params.id);
    res.status(status).json(response);
}

// POST
const createLink = async (req: Request, res: Response) => {
    const [response, status] = await functions.addLink(req.body.url);
    res.status(status).json(response);
}

// PUT
const updateLink = async (req: Request, res: Response) => {
    const [response, status] = await functions.updateLink(req.params.id, req.body.url, req.body.teamId);
    res.status(status).json(response);
}

// DELETE
const deleteLink = async (req: Request, res: Response) => {
    const [response, status] = await functions.deleteLink(req.params.id);
    res.status(status).json(response);
}

module.exports = {
    // GET
    getAllLinks,
    getLinkById,
    // POST
    createLink,
    // PUT
    updateLink,
    // DELETE
    deleteLink
}

