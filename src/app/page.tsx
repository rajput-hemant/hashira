import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";

import { siteConfig } from "@/config/site";
import { Github } from "@/components/icons";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function App() {
  return (
    <section className="grid items-center gap-6 px-4 py-12 md:px-6 md:pt-24">
      <div className="container flex flex-col items-center justify-center space-y-10 text-center">
        <Chip
          color="warning"
          variant="dot"
          className="shadow-md transition-colors duration-300 hover:bg-default"
        >
          <span className="font-semibold">Currently in development 🚧</span>
        </Chip>
        <div className="mb-6 space-y-2 bg-gradient-to-t from-foreground-500 to-foreground bg-clip-text text-transparent">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-7xl">
            Some Looong Heading.
          </h1>
          <p className="mx-auto max-w-3xl text-sm font-medium sm:text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat
            fugit ducimus, repellat corporis suscipit quis voluptate, deleniti
            quidem adipisci aperiam provident nostrum quas voluptatibus!
          </p>
        </div>
        <ShimmerButton className="shadow-2xl">
          <Link
            href="/home"
            className="bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text font-semibold text-white dark:from-white dark:to-slate-900/10 lg:text-2xl"
          >
            Get Started
          </Link>
        </ShimmerButton>

        <div className="mt-8 flex flex-col items-center justify-center">
          <h2 className="mb-2 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Proudly Open Source
          </h2>
          <p className="text-sm text-foreground-600">
            {siteConfig.name} is an open source project, and is free to use. If
            you like it, please consider giving it a star! ⭐️
          </p>

          <Button
            as="a"
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[#18181b] font-medium text-white shadow-lg hover:border hover:bg-black"
          >
            <Github size={20} />
            Star on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
