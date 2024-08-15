"use client";
import { usePlayer } from "@/context/PlayerContext";
import { getSongById } from "@/services/api";
import React, { useEffect } from "react";

const Song = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { setSongNow } = usePlayer();
  const fetchSong = async () => {
    const response = await getSongById(id);
    setSongNow(response.data[0]);
  };
  useEffect(() => {
    // Todo : Fetch song details and set in player context
    fetchSong();
  }, []);
  return <div>{params.id}</div>;
};

export default Song;
