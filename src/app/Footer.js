import './footer.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <div className="footer-logo">
          <Image src={'/logos/footer-logo.png'} alt="logo" width={187.5} height={37.5} />
        </div>
      </div>
      <div className="footer-item">
        <span>
          <p className="footer-title">TEL </p>
          <p>070-8802-1886</p>
        </span>
        <span>
          <p className="footer-title">E-mail </p>
          <p>assi2017@naver.com</p>
        </span>
      </div>
    </div>
  );
}
