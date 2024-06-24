import { connection } from "../../db/connection.js";

//Una tabla 3. Listar todas las órdenes que tienen un estado de Enviado
export const getAllOrdersWithStatusSHipped= async()=>{
    let [result] = await connection.query(`SELECT * FROM orders WHERE status = 'Shipped';`);
    return result;
}


//Multiples tablas 3. Calcular el total de órdenes realizadas por cada cliente
export const getTotalOrdersForEachCustomer= async()=>{
    let [result] = await connection.query(`SELECT customers.customerName, COUNT(*) AS totalOrders FROM orders JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerNumber;`);
    return result;
}