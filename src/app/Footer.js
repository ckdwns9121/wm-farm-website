import "./footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-item">
        <div className="footer-logo">
          <Image
            src={"/logos/footer-logo.png"}
            alt="logo"
            width={187.5}
            height={37.5}
          />
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="relative w-full md:px-8 text-white text-xs md:text-base whitespace-nowrap flex flex-col items-center">
        <div className="flex flex-col md:flex-row pr-2 w-full">
          <div className="footer-value flex md:pr-2">
            <div className="font-bold pr-1 md:pr-2">상호</div>
            <div className="font-medium pr-1 md:pr-2">(주) 더블유엠어시</div>
          </div>
          <div className="footer-value flex md:pr-2">
            <div className="font-bold pr-1 md:pr-22">대표</div>
            <div className="font-medium pr-1 md:pr-2">김우찬</div>
          </div>
          <div className="footer-value flex pr-2">
            <div className="font-bold pr-1 md:pr-2">사업자등록번호</div>
            <div className="font-medium pr-1 md:pr-2">204-87-02111</div>
          </div>
        </div>
        <div className="flex pb-2 w-full">
          <div className="footer-value flex md:pr-2">
            <div className="font-bold pr-1 md:pr-2">주소</div>
            <div className="font-medium pr-1 text-wrap md:pr-2 ">
              전북 전주시 완산구 천잠로 303, 전주대 벤처창업관 308,302호
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pb-2 w-full">
          <div className="footer-value flex md:pr-2">
            <div className="font-bold pr-1 md:pr-2">TEl</div>
            <div className="font-medium pr-1 md:pr-2">070-880-1886</div>
          </div>
          <div className="footer-value flex md:pr-2">
            <div className="font-bold pr-1 md:pr-2">E-mail</div>
            <div className="font-medium pr-1 md:pr-2">assi2017@naver.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
