import "../scss/Footer.scss";

const Footer = () => {
  const currentLocation: [string, string, number] = ["London", "11.03", 17];
  return (
    <footer className="footer">
      {`${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}º `}
    </footer>
  );
};

export default Footer;
