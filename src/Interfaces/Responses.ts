export type Responses = 'Sin Resultados' | 'Consulta exitosa' | 'Error de servidor' | 'Actualizacion exitosa' | 'Eliminacion exitosa';

export type StatusResponse = 200 | 404 | 500 | 201;

export interface BadRequestResponse {
    msg: Responses;
    status: StatusResponse;
    Error: unknown;
}