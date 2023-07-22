import project from '@/sanity/project-schema'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'

const config = defineConfig({
  basepath: '/studio',
  projectId: 'jl31vd3g',
  dataset: 'production',
  // title: 'Botrivier Community Volunteers',
  apiVersion: '2023-07-22',
  plugins: [deskTool(), visionTool({defaultApiVersion: '2023-07-22'})],
  schema: {types: [project]}
})

export default config
