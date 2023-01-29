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

  // fetch a http://localhost:3000/products y poner dentro de la lista de productos
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      // const productsTable = document.getElementById("products-table");
      const productsTableBody = document.getElementById("productosbody");
      // agregar cada elemento de data a la tabla de productos
      data.forEach(data => {
        const row = document.createElement("tr");
        const celda = document.createElement("td");
        celda.innerHTML = data;
        row.appendChild(celda);
        productsTableBody.appendChild(row);
      });

    });

    // const productstable = document.getElementById("products-table");

customerSelect.addEventListener("change", (event) => {
  // Obtener el valor seleccionado del cliente
  const customerId = event.target.value;
  //arreglo priceEach * quantityOrdered
  
  // Realizar la consulta a la api para obtener las órdenes del cliente seleccionado con estado "Shipped"
  fetch(`http://localhost:3000/shipped/${customerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then((response) => response.json())
  .then((data) => {
      let arreglo_de_elementos = [];
      // Mostrar las órdenes en la tabla
      const ordersTable = document.getElementById("orders-table");
      const ordersTableBody = ordersTable.getElementsByTagName("tbody")[0];
      ordersTableBody.innerHTML = ""; // Limpiar la tabla

      for (const order of data) {

        const row = document.createElement("tr");

        // addObjectToArray(order,arreglo_de_elementos);// ----------------------------------------------
        arreglo_de_elementos.push({ 
          priceEach:  order.priceEach, 
          quantityOrdered: order.quantityOrdered
        });
        // let elemento = {
        //   priceEach: order.priceEach , 
        //   quantityOrdered: order.quantityOrdered
        // };

        // arreglo_de_elementos.push(elemento);


        for(const clave in order) {
          // Crear una fila para cada orden
          const celda = document.createElement("td");
          
          var text = ""+order[clave];
          var words = text.split(" ");
          var shortenedText = words.slice(0, 5).join(" ");
          // document.getElementById("text").innerHTML = shortenedText + "...";
          celda.innerHTML = shortenedText + "...";

          row.appendChild(celda);
          // Agregar la fila a la tabla
          ordersTableBody.appendChild(row);

          //total: recibe mediante POST un arreglo de elementos y devuelve un entero con el total (suma de priceEach * quantityOrdered)
          // arreglo_de_elementos.push(order[clave]);

        }
        ordersTable.appendChild(ordersTableBody);
      }



      //enviar por post el arreglo de elementos
      fetch("http://localhost:3000/total", {
        method: 'POST',
        body: JSON.stringify(arreglo_de_elementos),
        headers: {
           'Content-Type': 'application/json; charset=utf-8',
           "Access-Control-Allow-Origin": "*"
          }
      })
      .then((response) => response.json())
      .then((data) => {
        //cambiar el parrafo con el total
        const total = document.getElementById("total");
        total.textContent = "total (suma de priceEach * quantityOrdered): " + data + "";
      });
    });





});