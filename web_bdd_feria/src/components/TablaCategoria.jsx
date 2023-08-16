import { Add } from "@mui/icons-material";
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
import { ModalCategoria } from "./ModalCategoria";
import "./Tabla.css";

export const TablaCategoria = ({ data = [], listarCategorias }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className="rounded-lg bg-slate-700">
      <div className="relative">
        <Button onClick={handleOpen} icon={Add}>
          Registrar Categoria
        </Button>
        {open && <ModalCategoria handleClose={handleClose} listarCategorias={listarCategorias}/>}
        <Title className="text-center text-2xl">Listado de Categorias</Title>
        <div className="max-h-96 overflow-y-auto custom-scrollbar px-4">
          {/* Aquí se establece la altura máxima y el scroll vertical */}
          <Table className="mt-5">
            <TableHead>
              <TableRow className="text-center">
                <TableHeaderCell className="text-center">ID</TableHeaderCell>
                <TableHeaderCell className="text-center">
                  NOMBRE
                </TableHeaderCell>
                <TableHeaderCell className="text-center">
                  DESCRIPCION
                </TableHeaderCell>
                <TableHeaderCell className="text-center">
                  MONTO TOTAL
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length === 0 ? (
                <div className="grid place-items-center absolute top-40 left-0 right-0 bottom-0">
                  <DotLoader color="#36d7b7" />
                </div>
              ) : (
                data.map(item => (
                  <TableRow key={item.IdCategoria}>
                    <TableCell className="text-center">
                      {item.IdCategoria}
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">
                        {item.NombreCategoria}
                      </Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.Descripcion}</Text>
                    </TableCell>
                    <TableCell>
                      <Text className="text-center">{item.MontoTotal}</Text>
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
