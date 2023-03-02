import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  Blog,
  GenerateBlogContentDto,
  GenerateIdeaDto,
  GenerateShortPostDto,
  ShortPost,
} from "src/generated/schema";

// get 7-day ideas
export const useGencyCreateIdeas = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_BACKEND_URL,
  });
  return useCallback(async (dto: GenerateIdeaDto): Promise<string[]> => {
    const { data } = await axiosInstance.post<string[]>("/gency/ideas", dto);
    return data;
  }, []);
};

// get blog content
export const useGencyCreateBlog = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_BACKEND_URL,
  });
  return useCallback(async (dto: GenerateBlogContentDto): Promise<Blog> => {
    const { data } = await axiosInstance.post<Blog>("/gency/blog", dto);
    return data;
  }, []);
};

// get short content for social media
export const useGencyCreatePost = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_BACKEND_URL,
  });
  return useCallback(async (dto: GenerateShortPostDto): Promise<ShortPost> => {
    const { data } = await axiosInstance.post<ShortPost>("/gency/post", dto);
    return data;
  }, []);
};
