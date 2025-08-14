
import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { BannerHeader } from "./components/BannerHeader";


export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[200vh]">
      <Header />
      <main className="relative pb-24  lg:pl-16">
      <BannerHeader />
        <MovieRow sectionTitle="Featured Movies"/>  
        <MovieRow sectionTitle="Trending Now" />      
      </main>
    </div>
  );

}
