import AdrienBlanc from "./AdrienBlanc";

const Header = () => {
  return (
    <header className="flex flex-row p-8">
      <div className="md:w-1/12" />
      <div className="flex-1">
        <AdrienBlanc />
      </div>
      <div className="md:w-1/12" />
    </header>
  );
};

export default Header;
