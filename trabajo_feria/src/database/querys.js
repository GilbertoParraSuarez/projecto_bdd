export const queries = {
  registrarCategoria:
    "EXEC RegistrarCategoria @NombreCategoria = @nombre, @Descripcion = @descripcion, @MontoTotal = @montoTotal;",
  verCategorias: "EXEC VerCategorias;",
  verTransacciones: "EXEC VerTransacciones;",
  registrarTransaccion:
    "EXEC RegistrarTransaccion @IdCategoria = @idCategoria, @Fecha = @fecha, @Monto = @monto, @Descripcion = @descripcion;",
  actualizarTransaccion:
    "EXEC ActualizarTransaccion @IdTransaccion = @idTransaccion, @IdCategoria = @idCategoria, @Fecha = @fecha, @Monto = @monto, @Descripcion = @descripcion;",
  eliminarTransaccion:
    "EXEC EliminarTransaccion @IdTransaccion = @idTransaccion;",
  resumenGastosPorCategoria:
    "SELECT IdCategoria, NombreCategoria, MontoTotal FROM ResumenGastosPorCategoria;",
  ultimasTransacciones: "SELECT * FROM UltimasTransacciones;",
  gastosPorMes: "SELECT * FROM GastosPorMes;",
};
