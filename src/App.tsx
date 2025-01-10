import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import ImageSearch from "./containers/NasaImageSearch/NasaImageSearch";
import ShowAMovie from "./containers/NasaImdbMovies/ShowAMovie/ShowAMovie";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/search" element={ <ImageSearch /> } />
        <Route path="/movies/:id" element={ <ShowAMovie /> } />
      </Routes>
    </Layout>
  )
}

export default App;
