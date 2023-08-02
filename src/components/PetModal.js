import { Button, Modal, Checkbox, Form, Dropdown } from "semantic-ui-react";
import { useState } from "react";
import { dateFormat } from "./Helpers";
export const PetModal = ({ pet, owner }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Редактировать</Button>}
    >
      <Modal.Header>Редактирование питомца</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field required>
            <label>Кличка</label>
            <input placeholder="Кличка" defaultValue={pet.name} />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Домашнее животное" defaultChecked={pet.home} />
          </Form.Field>
          <Form.Field>
            <label>Дата рождения</label>
            <input
              placeholder="Дата рождения"
              defaultValue={dateFormat(pet.birthday)}
            />
          </Form.Field>
          <Form.Field>
            <label>Хозяин</label>
            <input placeholder="Хозяин" defaultValue={owner.name} />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Сохранить" onClick={() => setOpen(false)} positive />
        <Button color="grey" onClick={() => setOpen(false)}>
          Отмена
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
