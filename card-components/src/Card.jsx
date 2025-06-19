import profilePic from "./assets/Kobe.jpg"

function Card() {
    return(
        <div className="card">
            <img className="img" alt="Kobe Bean Bryant" src={profilePic}></img>
            <h2 className="title">Black Mamba</h2>
            <p className="para">He is a Professional NBA Basketball Player, which he is in same team with Shaq. Unfortunately, he died in a Helicopter Crash</p>
        </div>
    )
}

export default Card