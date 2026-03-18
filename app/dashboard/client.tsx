"use client";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">{greeting}</h1>
      <p className="text-muted-foreground text-lg">
        Your team’s hub for managing contacts and deals.
      </p>
    </div>
  );
}