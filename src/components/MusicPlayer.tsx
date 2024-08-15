"use client"
import React from 'react'
import { usePlayer } from '@/context/PlayerContext'

const MusicPlayer = () => {
  const { song } = usePlayer()
  if (song) return (
    <div>MusicPlayer</div>
  )
}

export default MusicPlayer