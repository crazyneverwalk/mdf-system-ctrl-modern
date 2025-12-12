import Header from "@/components/landing/Header"
import Hero from "@/components/landing/Hero"
import Services from "@/components/landing/Services"
import WhyUs from "@/components/landing/WhyUs"
import ContactForm from "@/components/landing/ContactForm"
import Footer from "@/components/landing/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
