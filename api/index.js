import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import UserRoutes from "./UserRoutes.js";
import QuestionRoutes from "./QuestionRoutes.js";
import VoteRoutes from "./VoteRoutes.js";
import AnswerRoutes from "./AnswerRoutes.js";

// const app = express();
// const express = require('express');
const app = express();
const port = 3030;

// don't why it's included but should be for login auth
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
// app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//

app.get('/', ((req,res) => {
    res.send("test");
}));

app.use(UserRoutes);
app.use(QuestionRoutes);
app.use(VoteRoutes);
app.use(AnswerRoutes);

app.listen(port, ()=> {
    console.log("listening on port:"+port);
});