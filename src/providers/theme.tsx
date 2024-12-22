'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>): JSX.Element {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
