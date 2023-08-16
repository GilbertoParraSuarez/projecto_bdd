import { Router } from "express";
import {
  getCategorias,
  crearCategoria,
  getTransacciones,
  crearTransaccion,
  actualizarTransaccion,
  getUltimasTransacciones,
  getResumenGastosPorCategoria,
  eliminarTransaccion,
  getGastosPorMes
} from "../controllers/gestion.controller.js";

const router = Router();

router.get("/Categorias", getCategorias);
router.post("/CrearCategoria", crearCategoria);

router.get("/Transacciones", getTransacciones);
router.post("/CrearTransaccion", crearTransaccion);
router.put("/ActualizarTransaccion/:id", actualizarTransaccion);

router.get("/UltimasTransacciones", getUltimasTransacciones);
router.get("/ResumenGastosPorCategoria", getResumenGastosPorCategoria);
router.get("/GastosPorMes", getGastosPorMes);

router.delete("/EliminarTransaccion/:idTransaccion", eliminarTransaccion);

export default router;
