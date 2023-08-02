
import in_img1 from '../asset/in_img1.png'
import in_img2 from '../asset/in_img2.png'
import in_img3 from '../asset/in_img3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules';



const Event = () => {

    const eventdb = {
        icons:{
            ytb:{cls:"i-ytb"},
            insta:{cls:"i-ins"}
        },
        first : [{title1:"나얼이 들려주는", 
                  title2:" 아날로그",
                  txt1:"오늘 하루는 스마트폰을 놓고 아날로그의 매력에 빠져보세요!",
                  txt2:"독보적인 뮤지션 나얼이 감성 가득한 곡들을 선별해 들려드립니다.",
                  txt3:"LP판에서 흘러나오는 음악을 들으며 나 혼자만의, 혹은 소중한 사람과",
                  txt4:"특별한 시간을 보내보세요",
                  txt5:"",
                  txt6:"",
                  cls:"event-box"}
                  ],
        second : [{title1:"독보적인 뮤지션", 
                  title2:" 나얼",
                  txt1:"· 1998년 데뷔, 현재 브라운 아이드 소울의 메인보컬과 솔로로 활동 중",
                  txt2:"· 멜론이 2020년에 발표한 2000 / 2010년대 종합 파트에서 TOP 10 차지",
                  txt3:"· 독특한 기교와 두성을 기반으로 한 보이스, 정제된 창법이 특징",
                  txt4:"· 2020년에 <NAMMSE  나얼의 음악세계>라는 유튜브 채널 개설,",
                  txt5:"다양한 음악을 추천해주는 플레이스트와 LP 디제잉 제공중",
                  txt6:"",
                  cls:"event-box2"}
                  ],
        third : [{title1:"독보적인 뮤지션", 
                  title2:" 나얼",
                  txt1:"· 2005년, 리메이크 앨범 < Back To The Soul Flight > 발매",
                  txt2:"· 2012년, 솔로정규 1집 < Principle of my Soul > 발매",
                  txt3:"· 2015년,  < 브라운 아이드 소울 싱글 프로젝트 1st. > 발매",
                  txt4:"· 2017년,  < 기억의 빈자리 > , < 글로리아 >, < Baby Funk >발매,",
                  txt5:"· 2018년, < Sound Doctrine> 발매",
                  txt6:"· 2023년, < Soul Pop City > 발매 / < 걸음을 멈추는 날 > 공개",
                  cls:"event-box2"}
                  ],
    }

    return(
        <>
        <section id="eve" className="container-md mb-0">
                    <Swiper
                    id="ulbox"
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide>
                            <div className="e_bg1">
                                <img src={in_img1} alt="슬라이드 이미지1" className='img-fluid' />
                                <ul>
                                    {
                                        eventdb.first.map((v)=>{
                                            return(
                                                <>
                                                <li className={v.cls}><span className="title">{v.title1}</span><span className="spot">{v.title2}</span>
                                                    <div>{v.txt1}</div>
                                                    <div>{v.txt2}</div>
                                                    <div>{v.txt3}</div>
                                                    <div>{v.txt4}</div>
                                                    <div>{v.txt5}</div>
                                                </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="e_bg2">
                                <img src={in_img2} alt="슬라이드 이미지2" className='img-fluid' />
                                <ul>
                                    {
                                        eventdb.second.map((v)=>{
                                            return(
                                                <>
                                                <li className={v.cls}><span className="title">{v.title1}</span><span className="spot">{v.title2}</span>
                                                    <div>{v.txt1}</div>
                                                    <div>{v.txt2}</div>
                                                    <div>{v.txt3}</div>
                                                    <div>{v.txt4}</div>
                                                    <div className='ms-3'>{v.txt5}</div>
                                                </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="e_bg3">
                                <img src={in_img3} alt="슬라이드 이미지3" className='img-fluid' />
                                <ul>
                                    {
                                        eventdb.third.map((v)=>{
                                            return(
                                                <>
                                                <li className={v.cls}><span className="title">{v.title1}</span><span className="spot">{v.title2}</span>
                                                    <div>{v.txt1}</div>
                                                    <div>{v.txt2}</div>
                                                    <div>{v.txt3}</div>
                                                    <div>{v.txt4}</div>
                                                    <div>{v.txt5}</div>
                                                    <div>{v.txt6}</div>
                                                </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </SwiperSlide>
            </Swiper>
        </section>
        </>
    )
}

export default Event
