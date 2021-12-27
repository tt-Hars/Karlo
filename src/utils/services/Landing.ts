import axios from 'axios';
import LandingRightDetails from '../models/LandingRightDetails';

const landingData =  axios.get<LandingRightDetails[]>('LandingDetailsRight.json')

export default landingData;