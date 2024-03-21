import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashbaordLayout";
import Home from "../pages/Home/Home";
import { ROUTES } from "./RouteConfig";
import Applied from "../pages/candidates/Applied";
import Shortlisted from "../pages/candidates/Shortlisted";
import Contacted from "../pages/candidates/Contacted";
import Interviewed from "../pages/candidates/Interviewed";
import Hired from "../pages/candidates/Hired";
import Rejected from "../pages/candidates/Rejected";
import AddCandidate from "../pages/candidates/AddCandidate";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME.path}
        element={<DashboardLayout children={<Home />} />}
      />

      <Route
        path={ROUTES.CANDIDATES.childrens.APPLIED.path}
        element={<DashboardLayout children={<Applied />} />}
      />
      <Route
        path={ROUTES.CANDIDATES.childrens.SHORTLISTED.path}
        element={<DashboardLayout children={<Shortlisted />} />}
      />
      <Route
        path={ROUTES.CANDIDATES.childrens.CONTACTED.path}
        element={<DashboardLayout children={<Contacted />} />}
      />
      <Route
        path={ROUTES.CANDIDATES.childrens.INTERVIEWED.path}
        element={<DashboardLayout children={<Interviewed />} />}
      />
      <Route
        path={ROUTES.CANDIDATES.childrens.HIRED.path}
        element={<DashboardLayout children={<Hired />} />}
      />
      <Route
        path={ROUTES.CANDIDATES.childrens.REJECTED.path}
        element={<DashboardLayout children={<Rejected />} />}
      />
      <Route
        path={ROUTES.ADD_CANDIDATE.path}
        element={<DashboardLayout children={<AddCandidate />} />}
      />
    </Routes>
  );
};

export default Router;
