import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const CreateAds = () => {
  const [selectedCard, setSelectedCard] = useState();
  const navigate = useNavigate();

  const handleCheckboxChange = (cardNumber) => {
    if (cardNumber === selectedCard) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardNumber);
    }
  };

  const handleClickNext = () => {
    if (selectedCard === 0 || selectedCard === 1) {
      setTimeout(() => {
        navigate(`/form/${selectedCard}`);
      }, 600);
    } else {
      alert("Please select one card");
    }
  };

  const cardData = [
    {
      imgSrc:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/ChromeActions_iOS_1.png",
      title: "Text Ad",
    },
    {
      imgSrc:
        "https://www.zmidia.com.br/site/wp-content/uploads/2013/06/safari.jpg",
      title: "Media Ad",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ marginTop: "10px", width: "90%" }}>
        <Container>
          <Card.Body>
            <Container
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "70vh" }}
            >
              <Row>
                {cardData.map((data, index) => (
                  <Col key={index} className="d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                      <Card.Header>
                        <input
                          type="checkbox"
                          checked={selectedCard === index}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <Card.Img
                          variant="top"
                          src={data.imgSrc}
                          style={index === 1 ? { height: 255 } : {}}
                        />
                      </Card.Header>
                      <Card.Body className="text-center">
                        <h7>Create</h7>
                        <h6>{data.title}</h6>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
            <Container className="text-end mt-3">
              <Button
                onClick={handleClickNext}
                color="inherit"
                style={{ color: "white" }}
              >
                Next
              </Button>
            </Container>
          </Card.Body>
        </Container>
      </Card>
    </div>
  );
};

export default CreateAds;
