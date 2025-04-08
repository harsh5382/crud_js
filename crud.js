let users = [];

const saveData = () => {
  const storedData = localStorage.getItem("userInfo");
  const existingUsers = JSON.parse(storedData) || [];
  const nextId = existingUsers.length ? existingUsers.length + 1 : 1;

  const userName = document.getElementById("name").value;
  const userAge = document.getElementById("age").value;
  const userId = document.getElementById("userid").value;

  if (userId) {

    const updatedUsers = existingUsers.map((user) => {
      if (user.id == userId) {
        return {
          ...user,
          name: userName,
          age: userAge,
        };
      }
      return user;
    });
    users = updatedUsers;
  } else {

    const newUser = {
      id: nextId,
      name: userName,
      age: userAge,
    };
    users = [...existingUsers, newUser];
  }

  localStorage.setItem("userInfo", JSON.stringify(users));
  displayUsers();
  document.getElementById("userid").value = "";
  document.userfrm.reset();
};

const deleteData = (userId) => {
  const storedData = localStorage.getItem("userInfo");
  const existingUsers = JSON.parse(storedData) || [];

  const filteredUsers = existingUsers.filter((user) => user.id !== userId);
  localStorage.setItem("userInfo", JSON.stringify(filteredUsers));
  displayUsers();
};

const editData = (userId) => {
  const storedData = localStorage.getItem("userInfo");
  const existingUsers = JSON.parse(storedData) || [];

  const userToEdit = existingUsers.find((user) => user.id === userId);
  if (userToEdit) {
    document.getElementById("name").value = userToEdit.name;
    document.getElementById("age").value = userToEdit.age;
    document.getElementById("userid").value = userId;
  }
};

const displayUsers = () => {
  const storedData = localStorage.getItem("userInfo");
  const existingUsers = JSON.parse(storedData) || [];

  let tableRows = "";
  existingUsers.forEach((user) => {
    tableRows += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>
                    <button onclick="editData(${user.id})">Edit</button>
                    <button onclick="deleteData(${user.id})">Delete</button>
                </td>
            </tr>`;
  });

  document.getElementById("userdata").innerHTML = tableRows;
};

// Initial display when page loads
displayUsers();
