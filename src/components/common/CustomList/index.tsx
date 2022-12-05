import { Box, TextField, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import List from "@mui/material/List";

interface IListProps {
  search?: boolean;
  children?: React.ReactNode;
  searchData?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    borderRadius: "0.5rem",
    padding: "1rem",
    overflow: "hidden",
  },
}));

const ListContainer: React.FC<IListProps> = (props) => {
  const { search = false, children, searchData } = props;
  const onChangeSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    searchData(e.target.value);
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {search && (
        <TextField
          sx={{ width: "100%" }}
          onChange={(e) => onChangeSearch(e)}
          label="Search"
          variant="outlined"
        />
      )}
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          height: "100%",
          overflow: "auto",
          paddingBottom: "6rem",
          bgcolor: "background.paper",
        }}
      >
        {children}
      </List>
    </Box>
  );
};

export default ListContainer;
