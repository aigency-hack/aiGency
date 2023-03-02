import { Box, Drawer, Typography } from "@mui/material";
import { useResponsive } from "src/hooks/useResponsive";
import { useMuiTheme } from "src/hooks/themes";

import type { DrawerProps } from "@mui/material";
import type { FC } from "react";

type Props = {} & DrawerProps;

export const Sidebar: FC<Props> = ({ ...drawerProps }) => {
  const theme = useMuiTheme();
  const { isMobile } = useResponsive();

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor="left"
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        elevation: 0,
        sx: {
          mt: `${theme.mixins.toolbar.height}px`,
          pb: `${theme.mixins.toolbar.height}px`,
          width: 240,
          border: "none",
        },
      }}
      {...drawerProps}
    >
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ border: "2px dashed" }}
      >
        <Typography variant="h3">Sidebar</Typography>
      </Box>
    </Drawer>
  );
};
