import { getAllOrderdetailsByCustomers } from "./module/Customer.js";
import { getAllProductsDescription } from "./module/product.js";


console.log(await getAllOrderdetailsByCustomers({}));