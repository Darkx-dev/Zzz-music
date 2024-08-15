"use client";
import { Song } from "@/types/api";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

interface PlayerContextType {
  songNow: any;
  setSongNow: (song: Song) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [songNow, setSongNow] = useState<Song>();

  useEffect(() => {
    console.log(songNow)
  }, [songNow])

  return (
    <PlayerContext.Provider value={{ songNow, setSongNow }}>
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
