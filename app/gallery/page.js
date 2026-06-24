import PageHeader from "../components/PageHeader";
import BentoGallery from "../sections/BentoGallery";

export const metadata = {
  title: "Gallery | Maraetai Wharf Café",
  description:
    "Browse photos of food, drinks, and the beachside atmosphere at Maraetai Wharf Café.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A look at the food, views, and vibe at the wharf."
        background="/cafe-menu/gallery-01.jpg"
      />
      <BentoGallery />
    </>
  );
}
