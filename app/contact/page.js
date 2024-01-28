import Footer from "@/components/etc/Footer";
import HeroContent from "@/components/etc/HeroContent";
import TopHeader from "@/components/etc/TopHeader";



export const metadata = {
  title: "CONTACT - M0RENSKI React Library",
  description: "Contact BR0SKI.",
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
