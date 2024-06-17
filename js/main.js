import { getAllOrderdetailsByCustomers } from "./module/Customer.js";
import { getAllProductsDescription } from "./module/product.js";
import {getAllSFemployees} from "./module/employees.js"


console.log(await getAllSFemployees({}));