import f_logo from './../asset/f_logo.svg'

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
            <div id="wrap" className='container d-flex justify-content-between align-items-center'> 
            <h3><img src={f_logo} alt="하단 로고" /></h3>
            <ul id="fnb">
                <div className='d-flex'>
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
            <ul id="fnb" className='d-flex'>
                {
                    info.menudb.map((v,i)=>{
                        return(
                            <li className={v.cls}><a href={v.href}>{v.menu}</a></li>
                        )
                    })
                }
            </ul>
            </div>
        </footer>
        </>
    )
}

export default Ft