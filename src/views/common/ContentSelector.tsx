import Box from "@mui/material/Box";
import Check from "@mui/icons-material/Check";
import { Typography } from "@mui/material";

type Props = {
  onChange: any;
  value: string[];
};

type ContentBoxProps = {
  children: any;
  onClick: any;
  active?: boolean;
};

const ContentBox = ({ children, active, onClick }: ContentBoxProps) => {
  return (
    <Box
      sx={{
        border: active ? "" : "1px solid rgba(0, 0, 0, 0.2)",
        color: active ? "white" : "black",
        backgroundColor: active ? "#0D1A2D" : "",
      }}
      onClick={() => onClick()}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="calc(50% - 16px)"
      height="136px"
      padding="12px 24px"
      marginRight="16px"
      borderRadius="12px"
    >
      {active && <Check sx={{ marginRight: "8px" }} />}
      <Typography fontWeight="600">{children}</Typography>
    </Box>
  );
};

// export default function ContentSelector({ onChange, value }: Props) {
export default function ContentSelector({ onChange, value }: Props) {
  const handleChange = (val) => {
    const updateValue = [...value];
    if (updateValue.includes(val)) {
      const indice = updateValue.indexOf(val);
      updateValue.splice(indice, 1);
    } else {
      updateValue.push(val);
    }
    onChange([...updateValue]);
  };
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-around">
        <ContentBox
          onClick={() => handleChange("Social media & Ads")}
          active={value.includes("Social media & Ads")}
        >
          Social media & Ads
        </ContentBox>
        <ContentBox
          onClick={() => handleChange("Blog content")}
          active={value.includes("Blog content")}
        >
          Blog content
        </ContentBox>
      </Box>
      <Box marginTop="16px" display="flex" justifyContent="space-around">
        <ContentBox
          onClick={() => handleChange("Website copy & SEO")}
          active={value.includes("Website copy & SEO")}
        >
          Website copy & SEO
        </ContentBox>
        <ContentBox onClick={() => handleChange("Marketing")} active={value.includes("Marketing")}>
          Marketing
        </ContentBox>
      </Box>
    </Box>
  );
}
