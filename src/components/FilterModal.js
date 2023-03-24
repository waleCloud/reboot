import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Autocomplete, CardMedia, Grid, Slider, TextField } from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  const carKind = [
    { label: 'Electric car', value: 1 },
    { label: 'Hybrid car',  value: 2  },
    { label: 'Fuel car',  value: 3 },
    { label: 'Diesel car',  value: 4 },
  ];

  const carPurpose = [
    { label: 'Family car', value: 1 },
    { label: 'Sports car',  value: 2  },
    { label: 'everyday use',  value: 3 },
    { label: 'weekend use',  value: 4 },
    { label: 'Holiday van',  value: 4 },
    { label: 'Others',  value: 4 },
  ];

  const carBrand = [
    { label: 'BMW', value: 1 },
    { label: 'Tesla model S',  value: 2  },
    { label: 'Volvo',  value: 3 },
    { label: 'Ford',  value: 4 },
    { label: 'Renault',  value: 4 },
    { label: 'Jaguar',  value: 4 },
  ];

  const carOwned = [
    { label: 'LBG owned', value: 1 },
    { label: 'Third party',  value: 2  },
  ];

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='md' fullWidth sx={{ margin: '15px' }}>
      <DialogTitle>Filters</DialogTitle>
      <h4>Price range per mile (£)</h4>
      <Slider defaultValue={50} min={10} aria-label="Default" valueLabelDisplay="auto" />
      <Grid>
        <h4>Type of vehicle</h4>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={carKind}
          renderInput={(params) => <TextField {...params} />}
          defaultValue='Electric car'
        />
      </Grid>
      <Grid>
       <h4> Ownership Type </h4>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={carOwned}
          renderInput={(params) => <TextField {...params} />}
          defaultValue='LBG Owned'
        />
      </Grid>
      <Grid>
        <h4> vehicle Category </h4>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={carPurpose}
          renderInput={(params) => <TextField {...params} />}
          defaultValue='Sports car'
        />
      </Grid>
      <Grid>
        <h4> Brand </h4>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={carBrand}
          renderInput={(params) => <TextField {...params} />}
          defaultValue='BMW'
        />
      </Grid>
      <Grid>
        <h4> Location </h4>
        <CardMedia
          sx={{
            pt: '1%',
          }}
            component="img"
            image="https://www.collierpickard.co.uk/wp-content/uploads/2018/07/postcodes-on-google-map-3.png"
            alt="random"
          />
      </Grid>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function FilterModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Filter
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
