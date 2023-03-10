import { Fragment } from "react";
import styled from "@emotion/styled";
import { AppBar, Box, Stack, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import NextLink from "next/link";
import { ThemeToggleSwitch } from "src/components/ThemeToggleSwitch";
import { NextJSIcon } from "src/svgs";
import { useMuiTheme } from "src/hooks/themes";

import type { ToolbarProps } from "@mui/material";

import type { FC } from "react";

const Wrapper = styled(Toolbar, {
  shouldForwardProp: (props: string) => props !== "isScrollTriggered",
})<{ isScrollTriggered: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme, isScrollTriggered }) => (isScrollTriggered ? theme.shadows[5] : "none")};
  background-color: ${({ theme, isScrollTriggered }) =>
    isScrollTriggered ? theme.palette.background.default : "transparent"};
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: background-color 200ms;
`;

type Props = {} & ToolbarProps;

export const Navbar: FC<Props> = (props) => {
  const theme = useMuiTheme();
  const isScrollTriggered = useScrollTrigger({ disableHysteresis: true, threshold: 30 });
  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrollTriggered ? theme.palette.background.default : "transparent",
        }}
      >
        <Toolbar
          disableGutters
          {...props}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none !important",
            backgroundColor: isScrollTriggered ? theme.palette.background.default : "transparent",
            zIndex: theme.zIndex.drawer + 1,
            transition: "background-color 200ms",
            ...props.sx,
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              alignItems: "center",
              [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "space-between",
              },
            }}
          >
            <Box
              component="a"
              color={theme.palette.mode === "light" ? "black" : "white"}
              px="60px"
              sx={{ backgroundColor: "inherit" }}
            >
              <Typography variant="h2">
                <span style={{ color: "#FFB652" }}>ai</span>
                <span style={{ color: "#0D1A2D" }}>Gency</span>
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pr={1}
              width="100%"
            >
              <Box />

              <Stack direction="row" spacing={3}>
                {/* <ThemeToggleSwitch /> */}
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
