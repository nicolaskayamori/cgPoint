
function MinCard() {
    return (
        <div className="min-card">
            <img 
                src="./src/assets/images.jpeg" 
                alt="Lanche" 
                className="imgCard" 
            />
            <div className="info-card">
                <div className="circle"></div>
                <p className="title">BurguerEatsCG</p>
                <a className="profile" href="https://www.instagram.com/burguereatscg/">@burguereatscg</a>
                <p className="phone">83 98765-4321</p>
                <button className="seeMore">Veja mais ▼</button>
            </div>
        </div>
    );
}

export default MinCard;