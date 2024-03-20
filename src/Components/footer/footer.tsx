import "./footer.css";
import QRCode from "react-qr-code";

function Footer(props: {
  description: string;
  instagram: string;
  instagramID: string;
}) {
  return (
    <footer>
      <h2 className="footer-Text">با فالو کردن این پیج ها خوشحالشون کنید</h2>
      <article className="footer-QRCodes">
        <div className="footer-personal-QRCode">
          <QRCode
            value={"https://instagram.com/" + props.instagram}
            size={110}
          />
        </div>
        <div className="footer-QRCode-Desc">
          <h2>{props.instagramID}</h2>
          <p>{props.description}</p>
        </div>
      </article>
    </footer>
  );
}
export default Footer;
