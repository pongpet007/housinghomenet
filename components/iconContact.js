import React from 'react'
import { OverlayTrigger, Overlay, Tooltip,Popover, Button,Image } from 'react-bootstrap';

  
export default function iconContact() {
    const popover = (
        <Popover>
          <Popover.Content>
              เราพร้อมให้บริการทุกวันจันทร์-ศุกร์ <br></br><b>เวลา 9.00-17.30น</b>
          </Popover.Content>
        </Popover>
      );
      return (
          <div className="fixed-rigth-bottom">
              <OverlayTrigger 
                    trigger="hover" 
                    placement="top" 
                    overlay={popover}
                    >
                        <Image src="/assets/images/contact-bar-06.svg"/>
                    {/* <Button variant="danger">Hover over me</Button> */}
               </OverlayTrigger>
          </div>
        
    );
}