/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  
  console.log(location);
  if (user) {
    return children;
  }

  return <Navigate state={{from : location}} to="/signIn" replace></Navigate>;
};

export default PrivateRoute;
