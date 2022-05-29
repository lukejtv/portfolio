import React from "react";
import {
  Container,
  Button,
  lightColors,
  darkColors,
} from "react-floating-action-button";

const FAB = () => {
  return (
    <Container>
      <Button
        tooltip="The big plus button!"
        styles={{
          backgroundColor: darkColors.lighterRed,
          color: lightColors.white,
        }}
      />
    </Container>
  );
};

export default FAB;
