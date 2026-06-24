import PageHeader from "../components/PageHeader";
import Reservation from "../sections/Reservation";
import ReservationExtended from "../sections/ReservationExtended";

export const metadata = {
  title: "Reservation | Maraetai Wharf Café",
  description:
    "Book a table at Maraetai Wharf Café. We accept bookings for up to 10 guests.",
};

export default function ReservationPage() {
  return (
    <>
      <PageHeader
        title="Reservations"
        subtitle="Book a table for breakfast or lunch by the beach."
        background="/cafe-menu/drinks-01.jpg"
      />
      <Reservation />
      <ReservationExtended />
    </>
  );
}
