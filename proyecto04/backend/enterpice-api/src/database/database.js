import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('enterprise','root','admin',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,

});
