"use client";

export default function ContactsClient() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Contacts</h1>
        <button className="bg-primary text-white rounded px-4 py-2 font-medium shadow hover:bg-primary/90 transition">
          Add Contact
        </button>
      </div>
      <div className="rounded-md border border-dashed border-muted-foreground/15 p-5 text-center mt-10">
        <p className="font-medium text-lg text-muted-foreground">
          No contacts found. Get started by adding your first contact.
        </p>
      </div>
    </div>
  );
}