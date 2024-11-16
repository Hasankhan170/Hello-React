
import Slider from "react-slick";
import "./TestimonialSlider.css"; // CSS included

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Kathryn Murphy",
      image: "../assests/tes.png",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      rating: 5,
    },
    {
      name: "John Doe",
      image: "../assests/tes.png",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: 4,
    },
    {
      name: "Jane Smith",
      image: "../assests/tes.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows for navigation
    autoplay: false,
  };

  return (
    <div className="testimonial-slider">
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p>{testimonial.text}</p>
            <div className="testimonial-rating">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
