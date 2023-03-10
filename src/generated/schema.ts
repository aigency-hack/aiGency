/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface components {
  schemas: {
    ProductDto: { name: string; usp: string; description: string };
    GenerateIdeaDto: {
      productInfo: components["schemas"]["ProductDto"];
      mood: string;
    };
    GenerateBlogContentDto: {
      productInfo: components["schemas"]["ProductDto"];
      mood: string;
      title: string | null;
    };
    BlogParagraph: { topic: string; content: string };
    Blog: {
      title: string;
      paragraphs: components["schemas"]["BlogParagraph"][];
      images: string[];
    };
    GenerateShortPostDto: {
      productInfo: components["schemas"]["ProductDto"];
      mood: string;
      purpose: string | null;
    };
    ShortPost: { content: string; keyword: string; images: string[] };
  };
}

export type ProductDto = components["schemas"]["ProductDto"];

export type GenerateIdeaDto = components["schemas"]["GenerateIdeaDto"];

export type GenerateBlogContentDto = components["schemas"]["GenerateBlogContentDto"];

export type BlogParagraph = components["schemas"]["BlogParagraph"];

export type Blog = components["schemas"]["Blog"];

export type GenerateShortPostDto = components["schemas"]["GenerateShortPostDto"];

export type ShortPost = components["schemas"]["ShortPost"];
