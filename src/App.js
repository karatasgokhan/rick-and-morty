import React from "react";
import "./App.css";
import { useGetRickAndMortyLocationQuery } from "./store/apis/RickAndMortyApi";

function App() {
  const { data, isLoading, isSuccess } = useGetRickAndMortyLocationQuery("");

  console.log("data", data);
  console.log("isSuccess", isSuccess);
  console.log("isLoading", isLoading);
  return <>Rick and Morty</>;
}

export default App;
