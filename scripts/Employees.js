import { getEmployees, getOrders } from "./database.js"
// import { findemployee } from "./Orders.js"

const orders = getOrders()
const employees = getEmployees()


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html;
}
const employeeOrders = (employeeObj) => {
    let ordersDone = 0
    for (const order of orders) {
        if (order.employeeId === employeeObj.id) {
            ordersDone += 1
        }
    }
    return ordersDone;
}
document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split('--')

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    let ordersCount = employeeOrders(employee)
                    window.alert(` ${employee.name} sold ${ordersCount} products`)
                }
            }
        }
    }
)
