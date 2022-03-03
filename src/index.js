import './index.css';
import addLeader from './modules/addLeader.js';
import displayLeader from './modules/displayLeader.js';

window.addEventListener('DOMContentLoaded', displayLeader);

document.querySelector('.btn-submit').addEventListener('click', (e) => {
  e.preventDefault();
  addLeader();

  document.querySelector('#leaderName').value = '';
  document.querySelector('#leaderScore').value = '';
});

document.querySelector('.refresh_btn').addEventListener('click', (e) => {
  e.preventDefault();
  displayLeader();
});