import {connection} from "../../db/connection.js";

// Una Tabla 4. Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103
export const getAllOrderdetailsByCustomers = async({status=["Resolved", "Shipped"], id=103} = arg)=>{
    let [result] = await connection.execute(`
    select d.* 
    from customers c
    inner join orders o on c.customerNumber = o.customerNumber
    inner join orderdetails d on o.orderNumber = d.orderNumber
    where o.status in (${status.map((val,i) => (i+1 == status.length) ? `"${val}"` : `"${val}",`).join("")}) and c.customerNumber = ? 
    `, [id]);
    return result;
}

//Multiples Tablas 16. Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor
export const getAverageCreditLimitOfCustomerForEachSeller = async()=>{
    let [result] = await connection.query(`SELECT  employees.employeeNumber,  employees.firstName, AVG(customers.creditLimit) AS averageCreditLimit FROM  employees JOIN  customers ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY  employees.employeeNumber,  employees.firstName;`);
    return result;
}

//Una Tabla 1. Obtener el promedio del límite de crédito de todos los clientes
export const getAverageCreditLimitOfAllCustomers = async()=>{
    let [result] = await connection.query(`SELECT AVG(creditLimit) AS averageCreditLimit FROM customers;`);
    return result;
}

//Multiples Tablas 2. Obtener el promedio del límite de crédito de los clientes por país
export const getAverageCreditLimitOfCustomersByCountry = async()=>{
    let [result] = await connection.query(`SELECT country, AVG(customers.creditLimit) AS averageCreditLimit FROM customers GROUP BY country;`);
    return result;
}

