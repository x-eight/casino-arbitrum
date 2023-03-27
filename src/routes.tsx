import React from 'react';
import { Routes, Route } from "react-router-dom";
import TopPlayer from './views/Top-players';
import Jackpot from './views/Jackpot';

function AllRoutes() {

  return (
    <>
      <Routes>
        <Route
          path="/index.html"
          element={
            <TopPlayer />
          }
        />
        <Route
          path="/"
          element={
            <TopPlayer />
          }
        />
        <Route
          path="/TopPlayer"
          element={<TopPlayer />}
        />
        <Route
          path="/games/jackpot"
          element={<Jackpot />}
        />
        <Route
          path="/games/minipot"
          element={<Jackpot />}
        />
        <Route
          path="/*"
          element={<>Not found</>}
        />
      </Routes>
    </>
  );
}

export default AllRoutes;