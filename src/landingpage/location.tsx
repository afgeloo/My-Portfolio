import './location.css';

function Location() {
  return (
    <div>
      <p className="location">Located<br />in Manila</p>
    </div>
  );
}

function LocationPlaceHolder() {
  return (
    <div className="circle-container">
      <div className="circle">
        <div className="inner-circle">
          <img src="./src/assets/others/Globe.png" alt="Spinning Globe" />
        </div>
        <Location />
      </div>
    </div>
  );
}

export default LocationPlaceHolder;
