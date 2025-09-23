import Announcement from "../Announcement/Announcement";

export default function Ly3HeaderSection({ locale }) {
  return (
    <>
      <Announcement locale={locale} slug={"ly3-announcement"} />
    </>
  );
}
