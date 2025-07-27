import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-figtree flex flex-col items-center justify-items-center min-h-screen bg-black gap-8 bg-black">
      <Banner />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
    </div>
  );
}
