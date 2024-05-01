import { motion } from "framer-motion";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

interface RhfLinkProps extends LinkProps {
  inViewDelay?: number;
}

const MotionLink = motion(Link);

export const RhfLink: FC<RhfLinkProps> = ({
  children,
  inViewDelay = 0.4,
  ...props
}) => (
  <MotionLink
    style={{
      display: "inline-block",
      padding: "0.8rem 2.5rem",
      color: "orange",
      backgroundColor: "black",
      textDecoration: "none",
      textAlign: "center",
      fontWeight: "bold",
      borderRadius: "4px",
    }}
    initial={{ y: 50, opacity: 0 }}
    transition={{ duration: 0.5 }}
    whileInView={{
      y: 0,
      opacity: 1,
      transition: { delay: inViewDelay, duration: 0.5 },
    }}
    whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
    whileTap={{ scale: 0.9 }}
    {...props}
  >
    {children}
  </MotionLink>
);

export default RhfLink;
