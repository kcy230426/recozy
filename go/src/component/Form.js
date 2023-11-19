import React, {useState} from "react"

import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import letter from './../asset/letter_tr.png'


const Form = () => {

    const [wr_name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [disabled, setDisabled] = useState(false);

    const handleChange = (event) => { 
        setName(event.target.value); 
    }

    const numberChange = (event) => { 
        setNumber(event.target.value); 
    }

    const agree2 = document.querySelector("#agree2")
    const agree1 = document.querySelector("#agree1")


    const handleSubmit = async (event) =>{
        setDisabled(true);
        event.preventDefault();
        if(!agree1.checked||!agree2.checked){
            setDisabled(false);
        }
            else{
                await new Promise((r)=>setTimeout(r,1000));
                alert(`${wr_name}님 사전예약이 완료되었습니다. 카카오 ID(${number})로 메세지 발송해드리겠습니다. 참여해주셔서 감사합니다.`)
                setDisabled(false);}}

    const agree = () => {
        if (!document.getElementById('agree1').checked) {
          alert('개인정보 취급방침에 동의해주세요');
        }
        if (!document.getElementById('agree2').checked) {
          alert('채널 구독 동의는 필수입니다.');
        }}

    return(
        <section id="form-all" className='container-lg p-4'>
            <h2 id="form-title" className="text-center text-white pt-5 pb-4">
                사전예약하고,<span className="md-block"></span> 선물도 받고! 
                <img id="e-title" src={letter} className="img-fluid" alt="영문 타이틀"/> </h2>
            <div id="form-date" className="text-center text-white pb-4">2023년 <span>5월 27일 ~ 28일</span>(토~일)<span className="sm-block"></span> 저녁 7시~12시｜서현역 ○○○○펍<span className="sm-block md-block"></span>(6번 출구 500M 이내 위치) </div>
            <form action="" id="form-box" className="d-lg-flex border-radius" onSubmit={handleSubmit}>
                <div id="img"></div>
                <div id="form-group" className="m-auto">
                    <div className="sm-wrap">
                        <label htmlFor="name" className="nametag me-10">이름</label>
                        <input type="text" name="name" placeholder="김○○" value={wr_name} onChange={handleChange} />
                    </div>
                    <div className="sm-wrap d-flex">
                        <label id="gendername" htmlFor="sex" className="nametag me-10">성별</label><span className="sm-block"></span>
                        <input type="radio" name="gender" value="woman" id="woman"/><label htmlFor="woman"><span className="womantag me-4">&nbsp;여성</span> </label>
                        <input type="radio" name="gender" value="man" id="man"/><label htmlFor="man">&nbsp;<span>남성</span></label> 
                    </div>
                    <div className="sm-wrap">
                        <label htmlFor="age" className="nametag me-10">나이&nbsp;<span className="text-danger s-middle">*</span></label>
                        <select name="age" id="age-group" required>
                            <option value="null">--선택--</option>
                            <option value="10" >10대</option>
                            <option value="20">20대</option>
                            <option value="30">30대</option>
                            <option value="40">40대</option>
                            <option value="50">50대 이상</option>
                        </select>
                    </div>
                    <div className="sm-wrap">
                        <label htmlFor="location" className="nametag me-10">거주지역</label>
                        <select defaultValue="null" name="location" id="age-group">
                            <option value="null">--선택--</option>
                            <option value="서울">서울</option>
                            <option value="경기도">경기</option>
                            <option value="인천">인천</option>
                            <option value="강원도">강원</option>
                            <option value="경북">경북</option>
                            <option value="경남">경남</option>
                            <option value="충남">충남</option>
                            <option value="충북">충북</option>
                            <option value="세종">세종</option>
                            <option value="대전">대전</option>
                            <option value="대구">대구</option>
                            <option value="광주">광주</option>
                            <option value="전남">전남</option>
                            <option value="부산">부산</option>
                            <option value="울산">울산</option>
                        </select>
                    </div>
                    <div className="sm-wrap">
                        <label htmlFor="number" className="nametag me-10">연락처&nbsp;<span className="text-danger s-middle">*</span></label>
                        <input type="text" name="number" className="mb-2" placeholder="카카오톡 ID를 입력해주세요" onChange={numberChange} required/>
                    </div>
                    <ul id="label2" className="mx-0">
                            <li className="mx-0 mb-3">
                                <input type="checkbox" id="agree1"/>
                                <label htmlFor="agree1" className="d-md-flex align-items-center">&nbsp;<span>개인정보 취급방침에 동의합니다.</span>
                                <a href="#" className="d-flex justify-content-center">&nbsp;<span className="sm-block"></span><p className="agree-btn">[약관보기]</p></a></label>
                            </li>
                            <li className="mx-0 mb-5">
                                <input type="checkbox" id="agree2"/>
                                <label htmlFor="agree2" className="d-md-flex align-items-center">&nbsp;<span>Recozy 카카오톡 채널 추가에 동의합니다.</span><a href="#" className="d-flex justify-content-center">&nbsp;<span className="sm-block"></span><p className="agree-btn">[필수]</p></a></label>
                            </li>
                    </ul>
                    <button id="sm-btn" className="d-block mx-auto mb-4" type="submit" onClick={agree} disabled={disabled} >응답제출</button>
                </div>
            </form>
            <div id='textinfo' className='text-white d-lg-flex flex-wrap justify-content-center'>
                <div>* 추첨을 통해 이벤트에 참여하신 손님 중 10분께 사이드메뉴 무료교환권을 드립니다.</div>
                <div>* 예약석이 전부 마감될 경우 이벤트가 조기 종료될 수 있습니다.</div>
                <div>* 응답은 1인 1회 가능하며, 예약자 포함 최대 4인까지 동행할 수 있습니다.</div>
                <div>* 예약 취소는 전날 오후 5시까지 가능합니다.</div>
            </div>
        </section>
    )
}

export default Form
