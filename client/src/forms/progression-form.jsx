"use client";

import React from "react";

import { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import FileUploadField from "../pages/file-upload-field";

// Props: TabPanel expects children (ReactNode), index (number), and value (number)
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`progression-tabpanel-${index}`}
      aria-labelledby={`progression-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// Props: onChange is a function that receives progression data
export default function ProgressionForm({ onChange, formData, handlechange, addItem, removeItem }) {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  

  // Exams handlers
  const addExam = () => {
    setExams([
      ...exams,
      {
        name: "",
        year: "",
        score: "",
        hasTraining: false,
        trainingType: "",
        trainingMode: "",
        resultCard: null,
      },
    ]);
  };

  const removeExam = (index) => {
    const newExams = [...exams];
    newExams.splice(index, 1);
    setExams(newExams);

    onChange({
      progression: {
        placement,
        exams: newExams,
        higherStudy,
        startup,
      },
    });
  };


  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Progression/Placement/Competitive Examinations
      </Typography>
      <Divider className="mb-4" />

      

      <TabPanel value={tabValue} index={0}>
        <Typography variant="h6" gutterBottom>
          Placement Details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.placement?.isPlaced}
                  onChange={handlechange}
                />
              }
              label="Whether Placed"
            />
          </Grid>
        </Grid>

        {formData.placement.isPlaced && (
          <>
            {formData.placement.offers.map((offer, index) => (
              <Paper key={index} className="p-4 mb-4" sx={{mb:4}}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      value={offer.company}
                      onChange={handlechange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Position Offered"
                      value={offer.position}
                      onChange={handlechange}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>Employment Type</InputLabel>
                      <Select
                        value={offer.employmentType}
                        onChange={handlechange}
                        label="Employment Type"
                      >
                        <MenuItem value="contractual">Contractual</MenuItem>
                        <MenuItem value="permanent">Permanent</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>Recruitment Type</InputLabel>
                      <Select
                        value={offer.recruitmentType}
                        onChange={handlechange}
                        label="Recruitment Type"
                      >
                        <MenuItem value="inCampus">In-Campus</MenuItem>
                        <MenuItem value="offCampus">Off-Campus</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Year of Offer"
                      value={offer.year}
                      onChange={handlechange}
                      type="number"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Package (LPA)"
                      value={offer.package}
                      onChange={handlechange}
                      type="number"
                      inputProps={{ step: 0.01 }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FileUploadField
                      label="Upload Offer Letter (if any)"
                      onChange={handlechange}
                    />
                  </Grid>

                  <Grid item xs={12} className="flex justify-end">
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => removeOffer(index)}
                      disabled={placement.offers.length === 1}
                    >
                      Remove Offer
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            ))}

            <Button variant="contained" startIcon={<Add />} onClick={addOffer} className="mb-4">
              Add Offer
            </Button>

            {formData.placement.offers.length > 1 && (
              <Grid container spacing={3} className="mt-2">
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Choice of offer (if there are multiple offers): Intended choice and reason for choice"
                    value={formData.placement.choiceDetails}
                    onChange={handlechange}
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
            )}
          </>
        )}
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Typography variant="h6" gutterBottom>
          Competitive Examinations
        </Typography>

        {formData.exams.map((exam, index) => (
          <Paper key={index} className="p-4 mb-4" sx={{mb:4}}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Examination Name"
                  value={exam.name}
                  onChange={handlechange}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Year"
                  value={exam.year}
                  onChange={handlechange}
                  type="number"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Score/Rank/Percentile"
                  value={exam.score}
                  onChange={handlechange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={exam.hasTraining}
                      onChange={handlechange}
                    />
                  }
                  label="Specific training/Guidance for the examination"
                />
              </Grid>

              {exam.hasTraining && (
                <>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Training Type</InputLabel>
                      <Select
                        value={exam.trainingType}
                        onChange={handlechange}
                        label="Training Type"
                      >
                        <MenuItem value="inHouse">In-house</MenuItem>
                        <MenuItem value="outside">Outside/Online</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Training Mode</InputLabel>
                      <Select
                        value={exam.trainingMode}
                        onChange={handlechange}
                        label="Training Mode"
                      >
                        <MenuItem value="paid">Payment basis</MenuItem>
                        <MenuItem value="unpaid">Unpaid (from tutorials/resources)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <FileUploadField
                  label="Upload Rank Card/Result (if any)"
                  onChange={handlechange}
                />
              </Grid>

              <Grid item xs={12} className="flex justify-end">
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => removeExam(index)}
                  disabled={formData.exams.length === 1}
                >
                  Remove Exam
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ))}

        <Button variant="contained" startIcon={<Add />} onClick={addExam} className="mb-4">
          Add Exam
        </Button>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography variant="h6" gutterBottom>
          Higher Study
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Programme</InputLabel>
              <Select
                value={formData.higherStudy.programme}
                onChange={handlechange}
                label="Programme"
              >
                <MenuItem value="mtech">M.Tech</MenuItem>
                <MenuItem value="ms">MS</MenuItem>
                <MenuItem value="phd">Ph.D</MenuItem>
                <MenuItem value="mba">MBA</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Tenure/duration of the programme"
              value={formData.higherStudy.duration}
              onChange={handlechange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Institute/University"
              value={formData.higherStudy.institute}
              onChange={handlechange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Country"
              value={formData.higherStudy.country}
              onChange={handlechange}
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h6" gutterBottom>
          Startups/Entrepreneurship Initiatives
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.startup.hasStartup}
                  onChange={handlechange}
                />
              }
              label="Associated with/developed any startups/entrepreneurship initiative"
            />
          </Grid>

          {formData.startup.hasStartup && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Details of the startup/entrepreneurship initiative: Name, objective, investment etc."
                value={formData.startup.startupDetails}
                onChange={handlechange}
                multiline
                rows={3}
              />
            </Grid>
          )}

          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.startup.interestedInStartup}
                  onChange={handlechange}
                />
              }
              label="Whether interested to form startups/entrepreneurship initiative in future"
            />
          </Grid>

          {formData.startup.interestedInStartup && (
            <>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Is there any support from the University"
                  value={formData.startup.universitySupport}
                  onChange={handlechange}
                  multiline
                  rows={2}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Is there any external support"
                  value={formData.startup.externalSupport}
                  onChange={handlechange}
                  multiline
                  rows={2}
                />
              </Grid>
            </>
          )}
        </Grid>
      </TabPanel>
    </Box>
  );
}

