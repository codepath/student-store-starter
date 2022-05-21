import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./Product.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
export default function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="product">
      <div className="image">
        <img src={product.image} alt="product cover" />
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
            <AddBoxIcon sx={{ color: "#02c385" }} />
            <IndeterminateCheckBoxIcon sx={{ color: "#02c385" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
