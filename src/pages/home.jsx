import Education from "../components/Education";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Profile />
        <Education />
      </main>
    </>
  );
}
