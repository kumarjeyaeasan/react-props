import React from "react";
import Cards from "./Cards";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Cards
        title={contacts[0].name}
        imgSrc={contacts[0].imgURL}
        ph={contacts[0].phone}
        email={contacts[0].email}
      />
      <Cards
        title={contacts[1].name}
        imgSrc={contacts[1].imgURL}
        ph={contacts[1].phone}
        email={contacts[1].email}
      />
      <Cards
        title={contacts[1].name}
        imgSrc={contacts[1].imgURL}
        ph={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
