import * as React from 'react';
import MuiLink from '@mui/material/Link';
import MuiButton from '@mui/material/Button';
import {Toolbar, Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
import MyLink from './Button';
import theme from '../styles/theme';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function LogoIcon() {
  return (
     <Image
      src="/images/logo.png" // Route of the image file
      height={56} // Desired size with correct aspect ratio
      width={48} // Desired size with correct aspect ratio
      alt="Logo"
      
    />
  );
}

const navigationLinks = [
  {key: 1, name: 'Главная', href:''},
  {key: 2, name: 'Рейтинги', href:''},
  {key: 3, name: 'Блог', href:''},
  {key: 4, name: 'Pro', href:''}
];


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <header>
      <Toolbar sx={{position: 'relative',
                    zIndex: 2
                    }}>
        <Container maxWidth="lg" sx={{
          marginTop: '10px',
           paddingLeft: '0 !important',
          paddingRight: '0 !important',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
            
        
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <MuiLink color="inherit" href="https://www.equite.io/" sx={{
              marginRight: '60px',
              minWidth: 48,
              [theme.breakpoints.down('tablet')]: {
           marginRight: '19px'
        },
            }}>
              <LogoIcon/>
            </MuiLink>


            <Hidden only={['tablet','md', 'lg', 'xl']}>
                <MuiLink sx={{color: '#FFFFFF', textDecoration:'none'}}>EQUITE.IO</MuiLink>
            </Hidden>


            <Hidden only={['xs','sm']}>

            {navigationLinks.map((item) => (
              <MyLink key={item.key} buttonText={item.name} linkPaddingRight="30px" href={item.href}/> 
            ))}
            <MyLink buttonText="Инвестору" sx={{background: '#101C2B', borderRadius: '5px', padding: '15px 49px', border: '1px solid #EEE4FF', }}/> 
            </Hidden>
          </Box>
          <Box sx={{display: 'flex', flexWrap: 'nowrap'}}>
              <MuiButton sx={{
                minWidth: '42px !important', marginRight: '20px', height: '40px', fontWeight: 500, fontSize: '14px', lineHeight: '13px', backgroundColor: '#101C2B', color: theme.palette.secondary.main, borderRadius: '1px solid #C49BFF',
              }}>ru</MuiButton>
            <Hidden mdDown>
              <MuiButton sx={{
                 marginRight: '20px', padding: '15px 27px', fontWeight: 500, fontSize: '14px', lineHeight: '13px', backgroundColor: '#101C2B', color: theme.palette.secondary.main, borderRadius: '1px solid #C49BFF',
              }}>Войти</MuiButton>
              <MuiButton sx={{
                padding: '15px 23px', fontWeight: 500, fontSize: '14px', lineHeight: '13px', backgroundColor: '#5040B2', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', 
              }}>Начать</MuiButton>
            </Hidden>
            <Hidden mdUp>
              <IconButton id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{color: '#FFFFFF',}}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Box>
            
        </Container>
      </Toolbar>
       <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        PaperProps={{style: {background: "#101C2B", boxShadow: '0px 0px 10px rgba(188, 79, 255, 0.7)'}}}
        
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        
        }} sx={{zIndex: '1000'}}
        
      >
        <List>
          <Hidden only={['tablet','md', 'lg', 'xl']} >
           {navigationLinks.map((item) => (
             <ListItem sx={{justifyContent: 'center'}} onClick={handleClose}>
                <MyLink key={item.key} buttonText={item.name}  href={item.href}/> 
             </ListItem>
            ))}
            <ListItem sx={{justifyContent: 'center'}} onClick={handleClose}>
              <MyLink buttonText="Инвестору" sx={{background: '#101C2B', borderRadius: '5px', padding: '10px 15px', border: '1px solid #EEE4FF', }}/> 
            </ListItem>
          </Hidden>
          <ListItem sx={{justifyContent: 'center'}} onClick={handleClose}>
           <MuiButton sx={{
                padding: '10px 15px', fontWeight: 500, fontSize: '14px', lineHeight: '13px', backgroundColor: '#101C2B', color: theme.palette.secondary.main, borderRadius: '1px solid #C49BFF',
              }}>Войти</MuiButton>
            </ListItem>
            <ListItem sx={{justifyContent: 'center'}} onClick={handleClose}>
              <MuiButton sx={{
                padding: '10px 15px', fontWeight: 500, fontSize: '14px', lineHeight: '13px', backgroundColor: '#5040B2', borderRadius: '5px', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', 
              }}>Начать</MuiButton>
            </ListItem>
        </List>


      </Menu>
    </header>
   
      </>
  );
}
