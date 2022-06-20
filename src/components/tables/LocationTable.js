import React from "react";
import DataTable from "react-data-table-component";
import { useGetRickAndMortyLocationQuery } from "../../store/apis/RickAndMortyApi";

export default function LocationTable() {
  const { data, isLoading, isSuccess } = useGetRickAndMortyLocationQuery(2);

  const columns = [
    {
      name: "Name",
      selector: (row) => <a href="/">{row.name}</a>,
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
      <DataTable columns={columns} data={data.results} highlightOnHover />
    </>
  );
}
