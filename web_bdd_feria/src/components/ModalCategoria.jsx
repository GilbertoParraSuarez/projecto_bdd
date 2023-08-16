import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Container, Grid, TextField, Typography } from "@mui/material";
import { gestionService } from "../services/gestionService";
import { toast } from "sonner";
import { Notificacion } from "./Notificacion";

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
export const ModalCategoria = ({ handleClose, listarCategorias }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [montoTotal, setMontoTotal] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos a través de una API, por ejemplo.
    console.log({ nombre, descripcion, montoTotal });
    gestionService
      .postCategorias({ nombre, descripcion, montoTotal })
      .then(response => {
        console.log(response);
        listarCategorias();
        toast('Categoria Creada Exitosamente')
        handleClose();
      });
  };
  return (
    <>
    
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
                  label="Nombre de Categoría"
                  fullWidth
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  required
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripción"
                  fullWidth
                  value={descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                  required
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Monto Total"
                  type="number"
                  fullWidth
                  value={montoTotal}
                  onChange={e => setMontoTotal(e.target.value)}
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
    <Notificacion/>
                  </>
  );
};
