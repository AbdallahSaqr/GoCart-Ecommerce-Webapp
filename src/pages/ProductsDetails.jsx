import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import StarRating from "../components/StarRating";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cart";
import axiosInstance from "../apis/config";

export default function ProductsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  const navigate = useNavigate();

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="card mb-3 border border-primary">
      <div className="row g-0">
        {/* Product Images Carousel */}
        <div className="col-md-6">
          {product?.images?.length > 0 && (
            <div
              id={`carousel-${product.id}`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <img
                      src={img}
                      className="img-fluid rounded h-50 w-95"
                      alt={`${product?.title} ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>

              {product.images.length > 1 && (
                <>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${product.id}`}
                    data-bs-slide="prev"
                    style={{ filter: "invert(1)" }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${product.id}`}
                    data-bs-slide="next"
                    style={{ filter: "invert(1)" }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title">{product?.title}</h2>
            <h5 className="card-title text-muted">{product?.brand}</h5>
            <p className="card-text">{product?.description}</p>

            {/* Price Section */}
            <div className="my-3">
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <del>${product.price?.toFixed(2)}</del>
                <small style={{ color: "red", fontWeight: "600" }}>
                  -{product?.discountPercentage}%
                </small>
              </div>
              <div>
                <h4 className="text-success mt-1">${discountedPrice}</h4>
              </div>
            </div>

            {/* Rating, Stock, Tags */}
            <div className="mb-3">
              <div>
                {product?.rating ? (
                  <StarRating rating={product.rating} />
                ) : (
                  "No rating"
                )}
              </div>
              <p>
                <strong>Stock:</strong> {product?.stock} units available
              </p>
              {product?.tags?.length > 0 && (
                <p>
                  <strong>Category:</strong> {product.tags.join(", ")}
                </p>
              )}
            </div>

            {/* Dimensions */}
            {product?.dimensions && (
              <div className="mt-3">
                <h5>Dimensions</h5>
                <ul className="list-group">
                  {product.dimensions.width && (
                    <li className="list-group-item">
                      Width: {product.dimensions.width} cm
                    </li>
                  )}
                  {product.dimensions.height && (
                    <li className="list-group-item">
                      Height: {product.dimensions.height} cm
                    </li>
                  )}
                  {product.dimensions.depth && (
                    <li className="list-group-item">
                      Depth: {product.dimensions.depth} cm
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="card-body">
        {/* Reviews */}
        <div className="mt-4">
          <h4 className="mb-4">Customer Reviews</h4>
          {product?.reviews?.length > 0 ? (
            product.reviews.map((review, idx) => (
              <div key={idx} className="border rounded p-3 my-2">
                <div className="d-flex justify-content-between">
                  <h6>{review.reviewerName}</h6>
                  <div>
                    {product?.rating ? (
                      <StarRating rating={review.rating} />
                    ) : (
                      "No rating"
                    )}
                  </div>
                </div>
                <p className="mb-1">{review.comment}</p>
                <small className="text-muted">
                  {new Date(review.date).toLocaleDateString()}
                </small>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>

        {/* Warranty and Shipping */}
        <div className="mt-4">
          <h5>Warranty & Shipping</h5>
          <p>
            <strong>Warranty:</strong> {product?.warrantyInformation || "N/A"}
          </p>
          <p>
            <strong>Shipping:</strong> {product?.shippingInformation || "N/A"}
          </p>
        </div>

        {/* Minimum Order & Return Policy */}
        <div className="mt-3">
          <p>
            <strong>Minimum Order Quantity:</strong>{" "}
            {product?.minimumOrderQuantity || "N/A"}
          </p>
          <p>
            <strong>Return Policy:</strong> {product?.returnPolicy || "N/A"}
          </p>
        </div>

        {/* Meta Info and Buttons */}
        <div className="d-flex justify-content-between align-items-start flex-wrap mt-3">
          {/* Left: Meta Info */}
          {product?.meta && (
            <div>
              <p>
                <strong>Created:</strong>{" "}
                {new Date(product.meta.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Updated:</strong>{" "}
                {new Date(product.meta.updatedAt).toLocaleString()}
              </p>
              <p>
                <strong>Serial:</strong> <small>{product.meta.barcode}</small>
              </p>
            </div>
          )}

          {/* Right: QR & Buttons */}
          {product?.meta?.qrCode && (
            <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
              <img
                src={product.meta.qrCode}
                alt="QR Code"
                style={{ height: "100px" }}
              />
              <input
                type="button"
                value="Add to Cart"
                className="btn btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  dispatch(addItem(product));
                }}
              />
              <input
                type="button"
                value="Buy Now"
                className="btn btn-success"
                onClick={() => {
                  navigate("/cart");
                  dispatch(addItem(product));
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
