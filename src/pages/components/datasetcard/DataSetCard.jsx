import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import "./datasetcard.css";

const DataSetCard = () => {
  return (
    <>
      <div className="dataset-card-container">
        <Card>
          <CardBody>
            <Row>
              <Col className="dataset-content d-flex gap-2">
                <p>Dataset&nbsp;:</p>
                <p>Dataset</p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default DataSetCard;
