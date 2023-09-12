const { response } = require("express");

const axios = require('axios');

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

    this.api = axios.create({
      baseURL: this.BASE_URL,
    })
  }

  getFullList() {
    return this.api

      .get('/characters')

      .then((response) => {
       console.log(response.data);
        return response.data; 
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        throw error;
      });
  }

  getOneRegister(id) {
    return this.api

      .get(`/characters/${id}`)

      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
       console.error(`Error fetching character with ID ${id}:`, error);
        throw error;
      });
  }

  createOneRegister(characterInfo) {
    return this.api

      .post('/characters', characterInfo) 

      .then((response) => {
        console.log('Character created:', response.data);
        return response.data; 
      })
      .catch((error) => {
       console.error('Error creating character:', error);
        throw error;
      });
  }


  updateOneRegister(id, characterInfo) {
    return this.api

      .patch(`/characters/${id}`, characterInfo)

      .then((response) => {
      
        console.log('Character updated:', response.data);
        return response.data;
      })
      .catch((error) => {
        
        console.error(`Error updating character with ID ${id}:`, error);
        throw error;
      });
  }


  deleteOneRegister(id) {
    return this.api
      .delete(`/characters/${id}`) 

      .then((response) => {
        
        console.log('Character deleted:', response.data);
        return 'Character has been successfully deleted';
      })
      .catch((error) => {
        console.error(`Error deleting character with ID ${id}:`, error);
        throw error;
      });
  }
}

