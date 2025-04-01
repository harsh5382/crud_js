let users = JSON.parse(localStorage.getItem("users")) || [];

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function displayUsers() {
  const userTable = document.getElementById("userTable");
  userTable.innerHTML = "";

  users.forEach((user, index) => {
    const row = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>
                <button class="edit" onclick="editUser(${index})">Edit</button>
                <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </td>
        </tr>`;
    userTable.innerHTML += row;
  });
}
