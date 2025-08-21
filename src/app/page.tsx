"use client";

import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";
import { useEffect, useState } from "react";
import { Movie } from "./types/movies";
import { getFeaturedMovie } from "./service/MovieService";

export default function Home() {
  const [featured, setFeatured] = useState<Movie | null>(null);

  useEffect(() => {
    getFeaturedMovie("102").then(setFeatured).catch(console.error);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b">
      <Header />
      <main className="relative pb-24 lg:pl-16">
        {featured ? <Banner movie={featured} /> : <div>Loading...</div>}
        <MovieRow sectionTitle="Featured Movies" />
        <MovieRow sectionTitle="Trending Now" />
      </main>
    </div>
  );
}
