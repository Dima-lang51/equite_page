import * as React from 'react';
import theme from '../styles/theme';
import { Box, Typography, Grid } from '@mui/material';
import MyLink from './Button';


export default function Content() {
  return (
    <Box sx={{ width: '100%', left: 0, [theme.breakpoints.down('sm')]: {
          textAlign: 'center'
        },}}>
      <Grid container>
        <Grid container xs={12} sm={8} md={7} lg={6}>
          <Grid item>
            <Typography variant="h2" gutterBottom component="div" fontWeight="bold" fontSize="50px" letterSpacing="0.08em" color={theme.palette.primary.main} lineHeight="60px" sx={{[theme.breakpoints.down('sm')]: {
              fontSize: '30px', lineHeight: '40px', marginBottom: 0
        },}}> 
              Поделитесь своими результатами
            </Typography>
          </Grid>  
          <Grid item sx={{[theme.breakpoints.down('sm')]: {
               margin: 'auto', marginTop: '16px', marginBottom: '16px'
        },}}>
            <Typography variant="h2" gutterBottom component="div" fontWeight="300" fontSize="35px" letterSpacing="0.08em" color={theme.palette.secondary.main} lineHeight="50px" sx={{textTransform: "uppercase", marginBottom: '52px', [theme.breakpoints.down('sm')]: {
              fontSize: '20px', lineHeight: '30px', maxWidth: '349px', margin: 'auto'
        },}}> 
              И получите доверие большого количества инвесторов
            </Typography>
          </Grid>
          <Grid container item spacing={{ xs: 4}} sx={{[theme.breakpoints.down('sm')]: {
               justifyContent: 'center'
        },}}>
            <Grid item>
              <MyLink buttonText="Начать" sx={{
                  padding: '13px 62px', backgroundColor: '#5040B2', color: theme.palette.primary.main, borderRadius: '5px', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7);'
                }}></MyLink>
            </Grid>
            <Grid item >
                <MyLink buttonText="Я трейдер" sx={{
                    padding: '13px 52px', backgroundColor: '#101C2B', color: theme.palette.secondary.main, border: '1px solid #C49BFF', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7);'
                  }}></MyLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{
        marginTop: '80px', 
        [theme.breakpoints.down('sm')]: {
          marginTop: '455px'
        }
      }}> 
        <Grid container sx={{
          justifyContent: 'center',
        }}>
          <Grid item sx={{
            width: '12.72px', height: '12.72px', background: 'rgba(16, 28, 43, 0.1)', border: '1px solid #C49BFF', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', transform: 'rotate(45deg)', marginRight: '20px',
          }}>
            
          </Grid>
          <Grid item sx={{
            width: '12.72px', height: '12.72px', background: 'rgba(16, 28, 43, 0.1)', border: '1px solid #C49BFF', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', transform: 'rotate(45deg)', marginRight: '20px',
          }}>
            
          </Grid>
          <Grid item sx={{
            width: '12.72px', height: '12.72px', background: '#C49BFF', border: '1px solid #C49BFF', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', transform: 'rotate(45deg)',
          }}>
            
          </Grid>
        </Grid>
      </Box>
    </Box>
    









    
  );
}
