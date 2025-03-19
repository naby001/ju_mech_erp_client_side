"use client";

import { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  useMediaQuery
} from "@mui/material";
import { Add, Delete, CloudUpload, Cancel } from "@mui/icons-material";

const electivesList = ["Elective 1", "Elective 2", "Elective 3", "Elective 4"];
const openElectivesList = ["Open Elective 1", "Open Elective 2", "Open Elective 3"];

export default function AcademicInfoForm({ onChange, formData, handleChange }) {
  const [tabValue, setTabValue] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [projects, setProjects] = useState([{}]);
  const [journals, setJournals] = useState([{}]);

  const addProject = () => setProjects([...projects, {}]);
  const addJournal = () => setJournals([...journals, {}]);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Add selected Professional elective
  const handleProfessionalChange = (event) => {
    const newElective = event.target.value;

    // Ensure we don't add duplicates
    if (!formData.selectedProfessional.includes(newElective)) {
      handleChange({
        target: {
          name: "selectedProfessional",
          value: [...formData.selectedProfessional, newElective], // ✅ Create a new array instead of mutating
        },
      });
    }
  };

  // Add selected Open elective
  const handleOpenChange = (event) => {
    const newElective = event.target.value;

    // Ensure we don't add duplicates
    if (!formData.selectedOpen.includes(newElective)) {
      handleChange({
        target: {
          name: "selectedOpen",
          value: [...formData.selectedOpen, newElective], // ✅ Create a new array instead of mutating
        },
      });
    }
  };

  // Remove Professional elective
  const removeProfessional = (elective) => {
    const updatedProfElectives = formData.selectedProfessional.filter((item) => item !== elective);
    handleChange({ target: { name: "selectedProfessional", value: updatedProfElectives } });
  };

  // Remove Open elective
  const removeOpen = (elective) => {
    const updatedOpenElectives = formData.selectedOpen.filter((item) => item !== elective);
    handleChange({ target: { name: "selectedOpen", value: updatedOpenElectives } });
  };

  //functions to add and remove semester and update semester details
  const addSemester = () => {
    const newSem = [...formData.grades, { semester: formData.grades.length + 1, sgpa: "", cgpa: "" }]
    handleChange({ target: { name: "grades", value: newSem } })
  }

  const removeSemester = (index) => {
    const modifiedSem = formData.grades.filter((_, i) => i != index)
    handleChange({ target: { name: "grades", value: modifiedSem } })
  };

  const handleGradeChange = (index, field, value) => {
    const updatedGrades = formData.grades.map((grade, i) =>
      i === index ? { ...grade, [field]: value } : grade
    );
    handleChange({ target: { name: "grades", value: updatedGrades } })
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }} gutterBottom>
        Academic Information
      </Typography>
      <Divider className="mb-4" />

      <Box sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Semester-wise Grades
        </Typography>

        <TableContainer component={Paper} className="mb-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Semester</TableCell>
                <TableCell>SGPA</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.grades.map((grade, index) => (
                <TableRow key={index}>
                  <TableCell>{grade.semester}</TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      name='grades'
                      value={grade.sgpa}
                      onChange={(e) => handleGradeChange(index, 'sgpa', e.target.value)}
                      //type="number"
                      inputProps={{ min: 0, max: 10, step: 0.01 }}
                      sx={{ '& .MuiInputBase-root': { height: 32 } }}
                    />
                  </TableCell>

                  <TableCell sx={{ display: 'flex', flexDirection: 'row' }}>
                    <IconButton >
                      <CloudUpload />
                    </IconButton>
                    <IconButton onClick={addSemester}>
                      <Add />
                    </IconButton>
                    <IconButton color="error" onClick={() => removeSemester(index)} disabled={formData.grades.length === 1}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider sx={{ my: 4, bgcolor: "rgba(255, 255, 255, 0.3)" }} />

        <FormControl fullWidth variant="outlined" sx={{ mb: 4, borderRadius: 2, backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(5px)" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Choose Professional Electives
          </Typography>
          <Select onChange={handleProfessionalChange} value="" sx={{ borderRadius: 2 }}>
            {electivesList.map((elective) => (
              <MenuItem key={elective} value={elective}>
                {elective}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Display Selected Professional Electives */}
        {formData.selectedProfessional.length > 0 && (
          <Box sx={{ mb: 4 }}>
            {formData.selectedProfessional.map((elec) => (
              <Chip
                key={elec}
                label={elec}
                sx={{
                  mr: 1,
                  mb: 1,
                  fontSize: "14px",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                  color: "#fff",
                }}
                onDelete={() => removeProfessional(elec)}
                deleteIcon={<Cancel sx={{ color: "#fff" }} />}
              />
            ))}
          </Box>
        )}

        <Divider sx={{ my: 4, bgcolor: "rgba(255, 255, 255, 0.3)" }} />

        {/* Open Electives */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            background: "linear-gradient(to right, #ff512f, #dd2476)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Choose Open Electives
        </Typography>
        <FormControl fullWidth variant="outlined" sx={{ mb: 4, borderRadius: 2, backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(5px)" }}>
          <InputLabel>Select Open Elective</InputLabel>
          <Select onChange={handleOpenChange} value="" sx={{ borderRadius: 2 }}>
            {openElectivesList.map((elective) => (
              <MenuItem key={elective} value={elective}>
                {elective}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Display Selected Open Electives */}
        {formData.selectedOpen.length > 0 && (
          <Box>
            {formData.selectedOpen.map((elec) => (
              <Chip
                key={elec}
                label={elec}
                sx={{
                  mr: 1,
                  mb: 1,
                  fontSize: "14px",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #ff9a8b, #ff6a88, #ff99ac)",
                  color: "#fff",
                }}
                onDelete={() => removeOpen(elec)}
                deleteIcon={<Cancel sx={{ color: "#fff" }} />}
              />
            ))}
          </Box>
        )}

        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>Project Entry</Typography>

        {isMobile ? (
          projects.map((_, index) => (
            <Paper key={index} sx={{ p: 3, mb: 2, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h6">Project {index + 1}</Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Type</InputLabel>
                <Select>
                  <MenuItem value="major">Major</MenuItem>
                  <MenuItem value="minor">Minor</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Mode</InputLabel>
                <Select>
                  <MenuItem value="online">Online</MenuItem>
                  <MenuItem value="offline">Offline</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Duration" fullWidth sx={{ mb: 2 }} />
              <TextField label="Year of Work" fullWidth sx={{ mb: 2 }} />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Graded/Non-Graded</InputLabel>
                <Select>
                  <MenuItem value="graded">Graded</MenuItem>
                  <MenuItem value="non-graded">Non-Graded</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Supervisor Name & Institute" fullWidth sx={{ mb: 2 }} />
              <TextField label="Co-Supervisor Name & Institute" fullWidth sx={{ mb: 2 }} />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>SDG Connection</InputLabel>
                <Select>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" component="label" startIcon={<CloudUpload />} sx={{ backgroundColor: "#388e3c" }}>
                Upload Certificate
                <input type="file" hidden />
              </Button>
            </Paper>
          ))
        ) : (
          <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#635acc" }}>
                <TableRow>
                  {["Type", "Mode", "Duration", "Year", "Grading", "Supervisor", "Co-Supervisor", "SDG", "Certificate"].map((header) => (
                    <TableCell key={header} sx={{ color: "white", fontWeight: "bold" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((_, index) => (
                  <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
                    <TableCell>
                      <Select fullWidth defaultValue="">
                        <MenuItem value="major">Major</MenuItem>
                        <MenuItem value="minor">Minor</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select fullWidth defaultValue="">
                        <MenuItem value="online">Online</MenuItem>
                        <MenuItem value="offline">Offline</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <TextField fullWidth type="number" placeholder="Duration (Months)" />
                    </TableCell>
                    <TableCell>
                      <TextField fullWidth type="number" placeholder="Year" />
                    </TableCell>
                    <TableCell>
                      <Select fullWidth defaultValue="">
                        <MenuItem value="graded">Graded</MenuItem>
                        <MenuItem value="non-graded">Non-Graded</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <TextField fullWidth placeholder="Supervisor Name" />
                    </TableCell>
                    <TableCell>
                      <TextField fullWidth placeholder="Co-Supervisor Name" />
                    </TableCell>
                    <TableCell>
                      <Select fullWidth defaultValue="">
                        <MenuItem value="yes">Yes</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" component="label" sx={{ bgcolor: "#4caf50", color: "white", "&:hover": { bgcolor: "#388e3c" } }}>
                        <CloudUpload sx={{ mr: 1 }} /> Upload
                        <input type="file" hidden />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Button variant="contained" onClick={addProject} sx={{ mt: 2, backgroundColor: "#388e3c" }} >Add Project</Button>
      </Box>

    </Box>
  );
}
