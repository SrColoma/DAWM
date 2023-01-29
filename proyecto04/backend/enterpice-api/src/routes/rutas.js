import { Router } from 'express';
import { sequelize } from '../database/database.js';
import { firebase } from '../database/database.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({hola: 'mundo'});
});

router.get('/customers', (req, res) => {
    sequelize.models.customers.findAll()
    .then(customers => {
        res.json(customers);
    })
    .catch(error => {
        res.json(error);
    });

});

// ruta para obtener un solo cliente
router.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    sequelize.models.customers.findOne({
        where: {
            customerNumber: id
        }
    })
    .then(customer => {
        res.json(customer);
    })
    .catch(error => {
        res.json(error);
    });
});



// router.get("/shipped/:id", (req, res) => {
//     const { id } = req.params;
//     var status = "Shipped";


//     var ref = firebase.ref("/");
//     ref.orderByChild("customerNumber")
//     .equalTo(id)
//     .on("child_added", function(snapshot) {
//         var order = snapshot.val();
//         if(order.status === status) {
//             res.json(order);

//         }
//     });


//   });

router.get("/shipped/:id", (req, res) => {
    // Obtener el ID desde la petición
    const { id } = req.params;
    console.log(id);
    //convert id to number
    // var idNumber = parseInt(id);
  
    // Ejecutar la consulta
    firebase.ref("/").orderByChild("customerNumber").equalTo(parseInt(id))
    .on("value", snapshot => {
        // console.log(snapshot.val());

      // Comprueba si existen datos
      if (snapshot.exists()) {
        let data = snapshot.val();
        // Filtra los datos por status
        let filteredData = Object.values(data).filter(d => d.status === "Shipped");
        // Envía la respuesta
        res.json(filteredData);
      } else {
        // Envía una respuesta vacía si no hay datos
        res.status(200).send({});
      }
    });
  });


//recibe un arreglo de objetos con esta estructura {"priceEach":30 , "quantityOrdered":3} y multiplica priceEach con quantityOrdered luego suma todos los resultados y devuelve el total
router.post("/total", (req, res) => {
    // const { orderDetails } = req.body;
    let total = 0;

    for(let order of req.body){
        total += order.priceEach * order.quantityOrdered;
    }
    //enviar por res el total, con cors habilitado
    // res.status(200).send(total);
    res. header("Access-Control-Allow-Origin", "*");
    res.json(total);


});
// var products = [];
router.get('/products', (req, res) => {
    var productos = [];
    firebase.ref("/").orderByChild("productCode").on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var product = childSnapshot.val();
          if (!productos.includes(product.productCode)) {
            productos.push(product.productCode);
          }
        });
    res.json(productos);
    });
});




export default router;