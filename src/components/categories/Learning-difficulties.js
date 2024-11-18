import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Learningdifficulties() {
  const items = ['مقالات', 'طب', 'رياضة وترفية', 'ارشادات وتأهيل'];
  const paths = ['/path1', '/path2', '/path3', '/path4'];

  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        direction: 'rtl', // Right-to-left text direction
        marginTop: '50px',
        fontFamily: 'Noto Sans Arabic', // Set global font
        marginLeft:'20px'
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column', // Stack buttons vertically
            alignItems: 'center', // Center buttons
            justifyContent: 'center', 
            margin: 0, // Remove default margin
            color: '#0d8f75',
            listStyleType: 'none', // Remove default list styles
            padding: 0,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: '15px', // Increase space between buttons
                textAlign: 'center', // Ensure buttons are centered
                width: '100%', // Make button container take full width
              }}
            >
              <Button
                component={Link}
                to={paths[index]} // Correct path for each button
                variant="contained"
                sx={{
                  my: 1, // Vertical margin
                  mx: 2, // Horizontal margin
                  color: 'white',
                  display: 'block',
                  fontFamily: 'Noto Kufi Arabic', // Specific font for buttons
                  fontSize: { xs: '18px', sm: '20px', md: '24px', lg: '60px' },
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: '#444', // Hover effect
                  },
                  borderRadius: '50px', // Rounded button corners
                  padding: { xs: '12px 20px', sm: '14px 30px', md: '20px 40px' }, // Padding per size
                  background: 'linear-gradient(270deg, #0d8f75 20%, #214570 105%)',
                  width: '100%', // Button takes full width
                  maxWidth: '1000px', // Prevent large button sizes on wide screens
                }}
              >
                {item}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
