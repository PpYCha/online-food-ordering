import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import StoreList from "../components/StoreList";
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
