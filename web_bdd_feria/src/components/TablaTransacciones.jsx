import { Add, Edit, Delete } from "@mui/icons-material";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Button,
} from "@tremor/react";
import { useState } from "react";
import { DotLoader } from "react-spinners";
import "./Tabla.css";
import { gestionService } from "../services/gestionService";
import { ModalTransacciones } from "./ModalTransacciones";

export const TablaTransacciones = ({ data = [], listarTransacciones, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [transaccion, setTransaccion] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id)=>{
    gestionService.deleteTransacciones(id).then(response=>{
      console.log(response)
      listarTransacciones();
    })
   
  }
  const handleUpdate = (data)=>{
    handleOpen();
    setTransaccion(data)
  }
  return (
    <Card className="rounded-lg bg-slate-700">
      <div className="relative">
        <Button onClick={handleOpen} icon={Add}>
          Registrar Transacciones
        </Button>
        {open && <ModalTransacciones handleClose={handleClose} listarTransacciones={listarTransacciones} open={open} transaccion={transaccion}/>}
        <Title className="text-center text-2xl">Listado de Transacciones</Title>
        <div className="max-h-96 overflow-y-auto custom-scrollbar px-4">
          {/* Aquí se establece la altura máxima y el scroll vertical */}
          <Table className="mt-5">
            <TableHead>
              <TableRow className="text-center">
                <TableHeaderCell className="text-center">ID</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  ID CATEGORIA
                </TableHeaderCell>
                <TableHeaderCell className="text-center">FECHA</TableHeaderCell>
                <TableHeaderCell className="text-center">MONTO</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  DESCRIPCION
                </TableHeaderCell>
                <TableHeaderCell className="text-center">
                  ACCIONES
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <div className="grid place-items-center absolute top-40 left-0 right-0 bottom-0">
                  <DotLoader color="#36d7b7" />
                </div>
              ) : (
                data.map(item => (
                  <TableRow key={item.IdTransaccion}>
                    <TableCell className="text-center">
                      {item.IdTransaccion}
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.IdCategoria}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.Fecha}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.Monto}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.Descripcion}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center flex gap-2 justify-center">
                        <Button color="primary" icon={Delete} onClick={()=> handleDelete(item.IdTransaccion)}>Eliminar</Button>
                      </Text>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
};
