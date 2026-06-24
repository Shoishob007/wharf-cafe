import PageHeader from "../components/PageHeader";
import About from "../sections/About";
import AboutExtended from "../sections/AboutExtended";

export const metadata = {
  title: "About | Maraetai Wharf Café",
  description:
    "Learn about Maraetai Wharf Café, a relaxed beachside café serving breakfast, lunch, and coffee at the wharf.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Coffee, food, and beachside views at Maraetai Wharf."
        background="/cafe-menu/about.jpg"
      />
      <About />
      <AboutExtended />
    </>
  );
}
