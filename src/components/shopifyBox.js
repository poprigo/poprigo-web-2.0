import BorderButton from "./borderButton";

export default function ShopifyBox({ }) {
    return (
        <div className="shopify-box">
            <div className="shopify-logo" />
            <Title text="Start Selling" />
            <Title text="Online Now With" />
            <Title text="Shopify" />
            <div className="space-container" />
            <BorderButton title="Open Store"
                showIcon={false}
                style={{ backgroundColor: "#212833", color: '#fffdfa' }} />
        </div>
    );
}

const Title = ({ text }) => (
    <h1 className="shopify-box-title">
        {text}
    </h1>
)