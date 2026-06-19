import { PROPERTIES } from "./../data";
import "./Properties";

function Properties() {
    return (
        <div>
            <h1>Properties</h1>
            {PROPERTIES.map((propertyObj) => {
                return (
                    <div className="property" key={propertyObj.id}>
                        <h2>{propertyObj.title}</h2>
                        <p>{propertyObj.address}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Properties;