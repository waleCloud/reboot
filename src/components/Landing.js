import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Autocomplete, FormLabel } from '@mui/material';

const carKind = [
  { label: 'Electric car', value: 1 },
  { label: 'Hybrid car',  value: 2  },
  { label: 'Fuel car',  value: 3 },
  { label: 'Diesel car',  value: 4 },
];

const carPurpose = [
  { label: 'road trip', value: 1 },
  { label: 'large family trip',  value: 2  },
  { label: 'everyday use',  value: 3 },
  { label: 'weekend use',  value: 4 },
  { label: 'Other',  value: 4 },
];

const theme = createTheme();

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
          <Grid justifyContent='center' alignItems='center' item xs={12} sm={8} md={5} component={Paper} elevation={6} square width='80%'>
            <Typography component="h1" variant="h4">
              Mutuari
            </Typography>
            <Box
              sx={{
                margin: '7%',
                paddingTop: '20%',
                justifyContent: 'center',
              }}
            >
            <Typography component="h3" variant="h4">
              Own any car you want without the burden of owning a car.
              You use it, we take care of it.
            </Typography>
            <br />
              <FormLabel>I want a </FormLabel>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={carKind}
                renderInput={(params) => <TextField {...params} />}
                defaultValue='Electric car'
              />
              <FormLabel>for</FormLabel>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={carPurpose}
                renderInput={(params) => <TextField {...params} />}
                defaultValue='everyday use'
              />

              <Button variant="contained" color='success' sx={{ marginTop: '15px', color: '#fff' }}>
               <Link
                variant="contained"
                href='/listings'
                sx={{ color: '#fff'}}
              >
                Go
              </Link>
              </Button>
            </Box>
          </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3083&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
