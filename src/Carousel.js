
import picone from "./img/1.jpg"
import pictwo from "./img/2.jpg"
import pictre from "./img/3.jpg"
import './Carousel.css';



function Carousel(){
    return(
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pictre} className="car-img" alt="a"></img>
    </div>
    <div className="carousel-item">
      <img src={picone} className="car-img" alt="b"></img>
    </div>
    <div className="carousel-item">
      <img src={pictwo} className="car-img" alt="c"></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousel