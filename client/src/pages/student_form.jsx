import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../components/Sidebar";
import PersonalInfoForm from "../forms/personal-info-form";
import Navbar from "../components/Navbar";
import EnrollmentDetailsForm from "../forms/enrollment-details-forms";
import AcademicBackgroundForm from "../forms/academic-background-form";
import AcademicInfoForm from "../forms/academic-info-form";
import ProgressionForm from "../forms/progression-form";
import CoCurricularForm from "../forms/co-curricular-form";
import MiscellaneousForms from "../forms/miscellaneous-forms";



export default function MultiStepForm() {
  const [activeSection, setActiveSection] = useState(0);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [personalformData, setPersonalFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    category: "",
    isPwd: false,
    mobileNo: "",
    whatsappNo: "",
    email: "",
    alternateEmail: "",
    presentAddress: "",
    presentState: "",
    permanentAddress: "",
    permanentState: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    emergencyContactRelation: "",
    nationality: "",
    idType: "",
    idNumber: "",
    familyIncome: ""
  });

  const [enrollformData, setEnrollFormData] = useState({
    rollNumber: "",
    section: "",
    programme: "",
    isLateralEntry: false,
    admissionYear: "",
    currentSemester: "",
    currentYear: "",
    expectedGraduationYear: "",
    registrationNumber: "",
    registrationYear: "",
    mentorName: "",
    hasScholarship: false,
    scholarshipDetails: ""
  });

  const [acadbackformData, setAcadBackFormData] = useState({
    secondaryMarks: "",
    secondaryYear: "",
    higherSecondaryMarks: "",
    higherSecondaryYear: "",
    mediumOfEducation: "",
    entranceExamName: "",
    entranceExamRank: "",
    entranceExamYear: ""
  });

  const handlepersonalChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setPersonalFormData({
      ...formData,
      [name]: newValue
    });
    
    onChange({
      personalInfo: {
        ...formData,
        [name]: newValue
      }
    });
  };

  const handleenrollChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setEnrollFormData({
      ...formData,
      [name]: newValue
    });
    
    onChange({
      enrollmentDetails: {
        ...formData,
        [name]: newValue
      }
    });
  };
  
  const handleacadbackChange = (event) => {
    const { name, value } = event.target;
    
    setAcadBackFormData({
      ...formData,
      [name]: value
    });
    
    onChange({
      academicBackground: {
        ...formData,
        [name]: value
      }
    });
  };

  const sections = [
    { title: "General Info", component: <PersonalInfoForm formData={personalformData} handleChange={handlepersonalChange}/> },
    { title: "Enrollment Details", component: <EnrollmentDetailsForm formData={enrollformData} handleChange={handleenrollChange}/> },
    { title: "Academic Background", component: <AcademicBackgroundForm formData={acadbackformData} handleChange={handleacadbackChange}/> },
    { title: "Academic Info", component: <AcademicInfoForm /> },
    { title: "Placement", component: <ProgressionForm /> },
    { title: "Co-Curricular and Extra-Curricular Activities", component: <CoCurricularForm /> },
    { title: "Miscellaneous", component: <MiscellaneousForms /> },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflowY: isMobile ? "auto" : "hidden",
      }}
    >
      {/* Sidebar (Desktop and Mobile) */}
      {!isMobile && (
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      )}
      {isMobile && (
        <>
          <Navbar />
          <IconButton
            sx={{ position: "absolute", top: 16, left: 16 }}
            onClick={() => setMobileSidebarOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={mobileSidebarOpen}
            onClose={() => setMobileSidebarOpen(false)}
          >
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </Drawer>
        </>
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
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "black" }}>
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
