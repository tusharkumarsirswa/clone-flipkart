import React from 'react'

function SlidingImage() {
  return (
    <div className='slide'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://smartslider3.com/wp-content/uploads/slider/cache/2eac36426bb7c29a06cdd9f1fc93aea9/fullwidth-product-slider1.jpg" className=" mx-auto d-block slideimg" width="1200px"  height="500vh"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.via.com/static/dynimg/search_page/76/normal/1044046495-1044046494_intl-banner-994x415jpg.jpg" className=" mx-auto d-block  slideimg" width="1200px" height="500vh" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://casperblog.imgix.net/blog/wp-content/uploads/2020/11/original-foam-gallery-03-e1610138062906.jpg?auto=format" className=" mx-auto d-block slideimg" width="1200px" height="500vh" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default SlidingImage
