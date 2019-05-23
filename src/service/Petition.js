const ENDPOINT = 'https://randomuser.me/api/?results=5';

const petition = () => 
  fetch(ENDPOINT)
    .then(response => response.json());

export {petition};