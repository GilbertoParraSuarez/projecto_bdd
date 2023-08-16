import { getConnection, sql } from "../database/connection.js"; // Assuming you have exported the queries object from your database module
import { queries } from "../database/querys.js";

export const getCategorias = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.verCategorias);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTransacciones = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.verTransacciones);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearCategoria = async (req, res) => {
  const { nombre, descripcion, montoTotal } = req.body;
  
  // Validación
  if (nombre == null || descripcion == null || montoTotal == null) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Complete todos los campos" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("descripcion", sql.VarChar, descripcion)
      .input("montoTotal", sql.Decimal, montoTotal)
      .query(queries.registrarCategoria);

    res.json({ nombre, descripcion, montoTotal });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearTransaccion = async (req, res) => {
  const { idCategoria, fecha, monto, descripcion } = req.body;

  // Validación
  if (
    idCategoria == null ||
    fecha == null ||
    monto == null ||
    descripcion == null
  ) {
    console.log(req.body)
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Complete todos los campos" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idCategoria", sql.Int, idCategoria)
      .input("fecha", sql.Date, fecha)
      .input("monto", sql.Decimal, monto)
      .input("descripcion", sql.VarChar, descripcion)
      .query(queries.registrarTransaccion);

    res.json({ idCategoria, fecha, monto, descripcion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const actualizarTransaccion = async (req, res) => {
  const { idTransaccion, idCategoria, fecha, monto, descripcion } = req.body;

  // Validación
  if (
    idCategoria == null ||
    fecha == null ||
    monto == null ||
    descripcion == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Complete todos los campos" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idTransaccion", sql.Int, idTransaccion)
      .input("idCategoria", sql.Int, idCategoria)
      .input("fecha", sql.Date, fecha)
      .input("monto", sql.Decimal, monto)
      .input("descripcion", sql.VarChar, descripcion)
      .query(queries.actualizarTransaccion);

    res.json({ idTransaccion, idCategoria, fecha, monto, descripcion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const eliminarTransaccion = async (req, res) => {
  const { idTransaccion } = req.params;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("idTransaccion", sql.Int, idTransaccion)
      .query(queries.eliminarTransaccion);

    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getResumenGastosPorCategoria = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.resumenGastosPorCategoria);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const getGastosPorMes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.gastosPorMes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUltimasTransacciones = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.ultimasTransacciones);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const gastosPorMes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.gastosPorMes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Resto de los controladores para las transacciones y procedimientos relacionados...
