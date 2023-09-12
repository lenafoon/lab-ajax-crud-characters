const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then((characters) => {      
      })
      .catch((error) => {
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.getElementById('character-id').value;
    charactersAPI

      .getOneRegister(characterId)
      .then((character) => {
      })
      .catch((error) => {
      });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterIdToDelete = document.getElementById('character-id-to-delete').value;
    charactersAPI

      .deleteOneRegister(characterIdToDelete)
      .then((result) => {
     })
      .catch((error) => {
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const characterDataToUpdate = {

      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occupation').value,
      weapon: document.getElementById('edit-weapon').value,
      cartoon: document.getElementById('edit-cartoon').checked,
    };

    const characterIdToEdit = document.getElementById('edit-id').value;
    charactersAPI

      .updateOneRegister(characterIdToEdit, characterDataToUpdate)
      .then((updatedCharacter) => {
      })
      .catch((error) => {
       });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const newCharacterData = {

      name: document.getElementById('new-name').value,
      occupation: document.getElementById('new-occupation').value,
      weapon: document.getElementById('new-weapon').value,
      cartoon: document.getElementById('new-cartoon').checked,
    };
    charactersAPI
    
      .createOneRegister(newCharacterData)
      .then((newCharacter) => {
      })
      .catch((error) => {
      });
  });
});
