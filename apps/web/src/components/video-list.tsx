"use client";

import { useMemo } from "react";
import { useVideosFilterParams } from "@/hooks/use-videos-filter-params";
import { getVideosByCategory } from "@/lib/videos";
import { VideoCard } from "./video-card";
export const videos = [
  {
    id: "video-1",
    title: "Building agents with the AI SDK (Nico Albanese)",
    description: "Learn the basics of building AI agents with the AI SDK.",
    youtubeUrl: "https://www.youtube.com/watch?v=1bx-eosOOkE&t=2275s",
    category: ["Agents"],
    creator: "Vercel",
    publishedAt: "2025-06-15",
  },
  {
    id: "video-2",
    title: "Vercel AI SDK Masterclass: From Fundamentals to Deep Research",
    description: "Learn the basics of building AI agents with the AI SDK.",
    youtubeUrl: "https://www.youtube.com/watch?v=kDlqpN1JyIw&t=10s",
    category: ["Framework"],
    creator: "AI Engineer",
    publishedAt: "2025-06-15",
  },
  // Agents
  {
    id: "video-3",
    title: "Raspberry Pi 4 Meets LangChain: Build Your First AI Agent!",
    description:
      "Hands-on guide to building a web-searching AI agent with LangChain on Raspberry Pi 4, using Gemini API and DuckDuckGo integration.",
    youtubeUrl: "https://www.youtube.com/watch?v=PhvpBehsTCE",
    category: ["Agents"],
    creator: "FREEDOM TECH",
    publishedAt: "2025-01-24",
  },
  {
    id: "video-4",
    title: "Agentic AI With Autogen Crash Course Ft: @tech.mayankagg",
    description:
      "Beginner-friendly crash course on building multi-agent AI systems with Microsoft Autogen, covering installation, tools, and end-to-end projects.",
    youtubeUrl: "https://www.youtube.com/watch?v=yDpV_jgO93c",
    category: ["Agents"],
    creator: "Krish Naik",
    publishedAt: "2025-07-25",
  },
  {
    id: "video-5",
    title: "Introduction to Autonomous Agents using Microsoft AutoGen",
    description:
      "Overview of AutoGen framework for creating customizable LLM agents that communicate, plan, and execute tasks with tools and memory.",
    youtubeUrl: "https://www.youtube.com/watch?v=3r9hj8N-pp4",
    category: ["Agents"],
    creator: "Microsoft Reactor",
    publishedAt: "2024-11-18",
  },
  // Workflows
  {
    id: "video-6",
    title:
      "LangGraph Complete Course for Beginners – Complex AI Agents with Python",
    description:
      "Full course on using LangGraph to build advanced conversational AI workflows, from basics like nodes and edges to looping structures.",
    youtubeUrl: "https://www.youtube.com/watch?v=jGg_1h0qzaM",
    category: ["Workflows"],
    creator: "freeCodeCamp.org",
    publishedAt: "2025-05-20",
  },
  {
    id: "video-7",
    title: "LangGraph Tutorial - How to Build Advanced AI Agent Systems",
    description:
      "Step-by-step tutorial on LangGraph for scalable agent orchestration, including chatbots, classification, and multi-agent routing.",
    youtubeUrl: "https://www.youtube.com/watch?v=1w5cCXlh7JQ",
    category: ["Workflows"],
    creator: "Tech With Tim",
    publishedAt: "2025-05-05",
  },
  {
    id: "video-8",
    title:
      "Introducing Trigger.dev – build and deploy fully‑managed AI agents and workflows",
    description:
      "Demo of Trigger.dev platform for creating, deploying, and monitoring AI workflows without infra hassle, with real-time streaming examples.",
    youtubeUrl: "https://www.youtube.com/watch?v=kFCzKE89LD8",
    category: ["Workflows"],
    creator: "Triggerdotdev",
    publishedAt: "2025-09-15",
  },
  // Frameworks & SDKs
  {
    id: "video-9",
    title: "Vercel AI SDK Hands On Project | Vercel AI SDK Tutorial",
    description:
      "Build a full-stack AI app with Vercel AI SDK using Express backend and React frontend, from setup to testing.",
    youtubeUrl: "https://www.youtube.com/watch?v=gcPRyOB5_ac",
    category: ["Framework"],
    creator: "Mithun Srinivas",
    publishedAt: "2025-08-17",
  },
  {
    id: "video-10",
    title:
      "Vercel AI SDK 3.0 | Generative UI | Stream React Components from LLMs To Chatbots",
    description:
      "Explore Vercel AI SDK 3.0's Generative UI for streaming React components from LLMs, with stock price demo and setup guide.",
    youtubeUrl: "https://www.youtube.com/watch?v=52YxF0s8eE8",
    category: ["Frameworks & SDKs"],
    creator: "Isaiah",
    publishedAt: "2024-03-03",
  },
  {
    id: "video-11",
    title: "L-24 How to Build Agentic AI Apps with OpenAI Agents SDK",
    description:
      "Tutorial on OpenAI Agents SDK for single/multi-agent apps, including orchestration, guardrails, and custom tools like translation and weather checks.",
    youtubeUrl: "https://www.youtube.com/watch?v=rFA34gbynmg",
    category: ["Framework"],
    creator: "Code With Aarohi",
    publishedAt: "2025-08-25",
  },
  // LLMs & Models
  {
    id: "video-12",
    title: "Fine tuning Gemini with Google AI Studio",
    description:
      "Step-by-step on fine-tuning Gemini models in Google AI Studio for tasks like text generation, with data quality and evaluation tips.",
    youtubeUrl: "https://www.youtube.com/watch?v=-ja5TmYhQks",
    category: ["LLM"],
    creator: "Google Cloud Tech",
    publishedAt: "2025-03-27",
  },
  {
    id: "video-13",
    title: "Claude AI in 21 Minutes",
    description:
      "Quick guide to Claude AI setup, features like artifacts and deep research, plus integrations for copywriting, coding, and productivity.",
    youtubeUrl: "https://www.youtube.com/watch?v=JW78TN1S8hU",
    category: ["LLM"],
    creator: "Eliot Prince",
    publishedAt: "2025-10-11",
  },
  // Infra & Databases
  {
    id: "video-14",
    title:
      "Vector Database | Pinecone Create Index Tutorial Part2 - API Key, Metric, Dimension, Index Functions",
    description:
      "Hands-on Pinecone setup: Generate API keys, choose metrics like cosine, and use Python functions to create/manage vector indexes.",
    youtubeUrl: "https://www.youtube.com/watch?v=fSN28mpYS70",
    category: ["Database"],
    creator: "Abhishek Jain",
    publishedAt: "2025-04-16",
  },
  {
    id: "video-15",
    title:
      "A Complete Guide To Vercel’s AI SDK // The ESSENTIAL Tool For Shipping AI Apps",
    description:
      "Deep dive into Vercel AI SDK for LLM interactions, streaming, embeddings, tool calling, and agent building—ideal for hosting/scaling AI apps.",
    youtubeUrl: "https://www.youtube.com/watch?v=mojZpktAiYQ",
    category: ["Infra & Databases"],
    creator: "Matt Pocock",
    publishedAt: "2025-01-21",
  },
  // UI & Interactions
  {
    id: "video-16",
    title: "Building a complex AI chat app with Agents and Stream",
    description:
      "Build a production AI chat app for content creation with real-time collab, web search, and agent management using OpenAI and GetStream.",
    youtubeUrl: "https://www.youtube.com/watch?v=4Uo2cYcxvJs",
    category: ["UI"],
    creator: "Hitesh Choudhary",
    publishedAt: "2025-08-16",
  },
  {
    id: "video-17",
    title: "Shadcn's AI Elements are AWESOME (easiest way to build a chat app)",
    description:
      "Quick upgrade of a basic chat app using Shadcn AI Elements for markdown, syntax highlighting, search, and streaming—Vercel-powered.",
    youtubeUrl: "https://www.youtube.com/watch?v=dS7hyPNvIb8",
    category: ["UI"],
    creator: "Better Stack",
    publishedAt: "2025-08-10",
  },
  // MCP / Protocols
  {
    id: "video-18",
    title:
      "How to Build First MCP Server from Scratch | Model Context Protocol Hands-On Tutorial",
    description:
      "Python tutorial on building an MCP server: Define tools, set up JSON-RPC, test with Inspector, and avoid hallucinations.",
    youtubeUrl: "https://www.youtube.com/watch?v=78aYU3QPV5w",
    category: ["MCP"],
    creator: "LambdaTest",
    publishedAt: "2025-09-08",
  },
  {
    id: "video-19",
    title: "Model Context Protocol (MCP) Tutorial for Beginners",
    description:
      "Beginner guide to MCP: Create a Node.js server/client with OpenAI API to connect models to external systems via simple queries.",
    youtubeUrl: "https://www.youtube.com/watch?v=-XGcSV0Fxo0",
    category: ["MCP"],
    creator: "Coding With TJ",
    publishedAt: "2025-09-11",
  },
  // Case Studies & Showcases
  {
    id: "video-20",
    title: "AI Agents from Scratch using Open Source AI",
    description:
      "Build multi-agent systems from scratch with Ollama: Summarize medical text, refine research, and sanitize data—no frameworks needed.",
    youtubeUrl: "https://www.youtube.com/watch?v=9xsi3ksyQR8",
    category: ["Case Studies & Showcases"],
    creator: "AI Anytime",
    publishedAt: "2024-11-14",
  },
  {
    id: "video-21",
    title: "Meet Goose, an Open Source AI Agent",
    description:
      "Showcase of Goose framework: Modular AI agent for coding and enterprise tasks, with CLI, desktop app, and MCP integrations.",
    youtubeUrl: "https://www.youtube.com/watch?v=fYhBbo900HA",
    category: ["Case Studies & Showcases"],
    creator: "Databricks",
    publishedAt: "2025-07-07",
  },
];

export default function VideoList({ category = "all" }: { category: string }) {
  const videos = getVideosByCategory(category);
  const { filters, hasFilters } = useVideosFilterParams();

  const filteredVideos = useMemo(() => {
    let filtered = videos;

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((tool) => {
        const toolCategories = Array.isArray(tool.category)
          ? tool.category
          : [tool.category];

        return toolCategories.some(
          (cat) =>
            typeof cat === "string" &&
            cat.toLowerCase() === category.toLowerCase()
        );
      });
    }

    // Filter by search query
    if (filters.q && filters.q.trim()) {
      const query = filters.q.toLowerCase().trim();
      filtered = filtered.filter(
        (tool) =>
          tool.title.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query)
      );
    }

    // Sort alphabetically by name
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [videos, filters]);

  if (hasFilters && filteredVideos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No video found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
