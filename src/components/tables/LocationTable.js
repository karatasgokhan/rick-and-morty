import { React, useState } from "react";
import DataTable from "react-data-table-component";
import { useGetRickAndMortyLocationsQuery } from "../../store/apis/RickAndMortyApi";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constans/routePath";
import Pagination from "../Pagination";

export default function LocationTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } =
    useGetRickAndMortyLocationsQuery(pageNumber);

  const onClick = (id) => {
    navigate(`${ROUTES.RESIDENTS_WITHOUT_PARAM}/${id}`);
  };

  const columns = [
    {
      name: "Name",
      cell: (row) => <p onClick={() => onClick(row.id)}> {row.name}</p>,
      sortable: true,
    },
    { name: "Dimension", selector: (row) => row.dimension, sortable: true },
    { name: "Type", selector: (row) => row.type, sortable: true },
    {
      name: "Resident Count",
      selector: (row) => row.residents.length,
      sortable: true,
    },
  ];
  return (
    <>
      <DataTable
        columns={columns}
        data={data ? data.results : []}
        highlightOnHover
      />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPage={data ? data.info.pages : 1}
      />
    </>
  );
}
