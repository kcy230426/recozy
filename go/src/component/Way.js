import React, {useEffect} from "react"
import KakaoMapScript from "./KakaoMapScript";
import line from './../asset/line.svg'

const Way = (props) =>{
    const locate = props.dbpath;
    const mapurl = 'https://kko.to/33SvvIKJCz'
    
    useEffect(() => {
        KakaoMapScript();
    }, []);
    
    return(
        <section id="waybox" className="container-md text-center">
            <div className='imgbox'><img src={line} alt="꾸밈장식" /></div>
            <h2><strong>오시는 길 안내</strong></h2>
            <div id="waywrap" className="d-lg-flex justify-content-center align-items-center">
                <a href={mapurl} target="_blank" id="map"></a>
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
