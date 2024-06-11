import React from "react";
import { Card, CardBody } from "react-bootstrap";
import workingVersionData from "../../../data/workingversiondata";
import "./workingversion.css";

const WorkingVersionCard = () => {
  return (
    <>
      <div className="transformation-card-container">
        <Card className="working-version-container">
          <CardBody>
            <h6 className="tarnsformation-card-heading">
              Working version of Data - Sex
            </h6>
            <div>
              <table
                className="working-version-table"
                style={{ width: "100%" }}
              >
                <tr>
                  <td className="working-version-table-heading">id</td>
                  <td className="working-version-table-heading">sex</td>
                  <td className="working-version-table-heading">
                    date of birth
                  </td>
                  <td className="working-version-table-heading">
                    annutant type
                  </td>
                  <td className="working-version-table-heading">
                    monthly pension
                  </td>
                  <td className="working-version-table-heading">spouse sex</td>
                  <td className="working-version-table-heading">
                    spouse date of birth
                  </td>
                  <td className="working-version-table-heading">postal code</td>
                </tr>
                {workingVersionData.map((item) => {
                  return (
                    <>
                      <tr>
                        <td className="working-version-table-content">
                          {item.id}
                        </td>
                        <td className="working-version-table-content">
                          {item.sex}
                        </td>
                        <td className="working-version-table-content">
                          {item.dob}
                        </td>
                        <td className="working-version-table-content">
                          {item.at}
                        </td>
                        <td className="working-version-table-content table-content-bg-color"></td>
                        <td
                          className={`working-version-table-content ${
                            item.id == 345 ? "table-content-bg-color" : ""
                          } `}
                        >
                          {item.sp_sex}
                        </td>
                        <td
                          className={`working-version-table-content ${
                            item.id == 345 ? "table-content-bg-color" : ""
                          } `}
                        >
                          {item.sp_dob}
                        </td>
                        <td className="working-version-table-content">
                          {item.email}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default WorkingVersionCard;
