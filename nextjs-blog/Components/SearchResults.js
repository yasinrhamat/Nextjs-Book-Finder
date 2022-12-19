import { React } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

const SearchResults = ({ books }) => {
  return (
    <TableContainer component={Paper} id="Books-Table">
      <Table sx={{ minWidth: "1200px" }} aria-label="books table">
        <TableHead sx={{ borderBottom: 3 }}>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Subtitle</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Thumbnail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow
              key={book.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                {book.volumeInfo.title}
              </TableCell>
              <TableCell align="center">
                {book.volumeInfo.subtitle}
              </TableCell>
              <TableCell align="center">
                {book.volumeInfo.authors.join(", ")}
              </TableCell>
              <TableCell align="center">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="image"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchResults;
