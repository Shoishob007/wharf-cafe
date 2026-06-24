import PageHeader from "../components/PageHeader";
import Menu from "../sections/Menu";
import MenuHighlights from "../sections/MenuHighlights";

export const metadata = {
  title: "Menu | Maraetai Wharf Café",
  description:
    "Explore our breakfast, lunch, drinks, and cabinet menu at Maraetai Wharf Café.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        title="Our Menu"
        subtitle="Fresh breakfast, lunch, and drinks served daily at the wharf."
        background="/cafe-menu/breakfast-01.jpg"
      />
      <Menu />
      <MenuHighlights />
    </>
  );
}
