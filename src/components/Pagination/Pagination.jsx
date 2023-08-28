import React from "react";
import { Typography, Button } from "@mui/material";
import useStyles from "./styles";

const pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        style={{ background: "#0086b3" }}
        onClick={handlePrev}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <Typography
        variant="h4"
        className={classes.pageNumber}
      >
        {currentPage}
      </Typography>
      <Button
        onClick={handleNext}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
        style={{ background: "#0086b3" }}
      >
        Next
      </Button>
    </div>
  );
};

export default pagination;
