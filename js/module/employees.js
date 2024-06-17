import {connection} from "../../db/connection.js";

// Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103
export const getAllSFemployees = async({code = 1} = arg)=>{
    let [result] = await connection.execute(`
    SELECT *
    FROM employees
    WHERE officeCode = ?
    `, [code]);
    return result;
}
