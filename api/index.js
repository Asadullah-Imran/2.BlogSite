import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from "express";
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';

const app=express();
app.use(cors())


app.use(express.json());
app.use(cookieParser());

app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)



app.listen(8800,()=>{
    console.log("Server is running on the port 8800")
})