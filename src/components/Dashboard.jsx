import React, { useState } from "react";
import AdsInsightsTable from "./AdsTable";
import { Card, Container, Row, Col } from "react-bootstrap";
import DonutChart from "./Chart";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleTable from "./ToggleForm";

const Dashboard = () => {
  const [toggle, setToggle] = useState("");
  const handleToggleChange = (event, newToggle) => {
    if (newToggle !== null) {
      setToggle(newToggle);
    }
  };
  return (
    <>
      <Container
        fluid
        className="justify-content-space-between align-items-center"
      >
        <div style={{ marginTop: "10px" }}>
          <Row>
            <Col xs={12} md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="m-0">Ad Insights</h6>
                </Card.Header>
                <Card.Body className="text-center">
                  <AdsInsightsTable />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="m-0">Ad Insights</h6>
                    <div>
                      <select name="cars" id="cars" className="mr-2">
                        <option value="volvo">Clicks</option>
                        <option value="saab">Group</option>
                        <option value="opel">Cost</option>
                        <option value="audi">Coversion</option>
                        <option value="audi">Revenue</option>
                      </select>
                      <button
                        style={{
                          border: "0.5px solid",
                          borderColor: "#F8F8F8",
                          borderRadius: "50%",
                        }}
                      >
                        ?
                      </button>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body className="d-flex flex-column">
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {toggle === "table" ? (
                      <ToggleTable />
                    ) : toggle === "chart" ? (
                      <DonutChart />
                    ) : (
                      <DonutChart />
                    )}
                  </div>

                  <div className="d-flex justify-content-end mt-2">
                    <ToggleButtonGroup
                      value={toggle}
                      exclusive
                      onChange={handleToggleChange}
                      aria-label="device"
                    >
                      <ToggleButton value="chart" aria-label="chart">
                        <img
                          style={{ width: "20px" }}
                          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNIWngXEO1yS4kt6EesPUPamEuYKGh7kPGtMWLLby30mxRk9cj"
                          alt=""
                        />
                      </ToggleButton>
                      <ToggleButton value="table" aria-label="table">
                        <img
                          style={{ width: "20px" }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnZ2Ojshq0nuXvcOb-OaGsU3ij2_KEY2FcgTv5NJ8gNnDilEV"
                          alt=""
                        />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </Card.Body>

              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
