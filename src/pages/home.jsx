import Contact from "../components/main/Contact/Contact";
import Education from "../components/main/education/Education";
import HeroSection from "../components/main/herosection/HeroSection";
import Profile from "../components/main/herosection/Profile";
import Header from "../components/main/header/Header";
import PropsProject from "../components/main/project/PropsProject";
import PropsEducation from "../components/main/education/PropsEducation";
import Footer from "../components/main/footer/Footer";

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
