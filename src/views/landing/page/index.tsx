import { Box, Typography, FormControl, Select, MenuItem } from "@mui/material";

import type { NextPage } from "next";
import { useState } from "react";
import { BaseSelect } from "src/views/common/Select";
import { StyledTextField } from "src/views/common/TextField";
import { AIgencyForm } from "../aigencyForm";
import { FormType } from "../type/form.type";

export const Home: NextPage = () => {
  const [form, setForm] = useState<FormType>({
    name: "",
    category: "",
    description: "",
    sellingPoint: "",
    client: "",
    avgCost: "",
    sellingArea: "",
    toneOfVoice: "",
    content: [],
  });

  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('/static/images/bg.png')`,
      }}
      display="flex"
      justifyContent="space-between"
      padding="60px 75px"
    >
      <Box>
        <Box>
          <Typography variant="h1">
            <span style={{ color: "#FFB652" }}>ai</span>Gency
          </Typography>
          <Typography variant="h3">The business partner for brands of all size</Typography>
          <Box
            marginTop="24px"
            style={{
              background: "linear-gradient(90deg, #FF9466 0%, #FFD43E 100%)",
              borderRadius: "24px",
              padding: "24px",
              color: "white",
            }}
          >
            <Typography variant="h3">
              <b>
                💡 Get a daily resources related to your brand,
                <br /> effortlessly!
              </b>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <AIgencyForm value={form} onChange={setForm} />
      </Box>
    </Box>
  );
};
