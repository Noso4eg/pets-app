import { Button, List, Icon } from "semantic-ui-react";
import { PetModal } from "./PetModal";
import { dateFormat } from "./Helpers";
export const Pet = ({ pet, owner }) => {
  function handleClick(oid) {
    Array.from(document.querySelectorAll(".pet")).forEach((el) =>
      el.classList.remove("active")
    );
    document.getElementById(oid).classList.add("active");
  }

  return (
    <List.Item
      className="pet"
      id={pet.oid}
      onClick={() => handleClick(pet.oid)}
    >
      <Icon name="paw" />
      <div className="info">
        <b>{pet.name}</b>
        <p>Питомец</p>
        <span>
          <List>
            <List.Item>
              Дата рождения:&emsp;{dateFormat(pet.birthday)}
            </List.Item>
            <List.Item>
              <Icon name="user" />
              Хозяин:&emsp;{owner.name}
            </List.Item>
          </List>
        </span>
      </div>
      <List.Content floated="right">
        <Button.Group size="tiny">
          <Button>Покормить морковкой</Button>
          <PetModal pet={pet} owner={owner} />
          <Button>Выключить</Button>
        </Button.Group>
      </List.Content>
    </List.Item>
  );
};
