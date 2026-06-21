import "./PropertyDetails.css"
import { useParams } from "react-router";
import { useState } from "react";

function PropertyDetails() {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});
  return (
    <div>
      <h1>Property details: { id } </h1>
    </div>
  )
}

export default PropertyDetails
