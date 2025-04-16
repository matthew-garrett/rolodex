"use client";

import { trpc } from "@/trpc/react";

export function ContactListPage() {
  const { data: contacts, isLoading } = trpc.contact.list.useQuery();

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">My Rolodex</h1>
      {isLoading ? (
        <div>Loading…</div>
      ) : (
        <ul>
          {contacts?.map((c) => (
            <li key={c.id} className="border p-2 mb-2 rounded">
              <strong>{c.name}</strong> – {c.company} <br />
              Last contact: {c.lastContact?.toLocaleDateString() || "—"} <br />
              Due: {c.due ? "Yes" : "No"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
