import profilePic from "./assets/profile.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">subodh</h2>
      <p className="card-text">I Love to play guitar</p>
    </div>
  );
}

export default Card;
