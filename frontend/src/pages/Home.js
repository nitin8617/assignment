import { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCards = () => {
    api.get("/cards")
      .then(res => setCards(res.data))
      .finally(() => setLoading(false));
  };

  const deleteCard = async id => {
    await api.delete(`/cards/${id}`);
    loadCards();
  };

  useEffect(loadCards, []);

  if (loading) return <Loader />;

  return (
    <div className="grid">
      {cards.map(c => (
        <Card key={c._id} item={c} onDelete={deleteCard} />
      ))}
    </div>
  );
}
