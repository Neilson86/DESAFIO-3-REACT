
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { Avatar } from '@mui/material';
import { FaHeadphones, FaHeadset } from 'react-icons/fa';
const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url(imgs/img.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgb(136, 23, 23)',
        backgroundBlendMode: 'overlay',
        color: 'white',
        padding: '20px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <Typography variant="h6">Hi, Andrea</Typography>
        <Avatar alt="Andrea" src="imgs/avatar_small.png" />
      </Box>
      <Typography variant="h5" gutterBottom>What are you looking for today?</Typography>
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
            padding: '10px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '600px',
            marginBottom: '20px'
        }}
    >
        <FaSearch style={{ marginRight: '10px', color: 'white' }} />
        <TextField
            fullWidth
            variant="standard"
            placeholder="Search Headphones"
            slotProps={{ input: { disableUnderline: true } }}
            sx={{ input: { color: 'white' } }}
        />
    </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px'
        }}
      >
        <Button variant="contained" color="primary" startIcon={<FaHeadphones />}>
          Headphone
        </Button>
        <Button variant="outlined" color="primary" startIcon={<FaHeadset />}>
          Headset
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          marginBottom: '20px'
        }}
      >
        <Typography variant="h5" gutterBottom>TMA-2 Modular Headphone</Typography>
        <Button variant="contained" color="secondary">Shop now</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          maxWidth: '600px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderRadius: '10px'
          }}
        >
          <Typography variant="h6">TMA-2 HD Wireless</Typography>
          <Typography variant="h6">USD 350</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: 'rgba(19, 18, 18, 0)',
            borderRadius: '10px'
          }}
        >
        <Typography variant="h6">CO2 – Cable</Typography>
          <Typography variant="h6">USD 25</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
