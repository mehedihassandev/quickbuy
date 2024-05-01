import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";

const MotionTypography = motion(Typography);

export const Banner: FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "3rem",
        bgcolor: "secondary.main",
        color: "common.white",
        textAlign: "center",
      }}
    >
      <MotionTypography
        variant="h6"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Free shipping on orders over $50 amount
      </MotionTypography>
    </Container>
  );
};

export default Banner;
