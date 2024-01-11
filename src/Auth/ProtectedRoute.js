import React from "react";
import useAuth from "./useAuth";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
