import { Container, List } from "semantic-ui-react";
import { useState } from "react";
import "./index.css";
import { Pet } from "./components/Pet";
function Pets() {
  const [pets, setPets] = useState([
    {
      otype: "Pet",
      oid: "Pet1",
      birthday: 1672520400,
      home: true,
      name: "Chase",
      owner: "User666",
    },
    {
      otype: "Pet",
      oid: "Pet2",
      birthday: 1677099600,
      home: true,
      name: "Marshall",
      owner: "User666",
    },
    {
      otype: "Pet",
      oid: "Pet3",
      birthday: 1678222800,
      home: false,
      name: "Wally",
      owner: "User13",
    },
  ]);
  const [owners, setOwners] = useState([
    {
      name: "Cap'n Turbot",
      oid: "User13",
      otype: "User",
    },
    {
      name: "Rider",
      oid: "User666",
      otype: "User",
    },
  ]);

  return (
    <div className="Pets">
      <Container text>
        <List divided verticalAlign="middle">
          {pets.map((pet) => (
            <Pet
              key={pet.oid}
              pet={pet}
              owner={owners.find((owner) => owner.oid === pet.owner)}
            />
          ))}
        </List>
      </Container>
    </div>
  );
}

export default Pets;
