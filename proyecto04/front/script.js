// JavaScript: Obtener las órdenes de un cliente seleccionado
const customerSelect = document.getElementById("customer-select");

//llenar la lista de clientes haciendo una peticion a la api
fetch("http://localhost:3000/customers")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(data => {
        const option = document.createElement("option");
        option.value = data.customerNumber;
        option.innerHTML = data.customerName;
        customerSelect.appendChild(option);
      });
    });

customerSelect.addEventListener("change", (event) => {
  // Obtener el valor seleccionado del cliente
  const customerId = event.target.value;

  // Realizar la consulta a la api para obtener las órdenes del cliente seleccionado con estado "Shipped"
  fetch(`http://localhost:3000/customers/${customerId}`)
    .then((response) => response.json())
    .then((data) => {

      const orders = [];
      data.forEach(data => {
        orders.push(data);
      });
      // for (const order of this.orders) {
      //   if (order.customerId === customerId) {
      //     orders.push(order);
      //   }
      // }



      // Mostrar las órdenes en la tabla
      const ordersTable = document.getElementById("orders-table");
      const ordersTableBody = ordersTable.getElementsByTagName("tbody")[0];
      ordersTableBody.innerHTML = ""; // Limpiar la tabla

      for (const order of orders) {
        // Crear una fila para cada orden
        const row = document.createElement("tr");

        // Crear las celdas para cada columna
        const orderNumberCell = document.createElement("td");
        const orderDateCell = document.createElement("td");
        const shippedDateCell = document.createElement("td");
        const statusCell = document.createElement("td");

        // Agregar el contenido de las celdas
        orderNumberCell.innerHTML = order.orderNumber;
        orderDateCell.innerHTML = order.orderDate;
        shippedDateCell.innerHTML = order.shippedDate;
        statusCell.innerHTML = order.status;

        // Agregar las celdas a la fila
        row.appendChild(orderNumberCell);
        row.appendChild(orderDateCell);
        row.appendChild(shippedDateCell);
        row.appendChild(statusCell);

        // Agregar la fila a la tabla
        ordersTableBody.appendChild(row);

        // Agregar la tabla a la página
        ordersTable.appendChild(ordersTableBody);
      }
    });
});

