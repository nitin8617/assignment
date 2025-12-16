import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "./AddCard.css"
import "./AddCard.css"; // import CSS

export default function AddCard() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async e => {
    e.preventDefault();

    if (!form.title || !form.description || !form.image) {
      alert("All fields required");
      return;
    }

    await api.post("/cards", form);
    alert("Card Added");
    navigate("/");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input 
        name="title" 
        placeholder="Title" 
        value={form.title}
        onChange={handleChange} 
      />
      <input 
        name="image" 
        placeholder="Image URL" 
        value={form.image}
        onChange={handleChange} 
      />
      <textarea 
        name="description" 
        placeholder="Description" 
        value={form.description}
        onChange={handleChange} 
      />
      <button type="submit">Add Card</button>
    </form>
  );
}
