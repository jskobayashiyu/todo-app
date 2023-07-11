import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";
import type { ChangeEvent } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<String[]>([]);

  const handleGetText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleGetList = () => {
    setList([...list, text]);
    setText("");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Stack>
          <TextField
            variant="outlined"
            value={text}
            label="ここにテキストを入力する"
            onChange={handleGetText}
          />
          <Button variant="contained" onClick={handleGetList}>
            追加
          </Button>
          <List>
            {list.map((text, index) => (
              <ListItem sx={{ p: 0 }}>
                <ListItemButton onClick={() => alert(text)}>
                  <ListItemText key={index}>{text}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
