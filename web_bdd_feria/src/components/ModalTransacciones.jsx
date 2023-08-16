import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Container, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { gestionService } from "../services/gestionService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export const ModalTransacciones = ({ handleClose, listarTransacciones, open, transaccion }) => {
  const [IdTransaccion, setIdTransaccion] = useState();
  const [Fecha, setFecha] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Monto, setMonto] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState({IdCategoria:0, NombreCategoria:""});
  const [accion, setAccion] = useState("nuevo")
  const listarCategorias = async () => {
    gestionService.getCategorias().then(data => {
      console.log(data);
      setCategorias(data);
    });
  };
  useEffect(() => {
    listarCategorias();
    console.log({transaccion}  )
    if(transaccion.IdTransaccion){
      setFecha(transaccion.Fecha)
      setMonto(transaccion.Monto)
      setDescripcion(transaccion.Descripcion)
      setCategoria(categorias.find(item=> item.IdCategoria==transaccion.IdCategoria))
      setAccion("actualizar")
      console.log(categoria)
    }else{
      console.log("Holaaaaaaaaaaaa")
    }
    
  }, [categoria])
  
  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos a través de una API, por ejemplo.
    console.log({ Fecha, Descripcion, Monto, categoria });
    gestionService
      .postTransacciones({ fecha:Fecha, descripcion:Descripcion,monto:Monto, idCategoria:categoria.IdCategoria })
      .then(response => {
        console.log(response);
        listarTransacciones();
        handleClose();
      });
   
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 500, color: "black" }}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Formulario
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label=""
                  fullWidth
                  value={Fecha}
                  onChange={e => setFecha(e.target.value)}
                  required
                  type={"date"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripcion"
                  fullWidth
                  value={Descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                {/* Selector de Categorías */}
                <FormControl fullWidth>
                  <Select
                    label="Categoría"
                    value={categoria.IdCategoria}
                    onChange={e => {
                      const cat= categorias.find(cate=> cate.IdCategoria==e.target.value)
                      setCategoria(cat)
                    }}
                  >
                    {categorias.map(cat => (
                      <MenuItem key={cat.IdCategoria} value={cat.IdCategoria}>
                        {cat.NombreCategoria}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Monto"
                  type="number"
                  fullWidth
                  value={Monto}
                  onChange={e => setMonto(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </Modal>
  );
};
