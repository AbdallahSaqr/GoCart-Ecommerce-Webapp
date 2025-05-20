import { Link } from "react-router";
import StarRating from "../components/StarRating";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cart";

export default function ProductCard({ data }) {
  const product = data;
  const dispatch = useDispatch();
  return (
    <>
      <Link
        to={`/ProductsDetails/${product.id}`}
        className="text-decoration-none p-3"
      >
        <div
          className="card border-primary border"
          style={{ width: "14rem", height: "20rem" }}
        >
          <div className="position-relative">
            <img src={product.thumbnail} className="card-img-top" />
            <span
              className={`badge rounded-pill position-absolute top-0 end-0 m-2 px-2 py-1 small d-flex align-items-center justify-content-center ${
                product.availabilityStatus === "In Stock"
                  ? "text-bg-success"
                  : "text-bg-danger"
              }`}
              style={{ zIndex: 1 }}
            >
              {product.availabilityStatus}
            </span>
          </div>

          <div className="card-body row ">
            <h6 className="card-title col-7 text-truncate">{product.title}</h6>
            <h6 className="card-text text-end col-5">{product.price} $</h6>

            <div className="d-flex justify-content-between align-items-center mt-2">
              {product?.rating ? (
                <StarRating rating={product.rating} />
              ) : (
                <small className="text-muted">No rating</small>
              )}

              <button
                type="button"
                className="btn btn-primary btn-sm"
                style={{
                  "--bs-btn-padding-y": ".25rem",
                  "--bs-btn-padding-x": ".5rem",
                  "--bs-btn-font-size": ".75rem",
                }}
                onClick={(e) => {
                  e.stopPropagation(); 
                  e.preventDefault();
                  dispatch(addItem(product));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
