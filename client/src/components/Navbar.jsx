"use client";

import { AppBar, Toolbar, Typography, Box, Button, Avatar } from "@mui/material";

export default function Navbar({ user }) {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#b70924" }}>
      <Toolbar sx={{ minHeight: "50px", display: "flex", justifyContent: "space-between" }}>
        {/* Left: User Full Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
         Student Portfolio
        </Typography>

        {/* Right: Sign In, Sign Up, and User Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* <Button color="inherit">Sign In</Button>
          <Button color="inherit">Sign Up</Button> */}
             <Typography  sx={{ fontWeight: "bold", fontSize:"15px" }}>
         Nabyendu Das
        </Typography>
          <Avatar 
            src={user?.avatar || "/default-avatar.png"} 
            alt={user?.fullName} 
            sx={{ width: 40, height: 40 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
