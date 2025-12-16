import { useNavigate } from "react-router-dom";

export default function Card({ item, onDelete }) {
  const navigate = useNavigate();

  return (
    <div style={{width:"300px"}} className="card">
      <img  src={item.image} alt="" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>

       

      <button onClick={() => onDelete(item._id)}>
        Delete
      </button>
    </div>
  );
}
