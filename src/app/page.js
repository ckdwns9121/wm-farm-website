import Image from 'next/image';
import Footer from './Footer';
import { Flex, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className="container">
      <div className="section1">
        <div className="logo-wrapper">
          <Image src={'/logos/header-logo.png'} alt="logo" width={187.5} height={37.5} />
        </div>
        <div>
          <h2>더블유엠팜 쇼케이스 식물재배기</h2>
          <h1>신선한 도시, 즐거운 농장</h1>
        </div>

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
        <div>
          <p>더블유엠팜 쇼케이스 식물재배기</p>
          <p>다양하게 활용할 수 있습니다</p>
          <p>직접 식물을 기르며 어디서든 자연을 체험하고 정서적인 안전과 힐링을 느껴보세요</p>
        </div>
        <div className="wrapper-image">
          <div className="flex-image-box">
            <div className="showcase-item">
              <img src="/images/section2-1.png" alt="노인복지관" />
              <div>
                <strong>학교/교육기관에서 관찰 활동을 통해 인성 교육, 정서적인 안정감을 키울 수 있습니다.</strong>
              </div>
            </div>
            <div className="showcase-item">
              <img src="/images/section2-1.png" alt="노인복지관" />
              <div>
                <strong>학교/교육기관에서 관찰 활동을 통해 인성 교육, 정서적인 안정감을 키울 수 있습니다.</strong>
              </div>
            </div>
          </div>
          <div className="flex-image-box">
            <div className="showcase-item">
              <img src="/images/section2-1.png" alt="노인복지관" />
              <div>
                <strong>학교/교육기관에서 관찰 활동을 통해 인성 교육, 정서적인 안정감을 키울 수 있습니다.</strong>
              </div>
            </div>
            <div className="showcase-item">
              <img src="/images/section2-1.png" alt="노인복지관" />
              <div>
                <strong>학교/교육기관에서 관찰 활동을 통해 인성 교육, 정서적인 안정감을 키울 수 있습니다.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="selction3">
        <div>
          <span>빛과 물과 온도와 바람까지 알아서 제공해주는 식물재배기 </span>
          <h1>더블유엠팜 쇼케이스</h1>
        </div>
        <div className="showcase-image-wrapper">
          <Image src="/images/section3.png" alt="더블유엠팜 쇼케이스" className="showcase-image" layout="fill" />
        </div>
      </div>
      <div className="section4">
        <div>
          <h1>더블유엠팜 쇼케이스의 틀별함!</h1>
        </div>
        <div className="section4-image-wrapper">
          <img src="/images/section4.png" alt="더블유엠팜 쇼케이스" className="showcase-image" />
          <p>좌, 우측 나눠져 있어</p>
          <p>온도조절, 물 공기 순환이 가능합니다.</p>
        </div>
      </div>
      <div className="section5">
        <div>
          <p>인테리어 최적화된 다양한 색상</p>
          <p>디자인도 고급스러워 인테리어 효과 두 배!</p>
        </div>
        <img src="/images/section5.png" alt="인테리어 효과 두배" className="showcase-image" />

        <p>*해당 색상은 이해를 돕기 위한 것으로 조명의 정도에 따라 색상이 다를 수 있습니다.</p>
      </div>
      <div className="section6">
        <div>더블유엠팜 다른 모델 둘러보기</div>
        <div className="model-list">
          <div className="model-item">
            <span>S800모델</span>
            <img src="/images/model/s800모델.png" alt="s800" className="model-item-image" />
          </div>
          <div className="model-item">
            <span>S1400모델</span>
            <img src="/images/model/s800모델.png" alt="s800" className="model-item-image" />
          </div>
          <div className="model-item">
            <span>S1600모델</span>
            <img src="/images/model/s800모델.png" alt="s800" className="model-item-image" />
          </div>
        </div>
        <div>구매하기</div>
      </div>
      <Footer />
    </div>
  );
}
