import express from 'express';
import cors from "cors";
import HelloController from "./controller/hello-controller.js";
import UserController from "./controller/users/users-controller.js";
import TuitsController from "./controller/tuits/tuits-controller.js";
import mongoose from "mongoose";

//mongodb+srv://root:<password>@cluster0.kjs6rxr.mongodb.net/?retryWrites=true&w=majority

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json()); // parse JSON from HTTP request body

TuitsController(app);

HelloController(app);

UserController(app);

app.listen(process.env.PORT || 4000);





// const express = require('express')
//The require function is equivalent to the import keyword and loads a library into the local source.
// const app = express()
//The express() function call creates an instance of the express library and assigns it to local constant app.
// app.get('/hello', (req, res) => {res.send('Hello World!')})
//uses the app.get() function to configure an HTTP handler by mapping the URL pattern '/hello'
// to a function that handles the HTTP request.
// app.listen(4000)

//A request to URL http://localhost:4000/hello triggers the function implemented in the second argument of app.get().
// The handler function receives parameters req and res which allows the function to
// participate in the request/response interaction, common in client/server applications.
// The res.send() function responds to the request with the text Hello World!
// Use node to run the server from the root of the project as shown below.