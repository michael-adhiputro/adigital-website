import Init from "../Init/Init";

const portfolios = [
    {
        name: "House of Beef",
        image: `${ Init.config.clientFolder }house-of-beef.png`,
    },
    {
        name: "YoboyCup",
        image: `${ Init.config.clientFolder }yoboycup.png`,
    },
    {
        name: "Sentosa Agri Prima",
        image: `${ Init.config.clientFolder }sap.png`,
    }
];

export const getPortfolio = () => {
    return portfolios;
}