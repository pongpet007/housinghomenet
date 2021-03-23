import React from 'react'
import { OverlayTrigger, Overlay, Tooltip,Popover, Button,Image } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation'
  
export default function iconContact() {
    const { t, lang } = useTranslation('common')
    const popover = (
        <Popover>
          <Popover.Content>
          {t('monday-friday')}<br></br><b>{t('time-day')}</b>
          </Popover.Content>
        </Popover>
      );
      return (
          <div className="fixed-rigth-bottom">
              <OverlayTrigger 
                    trigger={["hover", "hover"]}
                    placement="top" 
                    overlay={popover}
                    >
                        <Image src="/assets/images/contact-bar-06.svg"/>
                    {/* <Button variant="danger">Hover over me</Button> */}
               </OverlayTrigger>
          </div>
        
    );
}