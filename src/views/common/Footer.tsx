import { Box, Typography } from "@mui/material";

import type { FC } from "react";

type Props = { hidden?: boolean };

export const Footer: FC<Props> = ({ hidden }) => {
  return (
    <Box sx={{ display: hidden ? "none" : "block", width: "100%", height: 150 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        sx={{ border: "2px dashed", backgroundColor: "background.footer" }}
      >
        <Typography variant="h1">Footer</Typography>
      </Box>
    </Box>
  );
};
