import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "DungeonQ — Defensive Deception Runtime · WebMCP Profile",
  description: "The concluded WebMCP competition profile of the DungeonQ defensive deception runtime.",
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "DungeonQ — Defensive Deception Runtime",
    description: "Divert designated suspicious sessions into persistent synthetic worlds. Inspect the WebMCP Proof Kernel.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "DungeonQ — Defensive Deception Runtime",
    description: "The concluded WebMCP competition profile and its browser-local Proof Kernel."
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
