import "./PurchaseCard.css";
import { useNavigate } from "react-router";
export default function PurchaseCard({ item }) {
  let navigate = useNavigate();
  function details() {
    navigate("/purchases/" + item.id);
  }
  return (
    <div class="card" onClick={details}>
      <p>Email: {item.email}</p>
      <p>Name: {item.name}</p>
      <p>Total: ${item.total.toFixed(2)}</p>
    </div>
  );
}
