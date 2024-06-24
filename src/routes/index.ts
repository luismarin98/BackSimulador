import { Router } from 'express';
import getMethodsAndNames, { user_routes } from './user';
import { ApiRequestFiles } from '../Interfaces/Files';

const api_rutas = Router();

api_rutas.use(user_routes.name, user_routes.api_rutas)

const { methods } = getMethodsAndNames();

export const routes: ApiRequestFiles[] = [{ service: user_routes.name, methods }];

export { api_rutas }