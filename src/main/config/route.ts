import { IExpress } from '../adapters/IExpress';

import { transcriptionRoutes } from '../routes';

export const setupRoutes = (app: IExpress): void => {
    app.use(transcriptionRoutes)
}