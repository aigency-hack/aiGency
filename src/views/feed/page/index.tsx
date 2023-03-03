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
import FeedItem from "../FeedItem";
import TipItem from "../TipItem";
import {
  useGencyCreateBlog,
  useGencyCreatePost,
  useGencyCreateIdeas,
} from "src/hooks/useGencyBackend";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface StyledTabProps {
  label: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const StyledTab = styled((props: StyledTabProps & TabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  fontSize: 16,
  color: "#6A6A6A",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    outline: "none",
  },
  "&.Mui-selected": {
    color: "#252525",
  },
  padding: "0",
}));

export const Feed: NextPage = () => {
  const [value, setValue] = useState(0);

  const [form, setForm] = useState(JSON.parse(localStorage.getItem("form") || ""));
  const [feed1, setFeed1] = useState<any>({
    header: "",
    content: "",
    image: "",
  });
  const [feed2, setFeed2] = useState<any>({
    header: "",
    content: "",
    image: "",
  });
  const [feed3, setFeed3] = useState<any>({
    header: "",
    content: "",
    image: "",
  });
  const [topic1, setTopic1] = useState<string>("");
  const [topic2, setTopic2] = useState<string>("");
  const [topic3, setTopic3] = useState<string>("");
  const [topic4, setTopic4] = useState<string>("");
  const [topic5, setTopic5] = useState<string>("");
  const [topic6, setTopic6] = useState<string>("");
  const [topic7, setTopic7] = useState<string>("");

  const handleCreatePost = useGencyCreatePost();
  const handleCreateBlog = useGencyCreateBlog();
  const handleCreateIdeas = useGencyCreateIdeas();
  useEffect(() => {
    // use hook
    const fetch = async () => {
      const feed1Data = await handleCreateBlog({
        productInfo: {
          name: form.name,
          usp: form.sellingPoint,
          description: form.description,
        },
        mood: form.toneOfVoice[0],
        title: null,
      });
      setFeed1({
        header: feed1Data.title,
        content: feed1Data.paragraphs[0].content,
        image: feed1Data.images[0],
        type: "Blog content",
      });
      const feed2Data = await handleCreateBlog({
        productInfo: {
          name: form.name,
          usp: form.sellingPoint,
          description: form.description,
        },
        mood: form.toneOfVoice[0],
        title: null,
      });
      setFeed2({
        header: feed2Data.title,
        content: feed2Data.paragraphs[0].content,
        image: feed2Data.images[0],
        type: "Blog content",
      });
      const feed3Data = await handleCreatePost({
        productInfo: {
          name: form.name,
          usp: form.sellingPoint,
          description: form.description,
        },
        mood: form.toneOfVoice[0],
        purpose: null,
      });
      setFeed3({
        header: `Social Media Post for ${form.name}`,
        content: feed3Data.content,
        image: feed3Data.images[0],
        type: "Social media & Ads",
      });
      const ideaData = await handleCreateIdeas({
        productInfo: {
          name: form.name,
          usp: form.sellingPoint,
          description: form.description,
        },
        mood: form.toneOfVoice[0],
      });
      setTopic1(ideaData[0]);
      setTopic2(ideaData[1]);
      setTopic3(ideaData[2]);
      setTopic4(ideaData[3]);
      setTopic5(ideaData[4]);
      setTopic6(ideaData[5]);
      setTopic7(ideaData[6]);
    };
    fetch();
  }, [form]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Navbar />
      <Box marginTop="64px" display="flex">
        <Box marginTop="35px" paddingLeft="60px" width="75%">
          <Box>
            <Typography fontSize="12px" fontWeight="600">
              Branding
            </Typography>
            <Box display="flex">
              <Typography marginRight="8px" fontWeight="700" variant="h3">
                {form.name} Content Feed
              </Typography>
              <img src="/static/icon/edit.svg" />
            </Box>
            <Box marginTop="32px" sx={{ borderBottom: 1, borderColor: "rgba(0, 0, 0, 0.2)" }}>
              <Tabs
                sx={{ ".MuiTabs-indicator": { backgroundColor: "#252525" } }}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{
                    "&.Mui-selected": { color: "#252525" },
                    fontSize: "16px",
                    color: "#6A6A6A",
                  }}
                  label="All"
                />
                <Tab
                  sx={{
                    "&.Mui-selected": { color: "#252525" },
                    fontSize: "16px",
                    color: "#6A6A6A",
                  }}
                  label="Social media & Ads"
                />
                <Tab
                  sx={{
                    "&.Mui-selected": { color: "#252525" },
                    fontSize: "16px",
                    color: "#6A6A6A",
                  }}
                  label="Blog content"
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <FeedItem
                header={feed1.header}
                content={feed1.content}
                image={feed1.image}
                type={feed1.type}
              />
              <FeedItem
                header={feed2.header}
                content={feed2.content}
                image={feed2.image}
                type={feed2.type}
              />
              <FeedItem
                header={feed3.header}
                content={feed3.content}
                image={feed3.image}
                type={feed3.type}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FeedItem
                header={feed3.header}
                content={feed3.content}
                image={feed3.image}
                type={feed3.type}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FeedItem
                header={feed1.header}
                content={feed1.content}
                image={feed1.image}
                type={feed1.type}
              />
              <FeedItem
                header={feed2.header}
                content={feed2.content}
                image={feed2.image}
                type={feed2.type}
              />
            </TabPanel>
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
            </Box>
            <Box display="flex" marginTop="16px">
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
            title="2. Create custom blends:"
          />
          <TipItem
            topic="Host classes on different brewing methods, such as pour-over, French press, and espresso. This is a great...Host classes on different brewing methods, such as pour-over, French press, and espresso. This is a great..."
            title="3. Offer brewing classes:"
          />
          <TipItem
            topic="Consider packaging your coffee beans in unique and creative ways. For example, you could use mason jars, burlap... "
            title="4. Package the beans creatively:"
          />
        </Box>
      </Box>
    </Box>
  );
};
