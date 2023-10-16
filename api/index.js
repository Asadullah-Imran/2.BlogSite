import express from "express";
import { default as authRoutes, default as postRoutes, default as usersRoutes } from "./routes/posts.js";

const app=express();

app.use(express.json());

app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)



app.listen(8800,()=>{
    console.log("Server is running on the port 8800")
})