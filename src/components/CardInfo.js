/* eslint-disable react/react-in-jsx-scope */
import '../App.css';
import WikiButton from './WikiButton.js';

function CardInfo(props) {
  return(
    <div className ="card-container">
      <div className="card-title">{props.name}</div>
      <p className="card-text description">{props.description}</p>
      <p className="card-text lat-lon">Lat: {props.latitude} + Lon: {props.longitude} </p>
      <WikiButton wiki = {props.wiki}/>
    </div>
  );
}

export default CardInfo;