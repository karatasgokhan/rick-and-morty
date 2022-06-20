import { React, useState } from "react";
import DataTable from "react-data-table-component";
import {
  useGetRickAndMortyLocationsQuery,
  useGetRickAndMortyLocationQuery,
} from "../../store/apis/RickAndMortyApi";
import * as ROUTES from "../../constans/routePath";

export default function LocationTable() {
  const [locationId, setLocationId] = useState("");
  const { data, isLoading, isSuccess } = useGetRickAndMortyLocationsQuery(2);
  const {
    data: locationData,
    isLoading: locationLoading,
    isSuccess: locationIsSuccess,
  } = useGetRickAndMortyLocationQuery(locationId);

  const onClick = (id) => {
    setLocationId(id);
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
      <DataTable columns={columns} data={data.results} highlightOnHover />
    </>
  );
}
