import Init from "../Init/Init";

const products = [
    {
        shortName: "E-commerce",
        name: "E-commerce Platform",
        shortDesc: "We build e-commerce platforms that help businesses manage their online sales from end to end.",
        desc: "We build e-commerce platforms that help businesses manage their online sales from end to end. Our solutions include everything from intuitive storefront design and product management to integrated payment systems and logistics support. With built-in tools for handling orders, tracking shipments, and accepting various payment methods, we make it easier to run an online business smoothly and sustainably—without switching between platforms or relying on patchwork solutions.",
        icon: `${ Init.config.imageFolder }e-commerce.png`
    },
    {
        shortName: "Cooperative",
        name: "Cooperative System",
        shortDesc: "We develop digital koperasi system that help koperasi run more efficiently, transparently, and securely.",
        desc: "We develop digital koperasi system that help koperasi run more efficiently, transparently, and securely. From member registration and savings management to transaction monitoring and member cards, our system simplifies daily operations and reduces manual work. With features like digital bookkeeping, mobile access, and integrated monitoring tools, even traditional koperasi can make the leap into digital—without losing their community-focused values.",
        icon: `${ Init.config.imageFolder }cooperative.png`
    },
    {
        shortName: "Mini POS",
        name: "Mini POS System",
        shortDesc: "We build Mini POS systems designed to help businesses manage their operations in one integrated platform.",
        desc: "We build Mini POS systems designed to help businesses manage their operations in one integrated platform. From inventory, sales, and purchasing to finance and reporting, our ERP connects the dots across departments to reduce manual work and improve visibility. Tailored for growing SMEs, our solution is simple to use, affordable to maintain, and scalable as your business evolves.",
        icon: `${ Init.config.imageFolder }erp.png`
    },
];

export const getProducts = () => {
    return products;
}