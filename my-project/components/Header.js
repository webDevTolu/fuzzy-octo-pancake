import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-end lg:items-center py-4 px-3 md:py-6 md:px-12 lg:py-8 lg:px-16 font-read">
      <Logo />
      <HeaderButton />
    </header>
  );
};

export default Header;
