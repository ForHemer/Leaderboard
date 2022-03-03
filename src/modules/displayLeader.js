const displayLeader = () => {
  const newLeader = document.querySelector('.table_item');

  while (newLeader.hasChildNodes()) {
    newLeader.removeChild(newLeader.lastChild);
  }

  const leaders = JSON.parse(localStorage.getItem('leaders'));

  leaders.forEach((lead) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                <td>${lead.name}</td>
                <td>: ${lead.score}</td>
            `;
    newLeader.appendChild(newRow);
  });
};

export default displayLeader;