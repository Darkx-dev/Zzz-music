import React from "react";
import Image from "next/image";
import { Song } from "@/types/api";
import { getSongById } from "@/services/api";
import { usePlayer } from "@/context/PlayerContext";

interface SongCardProps {
  song: Song;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { setSong } = usePlayer();
  const handleSongPlayPause = async (songId: string) => {
    const response = await getSongById(songId);
    setSong(response.data[0]);
  };

  return (
    <div className="flex items-center rounded-lg bg-white/25 p-2 shadow-md">
      <div className="relative h-12 w-12 flex-shrink-0">
        <Image
          src={song.image[0].url}
          alt={`${song.title} album art`}
          width={50}
          height={50}
          className="rounded"
        />
      </div>
      <div className="mx-3 flex-grow">
        <h3 className="truncate text-wrap text-sm font-semibold text-gray-800">
          {song.title || song.name}
        </h3>
        <p className="w-24 truncate text-xs text-gray-600">
          {song.primaryArtists ||
            song.artists?.primary.map((artist) => artist.name)}
        </p>
      </div>
      <div className="flex items-center">
        <button
          className="p-1"
          aria-label="Play"
          onClick={() => handleSongPlayPause(song.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button className="p-1" aria-label="More options">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SongCard;
