import React from "react";
import useAuth from "./useAuth";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
