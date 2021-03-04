import AdrienBlanc from "./AdrienBlanc";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full h-16 p-4 bg-gray-100 dark:bg-black flex flex-row space-x-4">
      <DarkModeSwitch />
      <AdrienBlanc />
    </nav>
  );
};

export default Navbar;
