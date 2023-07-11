import bg from '../asset/main_bg.jpg'

const Banner = () => {

    return(
        <>
        <section className='d-flex justify-content-center container'>
            <div id="banner">
                <img src={bg} alt="메인 배경" />
                <div className="textbox">
                    <h3>이번 주말, <span className="coloring">힐링</span> 어떠세요?</h3>
                    <p>나얼과 Recozy가 특별한 하루를 만들어 드립니다.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Banner
