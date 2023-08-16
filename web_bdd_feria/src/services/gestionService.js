import { axiosInstance } from "./config";

export const gestionService = {};

gestionService.getCategorias = async () => {
  try {
    const response = await axiosInstance.get("Categorias");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.getTransacciones = async () => {
  try {
    const response = await axiosInstance.get("Transacciones");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.postCategorias = async ( categoria ) => {
  try {
    console.log(categoria)
    const response = await axiosInstance.post("CrearCategoria", categoria);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.postTransacciones = async (transacciones) => {
  try {
    console.log(transacciones);
    const response = await axiosInstance.post("CrearTransaccion", transacciones);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.updateTransacciones = async ({ transacciones, id }) => {
  try {
    const response = await axiosInstance.put(
      `ActualizarTransaccion/${id}`,
      transacciones
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.deleteTransacciones = async ( id ) => {
  try {
    const response = await axiosInstance.delete(`EliminarTransaccion/${id}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.getUltimasTransacciones = async () => {
  try {
    const response = await axiosInstance.get("UltimasTransacciones");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.getResumenGastosPorCategoria = async () => {
  try {
    const response = await axiosInstance.get("ResumenGastosPorCategoria");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gestionService.getGatosPorMes = async () => {
  try {
    const response = await axiosInstance.get("GastosPorMes");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};