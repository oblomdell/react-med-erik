import Delete from "../images/delete.png"
import Star from "../images/star.png"

const insertStars = (rating) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<img src={Star.src} alt="Star" />);
    } return stars;
  };

const Movie = (props) => {
    return (
        <li key={props.index}>{props.title} {insertStars(props.rating)} <img src={Delete.src} onClick={() => {props.deleteMovie(props.index)}} class="delete-icon" /></li>
    )
}

export default Movie;