import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const Specials = ({ specials }) => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        This week's specials
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {specials.map(special => (
          <Grid item key={special.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="140" image={special.image} alt={special.name} />
              <CardContent>
                <Typography variant="h5">{special.name}</Typography>
                <Typography variant="body1">{special.price}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {special.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  Order a Delivery
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Specials;