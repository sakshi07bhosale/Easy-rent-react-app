import "./Properties";
import {PROPERTIES} from "./../data";

function Properties(){
    return (
        <div>
            <h1>Properties</h1>
            {PROPERTIES.map((propertyObj) => {
                return(
                    <div className="property" key={propertyObj.id}>
                        <h2>{propertyObj.title}</h2>
                        <p>{propertyObj.description}</p>
                    </div>
                );
            })}

        </div>

    );
}

export default Properties;