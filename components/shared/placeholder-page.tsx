type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-32">
      <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
    </div>
  );
}
