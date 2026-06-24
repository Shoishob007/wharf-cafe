import PageHeader from "../components/PageHeader";
import Takeaway from "../sections/Takeaway";
import TakeawayExtended from "../sections/TakeawayExtended";

export const metadata = {
  title: "Takeaway | Maraetai Wharf Café",
  description:
    "Grab coffee, cabinet food, fish and chips, and cold drinks to enjoy at Maraetai Beach.",
};

export default function TakeawayPage() {
  return (
    <>
      <PageHeader
        title="Takeaway"
        subtitle="Order ahead or pick up at the wharf."
        background="/cafe-menu/lunch-04.jpg"
      />
      <Takeaway />
      <TakeawayExtended />
    </>
  );
}
