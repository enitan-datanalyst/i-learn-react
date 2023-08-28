import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Abosede')
    const [age, setAge] = useState(20)


    const handleClick = () => {
        console.log('hello, welcome');
    }
    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }
    const clickMe = () => {
        setName ('Enitan');
        setAge(30);
    }

    return (  
        <div className="homepage">
            <h1>Homepage</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={() => handleClickAgain('enny')}>click me again</button>
            <button onClick={clickMe}>click</button>
            <p>{name} is {age} years old</p>
        </div>
    );
}
 
export default Home;