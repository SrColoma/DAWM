import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


sequelize.define('customers', {
    customerNumber: {type:DataTypes.INTEGER, primaryKey: true},
    customerName: DataTypes.STRING,
    contactLastName: DataTypes.STRING,
    contactFirstName: DataTypes.STRING,
    phone: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    salesRepEmployeeNumber: DataTypes.INTEGER,
    creditLimit: DataTypes.INTEGER

},{
    timestamps: false
});

sequelize.define('employees', {
    employeeNumber: DataTypes.INTEGER,
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    extension: DataTypes.STRING,
    email: DataTypes.STRING,
    officeCode: DataTypes.STRING,
    reportsTo: DataTypes.INTEGER,
    jobTitle: DataTypes.STRING
},{
    timestamps: false
});

sequelize.define('offices', {
    officeCode: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    territory: DataTypes.STRING
},{
    timestamps: false
});
