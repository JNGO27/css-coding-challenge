import "./styles.css";

const Notifications = () => {
  const handleNotificationsLogic = (): void => {
    // Omitted for brevity, but this is where the logic, for onClick go.
  };

  return (
    <button
      className="icon-general notifications-icon"
      onClick={handleNotificationsLogic}
      type="button"
      title="Notifications"
      aria-label="notification-icon"
    />
  );
};

export default Notifications;
