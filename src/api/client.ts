import * as contentful from "contentful";

export const deliveryClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT ?? "master",
});

export const previewClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT ?? "master",
  host: "preview.contentful.com",
});
