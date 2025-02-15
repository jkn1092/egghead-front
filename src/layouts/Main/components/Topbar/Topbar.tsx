import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import { ConnectBtn } from '@/components/ConnectButton';
import Typography from '@mui/material/Typography/Typography';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    portfolio: PageItem;
    about: PageItem;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = true,
}: Props): JSX.Element => {
  const theme = useTheme();
  const {
    about: aboutPage,
    portfolio: portfolioPage,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        title="egg_head"
        width={{ xs: 100, md: 120 }}
      >
        <Typography
          fontWeight={800}
        >
          egg_head
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <NavItem
            title={'ABOUT'}
            id={'about-page'}
            items={aboutPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'PORTFOLIO'}
            id={'portfolio-pages'}
            items={portfolioPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <ConnectBtn />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="PORTFOLIO"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
