import React from 'react'
import { useRouter } from "next/router"

const asset_item = () => {
    const router = useRouter()
    const { asset_id } = router.query
    return (
        <div>
            id: {asset_id}
        </div>
    )
}

export default asset_item
