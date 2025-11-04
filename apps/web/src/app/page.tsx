export default function HomePage() {
  return (
    <div className="flex flex-col mt-[10%] w-full container max-w-6xl mx-auto">
      <div className="flex flex-col gap-4  mx-auto text-center text-balance max-w-3xl">
        <h1 className="text-4xl font-medium tracking-tight ">
          Discover every tool for building AI apps and agents
        </h1>
        <p className="text-muted-foreground  mb-4">
          Explore frameworks, SDKs, LLMs, and infrastructure tools that help you
          create powerful AI agents and apps. Curated, community-driven, and
          always up to date.
        </p>

        <input
          className="w-full px-5 py-5 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none  focus:ring-transparent max-w-3xl mx-auto"
          placeholder="Search tools..."
          type="text"
        />
      </div>
    </div>
  );
}
