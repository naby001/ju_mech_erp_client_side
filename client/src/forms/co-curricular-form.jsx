import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CoCurricularForm = ({ formData, setFormData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (section, index, field) => (event) => {
    const updatedSection = [...(formData[section] || [])]; // Ensure array exists
    updatedSection[index][field] = event.target.value;
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleAddEntry = (section) => {
    const newEntry = {};
    if (formData[section] && formData[section].length > 0) {
      Object.keys(formData[section][0]).forEach((key) => {
        newEntry[key] = "";
      });
    }

    setFormData((prevData) => ({
      ...prevData,
      [section]: [...(prevData[section] || []), newEntry], // Ensure array format
    }));
  };

  const handleRemoveEntry = (section, index) => {
    if (!formData[section]) return;
    const updatedSection = [...formData[section]];
    updatedSection.splice(index, 1);
    setFormData({ ...formData, [section]: updatedSection });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
      {Object.keys(formData).map((section) => (
        <Accordion
          key={section}
          expanded={expanded === section}
          onChange={handleAccordionChange(section)}
          sx={{
            mb: 2,
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {section.replace(/([A-Z])/g, " $1").trim()}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Array.isArray(formData[section]) &&
              formData[section].map((entry, index) => (
                <Box key={index} sx={{ mb: 2, position: "relative" }}>
                  {Object.keys(entry).map((field) => (
                    <TextField
                      key={field}
                      label={field.replace(/([A-Z])/g, " $1").trim()}
                      fullWidth
                      margin="normal"
                      value={entry[field]}
                      onChange={handleChange(section, index, field)}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: "8px",
                          backgroundColor: "#fff",
                        },
                      }}
                    />
                  ))}
                  {formData[section].length > 1 && (
                    <IconButton
                      onClick={() => handleRemoveEntry(section, index)}
                      sx={{ position: "absolute", top: 0, right: -40 }}
                    >
                      <RemoveCircleOutlineIcon color="error" />
                    </IconButton>
                  )}
                </Box>
              ))}
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => handleAddEntry(section)}
              sx={{ mt: 1 }}
            >
              Add More
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, width: "100%", borderRadius: "8px" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CoCurricularForm;
