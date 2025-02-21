import React, { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from '@/layouts/Main';
import Container from '@/components/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Home = (): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element: HTMLElement = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const styles = (bgImage: string) =>
  ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  } as const);

  return (
    <>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
        marginTop={-13}
        paddingTop={13}
      >
        <Container>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Box>
                <Typography
                  variant="h3"
                  align={'center'}
                  gutterBottom
                  sx={{
                    fontWeight: 900,
                  }}
                >
                  Crafting Ideas into Code
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.secondary"
                  align={'center'}
                  sx={{
                    fontWeight: 400,
                  }}
                >
                  Think I’m the right fit for your project?
                  <br /> Let’s connect. I’m just a message away.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg',
          )}
        />
        <Container>
          <Box>
            <Typography
              variant="h1"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 900,
                color: theme.palette.common.white,
                textTransform: 'uppercase',
              }}
            >
              Who am I ?
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              align={'center'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              A full-stack developer passionate about blockchain and modern technologies.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
          )}
        />
        <Container>
          <Box>
            <Typography
              variant="h1"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 900,
                color: theme.palette.common.white,
                textTransform: 'uppercase',
              }}
            >
              PORTFOLIO
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
      >
        <Container>
          <Box>
            <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
              <Grid item xs={12} md={6}>
                <Box marginBottom={2}>
                  <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                    Blockchain
                  </Typography>
                  <Typography color="text.text">
                    I have hands-on experience developing smart contracts and decentralized applications using Solidity,
                    Ethereum, and dApps, leveraging my Blockchain Developer training from Alyra
                    to build secure and scalable solutions.
                  </Typography>
                  <Typography color="text.secondary">
                    Keywords: Solidity, Smart Contracts, Ethereum, dApps, Web3
                  </Typography>
                </Box>
                <Box marginBottom={2}>
                  <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                    Backend
                  </Typography>
                  <Typography color="text.text">
                    With over six years as a software engineer, I design and implement robust backend systems in Java and Nest.js,
                    specializing in database modeling, UML, and system architecture for efficient, scalable solutions.
                  </Typography>
                  <Typography color="text.secondary">
                    Keywords: Java, Nest.js, TypeScript, Software Architecture
                  </Typography>
                </Box>
                <Box marginBottom={2}>
                  <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                    Frontend
                  </Typography>
                  <Typography color="text.text">
                    I have solid knowledge of React.js, JavaScript, and Next.js,
                    enabling me to create responsive user interfaces that complement backend and blockchain integrations.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
                md={6}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <Box component={Card} boxShadow={4} height={1} width={1}>
                  <Box
                    component={CardMedia}
                    height={1}
                    width={1}
                    minHeight={300}
                    image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
                    sx={{
                      filter:
                        theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
