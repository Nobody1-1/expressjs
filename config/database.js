import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db","root","",{
    host: "localhost",
    dialect: "mysql",
    port: 8111
})

export default db;