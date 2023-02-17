import "./styles.css";

const Announcements = () => {
  const handleAnnouncementsLogic = (): void => {
    // Omitted for brevity, but this is where the logic, for onClick go.
    // eslint-disable-next-line no-console
    console.log("Announcements");
  };

  return (
    <button
      className="icon-general announcement-icon"
      onClick={handleAnnouncementsLogic}
      type="button"
      title="Announcements"
      aria-label="announcement-icon"
    />
  );
};

export default Announcements;
