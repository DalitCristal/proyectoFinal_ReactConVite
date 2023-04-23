import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "3rem" }}>
      <CircularProgress />
      <p>
        <b>Cargando productos</b>
      </p>
    </Box>
  );
};
export default Spinner;
