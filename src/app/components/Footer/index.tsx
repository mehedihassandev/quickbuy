import { Facebook, Instagram, Mail, Twitter } from "@mui/icons-material";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";

const FooterLinks = ["Contact", "About", "Payment"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "#DFDFDF",
        pt: "1rem",
        pb: "1rem",
      }}
    >
      <Box sx={{ ml: "20rem", mr: "10rem", maxWidth: "xl" }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography
              color="black"
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Quick Buy
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Facebook />
              <Instagram />
              <Twitter />
              <Mail />
            </Box>
          </Grid>
          <Grid item>
            <List>
              {FooterLinks.map((link) => (
                <ListItem key={link}>
                  <Typography color="textSecondary" variant="subtitle1">
                    {link}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          {currentYear}
          {" Quick Buy."}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
