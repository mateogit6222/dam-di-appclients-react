import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), legacy()],
    define: {
      'process.env.REACT_APP_SUPABASE_URL': JSON.stringify(env.REACT_APP_SUPABASE_URL || env.VITE_SUPABASE_URL || ''),
      'process.env.REACT_APP_SUPABASE_KEY': JSON.stringify(env.REACT_APP_SUPABASE_KEY || env.VITE_SUPABASE_KEY || ''),
      'process.env': {},
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      // Playwright e2e specs live in e2e/.
      include: ['src/**/*.test.{ts,tsx}'],
    },
  };
});
