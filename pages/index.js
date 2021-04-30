import React, { useState, useEffect } from 'react'
import Banner from '../components/Home/sectionBanner'
import BannerSponser from '../components/Home/sectionBannerSponser'
import BannerSponserBottom from '../components/Home/sectionBannerSponseBottom'
import SectionService from '../components/Home/sectionService'
import SectionHome from '../components/Home/sectionHome'
import { useRouter } from "next/router"
import Head_meta from '../components/Head_meta'
import SectionPartner from '../components/Home/sectionPartner'



function index(props) {

  const router = useRouter()


  // const [data, setData] = useState(null);

  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error } = useSWR('https://www.housinghome.net/api/Slide/getList', fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // console.log(data)
  // console.log(props)  

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://www.housinghome.net/api/Slide/getList', {
  //     headers: { "Access-Control-Allow-Origin": "*" }
  //   }
  //   );

  //   setData(result.data);
  //   console.log(data)
  // }, []);




  return (
    <div>

      <Head_meta />
      
      <Banner />
      <BannerSponser />

      <SectionHome />

      <BannerSponserBottom />
      <SectionService />

      <SectionPartner />

    </div>

  )
}

// export async function getServerSideProps() {
//   let params = {
//     asset_type_id: "0",
//     sale_type_id: "1",
//     keyword: "",
//     is_new: 0,
//     limit: 20,
//     page: 1
//   }
//   let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//   const res = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getlistbytype?` + queryString)
//   let data = await res.json()

//   params = {
//     asset_type_id: "4",
//     sale_type_id: "0",
//     keyword: "",
//     is_new: 0,
//     limit: 20,
//     page: 1
//   }
//   queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//   const res2 = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getlistbytype?` + queryString)
//   const data2 = await res2.json()

//   // console.log(data2)
//   // const res2 = await fetch(`http://www.myhousinghome.net/api/asset/getOne?asset_id=2`)

//   // const data2 = await res2.json()
//   // console.log(data2)
//   return { props: { data, data2 } }
// }


export default index