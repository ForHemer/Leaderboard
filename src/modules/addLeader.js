const addLeader = () => {
    let leaders;
    const leaderName = document.querySelector('#leaderName').value;
    const leaderScore = document.querySelector('#leaderScore').value;
    if (localStorage.getItem('leaders') === null) {
      leaders = [];
    } else {
      leaders = JSON.parse(localStorage.getItem('leaders'));
    }
    const leaderObj = {
      name: leaderName,
      score: leaderScore,
    };
    leaders.push(leaderObj);
  
    localStorage.setItem('leaders', JSON.stringify(leaders));
  };
  
  export default addLeader;