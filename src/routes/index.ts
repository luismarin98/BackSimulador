import { Router } from 'express';
import getUserMethodsAndNames, { user_routes } from './user';
import { ApiRequestFiles } from '../Interfaces/Files';
import getQuizMethodsAndNames, { quiz_routes } from './quiz';

const api_rutas = Router();

api_rutas.use(user_routes.name, user_routes.api_rutas)
api_rutas.use(quiz_routes.name, quiz_routes.api_rutas)

const { user_methods } = getUserMethodsAndNames();
const { quiz_methods } = getQuizMethodsAndNames();

export const routes: ApiRequestFiles[] = [{ service: user_routes.name, methods: user_methods }, { service: quiz_routes.name, methods: quiz_methods }];

export { api_rutas }