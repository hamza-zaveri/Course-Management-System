import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Nav = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem tag="a" href="/" action>
          Home
        </ListGroupItem>
        <ListGroupItem tag="a" href="/add-course" action>
          Add Courses
        </ListGroupItem>
        <ListGroupItem tag="a" href="/view-courses" action>
          View Courses
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          About
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Contact
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
export default Nav;
