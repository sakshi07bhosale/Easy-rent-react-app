import "./PropertyDetails.css"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import DummuyImg from "./building.png";
import {PROPERTIES} from "./../data"

function PropertyDetails() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    const property = PROPERTIES.find((prop) => prop.id === parseInt(id));
    if (property) {
      setPropertyDetails(property);
    }
  }, [id]);

  return (
    <div>
      <img src={DummuyImg} alt="property" className="property-Img" />
      <h1>{propertyDetails.title ? propertyDetails.title : `Property ${id}`} {id}</h1>
      <p>{propertyDetails.address}</p>
      <p>{propertyDetails.propertyType}</p>
      <p>{propertyDetails.size}</p>
      <p>{propertyDetails.city}</p>
      <p>{propertyDetails.area}</p>
      <p>{propertyDetails.rent}</p>
      <p>{propertyDetails.furnished ? "Furnished" : "Unfurnished"}</p>
      <p>Amenities: {propertyDetails.amenities ? propertyDetails.amenities.join(", ") : "N/A"}</p>
      <p>Rating: {propertyDetails.rating}</p>
      <p>Review count: {propertyDetails.reviews}</p>
      <p>Owner: {propertyDetails.owner ? propertyDetails.owner.name : "N/A"}</p>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {propertyDetails.customerReviews && propertyDetails.customerReviews.length > 0 ? (
          propertyDetails.customerReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <div className="review-card-avatar">
                  {review.name.substring(0, 1).toUpperCase()}
                </div>
                <div className="review-card-author">
                  <strong>{review.name}</strong>
                  <span>{review.rating}★</span>
                </div>
              </div>
              <p>{review.comment}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))
        ) : (
          <p>No customer reviews yet.</p>
        )}
      </div>
    </div>
  )
}

export default PropertyDetails
