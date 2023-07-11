import './../scss/my.scss';
import logo from '../asset/logo.svg';
import React, { useEffect, useState } from 'react';
import { Scrollspy } from 'react-scrollspy';



const Hd = () => {
  const nav = {
    gnb: [
      { name: '이벤트', cls: 'li-event', href: '#eve' },
      { name: '사전예약 신청', cls: 'li-res', href: '#reservation' },
      { name: '오시는 길', cls: 'li-way', href: '#way' }
    ]
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleGnbClick = (index) => {
    setActiveIndex(index);
  };

  const ScrollSpyExample = () => {
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const body = document.querySelector('body');
        const threshold = 10; // 스크롤을 얼마나 내려야 클래스가 추가되는지 조정 가능

        if (scrollTop > threshold) {
          body.classList.add('on');
        } else {
          body.classList.remove('on');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return null; // 렌더링할 내용이 없으므로 null을 반환합니다.
  };

  return (
    <div>
       <ScrollSpyExample />
      <div id="ad-title">사전예약 신청시 추첨을 통해 사이드메뉴 무료교환권을 드립니다.</div>
      <header id="wrap" className='fixed-top'>
        <div id="tab" className="container d-flex justify-content-between align-items-center">
          <h1>
            <a href="#none">
              <img src={logo} alt="로고" />
            </a>
          </h1>
          <ul id="gnb" className={`d-flex justify-content-center`}>
            {nav.gnb.map((x, i) => (
              <li
                key={i}
                className={`${activeIndex === i ? 'active' : ''} ${x.cls}`}
                onClick={() => handleGnbClick(i)}
              >
                <a href={x.href}>{x.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Hd;
