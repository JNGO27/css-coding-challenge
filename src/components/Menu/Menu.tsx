import "./styles.css";

const Menu = () => {
  const handleMenuLogic = (): void => {
    // Omitted for brevity, but this is where the logic, for onClick go.
    // eslint-disable-next-line no-console
    console.log("Menu");
  };

  return (
    <button
      className="icon-general menu-icon"
      onClick={handleMenuLogic}
      type="button"
      title="Menu"
      aria-label="menu-icon"
    />
  );
};

export default Menu;
