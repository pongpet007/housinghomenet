import React from 'react'

import { useEffect } from 'react'
import { useRouter } from "next/router"
import Head_meta from '../components/Head_meta'

export default function index() {
  const router = useRouter()

  // useEffect(() => {
  //   router.push("testredux", '', { shallow: true })
  // }, [])


  return (
    <div>
      <Head_meta 
        title='สินค้าอุตสาหกรรม ค้นหาสินค้าอุตสาหกรรมออนไลน์ เว็บไซต์รวมรายชื่อผู้ผลิต จำหน่าย ให้บริการ' 
        keyword='เว็บไซต์รวมสินค้าอุตสาหกรรมออนไลน์ ค้นหารายชื่อผู้ประกอบการภาคอุตสาหกรรม ตลาดสินค้าอุตสาหกรรม โดยบริษัท แบรนด์เด็กซ์ ไดเร็กทอรี่ จำกัด ผู้ผลิตสื่ออุตสาหกรรมคุณภาพ'
        description="สินค้าอุตสาหกรรม,สินค้าอุตสาหกรรมออนไลน์,เว็บอุตสาหกรรม,ตลาดอุตสาหกรรม,ตลาดกลางอุตสาหกรรม, สื่อสินค้าอุตสาหกรรม,ตลาดกลางสินค้าอุตสาหกรรม,thailand industry,รายชื่อบริษัทอุตสาหกรรม,สินค้าอุตสาหกรรมคืออะไร,สินค้าอุตสาหกรรมมีกี่ประเภท,ตัวอย่างสินค้าอุตสาหกรรม"
        />
      <div style={{ height: 200, backgroundColor: 'green' }}>
        content1
       </div>
      <div style={{ height: 200, backgroundColor: 'green' }}>
        content1
       </div>

    </div>

  )
}
