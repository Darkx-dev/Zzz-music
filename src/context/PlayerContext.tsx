"use client";
import { Song } from "@/types/api";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

interface PlayerContextType {
  song: any;
  setSong: (song: Song) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    console.log(song)
  }, [song])

  return (
    <PlayerContext.Provider value={{ song, setSong }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined)
    throw new Error("usePlayer must be withing PlayerProvider");
  return context;
};

export default PlayerProvider;
