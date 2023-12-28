import Image from "next/image";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="section1">
        <div>배경</div>
        <p>로고</p>
        <p>더블유엠팜 쇼케이스 식물재배기</p>
        <p>신선한 도시, 즐거운 농장</p>

        <span>
          <>아이콘</>
          <p>모종과 씨앗 둘 다 생장 가능한 순환식 물 공급 시스템</p>
        </span>
        <span>
          <>아이콘</>
          <p>최적읜 생육환경 제공 빛, 온동, 물, 바람을 자동으로 공급</p>
        </span>
        <span>
          <>아이콘</>
          <p>좌/우측 다른 식물 키우기 가능 생육환경을 좌/우측 각각 제어</p>
        </span>
      </div>
      <div className="selction2">
        <p>더블유엠팜 쇼케이스 식물재배기</p>
        <p>다양하게 활용할 수 있습니다</p>
        <p>직접 식물을 기르며 어디서든 자연을 체험하고 정서적인 안전과 힐링을 느껴보세요</p>
        <div>
          {/* 사진 부분 */}
          <div>노인복지관/지자체 image</div>
          <div>학교/교육기관 image</div>
          <div>초록 식물이 주는 편안함과 싱그러움으로 어르신들의 정서적 힐링을 선물해드립니다.</div>
          <div>학교/교육기관에서 관찰 활동을 통해 인성 교육, 정서적인 안정감을 키울 수 있습니다.</div>
          {/*  */}
          <div>로비 image</div>
          <div>레스토랑/카페 image</div>
          <div>힐링과 여유로움 편안함을 느낄 수 있는 로비 쇼케이스로 초록이 주는 휴식을 느껴보세요</div>
          <div>쇼케이스로 특별한 레시비/ 고급스러운 인테리어 효과를 경험해 보세요</div>
        </div>
      </div>
      <div className="selction3">
        <div>
          <span>빛과 물과 온도와 바람까지 알아서 제공해주는 식물재배기 </span>더블유엠팜 쇼케이스
        </div>
        <div>image</div>
      </div>
      <div className="section4">
        <div>더블유엠팜 쇼케이스의 틀별함!</div>
        <div>image</div>
        <p>좌, 우측 나눠져 있어</p>
        <p>온도조절, 물 공기 순환이 가능합니다.</p>
      </div>
      <div className="section5">
        <div>
          <p>인테리어 최적화된 다양한 색상</p>
          <p>디자인도 고급스러워 인테리어 효과 두 배!</p>
        </div>
        <div>image</div>
        <p>*해당 색상은 이해를 돕기 위한 것으로 조명의 정도에 따라 색상이 다를 수 있습니다.</p>
      </div>
      <div className="section6">
        <div>더블유엠팜 다른 모델 둘러보기</div>
        <div>
          <div>
            <span>S800모델</span>
            image
          </div>
          <div>
            <span>S1400모델</span>
            image
          </div>
          <div>
            <span>S1600모델</span>
            image
          </div>
        </div>
        <div>구매하기</div>
      </div>
      <Footer />
    </>
  );
}
