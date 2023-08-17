import line from './../asset/line.svg'
import map from './../asset/map_img.png'

const Way = (props) =>{
    const locate = props.dbpath;
    return(
        <section id="waybox" className="container-md text-center">
            <div className='imgbox'><img src={line} alt="꾸밈장식" /></div>
            <h2><strong>오시는 길 안내</strong></h2>
            <div id="waywrap" className="d-lg-flex justify-content-center align-items-center">
                <div class="mapimg"><img src={map} alt="맵" className='img-fluid' /></div>
                <div id="mapinfo">
                    {
                        locate.wayinfo.map((v,idx)=>{
                            return(
                                <ul className="text-left">
                                <li className={v.cls}><img src={v.src} alt={v.alt}/><span>{v.title}</span></li>
                                <li className={v.c1cls}>{v.txt1}</li>
                                <li className={v.c2cls}>{v.txt2}</li>
                            </ul>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Way