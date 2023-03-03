import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Divider,
  Tabs,
  Tab,
  TabProps,
} from "@mui/material";
import { styled } from "@mui/styles";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Navbar } from "src/views/common/Navbar";
import Pill from "src/views/common/Pill";
import { PrimaryButton } from "src/views/common/PrimaryButton";
import { BaseSelect } from "src/views/common/Select";
import { StyledTextField } from "src/views/common/TextField";
import Bolt from "@mui/icons-material/Bolt";
import TipItem from "../../feed/TipItem";
import { useRouter } from "next/router";
import {
  useGencyCreateBlog,
  useGencyCreatePost,
  useGencyCreateIdeas,
} from "src/hooks/useGencyBackend";

const colorConstant = {
  "Social media & Ads": "#FFE6A9",
  "Blog content": "#F2D4FF",
  Ideas: "#FFD2D1",
};

export const Article: NextPage = () => {
  const [article, setArticle] = useState(JSON.parse(localStorage.getItem("article") || ""));
  const router = useRouter();
  return (
    <Box>
      <Navbar />
      <Box marginTop="64px" display="flex">
        <Box marginTop="35px" paddingLeft="60px" width="75%">
          <Box>
            <Box marginTop="32px">
              <Box display="flex" alignItems="center">
                <img src="/static/icon/phone.svg" />
                <Box mx="16px">
                  <Pill color={colorConstant[article.type]} onClick={() => console.log("")}>
                    {article.type}
                  </Pill>
                </Box>
                <Typography>3 March</Typography>
              </Box>
              <Box
                display="flex"
                paddingRight="64px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box marginTop="16px">
                  <Typography fontWeight="700" variant="h2">
                    {article.header}
                  </Typography>
                  {article.contents.map((content, indice) => {
                    return (
                      <Box key={indice} fontSize="20px" marginTop="24px">
                        {content}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              <Box marginTop="24px">
                {article.images.map((image, indice) => {
                  return <img key={indice} width="512px" height="512px" src={image} />;
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box minHeight="100vh" padding="24px" width="25%" borderLeft="1px solid rgba(0, 0, 0, 0.2)">
          <Box display="flex" marginTop="24px">
            <img src="/static/icon/bolty.svg" />{" "}
            <Typography marginLeft="8px" fontWeight="700" variant="h3">
              {" "}
              Generate more topic idea
            </Typography>
          </Box>
          <Box marginBottom="24px">
            <Box display="flex" marginTop="24px">
              <Box marginRight="16px">
                <Pill onClick={() => console.log("click")} color="#FFE6A9">
                  Social media & Ads
                </Pill>
              </Box>
              <Pill onClick={() => console.log("click")} color="#F2D4FF">
                Blog content
              </Pill>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: "rgba(0, 0, 0, 0.2)" }} />
          <Box display="flex" marginTop="24px">
            <img src="/static/icon/sun.svg" />{" "}
            <Typography marginLeft="8px" fontWeight="700" variant="h3">
              {" "}
              Tips
            </Typography>
          </Box>
          <TipItem
            topic="Invite customers to come and taste different varieties of coffee beans. You can provide information about the... "
            title="1. Host a coffee tasting event:"
          />
          <TipItem
            topic="Develop your own unique blends of coffee beans and offer them for sale. This is a great way to differentiate..."
            title="2. Host a coffee tasting event"
          />
          <TipItem
            topic="Host classes on different brewing methods, such as pour-over, French press, and espresso. This is a great...Host classes on different brewing methods, such as pour-over, French press, and espresso. This is a great..."
            title="3. Offer brewing classes"
          />
          <TipItem
            topic="Consider packaging your coffee beans in unique and creative ways. For example, you could use mason jars, burlap... "
            title="4. Package the beans creatively"
          />
        </Box>
      </Box>
    </Box>
  );
};
