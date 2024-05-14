//Knapp component för att sortera alfalbetiskt och betyg mässigt
const Button = ({ onClick, children }) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;