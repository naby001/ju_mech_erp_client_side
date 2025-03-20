import React from "react";
import { Container, Typography, Box, Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventBanner from "../components/EventBanner";
import ThreeDGallery from "../components/ThreeDGallery";


//object for facilities provided by JUMERP
const facilities = [
    {
        title: "Progress Tracker",
        description: "A vast collection of books and resources."
    },
    {
        title: "Auto-Generated CV", description: "State-of-the-art labs for practical learning."
    },
    {
        title: "Signed Reference", description: "Facilities for various sports and physical activities."
    },
    {
        title: "Event Updates", description: "A place to enjoy meals and refreshments."
    },
    {
        title: "Faculty Details", description: "A large hall for events and seminars."
    },
    {
        title: "Opportunities", description: "Comfortable accommodation for students."
    },
];

const faculty = [
    {
        name: "Dr. John Doe", title: "Professor of Mechanical Engineering", image: "/path/to/image1.jpg"
    },
    {
        name: "Dr. Jane Smith", title: "Associate Professor of Robotics", image: "/path/to/image2.jpg"
    },
    {
        name: "Dr. Emily Johnson", title: "Assistant Professor of Thermodynamics", image: "/path/to/image3.jpg"
    },
    // Add more faculty members as needed
];

export default function HomePage() {
    return (
        <Box sx={{ height: '100vh', overflowY: 'scroll', overflowX: 'hidden' }}>
            <Navbar />
            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Hello Mechies
                </Typography>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to your <b>STUDENT PROTFOLIO</b>
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Manage your academic and extracurricular activities in one place.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Sign In To Get Started
                </Button>
            </Box>

            <EventBanner />

            {/* About us part */}
            <Box
                sx={{
                    mt: 6,
                    textAlign: 'center',
                    padding: '40px 20px',
                    borderRadius: '8px',
                    backgroundImage: 'url(/path/to/your/background-image.jpg)', // Add your background image path here
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff', // Change text color to white for better contrast
                }}
            >
                <Box sx={{ width: '80%', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '20px', borderRadius: '8px' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        <b>What is JUMERP?</b>
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Welcome to the Student Portfolio Management System. Our platform is designed to help students manage their academic and extracurricular activities efficiently. With our system, you can keep track of your progress, participate in events, and stay updated with the latest news and announcements.
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Our mission is to provide a comprehensive solution for students to excel in their academic journey and beyond. Join us and take the first step towards a well-organized and successful student life.
                    </Typography>
                </Box>
            </Box>

            {/* Facilities part */}
            <Box sx={{ mt: 6, textAlign: 'center', padding: '20px' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Facilities
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {facilities.map((facility, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    padding: '20px',
                                    borderRadius: '8px',
                                    backgroundColor: '#f5f5f5',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {facility.title}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {facility.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Contact us part */}
            <Box sx={{ mt: 6, textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Contact Us
                </Typography>
                <Box component="form" sx={{ mt: 3, width: '40%', margin: 'auto' }}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        margin="dense"
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Send Message
                    </Button>
                </Box>
            </Box>


        </Box>
    );
}
