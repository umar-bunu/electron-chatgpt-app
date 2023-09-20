import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
export default () => {
  const [text, settext] = useState("");
  const [msgs, setmsgs] = useState<Parameters<typeof HistoryBox>[0][]>([]);

  const handleSubmit = async () => {
    if (!text) return alert("No Text");
    const res = await electron.chatgptApi.getCompletion(text);
    console.log({ res });
    setmsgs((prevState) => [
      { msg: text, sender: "Human", time: new Date().toISOString() },
      ...prevState,
    ]);
    settext("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowY: "auto",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{ bgcolor: "rgba(255, 255, 255, 0.7)", p: "1rem", width: "800px" }}
      >
        <Box>
          <TextField
            multiline
            minRows={2}
            maxRows={2}
            sx={{ borderColor: "white", display: "block", mb: "0.5rem" }}
            placeholder="Enter Your Question"
            InputProps={{
              value: text,
              onChange(e) {
                settext(e.target.value);
              },
            }}
          />

          <Button variant="contained" size="small" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
        {msgs.map((eachHis, id) => (
          <HistoryBox key={id} {...eachHis} />
        ))}
      </Box>
    </Box>
  );
};

const HistoryBox = ({
  msg,
  sender,
}: {
  sender: "Human" | "AI";
  msg: string;
  time: string;
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
