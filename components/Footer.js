import React from 'react'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import Images from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function footer() {
    const { t, lang } = useTranslation('common')
    return (
        <div className="bg-footer pt-5 pb-5">
            <div className="custom-container" style={{textAlign:"center"}}>
                <Col className="mt-5">
                 <ul className="text-footer">
                     <li>
                        <h3><Link href="#">{t('home')}</Link></h3>
                     </li>
                     <li>
                         <h3><Link href="#">{t('InterestingAssets')}</Link></h3>
                     </li>
                     <li>
                         <h3><Link href="#">{t('RentalAnnouncement')}</Link></h3>
                     </li>
                     <li>
                         <h3><Link href="#">{t('homeservice')}</Link></h3>
                     </li>
                     <li>
                         <h3><Link href="#">{t('news')}</Link></h3>
                     </li>
                 </ul>
                </Col>
                <Col className="mt-5 mb-5">
                <h1 className="text-footer-h1">{t('FindAttractive')}
                 <b style={{color:"#FE4B6D",textDecoration:"underline",paddingLeft:"5px"}}>HOUSING</b>
                   <b style={{textDecoration:"underline"}} > HOME.NET</b></h1>
                </Col>
                <Col >

                 <ul className="text-footer-2">
                     <li  className="border-r-footer">
                        <h4><Link href="#">© 2020 HOUSINGHOME.NET</Link></h4>
                     </li>
                     <li className="border-r-footer">
                         <h4 >{t('tel')}<Link href="#">02-320-5915</Link></h4>
                     </li>
                     <li>
                         <h4>{t('email')}<Link href="#">housinghome@hotmail.com</Link></h4>
                     </li>
                 </ul>

                 </Col>

                 <Col className="mt-5 mb-5">
                 <ul className="text-footer-2 ">
                     <li className="pr-3 pl-3">
                     <a href="#" target="_blank">
                         <Images
                            src="/assets/images/icon-footer-05.svg"
                            alt="partner"
                            link="#"
                            width={42}
                            height={42} />
                           
                         </a>
                     </li>
                     <li  className="pr-3 pl-3">
                     <a href="#" target="_blank"><Images
                            src="/assets/images/icon-footer-06.svg"
                            alt="partner"
                            width={42}
                           
                            height={42} /></a>
                     </li>
                     <li  className="pr-3 pl-3">
                     <a href="#" target="_blank"> <Images
                            src="/assets/images/icon-footer-07.svg"
                            alt="partner"
                            width={42}
                            
                            height={42} />
                        </a>
                     </li>
                 </ul>
                 
                 </Col>

            </div>
            
        </div>
    )
}
