import React from "react";
import { Card, CardBody, Col, ProgressBar, Row, Stack } from "react-bootstrap";
import icon from "../../../assets/settings.png";
import "./topcard.css";

const TopCard = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col md={6} sm={8} xs={12}>
              <div className="topcard-content">
                <img src={icon} alt="icon" className="icon" />
                <Stack gap={3}>
                  <div>
                    <h6 className="topcard-heading">
                      Data Cleanup - Acme Employee Plan
                    </h6>
                    <p className="topcard-info">
                      Configure workflows for bid data processing
                    </p>
                  </div>
                  <div className="mb-2">
                    <ProgressBar variant="success" now={45} />
                  </div>
                </Stack>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default TopCard;
