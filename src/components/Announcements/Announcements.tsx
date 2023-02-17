import "./styles.css";

const Announcements = () => {
  const handleAnnouncementsLogic = (): void => {
    // Omitted for brevity, but this is where the logic, for onClick go.
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
