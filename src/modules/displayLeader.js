const displayLeader = (data) => {
  const newLeader = document.querySelector('.table_item');

  while (newLeader.hasChildNodes()) {
    newLeader.removeChild(newLeader.lastChild);
  }
  data.result.sort((a, b) => a.score - b.score);

  for (let i = 0; i < data.result.length; i++) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
              <td>${data.result[i].user}</td>
              <td>: ${data.result[i].score}</td>
          `;
    newLeader.appendChild(newRow);
  }
};

export default displayLeader;