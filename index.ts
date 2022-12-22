import express from "express";
import sequelize from "./models";


const app = express();

app.use(express.json())

app.get("/", (_, res) => {
    res.status(200).json("Server API alive")
})

app.listen(3000, async () =>{
    await sequelize.authenticate();
    sequelize.sync({force: true});
})