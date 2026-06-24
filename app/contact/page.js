import PageHeader from "../components/PageHeader";
import Contact from "../sections/Contact";
import ContactExtended from "../sections/ContactExtended";

export const metadata = {
  title: "Contact | Maraetai Wharf Café",
  description:
    "Contact Maraetai Wharf Café for bookings, takeaway orders, and enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We’d love to hear from you."
        background="/cafe-menu/gallery-05.jpg"
      />
      <Contact />
      <ContactExtended />
    </>
  );
}
