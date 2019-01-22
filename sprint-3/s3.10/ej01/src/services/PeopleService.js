const API = "https://randomuser.me/api/?results=50";

const fetchPeople = () => fetch(API).then(response => response.json());

export { fetchPeople };