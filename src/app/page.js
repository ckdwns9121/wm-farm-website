'use client'; // this is a client component 👈🏽
import { useEffect } from 'react';
import Image from 'next/image';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container">
      <div className="section1 px-5 py-24 md:py-48 md:px-12">
        <div className="absolute right-6 top-6" data-aos="fade-left">
          <Image className="logo-icon" src={'/logos/header-logo.png'} alt="logo" width={187.5} height={37.5} />
        </div>
        <div>
          <div className="relative" data-aos="fade-up">
            <div className="blur-background"></div>
            <h2 className="relative txt-darkgreen text-lg md:text-4xl lg:text-4xl font-semibold mb:mb-4">
              더블유엠팜 쇼케이스 식물재배기
            </h2>
          </div>
          <div className="relative" data-aos="fade-up">
            <div className="blur-background"></div>
            <h2 className="relative txt-blue text-2xl md:text-5xl lg:text-6xl font-bold">신선한 도시, 즐거운 농장</h2>
          </div>
        </div>
        <div className="bottom-icon-wrapper" data-aos="fade-up">
          <span className="mb-4 md:mb-10">
            <Image src={'/icons/section1-1.png'} alt="icon1" width={30} height={30} className="section-icon" />
            <p className="text-xs md:text-3xl lg-text-5xl font-semibold">
              모종과 씨앗 둘 다 생장 가능한 순환식 물 공급 시스템
            </p>
          </span>
          <span className="mb-4 md:mb-10">
            <Image src={'/icons/section1-2.png'} alt="icon2" width={30} height={30} className="section-icon" />
            <p className="text-xs md:text-3xl lg-text-5xl font-semibold">
              최적의 생육환경 제공 빛, 온동, 물, 바람을 자동으로 공급
            </p>
          </span>
          <span className="mb-4 md:mb-10">
            <Image src={'/icons/section1-3.png'} alt="icon2" width={30} height={30} className="section-icon" />
            <p className="text-xs md:text-3xl lg-text-5xl font-semibold">
              좌 / 우측 다른 식물 키우기 가능 생육환경을 좌 / 우측 각각 제어
            </p>
          </span>
        </div>
      </div>
      <div className="selction2">
        <div className="section2-title py-5 px-12 md:py-24 md:px-48" data-aos="zoom-in">
          <p className="text-base md:text-3xl font-semibold txt-darkgreen ">더블유엠팜 쇼케이스 식물재배기</p>
          <p className="text-xl md:text-5xl font-bold txt-blue md:pt-4 pb-8 ">다양하게 활용할 수 있습니다</p>
          <p className="text-base md:text-3xl font-medium txt-blue break-keep">
            직접 식물을 기르며 어디서든 자연을 체험하고 정서적인 안전과 힐링을 느껴보세요
          </p>
        </div>
        <div className="w-full">
          <div className="w-full flex">
            <div className="w-full h-full relative">
              <div className="relative">
                <Image
                  src="/images/section2-1.png"
                  alt="노인복지관/지자체"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
                <span className="absolute bottom-0 right-0">
                  <span className="badge-container left-badge">
                    <span className="badge-text text-sm font-semibold">노인복지관 / 지자체</span>
                  </span>
                </span>
              </div>
              <div className="w-full item-border font-midium txt-blue text-xs md:text-2xl p-6 md:p-12 break-keep">
                초록 식물이 주는 <span className="font-bold">편안함과 싱그러움으로 어르신들의 정서적 힐링</span>을
                선물해드립니다
              </div>
            </div>
            <div className="w-full h-full relative">
              <div className="relative">
                <Image
                  src="/images/section2-2.png"
                  alt="학교/교육기관"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
                <div className="absolute left-0 bottom-0">
                  <div className="badge-container ">
                    <div className="badge-text text-sm font-semibold">학교 / 교육기관</div>
                  </div>
                </div>
              </div>
              <div className="w-full font-midium txt-blue text-xs md:text-2xl  p-6 md:p-12 break-keep ">
                학교 / 교육기관에서 관찰 활동을 통해 <span className="font-bold">인성 교육, 정서적인 안정감</span>을
                키울 수 있습니다
              </div>
            </div>
          </div>

          <div className="w-full flex">
            <div className="w-full h-full relative">
              <div className="relative">
                <div className="absolute top-0 right-0">
                  <div className="badge-container left-badge">
                    <div className="badge-text text-sm font-semibold">로비</div>
                  </div>
                </div>
                <Image src="/images/section2-3.png" alt="로비" width={500} height={500} className="w-full h-full" />
              </div>
              <div className="w-full item-border font-midium txt-blue text-xs md:text-2xl p-6 md:p-12 break-keep">
                힐링과 여유로움 편암함을 느낄 수 있는 로비 쇼케이스로{' '}
                <span className="font-bold">초록 식물이 주는 휴식</span>을 느껴보세요
              </div>
            </div>

            <div className="w-full h-full relative">
              <div className="relative">
                <div className="absolute top-0 left-0">
                  <div className="badge-container ">
                    <div className="badge-text text-sm font-semibold">레스토랑 / 카페</div>
                  </div>
                </div>
                <Image
                  src="/images/section2-4.png"
                  alt="레스토랑/카페"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="w-full font-midium txt-blue text-xs md:text-2xl p-6 md:p-12 break-keep">
                쇼케이스로 <span className="font-bold">특별한 레시피 / 고급스러운 인테리어 효과를 경험</span>
                해보세요
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="bg-green flex-center speech-bubble">
          <span className="txt-white  text-white text-sm md:text-base lg:text-xl" data-aos="fade-up">
            빛과 물과 온도와 바람까지 알아서 제공해주는 식물재배기
          </span>
          <h1 className="txt-blue text-3xl md:text-4xl lg:text-6xl font-bold" data-aos="fade-up">
            더블유엠팜 쇼케이스
          </h1>
        </div>
        <div className="section3-bg" data-aos="fade-right" />
      </div>
      <div className="section4">
        <div className="bg-green flex-center speech-bubble">
          <h1 className="text-white text-xl md:text-4xl lg:text-6xl font-bold" data-aos="fade-up">
            더블유엠팜 쇼케이스의 특별함!
          </h1>
        </div>
        <div className="p-12 md:px-48 lg:px-48">
          <Image
            src="/images/section4.png"
            alt="더블유엠팜 쇼케이스"
            className="w-full h-full"
            width={500}
            height={500}
            data-aos="fade-left"
          />
          <div
            className="subscriber 
          text-2xl md:text-3xl
          font-medium
          flex txt-blue text-center justify-center w-full my-10 flex-col"
            data-aos="flip-left"
          >
            <p>좌, 우측 나눠져 있어</p>
            <p className="break-keep">온도조절, 물 공기 순환이 가능합니다.</p>
          </div>
        </div>
      </div>
      <div className="section5 bg-sky  pt-8  relative">
        <div className="text-center">
          <p className="text-base md:text-xl lg:text-4xl txt-blue pb-2" data-aos="fade-up">
            인테리어 최적화된 다양한 색상
          </p>
          <p className="text-lg md:text-2xl lg:text-5xl font-bold txt-blue font-bold pb-4" data-aos="fade-up">
            디자인도 고급스러워 인테리어 효과 두 배!
          </p>
        </div>
        <div className="relative">
          <div className="section5-bg" data-aos="fade-up" />
          <div className="absolute break-keep bottom-0 text-xs md:bottom-4 xl:bottom-4 left-4 font-semibold md:text-sm pr-4">
            *해당 색상은 이해를 돕기 위한 것으로 조명의 정도에 따라 색상이 다를 수 있습니다.
          </div>
        </div>
      </div>
      <div className="section6">
        <div
          className="txt-blue text-xl py-8 md:text-3xl lg:text-5xl font-bold md:py-12 text-center"
          data-aos="fade-up"
        >
          더블유엠팜 다른 모델 둘러보기
        </div>
        <div className="flex w-full items-center justify-center bg-sky px-4 py-8 md:px-8 md: py-12">
          <div className="w-full">
            <span className="text-lg md:text-xl lg:text-2xl font-bold txt-blue">S800모델</span>
            <Image src="/images/model/s800모델.png" alt="s800" className="w-full" width={500} height={500} />
          </div>
          <div className="w-full mx-4">
            <span className="text-lg md:text-xl lg:text-2xl font-bold txt-blue">S1400모델</span>
            <Image src="/images/model/s1400모델.png" alt="s800" className="w-full" width={500} height={500} />
          </div>
          <div className="w-full">
            <span className="text-lg md:text-xl lg:text-2xl font-bold txt-blue">S1600모델</span>
            <Image src="/images/model/s1600모델.png" alt="s800" className="w-full" width={500} height={500} />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center py-4 md:py-12">
          <div className="buy-button">
            <a className="text-lg md:text-4xl font-bold" href="https://smartstore.naver.com/wmassi">
              구매하기
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
