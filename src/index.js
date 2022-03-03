import './index.css';
import { postData, getData } from './modules/addLeader.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2IsnnKTJEp8zyy2uRlee/scores';

document.querySelector('.btn-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const leaderName = document.querySelector('#leaderName').value;
  const leaderScore = document.querySelector('#leaderScore').value;

  const objLeader = {
    user: leaderName,
    score: leaderScore,
  };

  postData(url, objLeader);

  document.querySelector('#leaderName').value = '';
  document.querySelector('#leaderScore').value = '';
});

document.querySelector('.refresh_btn').addEventListener('click', (e) => {
  e.preventDefault();
  getData(url);
});