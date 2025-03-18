import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Add, Delete, ExpandMore } from "@mui/icons-material";

export default function CoCurricularForm({onChange, formData, handleChangeCur}) {
  const isMobile = useMediaQuery("(max-width:900px)");

  // Default row structures for each section
  const defaultClubRow = { name: "", role: "", accolades: "", achievements: "", certificate: null };
  const defaultTechFestRow = { name: "", organizer: "", eventType: "", year: "", role: "", teammates: "", outcome: "", certificate: null };
  const defaultLeadershipRow = { role: "", details: "", certificate: null };
  const defaultSportsRow = { name: "", level: "", venue: "", year: "", result: "", accolades: "", certificate: null };
  const defaultSkillsRow = { name: "", offeredBy: "", mode: "", duration: "", fee: "", certificate: null };
  const defaultSocialRow = { name: "", details: "", date: "", location: "", certificate: null };
  const defaultSeminarRow = { name: "", venue: "", date: "", organizer: "", certificate: null };

  // State for each section
  const [clubs, setClubs] = useState([defaultClubRow]);
  const [techFests, setTechFests] = useState([defaultTechFestRow]);
  const [leadership, setLeadership] = useState([defaultLeadershipRow]);
  const [sports, setSports] = useState([defaultSportsRow]);
  const [skills, setSkills] = useState([defaultSkillsRow]);
  const [socialActivities, setSocialActivities] = useState([defaultSocialRow]);
  const [seminars, setSeminars] = useState([defaultSeminarRow]);

  // Handler to add a new row
  const handleAddRow = (state, setState, defaultRow) => {
    setState([...state, defaultRow]);
  };

  // Handler to update a row
  const handleChange = (index, field, value, state, setState) => {
    const updatedState = [...state];
    updatedState[index][field] = value;
    setState(updatedState);
  };

  // Handler to remove a row
  const handleRemoveRow = (index, state, setState) => {
    const updatedState = state.filter((_, i) => i !== index);
    setState(updatedState);
  };

  return (
    <Box sx={{ padding: "20px", width: "100%", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
      {/* Clubs Section */}
      <FormControlLabel
        control={<Checkbox checked={clubs.length > 0} onChange={() => setClubs(clubs.length > 0 ? [] : [defaultClubRow])} />}
        label="Association with Clubs/Societies/Chapters"
      />
      {clubs.length > 0 && (
        <Section
          title="Clubs/Societies"
          state={clubs}
          setState={setClubs}
          fields={[
            { label: "Club Name", key: "name" },
            { label: "Role", key: "role" },
            { label: "Accolades", key: "accolades" },
            { label: "Achievements", key: "achievements" },
          ]}
          isMobile={isMobile}
          defaultRow={defaultClubRow}
          handleAddRow={handleAddRow}
          handleChange={handleChange}
          handleRemoveRow={handleRemoveRow}
        />
      )}

      {/* Tech Fests Section */}
      <FormControlLabel
        control={<Checkbox checked={techFests.length > 0} onChange={() => setTechFests(techFests.length > 0 ? [] : [defaultTechFestRow])} />}
        label="Participation in Tech fests/Hackathon/Competitions"
      />
      {techFests.length > 0 && (
        <Section
          title="Tech Fests/Hackathons"
          state={techFests}
          setState={setTechFests}
          fields={[
            { label: "Competition Name", key: "name" },
            { label: "Organized By", key: "organizer" },
            { label: "Nature of Event", key: "eventType" },
            { label: "Year", key: "year" },
            { label: "Role", key: "role" },
            { label: "Team Members", key: "teammates" },
            { label: "Outcome", key: "outcome" },
          ]}
          isMobile={isMobile}
          defaultRow={defaultTechFestRow}
          handleAddRow={handleAddRow}
          handleChange={handleChange}
          handleRemoveRow={handleRemoveRow}
        />
      )}

      {/* Leadership Section */}
      <FormControlLabel
        control={<Checkbox checked={leadership.length > 0} onChange={() => setLeadership(leadership.length > 0 ? [] : [defaultLeadershipRow])} />}
        label="Leadership Qualities"
      />
      {leadership.length > 0 && (
        <Section
          title="Leadership Roles"
          state={leadership}
          setState={setLeadership}
          fields={[
            { label: "Role", key: "role" },
            { label: "Details", key: "details" },
          ]}
          isMobile={isMobile}
          defaultRow={defaultLeadershipRow}
          handleAddRow={handleAddRow}
          handleChange={handleChange}
          handleRemoveRow={handleRemoveRow}
        />
      )}

      {/* Sports Section */}
      <FormControlLabel
        control={<Checkbox checked={sports.length > 0} onChange={() => setSports(sports.length > 0 ? [] : [defaultSportsRow])} />}
        label="Games and Sports"
      />
      {sports.length > 0 && (
        <Section
          title="Sports Participation"
          state={sports}
          setState={setSports}
          fields={[
            { label: "Event Name", key: "name" },
            { label: "Level", key: "level" },
            { label: "Venue", key: "venue" },
            { label: "Year", key: "year" },
            { label: "Result", key: "result" },
            { label: "Accolades", key: "accolades" },
          ]}
          isMobile={isMobile}
          defaultRow={defaultSportsRow}
          handleAddRow={handleAddRow}
          handleChange={handleChange}
          handleRemoveRow={handleRemoveRow}
        />
      )}

      {/* Skills Section */}
      <FormControlLabel
        control={<Checkbox checked={skills.length > 0} onChange={() => setSkills(skills.length > 0 ? [] : [defaultSkillsRow])} />}
        label="Skills and Certifications"
      />
      {skills.length > 0 && (
        <Section
          title="Skills and Certifications"
          state={skills}
          setState={setSkills}
          fields={[
            { label: "Course Name", key: "name" },
            { label: "Offered By", key: "offeredBy" },
            { label: "Mode", key: "mode" },
            { label: "Duration", key: "duration" },
            { label: "Fee", key: "fee" },
          ]}
          isMobile={isMobile}
          defaultRow={defaultSkillsRow}
          handleAddRow={handleAddRow}
          handleChange={handleChange}
          handleRemoveRow={handleRemoveRow}
        />
      )}

      {/* Social Activities Section */}
      <FormControlLabel
        control={<Checkbox checked={socialActivities.length > 0} onChange={() => setSocialActivities(socialActivities.length > 0 ? [] : [defaultSocialRow])} />}
        label="Social Activities"
      />
      {socialActivities.length > 0 && (
        <Section
          title="Social Activities"
          state={socialActivities}
          setState={setSocialActivities}
          fields={[
            { label: "Activity Name", key: "name" },
            { label: "Details", key: "details" },
            { label: "Date", key: "date" },
            { label: "Location", key: "location" },
          ]}
          isMobile={isMobile}
          defaultRow={defaultSocialRow}
          handleAddRow={handleAddRow}
          handleChange={handleChange}
          handleRemoveRow={handleRemoveRow}
        />
      )}

      {/* Seminars Section */}
      <FormControlLabel
        control={<Checkbox checked={seminars.length > 0} onChange={() => setSeminars(seminars.length > 0 ? [] : [defaultSeminarRow])} />}
        label="Participation in Seminars/Talks/Programs"
      />
      {seminars.length > 0 && (
        <Section
          title="Seminars/Talks/Programs"
          state={seminars}
          setState={setSeminars}
          fields={[
            { label: "Program Name", key: "name" },
            { label: "Venue", key: "venue" },
            { label: "Date", key: "date" },
            { label: "Organizer", key: "organizer" },
          ]}
          isMobile={isMobile}
          defaultRow={defaultSeminarRow}
          handleAddRow={handleAddRow}
          handleChange={handleChange}
          handleRemoveRow={handleRemoveRow}
        />
      )}
    </Box>
  );
}

// Reusable Section Component
function Section({
  title,
  state,
  setState,
  fields,
  isMobile,
  defaultRow,
  handleAddRow,
  handleChange,
  handleRemoveRow,
}) {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">{title}</Typography>
      {isMobile ? (
        state.map((row, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{row.name || `Entry ${index + 1}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {fields.map((field) => (
                  <TextField
                    key={field.key}
                    label={field.label}
                    value={row[field.key]}
                    onChange={(e) => handleChange(index, field.key, e.target.value, state, setState)}
                  />
                ))}
                <Button variant="contained" component="label">
                  Upload Certificate
                  <input type="file" hidden onChange={(e) => handleChange(index, "certificate", e.target.files[0], state, setState)} />
                </Button>
                <IconButton onClick={() => handleRemoveRow(index, state, setState)}>
                  <Delete />
                </IconButton>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {fields.map((field) => (
                  <TableCell key={field.key}>{field.label}</TableCell>
                ))}
                <TableCell>Certificate</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((row, index) => (
                <TableRow key={index}>
                  {fields.map((field) => (
                    <TableCell key={field.key}>
                      <TextField
                        value={row[field.key]}
                        onChange={(e) => handleChange(index, field.key, e.target.value, state, setState)}
                      />
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button variant="contained" component="label">
                      Upload
                      <input type="file" hidden onChange={(e) => handleChange(index, "certificate", e.target.files[0], state, setState)} />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleRemoveRow(index, state, setState)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button
        startIcon={<Add />}
        onClick={() => handleAddRow(state, setState, defaultRow)}
        sx={{ mt: 2 }}
      >
        Add Entry
      </Button>
    </Box>
  );
}