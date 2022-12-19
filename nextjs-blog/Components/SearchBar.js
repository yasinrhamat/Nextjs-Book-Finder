import { React, useState } from "react";
import { Button, TextField, Box, Grid } from "@mui/material";
import axios from "axios";
import SearchResults from "./SearchResults.js";

const SearchBar = () => {
  const [query, setQuery] = useState(""); // The name of the book
  const [books, setBooks] = useState([]); // The 3 book objects

  const handleChange = (event) => {
    // set query to the input text
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Get request from the Google books API using axios
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=3`
      )
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((err) => console.log(err));
  };

  function handleKeyDown(e) {
    if (e.keyCode == 13)
        handleSearch();
  }

  return (
    <Box>
      <Grid
        container
        direction="column"
        justifycontext="center"
        alignItems="center"
      >
        <Grid item id="Text-Field" width="700px">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search Terms"
            variant="outlined"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid item id="Search-Button" marginTop="10px" marginBottom="20px">
          <Button variant="contained" onClick={handleSearch}>
            Search Books
          </Button>
        </Grid>
        <Grid item id="Book-List">
          { books?.length > 0 ? <SearchResults books = {books} /> : <></> }
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
