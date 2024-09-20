import { Link } from "react-router-dom";
import "./404.css";
import { CssBaseline, Typography, Button, Box, Stack } from "@mui/material";
function Err404() {
  return (
    <>
      <CssBaseline />
      <section className="page_404">
        <Stack textAlign={"center"} gap={3}>
          <Typography
            variant="h3"
            color="red"
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={85}
          >
            404
          </Typography>
          <div className="four_zero_four_bg"></div>

          <div className="contant_box_404">
            <h3 className="h2">Look like you're lost</h3>
            <p>the page you are looking for not available!</p>
            <Button
              component={Link}
              to={"/"}
              variant="contained"
              color="primary"
              sx={{ margin: "15px auto 0" }}
            >
              Go to Home
            </Button>
          </div>
        </Stack>
      </section>
    </>
  );
}

export default Err404;
