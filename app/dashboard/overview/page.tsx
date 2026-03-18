"use client";

export default function OverviewPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
      <p className="text-muted-foreground text-lg">
        See a summary of your contacts and deals here.
      </p>
      <div className="rounded-md border border-dashed border-muted-foreground/15 p-5 text-center mt-8">
        <p className="font-medium text-lg text-muted-foreground">
          No data to display yet. Start by adding contacts or deals.
        </p>
      </div>
    </div>
  );
}