import { Button } from "@mui/material";

import type { FC } from "react";
import type { ButtonProps } from "@mui/material";

export const PrimaryButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      sx={{
        padding: "12px 24px;",
        height: 48,
        fontWeight: "600",
        background: "#0D1A2D",
        color: "white",
        borderRadius: 12,
        "&:hover, &:focus": {
          background: "#28384F",
        },
        ...props.sx,
      }}
    />
  );
};
