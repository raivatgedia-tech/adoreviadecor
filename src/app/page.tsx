import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductCatalogue from "@/components/sections/ProductCatalogue";
import CustomisationProcess from "@/components/sections/CustomisationProcess";
import Workshops from "@/components/sections/Workshops";
import CorporateOrders from "@/components/sections/CorporateOrders";
import InstagramShowcase from "@/components/sections/InstagramShowcase";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
       <Hero products={products} />

        <FeaturedCollections products={products} />
        <WhyChooseUs />
    <ProductCatalogue products={products} />
        <CustomisationProcess />
        <Workshops />
        <CorporateOrders />
        <InstagramShowcase />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
