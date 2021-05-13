import React from 'react'
import Head from 'next/head'
export default function Head_meta({title,keyword,description}) {
    return (
        <div>
            <Head>
                <title>{title?title:'HousingHome ครบเรื่องบ้านและงานซ่อมบำรุง'}</title>
                <meta name="description" content={keyword?keyword:''} />
                <meta name="keywords" content={description?description:''} />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </Head>
        </div>
    )
}
