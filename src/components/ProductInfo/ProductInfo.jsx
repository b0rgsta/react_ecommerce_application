import {Button, FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import {useState} from 'react';
import styles from './ProductInto.module.scss';

const ProductInfo = () => {
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.main}>
      <Typography variant={'h4'}>Gum Drops</Typography>
      <Typography variant={'h5'}>$10.00</Typography>
      <div>
        <Button sx={{marginTop: 10, mr: 6}} variant="outlined">100g</Button>
        <Button sx={{marginTop: 10, mr: 6}} variant="contained">200g</Button>
        <Button sx={{marginTop: 10, mr: 6}} variant="outlined">500g</Button>
        <Button sx={{marginTop: 10, mr: 6}} variant="outlined">2kg</Button>
      </div>
      <div>
        <FormControl sx={{marginTop: 10, width: 67}} size="small">
          <InputLabel id="demo-simple-select-helper-label">Qty</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Qty"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.purchaseButtons}>
        <Button sx={{my: 10}} variant={'contained'}>Add to cart</Button>
        <Button variant={'contained'}>Buy it now</Button>
      </div>
    </div>
  );
};

export default ProductInfo;