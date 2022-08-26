import React, { useEffect, useState } from "react";
import "./index.css";
console.clear();

function App() {
const [addresses, setAddresses] = useState([]);
const [isHidden, setIsHidden] = useState(true);

// Async / Await fetch!!!
async function getAddresses() {
const response = await fetch("https://randomuser.me/api?results=25");
const data = await response.json();

setAddresses(data.results);
}

useEffect(() => {
console.log("Mounted");
getAddresses();
}, []);

useEffect(() => {
console.log("Updated!");
console.log(addresses);
}, [addresses]);

const handleClick = () => {
console.log("Clicked");
setIsHidden(!isHidden);
};

return (
<div>
<h2>Address Book!</h2>
<ul className="addresses">
{addresses.map((address, index) => (
<li className="address" key={address.id.value + index}>
<h2>{address.name.first}</h2>
<img src={address.picture.thumbnail} alt={address.name.first} />
<button className="button" onClick={handleClick}>
{isHidden === true ? "Show details" : "Hide details"}
</button>
{!isHidden && <p>{address.email}</p>}
</li>
))}
</ul>
</div>
);
}

export default App;