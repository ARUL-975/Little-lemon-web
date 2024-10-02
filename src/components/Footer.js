import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Little Lemon - All rights reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;