import React from "react";
import classes from "./PromoShoes.css"

const PromoShoes = () => {
    return (
        <section className={classes.bestDeal}>
            <h2>La meilleure offre du moment</h2>
            <p>Tous les jours nous offrons la possibilité d'acheter, la paire de votre choix à moitié prix. grace au code Day-50%</p>
        </section>
    )
}

export default PromoShoes;