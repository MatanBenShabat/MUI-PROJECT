import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  styled,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";
import { borderRadius, flexbox } from "@mui/system";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { useState } from "react";

const StyledTollbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledTollbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MBS
        </Typography>
        <Pets sx={{ display: { sm: "none", xs: "block" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer"}}
            src="data:image/jpeg;base64,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"
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="data:image/jpeg;base64,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"
          />
          John
        </UserBox>
      </StyledTollbar>

      <Menu sx={{mt:6}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
