import '../styles/Review.css';
import FiveStars from "../assets/Images/stars01.png"
import FourStars from "../assets/Images/stars02.png"
import ThreeStars from "../assets/Images/stars03.png"

function Review() {
    return (
        <>
            <div className="review-card">
                <p className="review-text">Super ce cours sur la momification, l&apos;époque égyptienne était géniale ! J&apos;ai appris tellement de choses fascinantes sur les anciennes pratiques funéraires.</p>
                <img src={FiveStars} alt="Rating stars" className="review-image" />
            </div>
            <div className="review-card">
                <p className="review-text">La médecine à la Renaissance était fascinante. Bien que certaines pratiques étaient un peu déconcertantes, c&apos;était incroyable de voir les débuts de la science moderne.</p>
                <img src={FourStars} alt="Rating stars" className="review-image" />
            </div>
            <div className="review-card">
                <p className="review-text">Les cours de philosophie grecque étaient incroyables. Discuter avec Socrate et Platon était une expérience enrichissante que je n&apos;oublierai jamais.</p>
                <img src={FiveStars} alt="Rating stars" className="review-image" />
            </div>
            <div className="review-card">
                <p className="review-text">Pas trop aimé le Moyen Âge, un peu effrayant, ils brûlent les gens sur le bûcher un peu trop souvent, mais c&apos;était une bonne expérience, merci. Les cours de chevalerie étaient toutefois très instructifs.</p>
                <img src={ThreeStars} alt="Rating stars" className="review-image" />
            </div>
        </>
    );
}

export default Review;