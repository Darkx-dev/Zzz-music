"use client";
import React, { useRef, useState, useEffect } from "react";
import { usePlayer } from "@/context/PlayerContext";
import Image from "next/image";

const MusicPlayer: React.FC = () => {
  const { songNow } = usePlayer();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(50);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  if (!songNow) return null;

  return (
    <div className="flex w-screen items-center justify-between gap-2 bg-[#7B004180] p-2 backdrop-blur-sm">
      <div>
        <Image
          src={songNow.image[1].url}
          width={85}
          height={85}
          alt={songNow.name}
          className="rounded-lg"
        />
      </div>
      <div className="w-full">
        <h3>{songNow.name}</h3>
        <p className="text-gray-400 text-xs">{songNow.artists.primary[0].name}</p>
        <audio
          ref={audioRef}
          src={songNow.downloadUrl[4]?.url}
          autoPlay
          contentEditable
          controls
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          hidden
        ></audio>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xs">
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, "0")}
            </span>
            {/* <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Number(e.target.value);
                }
              }}
              className="mx-2"
            /> */}
            <label className="slider px-2">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                className="level"
                onChange={(e) => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = Number(e.target.value);
                  }
                }}
              />
            </label>
            <span className="text-xs">
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
            <label className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center scale-75">
              <input className="peer hidden" type="checkbox" onChange={togglePlayPause} aria-label="Play/Pause"/>
              <div className="h-[2px] w-[50%] origin-center -translate-x-[0.3rem] translate-y-[0.1rem] rotate-90 rounded-sm bg-white transition-all duration-300 peer-checked:translate-y-[0.1rem]"></div>
              <div className="h-[2px] w-[50%] origin-center -translate-y-[0.05rem] translate-x-[0.3rem] rotate-90 rounded-md bg-white transition-all duration-300 peer-checked:translate-x-[0.15rem] peer-checked:translate-y-[0.22rem] peer-checked:rotate-[-30deg]"></div>
              <div className="h-[2px] w-[50%] origin-center -translate-y-[0.16rem] translate-x-[0.3rem] rotate-90 rounded-md bg-white transition-all duration-300 peer-checked:translate-x-[0.15rem] peer-checked:translate-y-[-0.4rem] peer-checked:rotate-[30deg]"></div>
            </label>

          {/* <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.99 1.752-.99 2.052 0l1.188 3.945a1.737 1.737 0 001.633 1.173h4.21c1.041 0 1.496 1.33.73 1.936l-3.317 2.72a1.737 1.737 0 00-.58 1.952l1.188 3.946c.3.99-.755 1.811-1.538 1.244L12 15.743l-3.686 2.93c-.782.567-1.838-.254-1.538-1.244l1.188-3.946a1.737 1.737 0 00-.58-1.952l-3.317-2.72c-.765-.606-.31-1.936.73-1.936h4.21a1.737 1.737 0 001.633-1.173l1.188-3.945z"></path>
            </svg>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="mx-2"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
