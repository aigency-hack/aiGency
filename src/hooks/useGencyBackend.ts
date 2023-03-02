import axios from "axios";
import { useEffect, useState } from "react";
import {
  Blog,
  GenerateBlogContentDto,
  GenerateIdeaDto,
  GenerateShortPostDto,
} from "src/generated/schema";
import type { SWRConfiguration } from "swr";
import useSWR from "swr";

// get 7-day ideas
export const useGencyIdeas = (
  body: GenerateIdeaDto,
  config: SWRConfiguration = { refreshInterval: 0 },
) => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_BACKEND_URL,
  });
  const fetcher = async () => {
    const response = await axiosInstance.post("ideas", {
      body,
    });
    return response.data;
  };

  const { data, mutate, error } = useSWR<string[]>(["ideas"], fetcher, config);

  return {
    data,
    error,
    mutate,
    loading: !data && !error,
  };
};

// get blog content
export const useGencyBlog = (
  body: GenerateBlogContentDto,
  config: SWRConfiguration = { refreshInterval: 0 },
) => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_BACKEND_URL,
  });
  const fetcher = async () => {
    const response = await axiosInstance.post("blog", {
      body,
    });
    return response.data;
  };

  const { data, mutate, error } = useSWR<Blog>(["blog"], fetcher, config);

  return {
    data,
    error,
    mutate,
    loading: !data && !error,
  };
};

// get short content for social media
export const useGencyPost = (
  body: GenerateShortPostDto,
  config: SWRConfiguration = { refreshInterval: 0 },
) => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_BACKEND_URL,
  });
  const fetcher = async () => {
    const response = await axiosInstance.post("post", {
      body,
    });
    return response.data;
  };

  const { data, mutate, error } = useSWR<string[]>(["ideas"], fetcher, config);

  return {
    data,
    error,
    mutate,
    loading: !data && !error,
  };
};
