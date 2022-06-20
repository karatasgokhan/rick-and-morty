import React from "react";
import DataTable from "react-data-table-component";
import { useGetRickAndMortyLocationQuery } from "../../store/apis/RickAndMortyApi";
import { useGetRickAndMortyLocationResidantsQuery } from "../../store/apis/RickAndMortyApi";

export default function LocationTable() {
  const { data, isLoading, isSuccess } = useGetRickAndMortyLocationQuery(2);
  const {
    data: residantsData,
    isLoading: residantsisLoading,
    isSuccess: residantsISuccess,
  } = useGetRickAndMortyLocationResidantsQuery(21);
  console.log(
    "🚀 ~ file: locationTable.js ~ line 12 ~ LocationTable ~ residantsData",
    residantsData
  );

  console.log(
    "🚀 ~ file: locationTable.js ~ line 7 ~ LocationTable ~ isSuccess",
    isSuccess
  );
  console.log(
    "🚀 ~ file: locationTable.js ~ line 7 ~ LocationTable ~ isLoading",
    isLoading
  );
  console.log(
    "🚀 ~ file: locationTable.js ~ line 7 ~ LocationTable ~ data",
    data.results
  );

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
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
        data={data.results}
        highlightOnHover
        pagination
      />
    </>
  );
}
