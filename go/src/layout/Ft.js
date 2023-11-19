import f_logo from './../asset/f_logo.svg'
import symbol from './../asset/symbol.svg'
import kakao from './../asset/kakao.png'
import instar from './../asset/instar.png'
import b_arrow from './../asset/b_arrow.svg'
import React, { useState, useEffect } from 'react';

const Ft = (props) => {
    const info = props.dbpath;

    return(
        <>
        <footer id="ft">
            <div id="f-wrap" className='container d-lg-flex justify-content-between align-items-center'> 
            <h3><img src={f_logo} alt="하단 로고" /></h3>
            <ul className='fnb mb0'>
                <div className='d-md-flex justify-content-center'>
                {
                    info.mydb.map((v,i)=>{
                        return(
                            <li key={i} className={v.cls}><a href="">{v.title}{v.content}</a></li>
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
                            <li key={i} className={v.cls}><a href={v.href}>{v.menu}</a></li>
                        )
                    })
                }
            </ul>
            </div>
                <div id="quick">
                    <ul className='d-flex flex-column justify-content-center'>
                        {
                            info.quick.map((v,i)=>{
                                return(
                                    <li key={i} id={`btn${v.id}`} className='rel'><a href={v.href} target={v.target}><img src={v.img} alt={v.alt} className={v.cls} /><span className={v.spancls}>{v.content}</span></a></li>
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
