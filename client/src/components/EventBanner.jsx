import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const events = [
  {
    title: 'Annual Tech Fest',
    date: 'April 15th',
    description: 'Join us for our annual tech fest!',
  },
  {
    title: 'Workshop on AI',
    date: 'May 10th',
    description: 'A workshop on Artificial Intelligence.',
  },
  {
    title: 'Sports Meet',
    date: 'June 5th',
    description: 'Participate in our annual sports meet.',
  },
];

function EventBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ mt: 4}}>
      <Slider {...settings}>
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '8px',
              height: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              {event.title}
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              {event.date}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              {event.description}
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default EventBanner;