import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import PersonalInfoForm from "../forms/personal-info-form";
import Navbar from "../components/Navbar";
import EnrollmentDetailsForm from "../forms/enrollment-details-forms";
import AcademicBackgroundForm from "../forms/academic-background-form";
import AcademicInfoForm from "../forms/academic-info-form";
import ProgressionForm from "../forms/progression-form";
import CoCurricularForm from "../forms/co-curricular-form";
import MiscellaneousForms from "../forms/miscellaneous-forms";
const sections = [{ title: "General Info", component:<PersonalInfoForm/> }, 
  { title: "Enrollment Details", component:<EnrollmentDetailsForm/> }, 
  { title: "Academic Background", component:<AcademicBackgroundForm/> }, 
  { title: "Academic Info", component:<AcademicInfoForm/> }
  , { title: "Placement", component:<ProgressionForm/> }
  , { title: "Co-Curricular and Extra-Curricular Activities", component:<CoCurricularForm/> }
  , { title: "Miscallaneous", component:<MiscellaneousForms/> }
  
];

export default function MultiStepForm() {
  const [activeSection, setActiveSection] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        //flex:1,
       flexGrow:1,
        width: "100vw",
      height: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
       overflowY:isMobile&&'auto',
      }}
    >
      {/* Sidebar (Only for Desktop) */}
      {!isMobile && (
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      )}
      {isMobile && (
        <Navbar/>
      )}
      {/* Form Section */}
      <Box
        
        key={activeSection}
        
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
       
          padding: isMobile ? "20px" : "40px",
          width: "100%",
          // height:'100vh',
           overflowY:!isMobile&&'auto'
          //minHeight: "100vh", 
          //paddingTop: isMobile ? "1120px" : "0px", // Adds space at the top to prevent clipping
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color:'black' }}>
          {sections[activeSection].title}
        </Typography>
        {sections[activeSection].component}
        {isMobile && (
          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: "10px",
              background: "#b70924",
              color: "#fff",
              "&:hover": { background: "#90071d" },
            }}
            onClick={() =>
              setActiveSection((prev) => (prev < sections.length - 1 ? prev + 1 : prev))
            }
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
}
