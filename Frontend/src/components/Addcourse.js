import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../Api/Bootapi";

const Addcourse = () => {
  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    console.log(course);
    addingData(course);
    e.preventDefault();
  };

  const addingData = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("course added successfully");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <lable for="userId">Course Id</lable>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <lable for="title">Course Title</lable>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <lable for="description">Course Description</lable>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning mx-3">
            {" "}
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default Addcourse;
