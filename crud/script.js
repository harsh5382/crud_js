document.addEventListener("DOMContentLoaded", () => {
  displayUsers();

  document
    .getElementById("userForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const age = document.getElementById("age").value;
      const index = document.getElementById("userIndex").value;

      if (index === "") {
        users.push({ name, email, age });
      } else {
        users[index] = { name, email, age };
        document.getElementById("userIndex").value = "";
      }

      this.reset();
      saveUsers();
      displayUsers();
    });
});

function editUser(index) {
  document.getElementById("name").value = users[index].name;
  document.getElementById("email").value = users[index].email;
  document.getElementById("age").value = users[index].age;
  document.getElementById("userIndex").value = index;
}

function deleteUser(index) {
  users.splice(index, 1);
  saveUsers();
  displayUsers();
}
