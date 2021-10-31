import {Button, FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import {useState} from 'react';
import styles from './ProductInfo.module.scss';


const ProductInfo = ({name, variations}) => {

  // Variation
  const [variant, setVariant] = useState(0);


  return (
    <div className={styles.main}>
      <Typography variant={'h4'}>{name}</Typography>
      <Typography variant={'h5'}>${variations[variant].price}</Typography>
      <div>
        {variations.map((item, index) => {
          return (
            //renders all variant options as buttons
            <Button onClick={() => {setVariant(index);}}
              //when clicked saves state and update price
                    sx={{marginTop: 10, mr: 6}}
              //variant selection highlighted
                    variant={variant === index ? 'contained' : 'outlined'}>
              {item.name}
            </Button>
          );
        })}
      </div>
      <div>
        <FormControl sx={{marginTop: 10, width: 67}} size="small">
          <InputLabel>Qty</InputLabel>
          <Select
            label="Qty"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.purchaseButtons}>
        <Button sx={{my: 10, width: 286}} variant={'contained'}>Add to cart</Button>
        <Button sx={{width: 286}} variant={'contained'}>Buy it now</Button>
      </div>
    </div>
  );
};

export default ProductInfo;