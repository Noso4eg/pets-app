import { Container, List } from "semantic-ui-react";
import { useState, useEffect } from "react";
import "./index.css";
import { Pet } from "./components/Pet";
function Pets() {
  const backendURL = 'http://localhost:5000/'
  const [pets, setPets] = useState([])
  const [owners, setOwners] = useState([])


  //Get pets and pet owners
  const getPets = () => {
    fetch(backendURL + 'pets')
    .then((response) => response.json())
    .then((data => setPets(data)))
  }
  const getOwners = () => {
    fetch(backendURL + 'owners')
    .then((response) => response.json())
    .then((data => setOwners(data)))
  }

  useEffect(() => {
    getOwners()
    getPets()
    
  }, [])

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
