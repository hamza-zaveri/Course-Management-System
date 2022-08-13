import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import Allcourse from "./components/Allcourse";
import Addcourse from "./components/Addcourse";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      {/* <Home/>
      <Allcourses></Allcourses>
      <AddCourse></AddCourse> */}
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Nav />
          </Col>
          <Col md={8}>
            {/* <Home/> */}
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<Addcourse />} />
                <Route path="/view-courses" element={<Allcourse />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
