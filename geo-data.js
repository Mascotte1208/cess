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
            pdf: 'geo-chapitre-1.pdf',
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
            pdf: 'geo-chapitre-2.pdf',
            cours: `
                <h4>🔹 Une ressource vitale inégalement répartie</h4>
                <p>L'eau douce est rare (2,5% de l'eau totale). Sa répartition dépend des climats et des fleuves. Certaines régions subissent un stress hydrique.</p>
                <br>
                <h4>🔹 Exemple : Mexico</h4>
                <p>Mexico puise son eau dans des nappes souterraines qui s'assèchent, provoquant l'affaissement de la ville, malgré des pluies abondantes.</p>
            `,
            objectifs: [
                'Décrire la répartition de la ressource en eau',
                'Comprendre les enjeux liés à l\'accès à l\'eau'
            ],
            matieres: [
                'Ressources en eau',
                'Stress hydrique',
                'Aménagements pour l\'accès à l\'eau'
            ],
            exercices: [
                { question: 'Qu\'est-ce qu\'une nappe aquifère ?', options: ['Réserve d\'eau souterraine', 'Un fleuve', 'Un lac', 'Une usine'], correct: 0, correction: 'C\'est une réserve d\'eau souterraine.' }
            ]
        }
    ]
};
