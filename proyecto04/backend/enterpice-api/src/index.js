import app from './app.js';
import { sequelize } from './database/database.js';
import './models/models.js';    


async function main(){
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    app.listen(3000)
    console.log('Server on port 3000');
    
}
main();

// const  express = require('express');
// const app = express();
// const morgan = require('morgan');
// const { default: sequelize } = require('./models/models.js');

// const port = 3000;

// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// //sequelize autentication
// // funcion autenticar
// async () => {
//     try{
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     }catch(error){
//         console.error('Unable to connect to the database:', error);
//     }
// }
// authenticate();
// //routes
// app.use(require('./routes/index.js'));


// app.listen(port, () => {
//     console.log('Server on port', port);
// });