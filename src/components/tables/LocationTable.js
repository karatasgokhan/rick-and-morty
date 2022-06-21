import { React, useState } from "react";
import DataTable from "react-data-table-component";
import { useGetRickAndMortyLocationsQuery } from "../../store/apis/RickAndMortyApi";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constans/routePath";
import Pagination from "../Pagination";
import s from "./LocationTable.module.css";

export default function LocationTable() {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const { data } = useGetRickAndMortyLocationsQuery(pageNumber);

  const columns = [
    {
      name: "Name",
      cell: (row) => (
        <p className={s.locationName} onClick={() => onClick(row.id)}>
          {row.name}
        </p>
      ),

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

  const onClick = (id) => {
    navigate(`${ROUTES.RESIDENTS_WITHOUT_PARAM}/${id}`);
  };

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
