import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import base_url from "../Api/Bootapi";
const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response);
        toast.success("Course Deleted !!");
        update(id);
      },
      (error) => {
        console.log(error);
        toast.error("Course not deleted, try again ");
      }
    );
  };
  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardTitle tag="h5">{course.title}</CardTitle>
          <CardText>{course.description}</CardText>
          <Container className="text-center">
            <Button
              color="danger"
              outline
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              Delete
            </Button>
            <Button color="warning mx-3">Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};
export default Course;
