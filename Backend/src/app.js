// Cargar variables de entorno
// Cargar variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Librerías 
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routers
import { UserRouter } from "./routers/user/UserRouter.js";
import { ImageUploadRouter } from "./routers/image/imageUpload/ImageUploadRouter.js";
import { ProductRouter } from "./routers/product/ProductRouter.js";
import { ProductsListRouter } from "./routers/productsList/ProductsListRouter.js";
import { ProductRouterWithImage } from "./routers/productWithImage/ProductRouterWithImage.js";
import { CategoryRouter } from "./routers/category/CategoryRouter.js";
import { ProductRouterWithCategory } from "./routers/productWithCategory/ProductRouterWithCategory.js";
import { ProductRouterModa } from "./routers/moda/ProductModaRouter.js";
import { ProductRouterWithModa } from "./routers/productWithModa/ProductRouterWithModa.js";

// Conexión a la base de datos
import { connectionDB } from "./db/connectionDB.js";

// App
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// CORS CORRECTO PARA RENDER
app.use(cors({
  origin: "*",
  credentials: true,
}));

// Guardar token en cookie
app.use(cookieParser());

// Conexión a la base de datos
connectionDB.connect();

// Rutas
app.use("/api/v1", UserRouter);
app.use("/api/v1", ProductRouter);
app.use("/api/v1", ProductsListRouter);
app.use("/api/v1", ImageUploadRouter);
app.use("/api/v1", CategoryRouter);
app.use("/api/v1", ProductRouterWithImage);
app.use("/api/v1", ProductRouterModa);
app.use("/api/v1", ProductRouterWithModa);
app.use("/api/v1", ProductRouterWithCategory);

// Puerto
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
