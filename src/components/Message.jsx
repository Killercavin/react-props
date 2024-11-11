export default function Message(){

    // function to handle the button click
    const handleClick = () => {
        return console.log('Button clicked!!');
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}