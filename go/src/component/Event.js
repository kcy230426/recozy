

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules';



const Event = (props) => {

    const eventdb = props.dbpath;

    return(
        <>
        <section id="eve" className="container-md mb-0">
                    <Swiper
                    id="ulbox"
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                       delay: 8000,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay, Pagination]}
                    >
                        {
                        eventdb.Event.map((v, idx)=>{
                            return(
                                <SwiperSlide>
                                    <div className={`e_bg${idx + 1} w-100 d-flex flex-column flex-lg-row align-items-center justify-content-between`}>
                                        <img src={v.in_img} alt="슬라이드 이미지1" className='imgs img-fluid order-1' />
                                        <ul className='order-0'>
                                           
                                                        <li className={v.cls}><span className="title">{v.title1}</span><span className="spot">{v.title2}</span>
                                                            <div>{v.txt1}</div>
                                                            <div>{v.txt2}</div>
                                                            <div>{v.txt3}</div>
                                                            <div>{v.txt4}</div>
                                                            <div>{v.txt5}</div>
                                                            <div>{v.txt6}</div>
                                                        </li>
                                                     
                                                        {
                                            eventdb.icons.map((v,idx)=>{
                                                return(
                                                    <div class="snsicon">
                                                        <a href={v.href1} className='ytb-a rel' target='_blank'>
                                                            <div class="i-info1 text-center">
                                                                <span className='c-cls1'>{v.content11}</span><span class="d-block">{v.content12}</span>
                                                            </div>
                                                            <img src={v.img1} class={v.cls1} alt={v.alt1} />
                                                        </a>
                                                        <a href={v.href2} className='ins-a rel' target='_blank'>
                                                            <div class="i-info2 text-center">
                                                                <span className='c-cls2'>{v.content21}</span><span class="d-block">{v.content22}</span>
                                                            </div>
                                                            <img src={v.img2} class={v.cls2} alt={v.alt2} />
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                        </ul>
                                    </div>
                        </SwiperSlide>
                            )

                        })
                        }
                        
                       
                        
            </Swiper>
        </section>
        </>
    )
}

export default Event
