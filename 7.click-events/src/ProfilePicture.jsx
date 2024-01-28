function ProfilePicture() {
  const imageUrl = "./src/assets/profile.jpg";

  const handleClick = () =>
    console.log("aaaaaaah dont click me jajajjfdfsd dsff ");

  //   const handleClick = (e) => e.target.style.display = "none"

  return <img className="profile" onClick={handleClick} src={imageUrl}></img>;
}

export default ProfilePicture;
