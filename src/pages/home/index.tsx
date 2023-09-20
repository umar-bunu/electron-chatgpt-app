import { Box, Button, Card, Stack, TextField } from "@mui/material";
import React from "react";
export default () => {
  const history: Parameters<typeof HistoryBox>[0][] = [
    {
      sender: "AI",
      msg: "I am AI",
    },
    {
      sender: "Human",
      msg: "I am Human",
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowY: "auto",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Card sx={{ bgcolor: "rgba(255, 255, 255, 0.7)", p: "1rem" }}>
        <Box>
          <TextField
            multiline
            minRows={4}
            maxRows={4}
            sx={{ borderColor: "white", display: "block", mb: "0.5rem" }}
            placeholder="Enter Your Question"
          />

          <Button variant="contained" size="small">
            Submit
          </Button>
          {history.map((eachHis, id) => (
            <HistoryBox key={id} {...eachHis} />
          ))}
        </Box>
      </Card>
    </Box>
  );
};

const HistoryBox = ({
  msg,
  sender,
}: {
  sender: "Human" | "AI";
  msg: string;
}) => {
  return (
    <Stack
      direction={"row"}
      gap="1rem"
      border="1px solid black"
      p="0.5rem"
      sx={{ mt: "0.5rem" }}
    >
      <Box sx={{ width: "40px", color: sender === "AI" ? "green" : "purple" }}>
        {sender}
      </Box>
      :<Box sx={{ flex: 1, fontWeight: "bold" }}>{msg}</Box>
    </Stack>
  );
};
