import { Button } from "@mui/material";

import type { FC } from "react";
import type { ButtonProps } from "@mui/material";

export const SecondaryButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      sx={{
        padding: "12px 24px;",
        height: 48,
        fontWeight: "600",
        background: "white",
        color: "rgba(13, 26, 45, 0.4)",
        borderRadius: 12,
        ...props.sx,
      }}
    />
  );
};
