import React from 'react'
import { Card, Col,} from 'react-bootstrap'
import Images from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function cardHome({asset_id,url,name,address,price}) {
    const { t, lang } = useTranslation('common')
    return (<>
              
                    <Card className="item-home-2">
                        <div className="icon-home-2">
                                <Images
                                    src={url}
                                    alt="ItemHome"
                                    width={360}
                                    height={270} />
                          
                            <ul className="list-icon">
                                <li>
                                    <p className="pink icon-1">{t('recommend')}</p>
                                </li>
                                <li>
                                    <p className="green icon-1">{t('sell')}</p>
                                </li>
                                <li>
                                    <p className="bluesky icon-1">{t('Second-hand')}</p>
                                </li>
                            </ul>
                            <div className="icon-heart">
                                <Images
                                    src="/assets/images/heart-white-07.svg"
                                    alt="ItemHome"
                                    width={35}
                                    height={35} />
                            </div>
                            <Card.Body>
                                <Link href={`/${lang}/asset/${asset_id}`}><a target="_blank" ><h2>{name}</h2></a></Link>
                                <p>{address}</p>
                                <h3><b>{price}</b></h3>
                                <ul className="list-icon-bottom">
                                    <li>
                                        <Images
                                            src="/assets/images/icon-05.svg"
                                            alt="ItemHome"
                                            width={20}
                                            height={20} />
                                        <p>3</p><p className="text-item">{t('bed')}</p>
                                    </li>
                                    <li>
                                        <Images
                                            src="/assets/images/icon-06.svg"
                                            alt="ItemHome"
                                            width={20}
                                            height={20} />
                                        <p>3</p><p className="text-item">{t('tolet')}</p>
                                    </li>
                                    <li>
                                        <Images
                                            src="/assets/images/icon-07.svg"
                                            alt="ItemHome"
                                            width={20}
                                            height={20} />
                                        <p>3</p><p className="text-item">{t('Square')}</p>
                                    </li>
                                </ul>
                            </Card.Body>
                        </div>
                    </Card>
                
                    
        </>
    )
}

