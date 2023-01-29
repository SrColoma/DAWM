import { json, Sequelize } from "sequelize";
import admin from 'firebase-admin';


const sequelize = new Sequelize('enterprise','root','admin',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,

});

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCswxPe6E6LjSPyCUjHZCXxb7myyedNPS8",
    authDomain: "proyecto4-4a1b5.firebaseapp.com",
    databaseURL: "https://proyecto4-4a1b5-default-rtdb.firebaseio.com",
    projectId: "proyecto4-4a1b5",
    storageBucket: "proyecto4-4a1b5.appspot.com",
    messagingSenderId: "852358341673",
    appId: "1:852358341673:web:3b926f64ca0ef92d65e838"
};
// import * as data from "../proyecto4-4a1b5-firebase-adminsdk-hs17h-3ac969ed54.json";

// const serviceAccount = require("../../proyecto4-4a1b5-firebase-adminsdk-hs17h-3ac969ed54.json");
// import serviceAccount from "../../proyecto4-4a1b5-firebase-adminsdk-hs17h-3ac969ed54.json" assert { type: "json" };


admin.initializeApp({
    credential: admin.credential.cert(
        {
            "type": "service_account",
            "project_id": "proyecto4-4a1b5",
            "private_key_id": "668c88e0d95a86e8ff9678c7137d55e203fb86a6",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9Xt6AVQzso+w6\nR2zHEMT6oaAeuKRi1emBnaa2I8W0vM2T8DHLWrETaO3LJRhAQkutJXfO/KSJ2rie\nzTeOFSRFwTe1lJ3N0OC4HW+UjVRstUFEgQnTK/ZP60gx9wiNKYvayPudfOJkhy/m\npGJrJuf/J0wz1sUwvpFOfJK5ctKfY7fOFYl9nF6rx/kxtH3Sg1Sg7UXbJx2CGlbm\n5KF8j0u8CwONcQE3J7psrZDcSovcc35Nv34HcB6CJhZ3duF0FcJPQZLR23mx0EYx\nphNUr735ebBu+vsWkFFBspoqgWjgKYCUDHLNqeEFlkG+oX/120HyxRAB/xT8ekRf\nLUnUEKW5AgMBAAECggEAAInVg3M6dIMezSeeKo65+1BxqRoIoEilalCYGb/OScOY\n/gkFII6NyaqsX73SQinYwebvs+9J9HkND1PcCukKelxLRpaOlaLjZgKcv5pgmWfb\n21BWm9AYhNpRZpBM6OyA+5/t/zZMr9EmlLb2RKxj+ni9Ibnu7kLhx4xZH8fbdh02\n3zQoQwhyhh6olUi0GQoQq4yF3hSWhcEHN5Koo2GqBKcJYFefcw0K79kMeJe+E2PQ\nWqQ1V6930nuI9m6XG4szbnaEnDCV8M3bqSRo+KPLF9j3pTr3xzgai3VB8i4yRPZ+\nNwDdijSPgENnb4pDFbY6UoRdAswUuoXMckysprTZ0QKBgQD5hxqsiL8o4ykqdIH4\n6qLzVLTfwJsiPfkUFFa7bCEEcMkPE//6XRXYYhTA0Kj8SCxfqs8lxbsv5aES94cy\nMnn//WbyJubF4fedSCDk58ro8Mao5uKVuh4NORFnCmu7tYLj1VAVFgYsvXFyzzOo\nIZNMYUPnNMbveuviEthWLB4V9QKBgQDCSFBR7tonuUHKskU6nIwOeqrGXMiFGbLu\npdhBmdyOTQOh+pZoYz1n6o83Hweu/yJgakuAPsLjsC3Y9Goiem3/O3u6tw1AyUDk\n55dYCAIM8M1fMD16oNhB41kz5bph16DfYh4UzfELiU36+eththWJYdm8gJ0XZVqt\nRNafU3NyNQKBgAjPdmelJGrDKo7vMi+hyUMiOIi1+kRJP+Qvm6hedwP7H35CzIUA\niGbtf6IXPAA8ZCS0mT/SLXvRddB/oOxqz9f0EJB4Qym1gtKw20h5zrZO2hTYoiN7\nQNhirXSf75HfJNH6lCtKbclinwDYxBApr1PBE260dFm8U1vWIoFYaW+JAoGBAKNb\nbHXH8RTPl3tYtA8ZTEZsbCWIJG6N8j7podFfDu1z4icTbd5t+1biCfOeGrbQ/dW1\n6q/1lacfHx26PXeqG80s9ddETVd5ISCXflDdwuOgof50sGzoy41zHTEe672TMkhB\n1utFUnWRyMjL1Vf+Y1N1vD/coLnoVfs004V6BKs1AoGAC4a4thp/nFgFtLeK064S\n+uE1aDxw2N4V38CvbtyNhWZ0umcfvy6oStUOi9cSCoalQ29FmNB2ajd6M79oRC+p\niID+Q+0+ajgR0bTUxlGrAkUwjYFWXUcoX6/AzOSkiuUEvNk/yDO37FWslavF7ymr\nUemyLt8DjSfxPdI8va8MJjA=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-hs17h@proyecto4-4a1b5.iam.gserviceaccount.com",
            "client_id": "102845091538194205866",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hs17h%40proyecto4-4a1b5.iam.gserviceaccount.com"
          }

    ),
    databaseURL: 'https://proyecto4-4a1b5-default-rtdb.firebaseio.com'
});

const firebase = admin.database();

export { sequelize, firebase};