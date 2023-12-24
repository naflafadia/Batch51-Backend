import { Request, Response } from 'express';
import provinceServices from '../services/ProvinceService';

export default new class ProvinceController {
    async create(req: Request, res: Response) {
        try {
            const data = req.body;
            const response = await provinceServices.create(data);
            return res.status(201).json(response);
        } catch (error) {
            console.error('Error creating province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = req.body;
            const response = await provinceServices.update(id, data);
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error updating province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await provinceServices.delete(id);
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error deleting province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await provinceServices.getAll();
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error getting all provinces:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
};