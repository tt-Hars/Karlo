import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import LandingRightDetails from "../../../utils/models/LandingRightDetails";
import landingData from "../../../utils/services/Landing";
import LandingLeft from "./LandingLeft";
import LandingRight from "./LandingRight";
import './Landing.scss';

const Landing = () => {
    const [items, setItem] = React.useState<LandingRightDetails[] | null>(null);

    useEffect(() => {
        landingData.then((response) => {
      setItem(response.data);
    });
  }, []);
  
    const details: LandingRightDetails[] | null = items;// new Array<LandingRightDetails>();
    return (
        <Row className="Landing vh-100 align-items-center">
            <Col className="d-flex justify-content-center vh-100 align-items-center" xs={12} sm = {12} md = {6} lg = {6} xl = {6}>
               <LandingLeft></LandingLeft>
            </Col>
            <Col className="bg-dark text-light d-flex justify-content-center vh-100 align-items-center" xs= {12} sm = {12} md = {6} lg = {6} xl = {6}>
                <LandingRight details={details}></LandingRight>
            </Col>
        </Row>
    )
}
export default Landing;