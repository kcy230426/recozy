import f_logo from './../asset/f_logo.svg'
import symbol from './../asset/symbol.svg'
import kakao from './../asset/kakao.png'
import instar from './../asset/instar.png'
import b_arrow from './../asset/b_arrow.svg'

const Ft = () => {

    const info = {
        mydb:
        [{title:"대표자명 :", content:" 김채연", cls:"ceo"},
            {title:"사업자등록번호 :", content:" 000-00-0000", cls:"addnum"},
            {title:"문의전화 :", content:" 000-000-0000" , cls:"phone"},
            {title:"이메일 :", content:" Help@recozy.com" , cls:"email"},],
        menudb:
        [{menu:"이용약관", href:"#agreepg", cls:"agree"}, 
        {menu:"개인정보처리방침", href:"#personalpg", cls:"personal"}, 
        {menu:"이메일무단수집거부",href:"#noemailpg", cls:"noemail"} ]
    }

    return(
        <>
        <footer id="ft">
            <div id="f-wrap" className='container d-lg-flex justify-content-between align-items-center'> 
            <h3><img src={f_logo} alt="하단 로고" /></h3>
            <ul className='fnb'>
                <div className='d-md-flex justify-content-center'>
                {
                    info.mydb.map((v,i)=>{
                        return(
                            <li className={v.cls}><a href="">{v.title}{v.content}</a></li>
                        )
                    })
                }
                </div>
                <li className='copyright'>COPYRIGHT© 2023 Recozy. CO.LTD ALL RIGHT RESERVED.</li>
            </ul>
            <ul className='fnb d-flex'>
                {
                    info.menudb.map((v,i)=>{
                        return(
                            <li className={v.cls}><a href={v.href}>{v.menu}</a></li>
                        )
                    })
                }
            </ul>
            </div>
                <div id="quick">
                    <ul className='d-flex flex-column justify-content-center'>
                        <li id='btn1' className='rel'><a href='https://github.com/kcy230426' target='_blank'><img className='symbol' src={symbol} alt="포트폴리오 메뉴" /><span className='hidetitle1'>Click</span></a></li>
                        <li id='btn2' className='rel'><a href='https://www.kakaocorp.com/page/service/service/KakaoTalk' target='_blank'><img className='kakao' src={kakao} alt="카카오톡 메뉴" /><span className='hidetitle2'>Click</span></a></li>
                        <li id='btn3' className='rel'><a href='https://www.instagram.com/' target='_blank'><img className='instar' src={instar} alt="인스타그램 메뉴" /><span className='hidetitle3'>Click</span></a></li>
                        <li id='arrow' className='mt-2 d-flex justify-content-center'><a href="#f-wrap"><img src={b_arrow} alt='하단버튼'></img></a></li>
                    </ul>
                </div>
        </footer>
        </>
    )
}

export default Ft
