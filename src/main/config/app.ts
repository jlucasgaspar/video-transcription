import express, { Router } from 'express';
import { setupRoutes } from './route'

export const router = Router();

const app = express();

setupRoutes(app);

export { app };