import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { RhfLink } from "../../../../libs/utils/rhf-component/rhf-link/index";
import { LINKS } from "../../navigation/route-constant";

export const Decoration = () => {
  return (
    <motion.div
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2024/03/25/23/25/ai-generated-8655605_1280.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        alignItems: "center",
        display: "block",
        justifyContent: "center",
        padding: "8rem 0 ",
      }}
    >
      <Typography
        variant="h1"
        component={motion.h3}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        sx={{
          color: "white",
          fontWeight: "semibold",
        }}
      >
        Home decor items
      </Typography>
      <Typography
        variant="h5"
        mt={1}
        mb={8}
        component={motion.p}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        sx={{
          color: "white",
          fontWeight: "semibold",
        }}
      >
        Find your new favorite pieces.
      </Typography>

      <RhfLink to={LINKS.HOME} inViewDelay={0.4}>
        Shop now
      </RhfLink>
    </motion.div>
  );
};

export default Decoration;
