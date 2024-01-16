import express from "express"

const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(router);

app.listen(3000, () => {
  console.log('JSON Server is running');
});
