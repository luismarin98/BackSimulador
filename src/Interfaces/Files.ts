import { Request, Response, Router } from 'express';

type mehtods = 'get' | 'post' | 'put' | 'delete';

export interface ApiRequestFiles {
    service: string;
    methods: FilesRequest[];
}

export interface FilesRequest {
    capacity: string;
    method: any;
}

export interface MethodsParams {
    capacity: string;
    method: mehtods;
    promise: (req: Request, res: Response) => Promise<void>;
}

export interface ApiRuta {
    name: string;
    api_rutas: Router;
}