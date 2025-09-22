import Announcement from "../Announcement/Announcement";

export default function HeaderSection({ locale }) {
  return (
    <>
      <Announcement locale={locale} slug={"ly3-announcement"} />
    </>
  );
}
