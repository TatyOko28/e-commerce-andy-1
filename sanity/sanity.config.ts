import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

// Get project ID from environment variable
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'z2invkr6';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
const apiVersion = '2023-03-15'; // Use a valid API version

export default defineConfig({
  name: 'default',
  title: 'E-commerce Studio',

  projectId,
  dataset,
  apiVersion,

  plugins: [
    deskTool({ structure }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})