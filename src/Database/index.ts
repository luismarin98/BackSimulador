import { connect, connection } from "mongoose"

export const RunConnectDB = async ({ connection_string }: { connection_string: string }) => {
    await connect(connection_string, { dbName: 'SimuladorComplexivo' }).catch(error => console.error(`Ocurrio algo en el momento de la conexion. \n ${error}`))

    connection.once('open', () => {
        console.log('/////////////////////////////////////////');
        console.log('/// Conexion con mongoDB establecida ////');
        console.log('/////////////////////////////////////////');
    })
}