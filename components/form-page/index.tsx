import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";

import { COLORS } from "@/styles/theme/themeOptions";

interface Props {
  children: ReactNode;
}

const FormPage = ({ children }: Props) => {
  return (
    <Grid
      sx={{
        mt: 2,
      }}
      justifyContent="center"
      container
      spacing={2}
    >
      <Grid item md={5}>
        <Box sx={{ mb: 8 }}>
          <Typography
            sx={{ color: COLORS.primary.navy, fontWeight: 700 }}
            variant="body2"
          >
            <Link href="/">{`< Go Back`}</Link>
          </Typography>
        </Box>
        {children}
      </Grid>
    </Grid>
  );
};

export default FormPage;
