import line from './../asset/line.svg'
import parking from './../asset/parking.svg'
import bus from './../asset/bus.svg'
import subway from './../asset/subway.svg'

const Way = () =>{
    return(
        <section id="waybox" className="container-md text-center">
            <div className='imgbox'><img src={line} alt="꾸밈장식" /></div>
            <h2>오시는 길</h2>
            <div id="waywrap" className="d-flex justify-content-center align-items-center">
                <div></div>
                <div>
                    <ul className='text-left'>
                        <li className='title'><img src={bus} class="icons" alt="버스아이콘" />지하철</li>
                        <li className='content'>수인분당선 서현역 6번 출구 정일빌딩 동그라미펍</li>
                        <li className='content'>(500M 이내 위치)</li>
                    </ul>
                    <ul className='text-left'>
                        <li className='title'><img src={subway} class="icons" alt="지하철아이콘" />버스</li>
                        <li className='content'>17, 17-1, 33, 720-1, 380, 승차 후 서현역 AK프라자</li>
                        <li className='content'>정류장에서 하차</li>
                    </ul>
                    <ul className='text-left'>
                        <li className='title'><img src={parking} class="icons" alt="주차아이콘"/>주차안내</li>
                        <li className='content'>빌딩 근처에 주차공간이 협소하오니 가급적 대중교통</li>
                        <li className='content'>이용바랍니다(주차2시간 무료)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Way