import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";

function Search () {
    const [inputObject, setinputObject] = useState({
        title: "",
        author: ""
        // description: "",
        // image: "",
        // link: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setinputObject({...inputObject, [name]: value})
    };

    return (
        <Container fluid>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={inputObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
                value={inputObject.author}
              />
              <FormBtn
                disabled={!(inputObject.author && inputObject.title)}
                // onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
        </Container>
    )

}

export default Search;