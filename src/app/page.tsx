import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductCatalogue from "@/components/sections/ProductCatalogue";
import CustomisationProcess from "@/components/sections/CustomisationProcess";
import OurStory from "@/components/sections/OurStory";
import WorkshopBulkBanner from "@/components/sections/WorkshopBulkBanner";
import Workshops from "@/components/sections/Workshops";
import CorporateOrders from "@/components/sections/CorporateOrders";
import InstagramShowcase from "@/components/sections/InstagramShowcase";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { getProducts } from "@/sanity/queries";

export const revalidate = 60;

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main>
        <Hero products={products} />
        <FeaturedCollections products={products} />
        <WhyChooseUs />
        <OurStory />
        <WorkshopBulkBanner />
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
