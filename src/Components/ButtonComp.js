import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonComp() {
  return (
    <Stack spacing={2} direction="row">
      <Button  sx={{ color: 'white',background:'#7551E9',borderRadius:'10px',justifyContent:'center'}}  variant="contained">Get your Location</Button>
    </Stack>
  );
}
