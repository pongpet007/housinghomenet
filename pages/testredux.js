import React from 'react'
import { useState } from "react"
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"

const testredux = (props) => {
    console.log(props);
    const xname  = props.userInfo.name
    const { setInfo } = props;
    const [name, setName] = useState(xname)

    return (
        <div>
            <h1>Hello test Redux : with : { name }</h1>
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
