import React from 'react'
import { useState } from "react"
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import useTranslation  from 'next-translate/useTranslation'
import Head from 'next/head'


const testredux = (props) => {
    // console.log(props);
    const xname = props.userInfo.name
    const { setInfo } = props;
    const [name, setName] = useState(xname)
    const { t, lang } = useTranslation('common')
    

    return (
        <div>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <h1>{t('oaun')}</h1>
            <h1>Hello test Redux : with : {xname}</h1>
            <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button
                onClick={() => setInfo(name)}>
                Submit
          </button>
        </div>
    )
}

const mapStateToProps = state => ({
    userInfo: state.main
})

const mapDispatchToProps = {
    setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(testredux)
