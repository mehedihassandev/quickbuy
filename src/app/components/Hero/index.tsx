import { Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";
import Banner from "./banner";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export const Hero: FC = () => {
  return (
    <>
      <Banner />
      <Container
        component={motion.div}
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "primary.main",
          color: "common.white",
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <MotionTypography
          variant="h2"
          gutterBottom
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Quick Buy
        </MotionTypography>
        <MotionTypography
          variant="h5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We provide the best services for you.
        </MotionTypography>
        <MotionButton
          variant="contained"
          color="inherit"
          size="large"
          sx={{ mt: 2, color: "secondary.main" }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Shop
        </MotionButton>
      </Container>
    </>
  );
};

export default Hero;
