function ProfilePic() {
    const imgUrl = "./src/assets/Ja.jpg"

    const handleClick = (e) => e.target.style.display = "none"

    return(<img onClick={(e) => handleClick(e)} src={imgUrl}></img>)
}

export default ProfilePic