import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  let [showModal, setShowModal] = useState(false);
  let [students, setStudents] = useState([]);

  let [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
  });

  let handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = () => {
    setStudents([...students, formData]); // Yangi studentni qo'shamiz
    setFormData({
      name: "",
      surname: "",
      age: "",
      email: "",
      phone: "",
      gender: "",
      course: "",
    }); // Formani tozalaymiz
    setShowModal(false); // Modalni yopamiz
  };

  let handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="App">
      <button className="add-btn" onClick={() => setShowModal(true)}>
        + Student Qo'shish
      </button>

      {/* Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>O'quvchilarni Ro'yxatga Olish</h2>
          <input
            type="text"
            name="name"
            placeholder="Ism"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Familiya"
            value={formData.surname}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Yosh"
            value={formData.age}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleInputChange}
          />

          <div className="gender">
            <label>
              <input
                type="checkbox"
                name="gender"
                value="Erkak"
                onChange={handleInputChange}
              />{" "}
              Erkak
            </label>
            <label>
              <input
                type="checkbox"
                name="gender"
                value="Ayol"
                onChange={handleInputChange}
              />{" "}
              Ayol
            </label>
          </div>

          <select
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          >
            <option value="">Kurslar</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full Stack Development</option>
          </select>

          <button className="submit-btn" onClick={handleSubmit}>
            Saqlash
          </button>
        </Modal>
      )}

      {/* Chap tomonda ma'lumotlar chiqariladi */}
      <div className="students-list">
        <h2>Ro'yxatga olingan studentlar</h2>
        {students.length > 0 ? (
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                {student.name} {student.surname} - {student.course} kursi (
                {student.gender})
                <button onClick={() => handleDelete(student.id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ro'yxatga hech qanday student yo'q !!!</p>
        )}
      </div>
    </div>
  );
}

export default App;
