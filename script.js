const getUsersBtn = document.getElementById('getUsersBtn');
const loader = document.getElementById('loader');
const userGrid = document.getElementById('userGrid');

getUsersBtn.addEventListener('click', () => {
  loader.style.display = 'block';
  userGrid.innerHTML = '';

  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      loader.style.display = 'none';
      data.data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = user.avatar;
        const name = document.createElement('h3');
        name.innerText = `${user.first_name} ${user.last_name}`;

        card.appendChild(img);
        card.appendChild(name);
        userGrid.appendChild(card);
      });
    })
    .catch(error => {
      loader.style.display = 'none';
      console.error(error);
    });
});
