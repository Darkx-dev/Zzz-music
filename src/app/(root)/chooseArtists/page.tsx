/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

interface Artist {
  id: string;
  name: string;
  imageUrl: string;
}

const ChooseArtists: React.FC = () => {
  const router = useRouter();
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  const artists: Artist[] = [
    {
      id: "1",
      name: "A.R. Rahman",
      imageUrl:
        "https://imgs.search.brave.com/ZL_sC-Jhc6VZ1w6PSl-ya7eeW5rx5ubnShAyUo6tETs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2Y3L0FS/X1JhaG1hbl9BdF9U/aGVfJUUyJTgwJTk4/TWFydmVsX0FudGhl/bSVFMiU4MCU5OV9M/YXVuY2guanBnLzUx/MnB4LUFSX1JhaG1h/bl9BdF9UaGVfJUUy/JTgwJTk4TWFydmVs/X0FudGhlbSVFMiU4/MCU5OV9MYXVuY2gu/anBn",
    },
    {
      id: "2",
      name: "Arijit Singh",
      imageUrl:
        "https://imgs.search.brave.com/xlUZ_hTEj6mQjBRlC45qTDBql65ObhJhEqdLV0xUWMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg5NTA4/MzQuanBn",
    },
    {
      id: "3",
      name: "Shreya Ghoshal",
      imageUrl:
        "https://imgs.search.brave.com/rYBtWHI6lBvLfoypNPk3V9yKzJGLLLEtxmFGb5ys2NQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDY0/MTM1MjE3L3Bob3Rv/L211bWJhaS1pbmRp/YS1qYW51YXJ5LTIw/LXNocmV5YS1naG9z/aGFsLWR1cmluZy10/aGUtc3Rhci1naW1h/LWF3YXJkcy1pbi1t/dW1iYWkuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVhlMVdk/aGRjNGwzZXVzX0VB/cWdHekwwWk9SaVNE/R2hVZmc4Unh4ZEVB/emc9",
    },
    {
      id: "4",
      name: "Anirudh Ravichander",
      imageUrl:
        "https://imgs.search.brave.com/w3PYFK9ZT9OExWrtXsia0hwank-6yzUVP5XcTIeLcaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZlL0FuaXJ1ZGhf/UmF2aWNoYW5kZXJf/YXRfQXVkaV9SaXR6/X1N0eWxlX0F3YXJk/c18yMDE3LmpwZw",
    },
    {
      id: "5",
      name: "Neha Kakkar",
      imageUrl:
        "https://imgs.search.brave.com/Nq5KPJ4PhlQC9IS8zTBbEcvNFTrcT1QhKUD1KXcSkaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9waC1iaWcv/MjAyMS8wNS9uZWhh/LWtha2thcl8xNjIx/MjMzNDc1MS5qcGc",
    },
    {
      id: "6",
      name: "Amit Trivedi",
      imageUrl:
        "https://imgs.search.brave.com/OGpixx_dhL_NhJ6_FSYY-pX_YzCArPz__rEVYCIGli4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk56SXlNakk1/TnpjMU1sNUJNbDVC/YW5CblhrRnRaVGd3/TXprME5USXdOVE1A/LmpwZw",
    },
    {
      id: "7",
      name: "Ed Sheeran",
      imageUrl:
        "https://imgs.search.brave.com/rhsddyvTt7HxC-vPNZO9v3iC7k9SC3AgoOUd_b5mvdA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/OWJjMGFhNTIyYzYz/LWVkLXNoZWVyYW4t/YXQtZ3JhbW15cy5q/cGc",
    },
    {
      id: "8",
      name: "Taylor Swift",
      imageUrl:
        "https://imgs.search.brave.com/GCnSvpN8xvAhek5FsO7UYhe04msstO671Mfh3GGjmVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbGx1cmUuY29t/L3Bob3Rvcy82NTI4/MDMwM2M3OThhZjRk/M2YxZTM3NjkvMTox/L3dfMzU0LGNfbGlt/aXQvdGF5bG9yJTIw/c3dpZnQlMjBmYXV4/JTIwYm9iJTIwaGVy/by5qcGc",
    },
    {
      id: "9",
      name: "Drake",
      imageUrl:
        "https://imgs.search.brave.com/Er2DHA0XSykk38kRW37AKSFzXfSCbxTzzF_5qfSpS5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MDMyODY1NS9waG90/by9sb25nLWJlYWNo/LWNhbGlmb3JuaWEt/ZHJha2Utc3BlYWtz/LW9uc3RhZ2UtZHVy/aW5nLWRyYWtlcy10/aWxsLWRlYXRoLWRv/LXVzLXBhcnQtcmFw/LWJhdHRsZS1vbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UkU0NXBrVlBsX0gy/di1OLVhCaWF2MTYw/eTY0ZlR2Tjc1Undp/TG5Rcjc1RT0",
    },
    {
      id: "10",
      name: "Adele",
      imageUrl:
        "https://imgs.search.brave.com/nnI3do5Tsw-25_T-Q201I4HSpdO2HsdTE7-jEfWSkDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/MWE1OGMzNzFlNDdm/LWFkZWxlLWJyaXRz/LmpwZw",
    },
  ];

  const toggleArtist = (artistName: string) => {
    setSelectedArtists((prevSelected) =>
      prevSelected.includes(artistName)
        ? prevSelected.filter((artist) => artist !== artistName)
        : [...prevSelected, artistName],
    );
  };

  const handleSubmit = () => {
    setCookie("artists", selectedArtists.join("#"));
    router.push("/");
  };

  return (
    <div className="min-h-screen pb-10 text-white">
      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-4 text-4xl font-bold text-purple-200">
          Choose your favorite artists
        </h1>
        <p className="mb-6 text-purple-300">
          Select at least three artists you like.
        </p>
        <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className={`transform cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedArtists.includes(artist.name)
                  ? "rounded-lg bg-[#E0007A] bg-opacity-50 shadow-md"
                  : "rounded-lg bg-white/5 bg-opacity-30"
              }`}
              onClick={() => toggleArtist(artist.name)}
            >
              <div className="p-2">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="mb-2 aspect-square overflow-hidden rounded-full object-cover object-top"
                />
                <p className="text-sm font-medium text-purple-100">
                  {artist.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={selectedArtists.length < 3}
          className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChooseArtists;
