import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import router from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

//Middleware for handlig CORS POLICY
//Option 1: Allow all origins with default of cors(*)
app.use(cors());

//Option 2: Allow custom origin

// fron	


//----------------------------------------------z

// app.get("/api/name", (request, response) => {
// 	console.log(request);
// 	return response.status(234).send("Welcome to MERN-stack application");
// });
//----------------------------------------------

app.use("/books", booksRoute);

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("App connected to database");
		app.listen(PORT, () => {
			console.log(`I am listening on ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
