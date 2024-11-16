import "../components/Images.css";

const Image = ({ src, title, name }) => {
  return (
    <>
      <div className="image-container-new-component">
        <img className="img-new-component" src={src} alt={name} />
        <div className="overlay-new-component">
          <h3>{title}</h3>
          <p>More Details</p>
        </div>
      </div>

      {/* Right image fixed to the screen edge */}
      <div className="right-flower-image">
        <img src="../assests/right.png" alt="Right Flower" />
      </div>

      {/* Left image fixed to the screen edge */}
      <div className="left-flower-image">
        <img src="../assests/left-f.png" alt="Left Flower" />
      </div>
    </>
  );
};

export default Image;
