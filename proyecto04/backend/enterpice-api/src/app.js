import express from 'express';
import router from './routes/rutas.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(cors);
app.use(cors({ origin: '*' }));

app.use(router);
export default app;