import Logo from "../assets/logo.jpg";
export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/"> Home </a>
    </header>
  );
};
