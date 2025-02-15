'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from '@/theme';


interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props): JSX.Element {
  return (
    <ThemeProvider theme={getTheme('dark')}>
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
}
