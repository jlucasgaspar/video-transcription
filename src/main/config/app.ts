import { app } from '../protocols/IExpress';
import { setupRoutes } from './route'

setupRoutes(app);

export { app };