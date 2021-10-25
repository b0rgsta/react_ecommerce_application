import {Button, FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import {useState} from 'react';
import styles from './ProductInto.module.scss';


const ProductInfo = ({name, variations}) => {

  // Variation
  const [variant, setVariant] = useState(0);

  // Quantity
  const [qty, setQty] = useState('');
  const handleChange = (event) => {
    setQty(event.target.value);
  };

  return (
    <div className={styles.main}>
      <Typography variant={'h4'}>{name}</Typography>
      <Typography variant={'h5'}>${variations[variant].price}</Typography>
      <div>
        {variations.map((item, index) => {
          return (
            <Button onClick={()=>{setVariant(index)}}
                    sx={{marginTop: 10, mr: 6}}
                    variant={variant === index ? 'contained' : 'outlined'}>
              {item.name}
            </Button>
          );
        })}
      </div>
      <div>
        <FormControl sx={{marginTop: 10, width: 67}} size="small">
          <InputLabel id="demo-simple-select-helper-label">Qty</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={qty}
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