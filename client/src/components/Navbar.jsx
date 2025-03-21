"use client";

import { AppBar, Toolbar, Typography, Box, Button, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Navbar({  }) {
  const user=useSelector((state)=>state.user);
  console.log(user);
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#b70924" }}>
      <Toolbar sx={{ minHeight: "50px", display: "flex", justifyContent: "space-between" }}>
        {/* Left: User Full Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
         Student Portfolio
        </Typography>

        {/* Right: Sign In, Sign Up, and User Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

          <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
            {user?.fullName}
          </Typography>
          <Avatar
            src={user?.avatar || "/default-avatar.png"}
            alt={user?.fullName}
            sx={{ width: 40, height: 40, cursor: "pointer" }}

          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
