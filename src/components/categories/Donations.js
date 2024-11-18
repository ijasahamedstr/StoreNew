import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button } from '@mui/material'; // Import Button from Material-UI

export default function Donations() {
  // List of items to display in the unordered list
  const items = ['المنصة لاتستلم أي تبرعات الرجاء التواصل مع المنصات الرسمية'];
  
  // Define paths for each item (you can customize these paths)
  const paths = ['/path1'];

  return (
    <div 
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center vertically within the container
        flexDirection: 'column',
        direction: 'rtl',  // Apply RTL direction here
        marginTop: '50px',
        fontFamily: 'Noto Sans Arabic', // Applied globally to the container
      }}
    >
      {/* Outer container with max-width similar to xl */}
      <div style={{ width: '100%' }}>
        <ul 
          style={{
            listStyleType: 'none',
            paddingRight: '20px',
            marginBottom: '10px',
            fontSize: '50px',  // Large font size for each list item
            color: '#0d8f75',
            display: 'flex',
            flexDirection: 'column',  // Stack items vertically
            alignItems: 'center',  // Center align items horizontally
            justifyContent: 'center', // Ensure buttons are centered
            width: '100%',  // Make sure the list takes the full width
            margin: 0, // Remove default margin
          }}
        >
          {items.map((item, index) => (
            <li 
              key={index} 
              style={{
                marginBottom: '20px', // Margin between list items
                fontFamily: 'Noto Sans Arabic', // Apply Arabic font to each list item
                textAlign: 'center',  // Ensure text is centered inside each list item
                width: '100%',  // Ensure full width of list item
                display: 'flex', // Apply flexbox to the list item
                justifyContent: 'center', // Horizontally center the button inside the li
              }}
            >
              {/* Material-UI Button as Link */}
              <Button
                component={Link}
                to={paths[index]}  // Using the correct path for each button
                variant="contained"
                sx={{
                  my: 2,  // Vertical margin for better spacing
                  mx: 2,  // Horizontal margin for even spacing between buttons
                  color: 'white',
                  fontFamily: 'Noto Kufi Arabic', // Font for the button itself
                  fontSize: { xs: '24px', sm: '28px', md: '40px', lg: '48px' },  // Larger font size scaling for large screens
                  backgroundColor: 'transparent', // Default background
                  '&:hover': { backgroundColor: '#444' },
                  borderRadius: '50px',
                  background: 'linear-gradient(270deg, #0d8f75 20%, #214570 105%)',  // Gradient background
                  width: '100%',  // Set button width to 100% to span full screen
                  maxWidth: 'none',  // Remove the max-width limitation
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Soft shadow for depth effect
                }}
              >
                {item} {/* Button Text */}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
