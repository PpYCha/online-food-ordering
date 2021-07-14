import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StoreList from "../component/StoreList";
export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <StoreList />
      </Container>
    </React.Fragment>
  );
}
