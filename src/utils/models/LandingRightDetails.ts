export default interface LandingRightDetails{
    id: number;
    imgPath: string;
    linkDetails: string;
    heading: string;
    para: string;
    grid_placement: object;
    route: {
        path: string;
        params: object;
    };
}