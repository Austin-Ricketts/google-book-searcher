import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";

function Search () {
    const [books, setBooks] = useState([])
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
            <Row>
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
            </Row>
            <Row>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                        <a>{book.image}</a>
                      {/* need to make this a save button */}
                      {/* <SaveBtn onClick={() => deleteBook(book._id)} /> */}
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Row>
        </Container>
    )

}

export default Search;