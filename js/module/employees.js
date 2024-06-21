import {connection} from "../../db/connection.js";

// Una Tabla 4.Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103
export const getAllSFemployees = async({code = 1} = arg)=>{
    let [result] = await connection.execute(`
    SELECT *
    FROM employees
    WHERE officeCode = ?
    `, [code]);
    return result;
}


//Multiples tablas 2. Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143
export const getAllEmployeesByreportTo = async(id = 1143)=>{
    let [result] = await connection.query(` SELECT firstName, email FROM employees WHERE reportsTo = ?`, [id]);
    return result;
}

//Multiples tablas 8. Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado
export const getAverageSalesForEachEmployee = async()=>{
    let [result] = await connection.query(`SELECT employees.firstName,   AVG(orderdetails.quantityordered * orderdetails.priceEach) AS averageSales FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.firstName;`);
    return result;
}

//Multiples Tablas 9. Calcular el total de órdenes gestionadas por cada empleado
export const getTotalManagedOrdersForEachEmployee = async()=>{
    let [result] = await connection.query(`SELECT employees.firstName,   COUNT(*) AS totalOrders FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.firstName;`);
    return result;
}

//Una Tabla 6. Obtener la cantidad total de empleados
export const getTotalQuantityEmployees = async()=>{
    let [result] = await connection.query(`SELECT COUNT(*) AS totalEmployees FROM employees;`);
    return result;
}

//Una Tabla 10. Contar la cantidad de empleados por título de trabajo
export const getQuantityEmployeesByJobTitle = async()=>{
    let [result] = await connection.query(`SELECT jobTitle, COUNT(*) AS quantityEmployees FROM employees GROUP BY JobTitle;`);
    return result;
}


