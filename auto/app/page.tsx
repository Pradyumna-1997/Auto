
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Services from "@/components/Services";



export default function Home() {
  return (
    <h1 className= "font-bold text-ablue text-2xl">
      <Hero />
      <GetApp />
      <Services/>
    </h1>
  );
}
