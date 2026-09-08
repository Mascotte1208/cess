// =========================================================
// DONNÉES DU PROGRAMME DE GÉOGRAPHIE
// =========================================================

var GEO_CHAPITRES = {
    '3e': [
        {
            id: 'geo3_risques',
            titre: "1. Risques naturels & technologiques",
            desc: "Comprendre les aléas, la vulnérabilité et les aménagements.",
            niveau: '3e',
            icone: '🌋',
            color: '#0e7c86',
            cours: `
                <h4>🔹 La notion de "Risque"</h4>
                <p>Un <b>risque</b> est la rencontre entre un <b>aléa</b> (un phénomène naturel ou technologique dangereux) et un <b>enjeu</b> (la présence humaine, des infrastructures, des activités).</p>
                <p><b>Formule clé :</b> Risque = Aléa × Vulnérabilité</p>
                <br>
                <h4>🔹 Les types d'aléas</h4>
                <ul>
                    <li><b>Aléas naturels :</b> Séismes, volcans, cyclones, coulées de boue, inondations, sécheresses...</li>
                    <li><b>Aléas technologiques :</b> Pollution industrielle, explosion, rupture de barrage, accident nucléaire...</li>
                </ul>
                <br>
                <h4>🔹 La vulnérabilité</h4>
                <p>La <b>vulnérabilité</b> désigne la fragilité d'un territoire face à un aléa. Elle dépend de la densité de population, de la qualité des constructions, des infrastructures présentes, etc.</p>
                <br>
                <h4>🔹 L'aménagement du territoire</h4>
                <p>Pour se protéger, l'Homme met en place des <b>aménagements</b> : construction de digues, de barrages, de murs anti-inondations, plans d'évacuation, etc. Ces aménagements transforment le territoire et modifient la vulnérabilité.</p>
            `,
            objectifs: [
                'Distinguer un aléa naturel d\'un aléa technologique',
                'Comprendre la notion de vulnérabilité d\'un territoire',
                'Décrire la répartition spatiale d\'un risque'
            ],
            matieres: [
                'Aléas naturels et technologiques',
                'Vulnérabilité et enjeux',
                'Aménagements pour se prémunir des risques'
            ],
            exercices: [
                { question: 'Qu\'est-ce qu\'un aléa ?', options: ['Un phénomène dangereux', 'La population', 'Un aménagement', 'Un type de climat'], correct: 0, correction: 'L\'aléa est le phénomène dangereux lui-même.' },
                { question: 'Que désigne la vulnérabilité ?', options: ['La fragilité face à un aléa', 'La taille de la population', 'Le climat', 'Le nombre de routes'], correct: 0, correction: 'La vulnérabilité est la fragilité du territoire.' },
                { question: 'Un volcan sur une île déserte est un...', options: ['Aléa sans risque', 'Risque maximal', 'Aléa technologique', 'Aucun aléa'], correct: 0, correction: 'Pas d\'enjeu humain = pas de risque.' }
            ]
        },
        {
            id: 'geo3_volcans',
            titre: "2. Séismes & Volcans",
            desc: "La tectonique des plaques et les zones à risque.",
            niveau: '3e',
            icone: '🌍',
            color: '#c0392b',
            cours: `
                <h4>🔹 La tectonique des plaques</h4>
                <p>La surface de la Terre est divisée en plaques rigides qui se déplacent lentement. La plupart des séismes et des volcans se situent aux <b>frontières de ces plaques</b> (zones de convergence, de divergence ou de coulissage).</p>
                <br>
                <h4>🔹 Le "Cercle de feu" du Pacifique</h4>
                <p>C'est une zone de forte activité sismique et volcanique qui entoure l'océan Pacifique. Elle correspond aux limites de la plaque Pacifique.</p>
                <br>
                <h4>🔹 Vocabulaire</h4>
                <ul>
                    <li><b>Épicentre :</b> Point à la surface de la Terre où le séisme est le plus fort.</li>
                    <li><b>Magnitude :</b> Échelle de mesure de la force d'un séisme (échelle de Richter).</li>
                    <li><b>Nuée ardente :</b> Nuage de gaz et de cendres brûlantes qui dévale un volcan.</li>
                </ul>
            `,
            objectifs: [
                'Localiser les grandes zones sismiques et volcaniques',
                'Expliquer la répartition des séismes par le modèle de la tectonique des plaques',
                'Utiliser le vocabulaire spécifique (épicentre, magnitude...)'
            ],
            matieres: [
                'Tectonique des plaques',
                'Zones de subduction et de divergence',
                'Volcanisme effusif et explosif'
            ],
            exercices: [
                { question: 'À quoi est liée la répartition des séismes et des volcans ?', options: ['Aux frontières des plaques tectoniques', 'À la latitude', 'À l\'altitude', 'À la proximité des océans'], correct: 0, correction: 'Les frontières de plaques sont les zones les plus actives.' },
                { question: 'Que mesure la magnitude d\'un séisme ?', options: ['Sa force', 'Sa profondeur', 'Sa durée', 'Sa localisation'], correct: 0, correction: 'La magnitude mesure l\'énergie libérée par le séisme.' }
            ]
        }
    ],
    '4e': [
        {
            id: 'geo4_eau',
            titre: "1. L'accès à l'eau",
            desc: "Inégale répartition des ressources en eau et gestion.",
            niveau: '4e',
            icone: '💧',
            color: '#1d4ed8',
            cours: `
                <h4>🔹 Une ressource vitale inégalement répartie</h4>
                <p>L'eau douce est une ressource rare sur Terre (environ 2,5% de l'eau totale). Sa répartition dépend des climats, des précipitations, des fleuves et des nappes souterraines. Certaines régions sont très riches en eau, d'autres subissent un stress hydrique (manque d'eau).</p>
                <br>
                <h4>🔹 L'accès à l'eau potable</h4>
                <p>L'accès à l'eau potable est un enjeu majeur. La croissance démographique, l'urbanisation, l'agriculture intensive et le changement climatique augmentent la pression sur les ressources en eau.</p>
                <br>
                <h4>🔹 Exemple : Mexico</h4>
                <p>La ville de Mexico puise son eau dans des nappes souterraines qui s'assèchent, provoquant l'affaissement de la ville, malgré des pluies abondantes (souvent perdues ou polluées).</p>
            `,
            objectifs: [
                'Décrire la répartition de la ressource en eau',
                'Comparer population et ressource pour identifier des contraintes',
                'Comprendre les enjeux liés à l\'accès à l\'eau'
            ],
            matieres: [
                'Ressources en eau : nappes, fleuves, bassins hydrographiques',
                'Stress hydrique et désertification',
                'Aménagements pour l\'accès à l\'eau'
            ],
            exercices: [
                { question: 'Qu\'est-ce qu\'une nappe aquifère ?', options: ['Une réserve d\'eau souterraine', 'Un fleuve', 'Un lac artificiel', 'Une usine de traitement d\'eau'], correct: 0, correction: 'Une nappe aquifère est une réserve d\'eau souterraine.' },
                { question: 'Pourquoi Mexico s\'affaisse-t-elle ?', options: ['Car elle pompe trop d\'eau dans ses nappes souterraines', 'Car il y a trop de pluies', 'Car elle est située sur un volcan', 'Car elle est construite sur du sable'], correct: 0, correction: 'L\'épuisement des nappes souterraines provoque l\'affaissement du sol.' }
            ]
        }
    ]
};
