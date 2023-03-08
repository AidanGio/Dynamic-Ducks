import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
// import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<UserList />} />
          <Route path='/edit/:id' element={<EditUser />} />
          <Route path='/user' element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
 }

export default App;

/*
<Router>
      <div className="container">
        <Route path="/" exact component={UserList} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  */
