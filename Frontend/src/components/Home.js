import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";
const Home = () => {
  useEffect(() => {
    document.title = "Learning Hub";
  }, []);
  return (
    <div class="bg-light mb-4 py-3 py-sm-5 text-center">
      <h1 className="display-6 fw-bold">Learning Hub</h1>
      <p>
        This is developed by Hamza Zaveri an MScIT student, with the help of
        Reactjs and Springboot
      </p>
      <Container>
        <Button color="primary" outline>
          Start using by adding courses
        </Button>
      </Container>
    </div>
  );
};
export default Home;
