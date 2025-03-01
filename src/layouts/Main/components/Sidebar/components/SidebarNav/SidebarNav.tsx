import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    portfolio: PageItem;
    about: PageItem;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    about: aboutPage,
    portfolio: portfolioPage,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Blog'} items={aboutPage} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPage} />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
