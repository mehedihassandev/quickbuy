import { Facebook, Instagram, Mail, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { ContentWrapper } from "../../../../libs/ui/content-wrapper/ContentWrapper";

const FooterLinks = ["Contact", "About", "Payment"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <ContentWrapper
      sx={{
        bgcolor: "#D5D5D5",
      }}
    >
      <Container
        sx={{
          width: "100%",
          height: "auto",
          pt: "1rem",
          pb: "1rem",
        }}
        maxWidth="xl"
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
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
      </Container>
    </ContentWrapper>
  );
};

export default Footer;
