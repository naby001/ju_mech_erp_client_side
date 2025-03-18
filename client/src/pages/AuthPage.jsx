import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import GoogleIcon from "@mui/icons-material/Google";

// UI Constants
const PRIMARY_COLOR = "#b70924";
const WHITE = "#ffffff";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  // Responsive Hook
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Signing up...", formData);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Clicked");
    // Implement Google OAuth Redirect here
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: isMobile ? 3 : 5,
            borderRadius: 4,
            textAlign: "center",
            bgcolor: WHITE,
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight="bold"
            color={PRIMARY_COLOR}
            mb={2}
          >
            {isLogin ? "Login to Your Account" : "Create an Account"}
          </Typography>

          <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
            {!isLogin && (
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                margin="dense"
                sx={{
                  bgcolor: "#f9f9f9",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": { borderRadius: 2 },
                }}
              />
            )}

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="dense"
              sx={{
                bgcolor: "#f9f9f9",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="dense"
              sx={{
                bgcolor: "#f9f9f9",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />

            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: PRIMARY_COLOR,
                  color: WHITE,
                  fontWeight: "bold",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  padding: isMobile ? "10px" : "12px",
                  borderRadius: 3,
                }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </motion.div>
          </form>

          <Divider sx={{ my: 3 }} />

          {/* Sexy Custom Google Button */}
          <motion.div
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <Button
              fullWidth
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: isMobile ? "10px" : "12px",
                fontWeight: "bold",
                fontSize: isMobile ? "0.9rem" : "1rem",
                color: "#000",
                bgcolor: "#fff",
                border: "2px solid #ddd",
                borderRadius: 3,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  borderColor: PRIMARY_COLOR,
                  color: PRIMARY_COLOR,
                },
              }}
              onClick={handleGoogleSignIn}
            >
              <GoogleIcon sx={{ fontSize: isMobile ? "22px" : "24px" }} />
              {isLogin ? "Login with Google" : "Sign Up with Google"}
            </Button>
          </motion.div>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              cursor: "pointer",
              color: PRIMARY_COLOR,
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default AuthPage;
