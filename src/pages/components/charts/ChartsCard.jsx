import React from "react";
import {
  Accordion,
  Button,
  Card,
  CardBody,
  Col,
  ProgressBar,
  Row,
  Stack,
} from "react-bootstrap";
import "./chartcard.css";
import deleteIcon from "../../../assets/delete.png";
import progressData from "../../../data/progresscarddata";
import ColumnChart from "./ColumnChart";

const ChartsCard = () => {
  return (
    <>
      <div className="transformation-card-container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="d-flex gap-3 align-items-center">
                <h6 className="chart-card-heading m-0">Charts</h6>
                <Button
                  variant="primary"
                  size="sm"
                  className="transformation-btn"
                >
                  <img
                    src="./logo512.png"
                    alt="reat-logo"
                    className="me-2 react-logo"
                  />
                  Add Column Chart
                </Button>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="row-gap-3 row-gap-xs-4">
                {progressData?.map((item) => {
                  return (
                    <>
                      <Col xl={2} lg={3} md={3} sm={6} xs={12}>
                        <Card className="py-2 px-3 chart-card-container">
                          <CardBody className="p-0">
                            <div className="d-flex justify-content-between align-items-top">
                              <div>
                                <p className="chart-card-content text-capitalize m-0">
                                  {item.heading}
                                </p>
                                <p className="chart-card-subcontent text-capitalize m-0">
                                  {item.subHeading}
                                </p>
                              </div>
                              <img
                                src={deleteIcon}
                                alt="delete-icon"
                                className="delete-icon-style"
                              />
                            </div>
                            <Stack className="mt-2" gap={3}>
                              {item.progressList.map((it) => {
                                return (
                                  <>
                                    <div className="p-0">
                                      <div className="d-flex justify-content-between align-items-center mb-1">
                                        <p className="progressbar-heading text-muted m-0 ">
                                          {it.label}
                                        </p>
                                        <p className="progressbar-heading m-0 fw-bold">
                                          {it.progress + "%"}
                                        </p>
                                      </div>
                                      <ProgressBar
                                        className="custom-progress-bar"
                                        variant={it.color}
                                        now={it.progress}
                                      />
                                    </div>
                                  </>
                                );
                              })}
                            </Stack>
                          </CardBody>
                        </Card>
                      </Col>
                    </>
                  );
                })}
                <Col xl={2} lg={3} md={3} sm={6} xs={12}>
                  <Card className="py-2 px-3 chart-card-container">
                    <CardBody className="p-0">
                      <div className="d-flex justify-content-between align-items-top">
                        <div>
                          <p className="chart-card-content text-capitalize m-0">
                            Monthly Pension
                          </p>
                          <p className="chart-card-subcontent text-capitalize m-0">
                            Numeric
                          </p>
                        </div>
                        <img
                          src={deleteIcon}
                          alt="delete-icon"
                          className="delete-icon-style"
                        />
                      </div>
                      <div className="mt-2">
                        <ColumnChart />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default ChartsCard;
