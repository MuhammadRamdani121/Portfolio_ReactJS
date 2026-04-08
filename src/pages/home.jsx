import Education from "../components/Education";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Profile from "../components/Profile";
import PropsProject from "../components/project/PropsProject";
import PropsEducation from "../components/PropsEducation";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Profile />
        {/* <Education /> */}
        <PropsEducation />
        <PropsProject />
      </main>
    </>
  );
}
