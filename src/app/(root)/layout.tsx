import MusicPlayer from "@/components/MusicPlayer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900">
      {children}
      <div className="fixed bottom-0 left-0">
        <MusicPlayer />
      </div>
    </main>
  );
};

export default layout;
