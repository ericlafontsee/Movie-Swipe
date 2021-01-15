import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    loadMovies()
  }, [])

  function loadMovies() {
    API.getMovies()
      .then(res => 
        setMovies(res.data)
      )
      .catch(err => console.log(err));
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Movies Should I Watch?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
             
            </form>
          </Col>
        </Row>
      </Container>
    );
  }


export default Movies;
