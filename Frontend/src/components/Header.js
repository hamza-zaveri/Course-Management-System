import React from "react";
import { Card, CardBody } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Card className="my-3" style={{ background: "#1E90FF" }}>
        <CardBody>
          <h1 className="text-center my-2" style={{ color: "white" }}>
            Welcome to Learning Hub
          </h1>
        </CardBody>
      </Card>
    </div>
  );
};
export default Header;
