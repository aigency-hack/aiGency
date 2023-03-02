import { Box, Typography } from "@mui/material";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        border: "2px dashed",
        // flexGrow: 1, // full height
        minHeight: 500,
      }}
    >
      <Typography variant="h3">Main</Typography>
    </Box>
  );
};

export default Home;
