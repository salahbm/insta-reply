import * as React from 'react';
import { ThemeProvider } from './theme';
import { Toaster } from '@/components/ui/sonner';

export function RootProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider>
      {children} <Toaster />
    </ThemeProvider>
  );
}
