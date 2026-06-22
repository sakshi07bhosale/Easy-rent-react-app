import "./PropertyDetails.css"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import DummuyImg from "./building.png";
import {PROPERTIES} from "./../data"
import RatingStars from "../../components/RatingStars";
import { Plane,ShoppingBasket,TramFront,TrainFront,Hospital,School } from 'lucide-react';


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
      
      <div className="detail-rating">
        <RatingStars rating={propertyDetails.rating || 0} showScore={true} />
      </div>
      <p>Review count: {propertyDetails.reviews}</p>
      <p>Owner: {propertyDetails.owner ? propertyDetails.owner.name : "N/A"}</p>
      <div className="nearby-section">
        <h2>Nearby Places</h2>
        {propertyDetails.nearby ? (
            (() => {
              const entries = Object.entries(propertyDetails.nearby);
              const computeDistance = (idx) => {
                const base = ((propertyDetails.id || 0) % 5) + 1;
                const km = (base + (idx % 3) * 0.5).toFixed(1);
                return `${km} km`;
              };

              return (
                <div className="nearby-cards">
                  {entries.map(([key, name], idx) => (
                    <div className="nearby-card" key={key}>
                      <div className="nearby-card-left">
                        {key === 'airport' && <Plane className="nearby-icon" size={20} />}
                        {key === 'mall' && <ShoppingBasket className="nearby-icon" size={20} />}
                        {key === 'railwayStation' && <TramFront className="nearby-icon" size={20} />}
                        {key === 'metroStation' && <TrainFront className="nearby-icon" size={20} />}
                        {key === 'hospital' && <Hospital className="nearby-icon" size={20} />}
                        {key === 'school' && <School className="nearby-icon" size={20} />}
                      </div>
                      <div className="nearby-card-body">
                        <div className="nearby-card-title">{(() => {
                          switch (key) {
                            case 'airport': return 'Airport';
                            case 'mall': return 'Mall';
                            case 'railwayStation': return 'Railway Station';
                            case 'metroStation': return 'Metro Station';
                            case 'hospital': return 'Hospital';
                            case 'school': return 'School';
                            default: return key;
                          }
                        })()}</div>
                        <div className="nearby-card-place">{name}</div>
                      </div>
                      <div className="nearby-distance">{computeDistance(idx)}</div>
                    </div>
                  ))}
                </div>
              );
            })()
        ) : (
          <p>No nearby places available.</p>
        )}
      </div>
      <div className="customer-reviews">
        <div className="reviews-header-bar">
          <h2>Customer Reviews</h2>
          <span className="reviews-total">{propertyDetails.reviews || 0} reviews</span>
        </div>
        {propertyDetails.customerReviews && propertyDetails.customerReviews.length > 0 ? (
          propertyDetails.customerReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <div className="review-card-avatar">
                  {review.name.substring(0, 1).toUpperCase()}
                </div>
                <div className="review-card-author">
                  <strong>{review.name}</strong>
                  <RatingStars rating={review.rating} />
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))
        ) : (
          <p className="no-reviews">No customer reviews yet.</p>
        )}
      </div>
    </div>
  )
}

export default PropertyDetails
