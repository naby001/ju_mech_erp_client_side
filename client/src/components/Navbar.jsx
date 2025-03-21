"use client";

import { AppBar, Toolbar, Typography, Box, Button, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Navbar({  }) {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#b70924" }}>
      <Toolbar
        sx={{
          minHeight: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left: User Full Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          JUMERP
        </Typography>

        {/* Centre: Navigation Links */}
        <Box sx={{
          display: "flex",
          gap: 2,
          cursor: "pointer"
        }}>
          <Button color="inherit" sx={{
            '&:hover': {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out"
            }
          }}>Home</Button>
          <Button color="inherit" sx={{
            '&:hover': {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out"
            }
          }}>About</Button>
          <Button color="inherit" sx={{
            '&:hover': {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out"
            }
          }}>Facilities</Button>
          <Button color="inherit" sx={{
            '&:hover': {
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out"
            }
          }}>Faculty</Button>
          <Button color="inherit" sx={{
            '&:hover': {
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out"
            }
          }}>Contact</Button>
        </Box>

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