import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-figtree flex flex-col items-center justify-items-center min-h-screen gap-8 bg-[#010101]">
      <Banner />
      <div className="w-full px-8 flex flex-col justify-center items-center gap-8">
        <Navbar />

        <Hero />
      </div>
    </div>
  );
}
