import { connection } from "../../db/connection.js";

//Multiples tablas 6. Obtener el promedio de la cantidad de productos en stock por línea de productos
export const getAverageQuantityProductsInStockByProductsLine= async()=>{
    let [result] = await connection.query(`SELECT products.productLine, AVG(products.quantityInStock) AS averageQuantityProductsInStok FROM products GROUP BY products.productLine;`);
    return result;
}

//Multiples tablas 18. Calcular la cantidad media de productos pedidos por cada cliente
export const getAverageBuyPriceProductosForEachCustomer= async()=>{
    let [result] = await connection.query(`SELECT customers.customerName, AVG(totalProducts) AS averageQuantityOrdered FROM customers JOIN (SELECT orders.customerNumber, SUM(orderdetails.quantityOrdered) AS totalProducts FROM   orders JOIN   orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY   orders.customerNumber ) AS customer_orders ON customers.customerNumber = customer_orders.customerNumber GROUP BY customers.customerName;`);
    return result;
}