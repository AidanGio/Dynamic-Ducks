import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ClientPortal from "./pages/ClientPortal";
import SalesPortal from "./pages/SalesPortal";
import GroundsCrewPortal from "./pages/GroundsCrewPortal";
import OperationsManagerPortal from "./pages/OperationsManagerPortal";
import TaskManagement from "./pages/TaskManagement";
import LeadManagement from "./pages/LeadManagement";
import ProjectManagement from "./pages/ProjectManagement";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectInfo from "./pages/ProjectInfo";

import MessagePortal from "./pages/Messages";
import "./App.scss";
import CreateTaskPage from "./pages/CreateTaskPage";
import EditLeadPage from "./pages/EditLeadPage";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));

  console.log(auth);

  // useEffect(() => {
  //   setAuth(JSON.parse(localStorage.getItem("user")));
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              auth ? (
                <HomePage auth={auth} setAuth={setAuth} />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/signup"
            element={!auth ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/login"
            element={
              !auth ? (
                <SignInPage setAuth={setAuth} auth={auth} />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
            setAuth={setAuth}
          />

          <Route
            path="/clientportal"
            element={
              auth?.role == "client" ? (
                <ClientPortal auth={auth} />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />
          <Route
            path="/salesportal"
            element={
              auth?.role == "sales" ? (
                <SalesPortal auth={auth} />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />
          <Route
            path="/crew"
            element={
              auth?.role == "installationWorker" ? (
                <GroundsCrewPortal auth={auth} />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />
          <Route path="/messages" element={<MessagePortal auth={auth} />} />
          <Route
            path="/operationsmanagerportal"
            element={
              auth && auth.role == "operationsManager" ? (
                <OperationsManagerPortal auth={auth} />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />

          <Route path="/projects" element={<ProjectManagement auth={auth} />} />
          <Route
            path="/projects/createProject"
            element={<CreateProjectPage />}
          />
          <Route path="/projects/:projectId/edit" element={<ProjectInfo />} />
          <Route path="/tasks" element={<TaskManagement />} />
          <Route path="/leadmanagement" element={<LeadManagement />} />

          <Route
            path="/tasks"
            element={
              auth?.role == "installationWorker" ||
              auth?.role == "operationsManager" ? (
                <TaskManagement />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route path="/leads" element={<LeadManagement />} />
          <Route path="/leads/edit" element={<EditLeadPage />} />
          <Route path="/tasks/create" element={<CreateTaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
