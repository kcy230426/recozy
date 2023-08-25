import './../scss/my.scss';
import logo from '../asset/logo.svg';
import React, { useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import throttle from 'lodash/throttle'




const Hd = (props) => {
  const nav = props.dbpath;

  const [activeIndex, setActiveIndex] = useState(null);
  const [ openmobile, setOpen ] = useState(false)

  const scrollspyItems = ['eve', 'form-all', 'waybox'];



  const handleGnbClick = (index) => {
    setActiveIndex(index);
  };


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

      const throttledHandleScroll = throttle(handleScroll, 100);

      window.addEventListener('scroll', throttledHandleScroll);
      return () => {
        window.removeEventListener('scroll', throttledHandleScroll);
      };

    }, []);



  return (
    <div className='fixed-top '>
       {/* <ScrollSpyExample /> */}
      <div id="ad-title">
        <span className='d-none d-md-inline'>사전예약 신청시</span> 추첨을 통해 사이드메뉴 무료교환권을 드립니다.
      </div>
      
      <header id="wrap" >
        <div id="tab" className="container-md d-lg-flex justify-content-between align-items-center position-relative">
          
          <h1 id="logobox" className='text-center flex-grow-1 kcy-text-lg-start'>
            <a href="#banner">
              <img src={logo} alt="로고" />
            </a>
          </h1>
          <button id='listbtn' onClick={ () => { setOpen(!openmobile) } } className={ openmobile ? "open" : ""} ><i class="bi bi-list"></i></button>
         
   
       
          <div id="gnb" className={``}>
          <Scrollspy
          items={scrollspyItems}
          currentClassName="active" // Customize the class name for the active item
          offset={-100}
          scrollDuration={500}
          className={`d-flex justify-content-center mb-0`}
          
        >
            {nav.gnb.map((x, i) => (
              <li
                key={i}
                className={`${x.cls}`}
                onClick={() => handleGnbClick(i)}
              >
                <a href={'#'+x.href}>{x.name}</a>
              </li>
            ))}
            </Scrollspy>
          </div>
          
          {/* <ul id="clickgnb" className={`d-flex justify-content-center`}>
            {nav.gnb.map((x, i) => (
              <li
                key={i}
                className={`${activeIndex === i ? 'active' : ''} ${x.cls}`}
                onClick={() => handleGnbClick(i)}
              >
                <a href={x.href}>{x.name}</a>
              </li>
            ))}
          </ul> */}
        </div>
      </header>
    </div>
  );
};

export default Hd;
