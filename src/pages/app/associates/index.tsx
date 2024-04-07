import { GenericService } from "@/services/GenericService";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { Associate } from "@/types/models/Associate";
import {
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Button from "@/components/common/Button";
import { usePathname, useSearchParams } from "next/navigation";
import { IoIosAddCircle } from "react-icons/io";
import { useSearch } from "@/hooks/useSearch";
import { usePagination } from "@/hooks/usePagination";
import { useOrderBy } from "@/hooks/useOrderBy";
import SearchBar from "@/components/SearchBar";
import Paginator from "@/components/PaginationFooter";
import { useNotification } from "@/hooks/useNotification";
import { useRouter } from "next/router";
import { useMember } from "@/hooks/useAuth";
import * as XLSX from 'xlsx';
import axios from 'axios';

const AssociatesPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [associates, setAssociates] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { currentMember } = useMember();

  const [selectedFileData, setSelectedFileData] = useState<(Record<string, string> | null)[]>([]);

  // Hooks para la busqueda, paginacion y ordenamiento, son reutilizables para otras paginas
  const { searchTerm, setSearchTerm, handleSearchWithPage } = useSearch();
  const {
    pageNumber,
    pageSize,
    setPageNumber,
    setPageSize,
    PreviousPage,
    NextPage,
    ChangePageSize,
  } = usePagination(searchTerm);
  const { orderBy, setOrderBy, SortByName, SortByEmail, SortByActive } =
    useOrderBy(pageNumber, pageSize);

  const { Notification } = useNotification();

  useEffect(() => {
    setIsLoading(true);

    // Obtener los parametros de la URL
    setPageNumber(
      searchParams.has("pageNumber")
        ? Number(searchParams.get("pageNumber"))
        : 1
    );
    setPageSize(
      searchParams.has("pageSize") ? Number(searchParams.get("pageSize")) : 5
    );

    setSearchTerm(
      searchParams.has("searchTerm")
        ? String(searchParams.get("searchTerm"))
        : ""
    );

    setOrderBy(
      searchParams.has("orderBy") ? String(searchParams.get("orderBy")) : ""
    );

    // Obtener los datos de la API en base a los parametros de la URL
    const fetchData = async () => {
      try {
        const endpoint = `associates?pageNumber=${pageNumber}&pageSize=${pageSize}
          &searchTerm=${searchTerm}&orderBy=${orderBy}`;

        const response = await GenericService.list(endpoint);

        setAssociates(response.data.list);
        setTotalPages(response.data.totalPages);
      } catch (error: any) {
        Notification(`Acerca del error: ${error.message}`);
      }
    };

    fetchData();
    setIsLoading(false);
  }, [searchParams, pageNumber, pageSize, pathname, orderBy]);

  // Proceso de datos para leer excel
  const readExcel = async (file: File) => {
    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = (e) => {
        if (!e.target) {
          return;
        }
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        // Suponemos que la primera hoja contiene los datos
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        // Define los títulos específicos que deseas leer
        const desiredColumns = ['Nombre', 'Número Cédula', 'Estatus 1', 'Correo', 'Telefono'];

        // Convierte la hoja en un array de objetos
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

        // Encuentra las columnas correspondientes a los títulos deseados
        const titleRow = data[0] as string[];
        const columnIndex = desiredColumns.map((title) => titleRow.indexOf(title));

        // Extrae los datos de las filas
        const excelData = (data as string[][]).slice(1).map((row: string[]) => {
          const rowData: Record<string, string> = {};
          let isEmptyRow = true; // Bandera para verificar si la fila está vacía

          columnIndex.forEach((index, i) => {
            const cellValue = row[index];
            if (cellValue !== null && cellValue !== '' && cellValue !== undefined) {
              // Si la celda no está vacía, agrega el valor a rowData
              rowData[desiredColumns[i]] = cellValue;
              isEmptyRow = false; // La fila no está vacía
            }
          });
          // Si la fila está vacía, no la incluimos en excelData
          return isEmptyRow ? null : rowData;
        }).filter(Boolean);

        setSelectedFileData(excelData);
      };
    } catch (error) {
      console.error('Error al leer el archivo Excel:', error);
    }
  };

  const saveAssociates = async () => {
    if (selectedFileData.length === 0) {
      Notification('Debe ingresar un archivo de excel válido');
      return;
    }

    selectedFileData.forEach(data => {
      if (!data) {
        return;
      }

      const associateTemp = {
        idCard: data['Número Cédula'] || '',
        name: data['Nombre'] || '',
        email: data['Correo'] || '',
        phone: data['Telefono'] || '',
        isActive: data['Estatus 1'] === "Inactivo" ? false : true || true,
      };

      axios.post('http://localhost:7220/api/associates/excel', associateTemp)
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .catch(function (error) {
        console.log(error);
      });
    });
  };

  return (
    <Layout>
      <section className="p-0 md:p-0 mx-auto max-w-9xl">
        {associates.length === 0 ? (
          <div className="flex items-center justify-center mt-5">
            <span className="text-lg font-bold">
              {isLoading
                ? "Cargando..."
                : "Parece que hubo un error, por favor intentelo más tarde."}
            </span>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-10 mx-10 mt-10">
            {/* Title & add button */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl mx-3 font-bold">Asociados</h1>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    router.push("/app/associates/create");
                  }}
                  className=" text-white p-2 text-xs flex items-center gap-2"
                >
                  <IoIosAddCircle />
                  Registrar
                </Button>
                <div className="flex gap-2">
                  <Button
                    onClick={saveAssociates}
                    className=" text-white p-2 text-xs flex items-center gap-2 bg-green-600 hover:bg-green-700 "
                  >
                    <IoIosAddCircle />
                    Registrar con Excel
                  </Button>

                  <input className="w-60" type="file" accept=".xlsx" onChange={(e) => {
                    if (e.target.files) {
                      readExcel(e.target.files[0]);
                    }
                  }} />
                </div>
              </div>
            </div>

            {/* SearchBar */}
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onSearch={() => handleSearchWithPage(pageNumber, pageSize)}
            />

            {/* Table */}
            <div className="w-full">
              <Table>
                <TableHead>
                  <TableRow>

                    <TableHeaderCell>Cédula</TableHeaderCell>

                    <TableHeaderCell>
                      <button onClick={SortByName}>Nombre</button>
                    </TableHeaderCell>

                    <TableHeaderCell>
                      <button onClick={SortByEmail}>Correo</button>
                    </TableHeaderCell>

                    <TableHeaderCell>Teléfono</TableHeaderCell>

                    <TableHeaderCell>
                      <button onClick={SortByActive}>Activo</button>
                    </TableHeaderCell>

                    <TableHeaderCell>Acciones</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {associates.map((associate: Associate) => (
                    <TableRow key={associate.id}>
                      <TableCell>{associate.idCard}</TableCell>
                      <TableCell>{associate.name}</TableCell>
                      <TableCell>{associate.email}</TableCell>
                      <TableCell>{associate.phone}</TableCell>
                      <TableCell>
                        <Switch checked={associate.isActive} onChange={() => { }} />
                      </TableCell>
                      <TableCell className="flex gap-3">
                        {currentMember?.idRole === 1 && (
                          <Button
                            onClick={() => {
                              router.push(`/app/associates/edit/${associate.id}`);
                            }}
                            className="text-xs text-white p-2"
                          >
                            Editar
                          </Button>
                        )}
                        <Button
                          color="blue"
                          onClick={() => {
                            router.push(`/app/associates/${associate.id}`);
                          }}
                          className="text-xs text-white p-2"
                        >
                          Detalles
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <Paginator
                pageNumber={pageNumber}
                totalPages={totalPages}
                PreviousPage={PreviousPage}
                NextPage={NextPage}
                orderBy={orderBy}
                ChangePageSize={ChangePageSize}
              />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default AssociatesPage;
