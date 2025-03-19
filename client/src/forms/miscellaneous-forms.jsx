import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function MiscellaneousForm() {
  const isMobile = useMediaQuery("(max-width:900px)");

  const [formData, setFormData] = useState({
    lor: null,
    keyLearnings: "",
    sop: "",
    vision: "",
  });

  const handleFileUpload = (event) => {
    setFormData({ ...formData, lor: event.target.files[0] });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const exportDataAsArray = () => {
    const dataArray = [
      formData.lor,
      formData.keyLearnings,
      formData.sop,
      formData.vision,
    ];
    console.log(dataArray); // Replace with desired export logic
  };

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "#fff",
        borderRadius: "12px",
        padding: isMobile ? "20px" : "40px",
      }}
    >
      {/* LOR Upload */}
      <Box
        sx={{
          width: "100%",
          mb: 3,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: isMobile ? "flex-start" : "space-between",
          gap: isMobile ? "10px" : "0",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, color: "black" }}>
          Letter of Recommendation (LOR)
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            borderRadius: "10px",
            background: "#b70924",
            width: isMobile ? "100%" : "40%",
          }}
        >
          Upload LOR
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>
      </Box>

      {/* Key Learnings */}
      <TextField
        label="Key Learnings / Highlights of the Programme"
        variant="outlined"
        multiline
        rows={isMobile ? 4 : 3}
        fullWidth
        sx={{ mb: 3, borderRadius: "10px", background: "rgba(255, 255, 255, 0.1)" }}
        value={formData.keyLearnings}
        onChange={(e) => handleChange("keyLearnings", e.target.value)}
      />

      {/* SOP */}
      <TextField
        label="Statement of Purpose (SOP)"
        variant="outlined"
        multiline
        rows={isMobile ? 4 : 3}
        fullWidth
        sx={{ mb: 3, borderRadius: "10px", background: "rgba(255, 255, 255, 0.1)" }}
        value={formData.sop}
        onChange={(e) => handleChange("sop", e.target.value)}
      />

      {/* Vision & Long-term Aspirations */}
      <TextField
        label="Vision & Long-Term Aspirations"
        variant="outlined"
        multiline
        rows={isMobile ? 4 : 3}
        fullWidth
        sx={{ mb: 3, borderRadius: "10px", background: "rgba(255, 255, 255, 0.1)" }}
        value={formData.vision}
        onChange={(e) => handleChange("vision", e.target.value)}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          borderRadius: "10px",
          background: "#b70924",
          "&:hover": { background: "#90071d" },
          width: isMobile ? "100%" : "auto",
        }}
      >
        Submit
      </Button>

      {/* Export Data Button */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          borderRadius: "10px",
          background: "#007BFF",
          "&:hover": { background: "#0056b3" },
          width: isMobile ? "100%" : "auto",
        }}
        onClick={exportDataAsArray}
      >
        Export Data
      </Button>
    </Container>
  );
}
