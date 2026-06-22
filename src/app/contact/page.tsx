import { ContactHero } from "@/components/contact/ContactHero";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { ContactSupport } from "@/components/contact/ContactSupport";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { Footer } from "@/components/home/Footer";

export const metadata = {
  title: 'Contact Us | Mero Sewa Support',
  description: 'Get in touch with the Mero Sewa support team. We are here to help with your bookings, enterprise solutions, and provider registration.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white min-h-screen">
      <ContactHero />
      <ContactOptions />
      <ContactSupport />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
