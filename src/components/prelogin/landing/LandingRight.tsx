import { Col } from "react-bootstrap";
import PropTypes from "prop-types"
import LandingRightDetails from "../../../utils/models/LandingRightDetails";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../Hooks";
import { setAuthState } from "../../../features/counter/Counter-slice";

const LandingRight = ({ details }: { details: LandingRightDetails[] | null }) => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    function setAuth(routeDetals: any) {
        dispatch(setAuthState())
        navigate(`/${routeDetals.path.substring(1)}`);
      }
    const itemHTML = details
        ? details.map((item: LandingRightDetails, idx: number) =>
            
                <Col style={item.grid_placement} className="box d-flex align-items-center justify-content-center m-2" key={item.id}>
                    {/* {JSON.stringify(item.grid_placement)} */}
                    <button className="btn btn-primary" onClick={(event: Event) => setAuth(item.route)}>
                        proceed
                    </button>
                </Col>
            
        ) : <div></div>

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