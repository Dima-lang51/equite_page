import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import theme from '../styles/theme';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';


const styles = {
    background: "linear-gradient(0deg, rgb(20, 38, 52) 0%, rgb(20, 38, 52) 27.09%) 0px 0px no-repeat, url('/images/bg1.jpg') right top no-repeat",
    backgroundBlendMode: "lighten",
};


const Home: NextPage = () => {
  return (
    <Container maxWidth={false} sx={{ 
      background: "#101C2B;",
      position: "relative",
      overflow: 'hidden'}}>

      <Header/>
      <Box sx={{
        position: "absolute", 
        right: 0,
        top: 0,
        width: "1485px",
        height: "694px",
        zIndex: 1,

        [theme.breakpoints.down('sm')]: {
          top: "386px",
          width: "1025px",
          height: "480px",
          right: "-140px"
        }, [theme.breakpoints.up('xl')]: {
          left: "calc((100vw - 1920px) / 2 + 435px)"
        },}}>
        <Image
          src="/images/bg1.jpg" // Route of the image fill
          alt="bg"
          layout="fill"
          quality={100}
        />
      </Box>
      <Container maxWidth="lg" sx={{
        paddingLeft: '0 !important', paddingRight: '0 !important', 
        position: 'relative', zIndex: 2
      }}>
        <Box
          sx={{
            my: 4,
            marginTop: '70px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
            marginTop: '53px'
        },
          }}
        > 
          <Content />
          <Box sx={{
        position: "absolute", 
        
        width: "1920px",
        height: "560px",
        zIndex: -1,
        top: "228px",
        [theme.breakpoints.down('sm')]: {
          top: "422px",
          right: "-732px"
        },

        }}>
          <Image
          src="/images/content_bg.png" // Route of the image fill
          alt="bg"
          layout="fill"
          quality={100}
        />
      </Box>

          <Footer />
        </Box>
      </Container>
    </Container>
  );
};

export default Home;
