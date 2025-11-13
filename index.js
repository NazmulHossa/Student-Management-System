// script.js
let students = [];
let editingIndex = null;

const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;

  if (editingIndex === null) {
    // Add new student
    students.push({ name, age, grade });
  } else {
    // Update student
    students[editingIndex] = { name, age, grade };
    editingIndex = null;
  }

  studentForm.reset();
  displayStudents();
});

function displayStudents() {
  studentList.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td>
        <button class="btn-edit" onclick="editStudent(${index})">Edit</button>
        <button class="btn-delete" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    studentList.appendChild(row);
  });
}

function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("age").value = student.age;
  document.getElementById("grade").value = student.grade;
  editingIndex = index;
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
