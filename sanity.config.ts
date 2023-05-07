import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "jicpg0k0",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2023-05-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config