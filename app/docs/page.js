import Footer from "@/components/etc/Footer";
import HeroContent from "@/components/etc/HeroContent";
import TopHeader from "@/components/etc/TopHeader";



export const metadata = {
  title: "Documentation - M0RENSKI React Library",
  description: "M0RENSKI React Library by BR0SKI Documentation.",
};

export default function Home() {

  return (
    <main className="h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center">
      <TopHeader />
      <HeroContent />
      
      <Footer />
    </main>
  );
}
