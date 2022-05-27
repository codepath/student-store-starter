import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./Product.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useNavigate } from "react-router-dom";

export default function Product({ product, addCart, removeCart }) {
  let navigate = useNavigate();
  return (
    <div className="product">
      <div className="image">
        <img
          style={{ cursor: "pointer" }}
          src={product.image}
          alt="product cover"
          onClick={() => {
            navigate("/" + product.id);
          }}
        />
      </div>
      <div className="product-info">
        <div className="info">
          <p className="product-name">{product.name}</p>
          <span>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarHalfIcon />
          </span>

          <p className="product-price">{product.price}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <button class="transparent" onClick={() => addCart(product)}>
              <AddBoxIcon sx={{ color: "#02c385" }} />
            </button>
            <button class="transparent" onClick={() => removeCart(product)}>
              <IndeterminateCheckBoxIcon sx={{ color: "#02c385" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
