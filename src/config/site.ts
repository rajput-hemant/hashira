export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hashira",
  title: "Hashira - Anime & Manga Streaming",
  description:
    "Ad-free Anime & Manga Streaming web app with a vast library of movies and TV shows, allowing users to easily search and create watchlists.",
  ogImage: "",
  author: "Hemant Rajput",
  email: "",
  siteUrl: "https://hashira.vercel.app",
  creator: "@rajput_hemant01",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hashira.vercel.app",
    siteName: "Hashira - Anime & Manga Streaming",
    description:
      "Ad-free Anime & Manga Streaming web app with a vast library of movies and TV shows, allowing users to easily search and create watchlists.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Hashira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashira - Anime & Manga Streaming",
    description:
      "Ad-free Anime & Manga Streaming web app with a vast library of movies and TV shows, allowing users to easily search and create watchlists.",
    image: "",
    creator: "@rajput_hemant01",
  },
  links: {
    github: "https://github.com/rajput-hemant/hashira",
    twitter: "https://twitter.com/rajput_hemant01",
    discord: "https://discord.gg/rajput-hemant#8269",
    portfolio: "https://rajputhemant.me",
  },
};
