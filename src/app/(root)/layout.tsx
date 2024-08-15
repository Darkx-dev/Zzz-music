import MusicPlayer from "@/components/MusicPlayer";
import Navigation from "@/components/Navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-950 via-purple-800 to-indigo-800">
      {children}
      <div className="fixed bottom-0 left-0">
        <MusicPlayer />
        <Navigation />
      </div>
    </main>
  );
};

export default layout;
