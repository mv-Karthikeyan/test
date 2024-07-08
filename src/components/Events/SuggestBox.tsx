import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  makeStyles,
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const Suggest = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    handleClose(); 
  };

  return (
    <Box
    sx={{
      width: '100%',
      height: '400px',
      backgroundImage: 'url("../events/eventssuggest.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', 
      borderRadius: '10px',
      p: 2,
      
    }}
  >
    <Typography variant='h6' sx={{}}>
        Want to publish an Events?
    </Typography>
    <Button variant="caption" sx={{mt: 2, borderRadius: '50px', bgcolor:'white', color:'green', }} onClick={handleOpen}>
      Enter details
    </Button>
    <Dialog open={open} onClose={handleClose} px={2}>
        <DialogTitle > 
          <Typography align='center'>
        Suggest an Event
          </Typography>
        <IconButton aria-label="close"  onClick={handleClose} sx={{ float: 'right' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <Divider />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                label="Events"
                fullWidth
                placeholder="Marketing Trends"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Links"
                fullWidth
                placeholder="xyz.com"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                  <MenuItem value={1}>Sales & Marketing</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Calendar"
                fullWidth
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} mt={1}>
              <FormControl  fullWidth >
                <InputLabel>Event Type</InputLabel>
                <Select>
                  <MenuItem value={1}>On-Site</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl  fullWidth>
                <InputLabel>Location</InputLabel>
                <Select>
                  <MenuItem value={1}>Hyderabad</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
        <Grid item xs={12}>
            
        <FormControl  fullWidth>
        <Button onClick={handleSubmit} color="primary" variant="contained" >
            Submit
          </Button>
        </FormControl>
        </Grid>
          
          
        </DialogActions>
      </Dialog>
          </Box>
  );
};

export default Suggest;