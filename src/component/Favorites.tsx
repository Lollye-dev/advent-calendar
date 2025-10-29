import "./Favorites.css"

function Favorites ({favorites}: {favorites: string[]}) {
    return ( 
        <section className="favorites">
            <h2>Favoris ★</h2>
            <ul>
                {favorites.map((f, index) => (
                <li key={index}>{f}</li>
                ))}
            </ul>
        </section>
    )    
}

export default Favorites;