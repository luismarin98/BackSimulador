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

export const user_routes: ApiRuta = { name: '/user', api_rutas: api_ruta }

const getMethodsAndNames = () => {
    const methods: FilesRequest[] = [];

    get_methods.forEach(data => methods.push({ capacity: data.capacity, method: data.method }));
    put_methods.forEach(data => methods.push({ capacity: data.capacity, method: data.method }));
    delete_methods.forEach(data => methods.push({ capacity: data.capacity, method: data.method }));
    post_methods.forEach(data => methods.push({ capacity: data.capacity, method: data.method }));

    return { methods }
}

export default getMethodsAndNames;