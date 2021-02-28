import { app } from '../adapters/IExpress';
import { setupRoutes } from './route'

setupRoutes(app);

export { app };