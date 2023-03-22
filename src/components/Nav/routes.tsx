import React from 'react';
import { Routes, Route } from "react-router-dom";
import Competition from '../../views/Competition';
import Dashboard from '../../views/Dashboard';
import Home from '../../views/Home';
import LpUnbinder from '../../views/lp-unbinder';

function AllRoutes() {

  return (
    <>
      <Routes>
        <Route
          path="/index.html"
          element={
            <Home />
          }
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/lp-unbinder"
          element={<LpUnbinder />}
        />
        <Route
          path="/competition"
          element={<Competition />}
        />
      </Routes>
    </>
  );
}

export default AllRoutes;