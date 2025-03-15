import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  useMediaQuery,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

export default function CoCurricularForm() {
  const isMobile = useMediaQuery("(max-width:900px)");

  // State for checkboxes
  const [clubChecked, setClubChecked] = useState(false);
  const [techFestChecked, setTechFestChecked] = useState(false);

  // State for clubs/societies data
  const [clubs, setClubs] = useState([
    { name: "", role: "", accolades: "", achievements: "", certificate: null },
  ]);

  // State for tech fest/hackathon data
  const [techFests, setTechFests] = useState([
    { name: "", organizer: "", eventType: "", year: "", role: "", teammates: "", outcome: "", certificate: null },
  ]);

  // Handler to add a new club row
  const handleAddClub = () => {
    setClubs([...clubs, { name: "", role: "", accolades: "", achievements: "", certificate: null }]);
  };

  // Handler to add a new tech fest row
  const handleAddTechFest = () => {
    setTechFests([...techFests, { name: "", organizer: "", eventType: "", year: "", role: "", teammates: "", outcome: "", certificate: null }]);
  };

  // Handler to update a club entry
  const handleClubChange = (index, field, value) => {
    const updatedClubs = [...clubs];
    updatedClubs[index][field] = value;
    setClubs(updatedClubs);
  };

  // Handler to update a tech fest entry
  const handleTechFestChange = (index, field, value) => {
    const updatedTechFests = [...techFests];
    updatedTechFests[index][field] = value;
    setTechFests(updatedTechFests);
  };

  // Handler to remove a club entry
  const handleRemoveClub = (index) => {
    const updatedClubs = clubs.filter((_, i) => i !== index);
    setClubs(updatedClubs);
  };

  // Handler to remove a tech fest entry
  const handleRemoveTechFest = (index) => {
    const updatedTechFests = techFests.filter((_, i) => i !== index);
    setTechFests(updatedTechFests);
  };

  return (
    <Box sx={{ padding: "20px", width: "100%", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
      {/* Checkbox for Clubs/Societies */}
      <FormControlLabel
        control={<Checkbox checked={clubChecked} onChange={() => setClubChecked(!clubChecked)} />}
        label="Associated with Clubs/Societies"
      />

      {/* Clubs Section */}
      {clubChecked && (
        <>
          {isMobile ? (
            // Column-wise layout for Mobile
            clubs.map((club, index) => (
              <Box key={index} sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
                <TextField label="Club Name" value={club.name} onChange={(e) => handleClubChange(index, "name", e.target.value)} />
                <TextField label="Role" value={club.role} onChange={(e) => handleClubChange(index, "role", e.target.value)} />
                <TextField label="Accolades" value={club.accolades} onChange={(e) => handleClubChange(index, "accolades", e.target.value)} />
                <TextField label="Achievements" value={club.achievements} onChange={(e) => handleClubChange(index, "achievements", e.target.value)} />
                <Button variant="contained" component="label">
                  Upload Certificate
                  <input type="file" hidden onChange={(e) => handleClubChange(index, "certificate", e.target.files[0])} />
                </Button>
                <IconButton onClick={() => handleRemoveClub(index)}><Delete /></IconButton>
              </Box>
            ))
          ) : (
            // Table Layout for Desktop
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Club Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Accolades</TableCell>
                    <TableCell>Achievements</TableCell>
                    <TableCell>Certificate</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clubs.map((club, index) => (
                    <TableRow key={index}>
                      <TableCell><TextField value={club.name} onChange={(e) => handleClubChange(index, "name", e.target.value)} /></TableCell>
                      <TableCell><TextField value={club.role} onChange={(e) => handleClubChange(index, "role", e.target.value)} /></TableCell>
                      <TableCell><TextField value={club.accolades} onChange={(e) => handleClubChange(index, "accolades", e.target.value)} /></TableCell>
                      <TableCell><TextField value={club.achievements} onChange={(e) => handleClubChange(index, "achievements", e.target.value)} /></TableCell>
                      <TableCell>
                        <Button variant="contained" component="label">
                          Upload
                          <input type="file" hidden onChange={(e) => handleClubChange(index, "certificate", e.target.files[0])} />
                        </Button>
                      </TableCell>
                      <TableCell><IconButton onClick={() => handleRemoveClub(index)}><Delete /></IconButton></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <Button startIcon={<Add />} onClick={handleAddClub} sx={{ mt: 2 }}>Add Club</Button>
        </>
      )}

      {/* Checkbox for Tech Fest/Hackathons */}
      <FormControlLabel
        control={<Checkbox checked={techFestChecked} onChange={() => setTechFestChecked(!techFestChecked)} />}
        label="Participated in Tech Fest / Hackathons"
      />

      {/* Tech Fest Section (Follows same structure as clubs) */}
      {techFestChecked && (
        <>
         {isMobile ? (
  // Column-wise layout for Mobile
  techFests.map((techFest, index) => (
    <Box key={index} sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
      <TextField label="Competition Name" value={techFest.name} onChange={(e) => handleTechFestChange(index, "name", e.target.value)} />
      <TextField label="Organized By" value={techFest.organizer} onChange={(e) => handleTechFestChange(index, "organizer", e.target.value)} />
      <TextField label="Nature of Event (Individual/Team)" value={techFest.eventType} onChange={(e) => handleTechFestChange(index, "eventType", e.target.value)} />
      <TextField label="Year" value={techFest.year} onChange={(e) => handleTechFestChange(index, "year", e.target.value)} />
      <TextField label="Role" value={techFest.role} onChange={(e) => handleTechFestChange(index, "role", e.target.value)} />
      <TextField label="Team Members" value={techFest.teammates} onChange={(e) => handleTechFestChange(index, "teammates", e.target.value)} />
      <TextField label="Outcome" value={techFest.outcome} onChange={(e) => handleTechFestChange(index, "outcome", e.target.value)} />
      <Button variant="contained" component="label">
        Upload Certificate
        <input type="file" hidden onChange={(e) => handleTechFestChange(index, "certificate", e.target.files[0])} />
      </Button>
      <IconButton onClick={() => handleRemoveTechFest(index)}><Delete /></IconButton>
    </Box>
  ))
) : (
  // Table Layout for Desktop
  <TableContainer component={Paper} sx={{ mt: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Competition Name</TableCell>
          <TableCell>Organized By</TableCell>
          <TableCell>Nature of Event</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Team Members</TableCell>
          <TableCell>Outcome</TableCell>
          <TableCell>Certificate</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {techFests.map((techFest, index) => (
          <TableRow key={index}>
            <TableCell><TextField value={techFest.name} onChange={(e) => handleTechFestChange(index, "name", e.target.value)} /></TableCell>
            <TableCell><TextField value={techFest.organizer} onChange={(e) => handleTechFestChange(index, "organizer", e.target.value)} /></TableCell>
            <TableCell><TextField value={techFest.eventType} onChange={(e) => handleTechFestChange(index, "eventType", e.target.value)} /></TableCell>
            <TableCell><TextField value={techFest.year} onChange={(e) => handleTechFestChange(index, "year", e.target.value)} /></TableCell>
            <TableCell><TextField value={techFest.role} onChange={(e) => handleTechFestChange(index, "role", e.target.value)} /></TableCell>
            <TableCell><TextField value={techFest.teammates} onChange={(e) => handleTechFestChange(index, "teammates", e.target.value)} /></TableCell>
            <TableCell><TextField value={techFest.outcome} onChange={(e) => handleTechFestChange(index, "outcome", e.target.value)} /></TableCell>
            <TableCell>
              <Button variant="contained" component="label">
                Upload
                <input type="file" hidden onChange={(e) => handleTechFestChange(index, "certificate", e.target.files[0])} />
              </Button>
            </TableCell>
            <TableCell><IconButton onClick={() => handleRemoveTechFest(index)}><Delete /></IconButton></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)}
<Button startIcon={<Add />} onClick={handleAddTechFest} sx={{ mt: 2 }}>Add Competition</Button>

        </>
      )}


    </Box>
  );
}
