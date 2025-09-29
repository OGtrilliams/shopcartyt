import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../sanity/env";

export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, //set tp fa;se of statoca;;y generating pages, using ISR or revalidation
  token: process.env.SANITY_API_TOKEN,
});
