import React from 'react';
import { Routes, Route } from "react-router-dom";
import Competition from './views/Competition';
import Dashboard from './views/Dashboard';
//import Home from '../../views/Home';
//import LpUnbinder from '../../views/lp-unbinder';

function AllRoutes() {

  return (
    <>
      <Routes>
        <Route
          path="/index.html"
          element={
            <Competition />
          }
        />
        <Route
          path="/Competition"
          element={<Competition />}
        />
        <Route
          path="/competition"
          element={<Competition />}
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