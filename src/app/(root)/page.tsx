"use client";
import { useEffect, useState } from "react";
import { searchGlobal } from "@/services/api";
import { getCookie } from "cookies-next";
import { SearchResponse, Song } from "@/types/api";
import SongCard from "@/components/SongCard";

const Home = () => {
  const [songs, setSongs]: any = useState([]);
  useEffect(() => {
    const fetchArtistSongs = async () => {
      const artists = getCookie("artists")?.split("#");
      let artistsArray: any = [];
      if (artists) {
        artists.forEach(async (artist) => {
          const response = await searchGlobal(artist);
          artistsArray.push(...response.data?.songs?.results);
          setSongs([...songs, ...artistsArray]);
        });
      }
    };

    fetchArtistSongs();
  }, []);

  return (
    <div>
      <h1
        className="p-2 text-3xl"
        onClick={() => {
          console.log(songs);
        }}
      >
        Explore your taste
      </h1>
      <div className="grid gap-2 px-2 pb-36">
        {songs.length === 0 && (
          <div className="flex w-full items-center justify-center gap-x-2 translate-y-20 ">
            <div className="h-5 w-5 animate-bounce rounded-full bg-[#d991c2]"></div>
            <div className="h-5 w-5 animate-bounce rounded-full bg-[#9869b8]"></div>
            <div className="h-5 w-5 animate-bounce rounded-full bg-[#6756cc]"></div>
          </div>
        )}
        {songs.map((song: Song, _: number) => {
          return <SongCard key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
};

export default Home;
