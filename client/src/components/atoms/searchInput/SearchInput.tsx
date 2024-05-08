import React from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

type SearchInputProps = {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
};

export default function SearchInput({ onChange, value }: SearchInputProps) {
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 190,
          boxShadow: "none",
          border: "1px solid #CACDCD",
          height: "25px",
        }}
      >
        <IconButton type="button" sx={{ padding: "8px" }} aria-label="search">
          <Search sx={{ width: "16px" }} />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            width: "100%",
            "& input::placeholder": {
              fontSize: "12px",
              fontWeight: "bold",
            },
          }}
          value={value}
          placeholder={"Search"}
          onKeyPress={(e) => e.code === "Enter" && e.preventDefault()}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </Paper>
    </>
  );
}
