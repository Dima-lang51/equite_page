import * as React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import theme from '../styles/theme';


const footericons = [
  {key: 1, imgPath: '/images/binance.png', w: '190', h: '79',  alt: 'binance', href:''},
  {key: 2, imgPath: '/images/bybit.png', w: '141', h: '52',  alt: 'bybit', href:''},
  {key: 3, imgPath: '/images/okex.png', w: '174', h: '47',  alt: 'okex', href:''},
  {key: 4, imgPath: '/images/ftx.png', w: '174', h: '47',  alt: 'ftx', href:''},
  {key: 5, imgPath: '/images/bitmex.png', w: '190', h: '30',  alt: 'bitmex', href:''},
  {key: 6, imgPath: '/images/btc.png', w: '163', h: '60',  alt: 'btc', href:''},
];

export default function Footer() {
  return (
  <Box sx={{ width: '100%', left: 0,
            marginTop: '73px',
            marginBottom: '183px',
            [theme.breakpoints.down('sm')]: {
              marginTop: '35px',
              marginBottom: '116px',
            },

  }}>
    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={{ xs: 4, sm:4 }}>
        {footericons.map((item) => (
          <Grid item xs={4} sm={4} md={2}>
            <Image key={item.key}
              src={item.imgPath} // Route of the image file
              height={item.h} // Desired size with correct aspect ratio
              width={item.w} // Desired size with correct aspect ratio
              alt={item.alt} 
            />
          </Grid>
        ))}
    </Grid>
  </Box>
  );
}
