import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall(props) {
  return (
    <FormControl sx={{ m: 1, width: 240, height: 50 }} size="small">
      <InputLabel id="demo-select-small">{props.label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label={props.label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.selector.map((row) => {
          return (
            <MenuItem>{row}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}
