import { Col } from "react-bootstrap";
import PropTypes from 'prop-types'
import LandingRightDetails from "../../../utils/models/LandingRightDetails";


const LandingRight = ({ details }: { details: LandingRightDetails[] | null }) => {
    const itemHTML = details
        ? details.map((item: LandingRightDetails, idx: number) =>
            <>
                <Col style={item.grid_placement} className="box d-flex align-items-center justify-content-center m-2" key={item.id}>
                    {/* {JSON.stringify(item.grid_placement)} */}
                </Col>
            </>
        ) : <div></div>
    console.log(details)
    return (
        details
            ? <>{
                    <div className="d-grid" style={{ height: '80vh', width: '42vw' }}>
                        {itemHTML}
                    </div>
                }</>
            : <div></div>
    )
}

const propTypes = {
    details: PropTypes.array
}

LandingRight.propTypes = propTypes

export default LandingRight;