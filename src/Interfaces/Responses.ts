export type Responses = 'Sin Resultados' | 'Informacion guardada' | 'Sin exito' | 'Consulta exitosa' | 'Error de servidor' | 'Actualizacion exitosa' | 'Eliminacion exitosa';

export type StatusResponse = 200 | 404 | 500 | 201 | 400;

export interface BadRequestResponse {
    msg: Responses;
    status: StatusResponse;
    Error: unknown;
}