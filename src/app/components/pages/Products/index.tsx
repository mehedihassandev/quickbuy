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
import vase1 from "../../../../assets/img/vase1.avif";
import vase2 from "../../../../assets/img/vase2.avif";
import vase3 from "../../../../assets/img/vase3.avif";
import vase4 from "../../../../assets/img/vase4.avif";

const data = [
  {
    name: "'Candy' Flowerpot",
    price: "$ 48.99",
    discount: "$ 48.99",
    image: vase1,
  },
  {
    name: "'Drop' vase",
    price: "$ 48.99",
    discount: "$ 48.99",
    image: vase2,
  },
  {
    name: "'Wave' vase",
    price: "$ 48.99",
    discount: "SOLD OUT",
    image: vase3,
  },
  {
    name: "'Wave' vase",
    price: "$ 48.99",
    discount: "$ 48.99",
    image: vase4,
  },
];
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
        {data.map((item) => (
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
