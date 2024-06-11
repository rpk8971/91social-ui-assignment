import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormLabel,
  FormSelect,
  OverlayTrigger,
  Popover,
  Row,
  Tooltip,
} from "react-bootstrap";
import {
  transformInputData,
  transformSelectData,
} from "../../../data/transformationformdata";
import "./transformationcard.css";
import questionicon from "../../../assets/question.png";

const TransformationCard = () => {
  const popoverHoverFocus = (
    <Popover
      id="popover-trigger-hover-focus"
      title="Popover bottom"
      //   className="px-1"
      className="custom-popover"
    >
      Choose the column you want to change
    </Popover>
  );

  return (
    <>
      <div className="transformation-card-container">
        <Card>
          <CardBody>
            <h6 className="tarnsformation-card-heading">Transformation</h6>
            <Row className="gap-xl-4 gap-xs-3 gap-xs-2 row-gap-3 row-gap-xs-4 ">
              {transformSelectData?.map((item) => {
                return (
                  <>
                    <Col xl={2} lg={3} md={3} sm={6} xs={12}>
                      <FormLabel className="transformation-label text-capitalize">
                        {item.lable}
                        <OverlayTrigger
                          trigger={["hover", "focus"]}
                          placement="top-start"
                          overlay={popoverHoverFocus}
                        >
                          <span className="ms-1">
                            <img
                              src={questionicon}
                              alt="question-icon"
                              className="question-icon"
                            />
                          </span>
                        </OverlayTrigger>
                      </FormLabel>
                      <FormSelect size="sm">
                        {item?.options?.map((options) => {
                          return (
                            <>
                              <option>{options}</option>
                            </>
                          );
                        })}
                      </FormSelect>
                    </Col>
                  </>
                );
              })}

              {transformInputData?.map((item) => {
                return (
                  <>
                    <Col xl={2} lg={3} md={3} sm={6} xs={12}>
                      <FormLabel className="transformation-label text-capitalize">
                        {item.lable}
                        <span className="ms-1">
                          <img
                            src={questionicon}
                            alt="question-icon"
                            className="question-icon"
                          />
                        </span>
                      </FormLabel>
                      <Form.Control type="text" size="sm"></Form.Control>
                    </Col>
                  </>
                );
              })}
            </Row>
            <Row className="mt-4">
              <Col className="d-flex gap-3 flex-wrap">
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
                  Replace
                </Button>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="transformation-btn"
                >
                  <img
                    src="./logo512.png"
                    alt="reat-logo"
                    className="me-2 react-logo"
                  />
                  Next
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TransformationCard;
