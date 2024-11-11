import Fruit from "./Fruit";

const Fruits = () => {
    {/* An array of fruits */ }
    const fruits = [
        {
            name: "Apple",
            price: 2.00,
            emoji: "🍎"
        },
        {
            name: "Banana",
            price: 1.00,
            emoji: "🍌"
        },
        {
            name: "Grapes",
            price: 4.00,
            emoji: "🍇"
        },
        {
            name: "Orange",
            price: 3.00,
            emoji: "🍊"
        },
        {
            name: "Strawberry",
            price: 5.00,
            emoji: "🍓"
        }
    ];

    return (
        <div>
            <h1>Fruits List</h1>
           {/* <table>
            <thead>
                <tr>
                    <th>Emoji</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {fruits.map(fruit => (
                    <tr key={fruit.name}>
                        <td>{fruit.emoji}</td>
                        <td>{fruit.name}</td>
                        <td>${fruit.price}</td>
                    </tr>
                ))}
            </tbody>
           </table> */}
           <ul>
            {
                fruits.map(fruit => (
                    <Fruit key={fruit.name} name={fruit.name} emoji={fruit.emoji} price={fruit.price} />
                ))
            }
           </ul>
        </div>
    );
}

export default Fruits;