import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ContentWrapper from "../../../../../libs/ui/content-wrapper/ContentWrapper";
import { productDummyData } from "../../dummy/best-seller";

export const Products = () => {
  return (
    <ContentWrapper>
      <Typography variant="h2" sx={{ m: 10, textAlign: "center" }}>
        Our bestsellers
      </Typography>
      <Container
        style={{ display: "flex", flexDirection: "row", gap: 15 }}
        maxWidth="xl"
      >
        {productDummyData.map((item) => (
          <Card
            sx={{
              width: 600,
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="310"
                image={item.image}
                alt="green iguana"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  fontWeight="semiBold"
                  component="div"
                >
                  {item.name}
                </Typography>
                <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                  <Typography
                    variant="h5"
                    color="#c6c4c4"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {item.price}
                  </Typography>
                  <Typography variant="h5">{item.discount}</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </ContentWrapper>
  );
};
