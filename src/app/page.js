import Image from 'next/image';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="container">
      <div className="section1 px-5 py-24 md:px-12">
        <div className="logo-wrapper">
          <Image src={'/logos/header-logo.png'} alt="logo" width={187.5} height={37.5} />
        </div>
        <div>
          <h2 className="relative txt-darkgreen text-lg md:text-4xl lg:text-5xl font-semibold mb-4">
            더블유엠팜 쇼케이스 식물재배기
          </h2>
          <h1 className="txt-blue text-2xl md:text-5xl lg:text-6xl font-bold"> 신선한 도시, 즐거운 농장</h1>
        </div>
        <div className="bottom-icon-wrapper ">
          <span className="mb-4 md:mb-10">
            <Image src={'/icons/section1-1.png'} alt="icon1" width={30} height={30} />
            <p className="text-sm md:text-3xl lg-text-5xl font-semibold">
              모종과 씨앗 둘 다 생장 가능한 순환식 물 공급 시스템
            </p>
          </span>
          <span className="mb-4 md:mb-10">
            <Image src={'/icons/section1-2.png'} alt="icon2" width={30} height={30} />
            <p className="text-sm md:text-3xl lg-text-5xl font-semibold">
              최적의 생육환경 제공 빛, 온동, 물, 바람을 자동으로 공급
            </p>
          </span>
          <span className="mb-4 md:mb-10">
            <Image src={'/icons/section1-3.png'} alt="icon2" width={30} height={30} />
            <p className="text-sm md:text-3xl lg-text-5xl font-semibold">
              좌/우측 다른 식물 키우기 가능 생육환경을 좌/우측 각각 제어
            </p>
          </span>
        </div>
      </div>
      <div className="selction2">
        <div className="section2-title py-5 px-12 md:py-24 md:px-48">
          <p className="text-base md:text-3xl font-semibold txt-darkgreen ">더블유엠팜 쇼케이스 식물재배기</p>
          <p className="text-xl md:text-5xl font-bold txt-blue md:pt-4 pb-8 ">다양하게 활용할 수 있습니다</p>
          <p className="text-base md:text-3xl font-semibold txt-blue ">
            직접 식물을 기르며 어디서든 자연을 체험하고 정서적인 안전과 힐링을 느껴보세요
          </p>
        </div>
        <div className="wrapper-image">
          <div className="flex-image-box">
            <div className="showcase-item">
              <div className="relative">
                <Image src="/images/section2-1.png" alt="노인복지관/지자체" width={500} height={500} />
                <span className="absolute bottom-0 right-0">
                  <span class="badge-container left-badge">
                    <span class="badge-text text-sm font-bold">노인복지관/지자체</span>
                  </span>
                </span>
              </div>
              <div className="item-sub item-border font-semibold txt-blue text-sm md:text-base p-6 md:p-12 ">
                <span>초록 식물이 주는 편안함과 싱그러움으로 어르신들의 정서적 힐링을 선물해드립니다</span>
              </div>
            </div>
            <div className="showcase-item">
              <div className="relative">
                <Image src="/images/section2-2.png" alt="학교/교육기관" width={500} height={500} />
                <div className="absolute left-0 bottom-0">
                  <div class="badge-container ">
                    <div class="badge-text text-sm font-bold">학교/교육기관</div>
                  </div>
                </div>
              </div>
              <div className="item-sub font-semibold txt-blue text-sm md:text-base  p-6 md:p-12 ">
                <span>학교/교육기관에서 관찰 활동을 통해 인성 교육, 정서적인 안정감을 키울 수 있습니다.</span>
              </div>
            </div>
          </div>

          <div className="flex-image-box">
            <div className="showcase-item">
              <div className="relative">
                <div className="absolute top-0 right-0">
                  <div class="badge-container left-badge">
                    <div class="badge-text text-sm font-bold">로비</div>
                  </div>
                </div>
                <Image src="/images/section2-3.png" alt="로비" width={500} height={500} />
              </div>
              <div className="item-sub item-border font-semibold txt-blue text-sm md:text-base p-6 md:p-12">
                <p>
                  힐링과 여유로움 편암함을 느낄 수 있는 로비 쇼케이스로
                  <br />
                  초록이 주는 휴식을 느껴보세요
                </p>
              </div>
            </div>

            <div className="showcase-item">
              <div className="relative">
                <div className="absolute top-0 left-0">
                  <div class="badge-container ">
                    <div class="badge-text text-sm font-bold">레스토랑/카페</div>
                  </div>
                </div>
                <Image src="/images/section2-4.png" alt="레스토랑/카페" width={500} height={500} />
              </div>
              <div className="item-sub font-semibold txt-blue text-sm md:text-base p-6 md:p-12">
                <span>쇼케이스로 특별한 레시비/고급스러운 인테리어 효과를 경험해보세요</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="selction3">
        <div className="bg-green flex-center speech-bubble">
          <span className="txt-white  text-white text-sm md:text-base lg:text-xl">
            빛과 물과 온도와 바람까지 알아서 제공해주는 식물재배기
          </span>
          <h1 className="txt-blue text-xl md:text-4xl lg:text-6xl font-bold">더블유엠팜 쇼케이스</h1>
        </div>
        <div className="showcase-image-wrapper ">
          <Image
            src="/images/section3.png"
            alt="더블유엠팜 쇼케이스"
            className="image2 px-12 py-4"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="section4">
        <div className="bg-green flex-center speech-bubble">
          <h1 className="text-white text-xl md:text-4xl lg:text-6xl font-bold">더블유엠팜 쇼케이스의 특별함!</h1>
        </div>
        <div className="p-12 md:px-48 lg:px-48">
          <Image src="/images/section4.png" alt="더블유엠팜 쇼케이스" className="image2" width={500} height={500} />
          <div
            className="subscriber 
          text-2xl md:text-3xl
          font-semibold
          flex txt-blue text-center justify-center w-full my-10 flex-col"
          >
            <p>좌, 우측 나눠져 있어</p>
            <p className="break-keep">온도조절, 물 공기 순환이 가능합니다.</p>
          </div>
        </div>
      </div>
      <div className="section5 bg-sky  py-6 pb-8 md:py-6 lg:py-6 relative">
        <div className="flex-center">
          <p className="text-base md:text-xl lg:text-4xl txt-blue pb-2">인테리어 최적화된 다양한 색상</p>
          <p className="text-lg md:text-2xl lg:text-5xl font-bold txt-blue font-bold pb-4">
            디자인도 고급스러워 인테리어 효과 두 배!
          </p>
        </div>
        <div className="relative">
          <Image
            src="/images/section5.png"
            alt="인테리어 효과 두배"
            className="image2"
            width={500}
            height={500}
          ></Image>
          <div className="absolute break-keep bottom-0 md:bottom-4 xl:bottom-4 left-4 font-semibold text-sm pr-4">
            *해당 색상은 이해를 돕기 위한 것으로 조명의 정도에 따라 색상이 다를 수 있습니다.
          </div>
        </div>
      </div>
      <div className="section6">
        <div className="txt-blue text-xl md:text-3xl lg:text-5xl font-bold py-12 text-center">
          더블유엠팜 다른 모델 둘러보기
        </div>
        <div className="model-list bg-sky px-4 py-8 md:px-8 md: py-12">
          <div className="model-item">
            <span className="text-lg md:text-xl lg:text-2xl font-bold txt-blue"> S800모델</span>
            <Image src="/images/model/s800모델.png" alt="s800" className="model-item-image" width={500} height={500} />
          </div>
          <div className="model-item mx-4">
            <span className="text-lg md:text-xl lg:text-2xl font-bold txt-blue">S1400모델</span>
            <Image src="/images/model/s1400모델.png" alt="s800" className="model-item-image" width={500} height={500} />
          </div>
          <div className="model-item">
            <span className="text-lg md:text-xl lg:text-2xl font-bold txt-blue">S1600모델</span>
            <Image src="/images/model/s1600모델.png" alt="s800" className="model-item-image" width={500} height={500} />
          </div>
        </div>
        <div className="button-wrap py-4 md:py-12">
          <div className="buy-button">
            <p className="text-lg md:text-4xl font-bold">구매하기</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
