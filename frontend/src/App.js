import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ClientPortal from "./pages/ClientPortal";
import SalesPortal from "./pages/SalesPortal";
import GroundsCrewPortal from "./pages/GroundsCrewPortal";
import OperationsManagerPortal from "./pages/OperationsManagerPortal";
import TaskManagement from "./pages/TaskManagement";

import "./App.scss";
import CreateTaskPage from "./pages/CreateTaskPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/clientportal" element={<ClientPortal />} />
          <Route path="/salesportal" element={<SalesPortal />} />
          <Route path="/groundscrewportal" element={<GroundsCrewPortal />} />
          <Route
            path="/operationsmanagerportal"
            element={<OperationsManagerPortal />}
          />

          <Route path="/tasks" element={<TaskManagement />} />
          <Route path="/tasks/create" element={<CreateTaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
