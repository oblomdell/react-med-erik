import Delete from "../images/delete.png"

const Movie = (props) => {
    return (
        <li key={props.index}>{props.title} {props.rating} <img src={Delete.src} onClick={() => {props.deleteMovie(props.index)}} class="delete-icon" /></li>
    )
}

export default Movie;