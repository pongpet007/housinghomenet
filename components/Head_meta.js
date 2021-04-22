import React from 'react'
import Head from 'next/head'
export default function Head_meta({title,keyword,description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={keyword} />
                <meta name="keywords" content={description} />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </Head>
        </div>
    )
}
