// eslint-disable-next-line react/prop-types
export default function Fruit({ emoji, name, price }) {
    return (
        <li>
            {emoji}
            {name}
            ${price}
        </li>
    );
}