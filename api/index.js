import express from "express";
import authRoutes from "./route/auth.js"
import usersRoutes from "./route/users.js"
import postRoutes from "./route/posts.js"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    credentials: true, // This allows the cookie to be sent
  }));
app.use(cookieParser())

app.use(express.json())
app.use("/api/posts",postRoutes)

app.use(express.json())
app.use("/api/auth",authRoutes)

app.use(express.json())
app.use("/api/users",usersRoutes)

app.listen(8080,()=>{
    console.log("Connected");
})