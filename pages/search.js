
import { useRouter } from "next/router"
import countrys from '../data/db.json'



const search = () => {
    const router = useRouter()
    const x = router.query
    // console.log(countrys)
    // console.log(x)
    return (
        <div>
            <Head_meta/>
            {/* <h1>Search</h1>
            <ul>
                {countrys.data.map((country => <li>{country[0]}</li>

                )}
            </ul> */}
        </div>
    )
}

export default search
