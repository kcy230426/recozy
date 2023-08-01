import line from './../asset/line.svg'
import parking from './../asset/parking.svg'
import bus from './../asset/bus.svg'
import subway from './../asset/subway.svg'
import map from './../asset/map_img.png'

const Way = () =>{
    return(
        <section id="waybox" className="container-md text-center">
            <div className='imgbox'><img src={line} alt="꾸밈장식" /></div>
            <h2><strong>오시는 길 안내</strong></h2>
            <div id="waywrap" className="d-lg-flex justify-content-center align-items-center">
                <div><img src={map} alt="맵" /></div>
                <div id="mapinfo">
                    <ul className='text-left'>
                        <li className='title'><img src={bus} class="icons" alt="버스아이콘" /><span>버스</span></li>
                        <li className='content1'>수인분당선 서현역 6번 출구 정일빌딩 동그라미펍</li>
                        <li className='content2'>(500M 이내 위치)</li>
                    </ul>
                    <ul className='text-left'>
                        <li className='title'><img src={subway} class="icons" alt="지하철아이콘" /><span>지하철</span></li>
                        <li className='content1'>17, 17-1, 33, 720-1, 380, 승차 후 서현역 AK프라자</li>
                        <li className='content2'>정류장에서 하차</li>
                    </ul>
                    <ul className='text-left'>
                        <li className='title'><img src={parking} class="icons" alt="주차아이콘"/><span>주차안내</span></li>
                        <li className='content1'>빌딩 근처에 주차공간이 협소하오니 가급적 대중교통</li>
                        <li className='content2'>이용바랍니다. (주차2시간 무료)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Way