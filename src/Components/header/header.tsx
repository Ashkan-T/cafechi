import QRCode from "react-qr-code";
import "./style.css";

function Header(props: { cafeName: string; logo: any; Instagram: string }) {
  return (
    <header className="cafe-header-container">
      <img className="cafe-header-logo" src={props.logo} alt={props.cafeName} />
      <h1 className="cafe-header-name">{props.cafeName}</h1>
      <div className="cafe-header-QR-code">
        <QRCode value={"https://instagram.com/" + props.Instagram} size={140} />
      </div>
    </header>
  );
}
export default Header;
