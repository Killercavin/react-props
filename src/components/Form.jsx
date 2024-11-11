import { useState } from "react";

export default function Form(){

    const [name, setName] = useState({fName: "", lName: ""});

    return (
        <div>
            <form action="">
                <label htmlFor="fName">
                    First Name
                    <input type="text" id="fName" name="fName" value={name.fName} onChange={(e) => setName({...name, fName: e.target.value})}/>
                </label>
                <br /> <br />
                <label htmlFor="fName">
                    Last Name
                    <input type="text" id="lName" name="lName" value={name.lName} onChange={(e) => setName({...name, lName: e.target.value})}/>
                </label>

                <h2>First Name: {name.fName}</h2>
                <h2>Last Name: {name.lName}</h2>

                <button onClick={(e) => {e.preventDefault(); console.log(name)}}>Submit</button>
            </form>
        </div>
    );
}