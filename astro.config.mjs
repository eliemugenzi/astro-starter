import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [solidJs(), react(), mdx()],
});
