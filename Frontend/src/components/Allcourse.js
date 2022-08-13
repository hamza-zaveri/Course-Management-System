import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../Api/Bootapi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Allcourse = () => {
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  //function to call server ->
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("courses has been loaded");
        setcourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("error in loading courses");
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setcourses] = useState([]);
  const updateCourses = (id) => {
    setcourses(courses.filter((c) => c.id != id));
  };
  return (
    <div className="text-center">
      <h1>All Courses</h1>
      <p> List of Courses</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourses} />
          ))
        : "No Courses added yet !! "}
    </div>
  );
};

export default Allcourse;
