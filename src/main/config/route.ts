import { Express } from 'express';

import { transcriptionRoutes } from '../routes';

export const setupRoutes = (app: Express): void => {
    app.use(transcriptionRoutes)
}