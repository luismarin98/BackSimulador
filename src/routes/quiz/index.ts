import { Router } from "express";
import { get_methods } from "./get";
import { put_methods } from "./put";
import { delete_methods } from "./delete";
import { post_methods } from "./post";
import { ApiRuta, FilesRequest } from "../../Interfaces/Files";

const api_ruta = Router();

get_methods.map(data => api_ruta[data.method](data.capacity, data.promise));
put_methods.forEach(data => api_ruta[data.method](data.capacity, data.promise));
delete_methods.forEach(data => api_ruta[data.method](data.capacity, data.promise));
post_methods.forEach(data => api_ruta[data.method](data.capacity, data.promise));

export const quiz_routes: ApiRuta = { name: '/quiz', api_rutas: api_ruta }

const getQuizMethodsAndNames = () => {
    const quiz_methods: FilesRequest[] = [];

    get_methods.forEach(data => quiz_methods.push({ capacity: data.capacity, method: data.method }));
    put_methods.forEach(data => quiz_methods.push({ capacity: data.capacity, method: data.method }));
    delete_methods.forEach(data => quiz_methods.push({ capacity: data.capacity, method: data.method }));
    post_methods.forEach(data => quiz_methods.push({ capacity: data.capacity, method: data.method }));

    return { quiz_methods }
}

export default getQuizMethodsAndNames;