import React from "react";
import { Route, Navigate, Outlet, useMatch } from "react-router";
import LoginPage from '../components/Loginpage';
import DashClient from '../components/dash_client';

function Dashboard() {

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
