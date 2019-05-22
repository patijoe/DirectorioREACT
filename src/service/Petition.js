const ENDPOINT = 'https://randomuser.me/api/?results=5';

const fetchPetition = () => 
  fetch(ENDPOINT)
  .then(response => response.json());

  export {fetchPetition};