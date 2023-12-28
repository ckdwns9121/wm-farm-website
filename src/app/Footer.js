import './footer.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-item">
        <div className="footer-logo">
          <Image src={'/logos/footer-logo.png'} alt="logo" width={187.5} height={37.5} />
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-item">
        <div className="item-text">
          <p className="footer-title">TEL </p>
          <p>070-8802-1886</p>
        </div>
        <div className="item-text">
          <p className="footer-title">E-mail </p>
          <p>assi2017@naver.com</p>
        </div>
      </div>
    </footer>
  );
}
