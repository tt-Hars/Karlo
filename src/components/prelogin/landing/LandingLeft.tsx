import { Stack } from "react-bootstrap"
import Loader from './circular.svg'

const LandingLeft = () => {
    return (
        <Stack className="align-items-center justify-content-center" gap={1}>
            <h1 className="display-1" style={{fontWeight: "600", color:"rgb(221, 218, 197)", textTransform: "uppercase"}}>
                hey there!
            </h1>
            <h2 className="display-5" style={{fontWeight: "600", textTransform: "uppercase"}}>
                kya karoge?
            </h2>
            <div className="d-flex align-items-center justify-content-center">
                <img className="rotate animate-loader" style={{width:"50px", height:"50px"}} src={Loader} alt="" />
            </div>
    </Stack>
    )
}

export default LandingLeft;