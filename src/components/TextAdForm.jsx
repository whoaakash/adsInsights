import React, { useState } from "react";
import { Card, Container, Modal } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TextAdForm = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/create-ads");
    }, 600);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ marginTop: "10px", width: "90%" }}>
        <Container>
          <Card.Body>
            <h7>Create Text</h7>
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="d-md-flex justify-content-between">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="input1">Heading 01</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input1"
                        placeholder="Add a heading that would make user interested"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input2">Heading 02</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2"
                        placeholder="Add a heading that would make user interested"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input2">Businees Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input2"
                        placeholder="Add your business name"
                        required
                      />
                    </div>
                    <div className="mb-3 d-md-none">
                      <label htmlFor="input3">Business Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="input3"
                        placeholder="Add your business name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="mb-3">
                      <label htmlFor="textarea">Description 01</label>
                      <textarea
                        className="form-control"
                        id="textarea"
                        placeholder="Add primary text to help users understand more about your products, services, or offers"
                        rows={4}
                        defaultValue={""}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dropdown">Button Label</label>
                      <select className="form-select" id="dropdown">
                        <option value="">
                          Select a label that best suits your ad
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="input2">Website URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input2"
                    placeholder="Add the URL of the landing page  you want to redirect users to"
                    required
                  />
                </div>
                <div className="text-end">
                  <Link to="/create-ads">
                    <button className="btn btn-secondary me-2" type="submit">
                      Back
                    </button>
                  </Link>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Card.Body>
        </Container>
      </Card>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "nowrap",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" fill="blue" />
              <path
                d="M8 12l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            <p>Submitted</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TextAdForm;
