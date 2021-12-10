import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import chopsticks from './static/chopsticksNchill.png'


export default function Portfolio() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={chopsticks}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chopsticks and Chill
                    </Typography>
                    <Typography>
                      Javascript and APIs
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="https://kbonaccorsi.github.io/group-project-1/" >
                      <Button size="small">Deployed</Button>
                    </Link>
                    <Link to="https://github.com/kbonaccorsi/group-project-1" >
                      <Button size="small">GITHUB</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
  );
}