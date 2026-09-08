// =========================================================
// DONNÉES DU PROGRAMME DE GÉOGRAPHIE - VERSION ENRICHIE
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
                <p>Pour se protéger, l'Homme met en place des <b>aménagements</b> : construction de digues, de barrages, de murs anti-inondations, plans d'évacuation, etc.</p>
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
                <p>La surface de la Terre est divisée en plaques rigides qui se déplacent lentement. La plupart des séismes et des volcans se situent aux <b>frontières de ces plaques</b>.</p>
                <br>
                <h4>🔹 Le "Cercle de feu" du Pacifique</h4>
                <p>Zone de forte activité sismique et volcanique qui entoure l'océan Pacifique. Elle correspond aux limites de la plaque Pacifique.</p>
                <br>
                <h4>🔹 Vocabulaire</h4>
                <ul>
                    <li><b>Épicentre :</b> Point à la surface où le séisme est le plus fort.</li>
                    <li><b>Magnitude :</b> Force d'un séisme (échelle de Richter).</li>
                    <li><b>Nuée ardente :</b> Nuage de gaz et de cendres brûlantes.</li>
                </ul>
            `,
            objectifs: [
                'Localiser les grandes zones sismiques et volcaniques',
                'Expliquer la répartition des séismes par la tectonique des plaques',
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
        },
        {
            id: 'geo3_population',
            titre: "3. Population & Urbanisation",
            desc: "Répartition de la population et croissance des villes.",
            niveau: '3e',
            icone: '🏙️',
            color: '#3182ce',
            cours: `
                <h4>🔹 La répartition de la population</h4>
                <p>La population mondiale est très inégalement répartie. On trouve des <b>foyers de peuplement</b> (Asie de l'Est, Europe, Asie du Sud) et des zones très peu peuplées (déserts, hautes montagnes, forêts denses).</p>
                <br>
                <h4>🔹 L'urbanisation</h4>
                <p>C'est l'augmentation de la proportion de la population qui vit en ville. Aujourd'hui, plus de la moitié de l'humanité vit en ville. On parle de <b>métropolisation</b> quand les grandes villes concentrent de plus en plus de fonctions et de population.</p>
                <br>
                <h4>🔹 Vocabulaire</h4>
                <ul>
                    <li><b>Densité de population :</b> nombre d'habitants au km².</li>
                    <li><b>Exode rural :</b> départ des campagnes vers les villes.</li>
                    <li><b>Mégalopole :</b> vaste ensemble urbain continu.</li>
                </ul>
            `,
            objectifs: [
                'Localiser les grands foyers de peuplement',
                'Comprendre le processus d\'urbanisation',
                'Utiliser le vocabulaire de la population'
            ],
            matieres: [
                'Répartition de la population mondiale',
                'Urbanisation et métropolisation',
                'Densité et exode rural'
            ],
            exercices: [
                { question: 'Qu\'est-ce que l\'urbanisation ?', options: ['L\'augmentation de la population urbaine', 'La construction de routes', 'Le départ vers les campagnes', 'La baisse de la population'], correct: 0, correction: 'L\'urbanisation est la croissance de la part de population vivant en ville.' },
                { question: 'Qu\'est-ce qu\'une densité de population ?', options: ['Le nombre d\'habitants au km²', 'Le nombre total d\'habitants', 'La superficie d\'un pays', 'Le taux de natalité'], correct: 0, correction: 'La densité = nombre d\'habitants divisé par la superficie.' }
            ]
        },
        {
            id: 'geo3_climats',
            titre: "4. Climats et milieux",
            desc: "Les grands climats de la Terre et leurs caractéristiques.",
            niveau: '3e',
            icone: '🌡️',
            color: '#38a169',
            cours: `
                <h4>🔹 Les grands types de climats</h4>
                <ul>
                    <li><b>Climat équatorial :</b> chaud et très humide toute l'année (forêt amazonienne).</li>
                    <li><b>Climat tropical :</b> saison sèche et saison des pluies.</li>
                    <li><b>Climat désertique :</b> très sec, grandes amplitudes thermiques.</li>
                    <li><b>Climat méditerranéen :</b> étés chauds et secs, hivers doux et pluvieux.</li>
                    <li><b>Climat océanique :</b> doux et humide (Belgique).</li>
                    <li><b>Climat continental :</b> hivers froids, étés chauds.</li>
                    <li><b>Climat polaire :</b> très froid toute l'année.</li>
                </ul>
                <br>
                <h4>🔹 Facteurs du climat</h4>
                <p>Latitude, altitude, distance à la mer, courants marins et relief influencent le climat d'un lieu.</p>
            `,
            objectifs: [
                'Reconnaître les grands types de climats',
                'Relier climat et végétation',
                'Comprendre les facteurs qui influencent le climat'
            ],
            matieres: [
                'Types de climats',
                'Facteurs climatiques',
                'Milieux naturels'
            ],
            exercices: [
                { question: 'Quel climat caractérise la Belgique ?', options: ['Océanique', 'Méditerranéen', 'Désertique', 'Équatorial'], correct: 0, correction: 'La Belgique a un climat océanique : doux et humide.' },
                { question: 'Quel climat est chaud et humide toute l\'année ?', options: ['Équatorial', 'Désertique', 'Polaire', 'Continental'], correct: 0, correction: 'Le climat équatorial est chaud et très humide toute l\'année.' }
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
                <p>L'eau douce représente seulement environ 2,5 % de l'eau totale sur Terre. Sa répartition dépend des climats, des précipitations et des nappes souterraines.</p>
                <br>
                <h4>🔹 Stress hydrique</h4>
                <p>Quand la demande en eau dépasse les ressources disponibles, on parle de <b>stress hydrique</b>. Cela touche de nombreuses régions arides et semi-arides.</p>
                <br>
                <h4>🔹 Exemple : Mexico</h4>
                <p>La ville pompe trop d'eau dans ses nappes souterraines, ce qui provoque l'affaissement du sol.</p>
            `,
            objectifs: [
                'Décrire la répartition de la ressource en eau',
                'Comprendre la notion de stress hydrique',
                'Identifier les enjeux liés à l\'accès à l\'eau'
            ],
            matieres: [
                'Ressources en eau',
                'Stress hydrique',
                'Gestion de l\'eau'
            ],
            exercices: [
                { question: 'Qu\'est-ce qu\'une nappe aquifère ?', options: ['Une réserve d\'eau souterraine', 'Un fleuve', 'Un lac artificiel', 'Une usine de traitement'], correct: 0, correction: 'Une nappe aquifère est une réserve d\'eau souterraine.' },
                { question: 'Pourquoi Mexico s\'affaisse-t-elle ?', options: ['Car elle pompe trop d\'eau dans ses nappes', 'Car il y a trop de pluies', 'Car elle est sur un volcan', 'Car elle est construite sur du sable'], correct: 0, correction: 'L\'épuisement des nappes provoque l\'affaissement du sol.' }
            ]
        },
        {
            id: 'geo4_energie',
            titre: "2. Les ressources énergétiques",
            desc: "Énergies fossiles, renouvelables et transition énergétique.",
            niveau: '4e',
            icone: '⚡',
            color: '#d69e2e',
            cours: `
                <h4>🔹 Les énergies fossiles</h4>
                <p>Pétrole, gaz naturel et charbon. Elles sont non renouvelables et émettent beaucoup de CO₂.</p>
                <br>
                <h4>🔹 Les énergies renouvelables</h4>
                <ul>
                    <li>Solaire</li>
                    <li>Éolien</li>
                    <li>Hydraulique</li>
                    <li>Biomasse</li>
                    <li>Géothermie</li>
                </ul>
                <br>
                <h4>🔹 La transition énergétique</h4>
                <p>C'est le passage progressif des énergies fossiles vers des énergies plus propres et renouvelables pour lutter contre le changement climatique.</p>
            `,
            objectifs: [
                'Distinguer énergies fossiles et renouvelables',
                'Comprendre les enjeux de la transition énergétique',
                'Identifier les avantages et inconvénients de chaque source'
            ],
            matieres: [
                'Énergies fossiles',
                'Énergies renouvelables',
                'Transition énergétique'
            ],
            exercices: [
                { question: 'Quelle énergie n\'est pas renouvelable ?', options: ['Le pétrole', 'Le solaire', 'L\'éolien', 'L\'hydraulique'], correct: 0, correction: 'Le pétrole est une énergie fossile non renouvelable.' },
                { question: 'Qu\'est-ce que la transition énergétique ?', options: ['Le passage aux énergies renouvelables', 'L\'augmentation de la production de pétrole', 'La construction de centrales à charbon', 'La baisse de la consommation d\'électricité'], correct: 0, correction: 'C\'est le passage progressif vers des énergies plus propres.' }
            ]
        },
        {
            id: 'geo4_agriculture',
            titre: "3. Agriculture et alimentation",
            desc: "Systèmes agricoles et sécurité alimentaire.",
            niveau: '4e',
            icone: '🌾',
            color: '#38a169',
            cours: `
                <h4>🔹 Les types d'agriculture</h4>
                <ul>
                    <li><b>Agriculture intensive :</b> fort rendement, beaucoup d'intrants (engrais, pesticides), souvent destinée à l'exportation.</li>
                    <li><b>Agriculture extensive :</b> grands espaces, faible rendement à l'hectare.</li>
                    <li><b>Agriculture vivrière :</b> destinée principalement à l'alimentation de la famille.</li>
                </ul>
                <br>
                <h4>🔹 Sécurité alimentaire</h4>
                <p>C'est la capacité d'une population à se nourrir correctement et de façon durable. Elle dépend de la production, de l'accès aux aliments et de leur qualité.</p>
            `,
            objectifs: [
                'Différencier les types d\'agriculture',
                'Comprendre la notion de sécurité alimentaire',
                'Relier agriculture et enjeux environnementaux'
            ],
            matieres: [
                'Agriculture intensive / extensive',
                'Sécurité alimentaire',
                'Impact environnemental de l\'agriculture'
            ],
            exercices: [
                { question: 'Qu\'est-ce que l\'agriculture vivrière ?', options: ['Celle destinée à nourrir la famille', 'Celle destinée à l\'exportation', 'Celle qui utilise beaucoup d\'engrais', 'Celle pratiquée uniquement en Europe'], correct: 0, correction: 'L\'agriculture vivrière sert principalement à nourrir le producteur et sa famille.' }
            ]
        },
        {
            id: 'geo4_developpement',
            titre: "4. Inégalités de développement",
            desc: "Pays du Nord / Sud, IDH et indicateurs de développement.",
            niveau: '4e',
            icone: '📊',
            color: '#805ad5',
            cours: `
                <h4>🔹 Pays du Nord et pays du Sud</h4>
                <p>On distingue encore souvent les pays développés (Nord) et les pays en développement (Sud), même si cette division est de plus en plus nuancée.</p>
                <br>
                <h4>🔹 L'IDH (Indice de Développement Humain)</h4>
                <p>Indicateur créé par l'ONU qui combine trois dimensions :</p>
                <ul>
                    <li>Espérance de vie</li>
                    <li>Niveau d'éducation</li>
                    <li>Niveau de vie (revenu)</li>
                </ul>
                <br>
                <h4>🔹 Autres indicateurs</h4>
                <p>PIB par habitant, taux d'alphabétisation, accès à l'eau potable, mortalité infantile...</p>
            `,
            objectifs: [
                'Comprendre la notion de développement',
                'Utiliser l\'IDH comme indicateur',
                'Identifier les inégalités Nord/Sud'
            ],
            matieres: [
                'IDH',
                'Indicateurs de développement',
                'Inégalités mondiales'
            ],
            exercices: [
                { question: 'Que mesure l\'IDH ?', options: ['Le développement humain (santé, éducation, revenu)', 'Uniquement la richesse', 'La superficie d\'un pays', 'Le nombre d\'habitants'], correct: 0, correction: 'L\'IDH combine espérance de vie, éducation et niveau de vie.' }
            ]
        }
    ],
    '5e': [
        {
            id: 'geo5_mondialisation',
            titre: "1. La mondialisation",
            desc: "Flux, acteurs et conséquences de la mondialisation.",
            niveau: '5e',
            icone: '🌐',
            color: '#3182ce',
            cours: `
                <h4>🔹 Qu'est-ce que la mondialisation ?</h4>
                <p>C'est l'intensification des échanges (marchandises, capitaux, informations, personnes) à l'échelle de la planète.</p>
                <br>
                <h4>🔹 Les acteurs</h4>
                <ul>
                    <li>Firmes transnationales (FTN)</li>
                    <li>États</li>
                    <li>Organisations internationales (OMC, FMI, ONU...)</li>
                    <li>ONG</li>
                </ul>
                <br>
                <h4>🔹 Conséquences</h4>
                <p>Accélération des échanges, délocalisations, interdépendance des économies, mais aussi inégalités et uniformisation culturelle.</p>
            `,
            objectifs: [
                'Définir la mondialisation',
                'Identifier les principaux acteurs',
                'Comprendre les effets positifs et négatifs'
            ],
            matieres: [
                'Flux mondiaux',
                'Firmes transnationales',
                'Conséquences de la mondialisation'
            ],
            exercices: [
                { question: 'Qu\'est-ce qu\'une firme transnationale (FTN) ?', options: ['Une entreprise présente dans plusieurs pays', 'Une entreprise locale', 'Une organisation humanitaire', 'Un État'], correct: 0, correction: 'Une FTN est une entreprise qui a des activités dans plusieurs pays.' }
            ]
        },
        {
            id: 'geo5_climat',
            titre: "2. Changements climatiques",
            desc: "Causes, conséquences et réponses au réchauffement.",
            niveau: '5e',
            icone: '🌡️',
            color: '#e53e3e',
            cours: `
                <h4>🔹 Le réchauffement climatique</h4>
                <p>Augmentation de la température moyenne de la Terre due principalement aux gaz à effet de serre d'origine humaine (CO₂, méthane...).</p>
                <br>
                <h4>🔹 Conséquences</h4>
                <ul>
                    <li>Fonte des glaciers et de la banquise</li>
                    <li>Élévation du niveau des mers</li>
                    <li>Événements extrêmes plus fréquents</li>
                    <li>Menaces sur la biodiversité</li>
                </ul>
                <br>
                <h4>🔹 Réponses</h4>
                <p>Accords internationaux (Accord de Paris), transition énergétique, adaptation des territoires.</p>
            `,
            objectifs: [
                'Comprendre les causes du réchauffement',
                'Identifier les principales conséquences',
                'Connaître les réponses possibles'
            ],
            matieres: [
                'Effet de serre',
                'Conséquences du réchauffement',
                'Accords climatiques'
            ],
            exercices: [
                { question: 'Quelle est la principale cause du réchauffement climatique actuel ?', options: ['Les gaz à effet de serre d\'origine humaine', 'Les éruptions volcaniques', 'Les taches solaires', 'Les courants marins'], correct: 0, correction: 'Les émissions de gaz à effet de serre liées aux activités humaines sont la cause principale.' }
            ]
        },
        {
            id: 'geo5_migrations',
            titre: "3. Les migrations",
            desc: "Causes, types et enjeux des migrations internationales.",
            niveau: '5e',
            icone: '🧳',
            color: '#805ad5',
            cours: `
                <h4>🔹 Types de migrations</h4>
                <ul>
                    <li><b>Migrations économiques :</b> recherche de travail ou de meilleures conditions de vie.</li>
                    <li><b>Migrations contraintes :</b> guerres, persécutions, catastrophes (réfugiés).</li>
                </ul>
                <br>
                <h4>🔹 Facteurs</h4>
                <p><b>Facteurs de départ (push)</b> : pauvreté, conflits, manque d'opportunités.<br>
                <b>Facteurs d'attraction (pull)</b> : emplois, sécurité, études, regroupement familial.</p>
                <br>
                <h4>🔹 Enjeux</h4>
                <p>Intégration, tensions politiques, apports économiques et culturels, droit d'asile.</p>
            `,
            objectifs: [
                'Différencier les types de migrations',
                'Comprendre les facteurs push et pull',
                'Identifier les enjeux liés aux migrations'
            ],
            matieres: [
                'Migrations économiques et contraintes',
                'Facteurs push / pull',
                'Enjeux migratoires'
            ],
            exercices: [
                { question: 'Qu\'est-ce qu\'un facteur "push" ?', options: ['Un facteur qui pousse à quitter un pays', 'Un facteur qui attire vers un pays', 'Un type de visa', 'Une organisation internationale'], correct: 0, correction: 'Les facteurs push sont ceux qui poussent les gens à partir.' }
            ]
        },
        {
            id: 'geo5_ue',
            titre: "4. L'Union européenne",
            desc: "Construction, fonctionnement et enjeux de l'UE.",
            niveau: '5e',
            icone: '🇪🇺',
            color: '#1d4ed8',
            cours: `
                <h4>🔹 Construction européenne</h4>
                <p>L'UE est née après la Seconde Guerre mondiale pour garantir la paix et favoriser la coopération économique. Elle compte aujourd'hui 27 États membres.</p>
                <br>
                <h4>🔹 Principales institutions</h4>
                <ul>
                    <li>Commission européenne</li>
                    <li>Parlement européen</li>
                    <li>Conseil de l'Union européenne</li>
                    <li>Conseil européen</li>
                </ul>
                <br>
                <h4>🔹 Enjeux actuels</h4>
                <p>Élargissement, politique migratoire, transition écologique, souveraineté stratégique.</p>
            `,
            objectifs: [
                'Connaître les grandes étapes de la construction européenne',
                'Identifier les principales institutions',
                'Comprendre les enjeux actuels de l\'UE'
            ],
            matieres: [
                'Histoire de l\'UE',
                'Institutions européennes',
                'Enjeux contemporains'
            ],
            exercices: [
                { question: 'Combien d\'États membres compte l\'UE actuellement ?', options: ['27', '28', '25', '30'], correct: 0, correction: 'L\'UE compte 27 États membres depuis le Brexit.' }
            ]
        }
    ],
    '6e': [
        {
            id: 'geo6_durable',
            titre: "1. Développement durable",
            desc: "Les trois piliers et les Objectifs de Développement Durable.",
            niveau: '6e',
            icone: '♻️',
            color: '#38a169',
            cours: `
                <h4>🔹 Les trois piliers</h4>
                <ul>
                    <li><b>Économique</b> : croissance et prospérité</li>
                    <li><b>Social</b> : équité, santé, éducation</li>
                    <li><b>Environnemental</b> : préservation des ressources et des écosystèmes</li>
                </ul>
                <br>
                <h4>🔹 Les ODD (Objectifs de Développement Durable)</h4>
                <p>17 objectifs adoptés par l'ONU en 2015 pour éradiquer la pauvreté, protéger la planète et garantir la prospérité d'ici 2030.</p>
            `,
            objectifs: [
                'Connaître les trois piliers du développement durable',
                'Comprendre les ODD',
                'Relier les enjeux locaux et mondiaux'
            ],
            matieres: [
                'Piliers du développement durable',
                'Objectifs de Développement Durable',
                'Transition écologique'
            ],
            exercices: [
                { question: 'Quels sont les trois piliers du développement durable ?', options: ['Économique, social, environnemental', 'Politique, militaire, culturel', 'Nord, Sud, Est', 'Production, consommation, exportation'], correct: 0, correction: 'Les trois piliers sont économique, social et environnemental.' }
            ]
        },
        {
            id: 'geo6_geopolitique',
            titre: "2. Géopolitique et conflits",
            desc: "Puissance, ressources et tensions internationales.",
            niveau: '6e',
            icone: '🕊️',
            color: '#c0392b',
            cours: `
                <h4>🔹 Qu'est-ce que la géopolitique ?</h4>
                <p>Étude des rivalités de pouvoir sur un territoire. Elle analyse les rapports de force entre États et acteurs.</p>
                <br>
                <h4>🔹 Sources de conflits</h4>
                <ul>
                    <li>Contrôle des ressources (pétrole, eau, minerais)</li>
                    <li>Frontières contestées</li>
                    <li>Identités et nationalismes</li>
                    <li>Rivalités de puissance</li>
                </ul>
            `,
            objectifs: [
                'Comprendre la notion de géopolitique',
                'Identifier les principales sources de conflits',
                'Analyser un conflit à partir de ses enjeux territoriaux'
            ],
            matieres: [
                'Notion de puissance',
                'Ressources et conflits',
                'Enjeux territoriaux'
            ],
            exercices: [
                { question: 'Qu\'est-ce que la géopolitique ?', options: ['L\'étude des rivalités de pouvoir sur un territoire', 'L\'étude des climats', 'L\'étude des populations uniquement', 'L\'étude des routes commerciales anciennes'], correct: 0, correction: 'La géopolitique analyse les rapports de force liés au territoire.' }
            ]
        },
        {
            id: 'geo6_villes',
            titre: "3. Villes et métropolisation",
            desc: "Croissance urbaine, métropoles et inégalités spatiales.",
            niveau: '6e',
            icone: '🌆',
            color: '#805ad5',
            cours: `
                <h4>🔹 La métropolisation</h4>
                <p>Processus par lequel les grandes villes concentrent de plus en plus de population, d'activités et de fonctions de commandement.</p>
                <br>
                <h4>🔹 Les grandes métropoles mondiales</h4>
                <p>New York, Londres, Tokyo, Paris, Shanghai... Elles forment un réseau de villes globales interconnectées.</p>
                <br>
                <h4>🔹 Inégalités urbaines</h4>
                <p>Dans de nombreuses métropoles, on observe une forte ségrégation socio-spatiale (quartiers riches / quartiers pauvres).</p>
            `,
            objectifs: [
                'Comprendre le processus de métropolisation',
                'Identifier les caractéristiques des villes globales',
                'Analyser les inégalités urbaines'
            ],
            matieres: [
                'Métropolisation',
                'Villes globales',
                'Ségrégation urbaine'
            ],
            exercices: [
                { question: 'Qu\'est-ce que la métropolisation ?', options: ['La concentration croissante des fonctions dans les grandes villes', 'La disparition des villes', 'Le retour vers les campagnes', 'La construction de villages'], correct: 0, correction: 'La métropolisation est la concentration de population et de fonctions dans les grandes villes.' }
            ]
        },
        {
            id: 'geo6_environnement',
            titre: "4. Enjeux environnementaux",
            desc: "Biodiversité, pollution, ressources et solutions.",
            niveau: '6e',
            icone: '🌿',
            color: '#0e7c86',
            cours: `
                <h4>🔹 Principaux enjeux</h4>
                <ul>
                    <li>Perte de biodiversité</li>
                    <li>Pollution de l'air, de l'eau et des sols</li>
                    <li>Surexploitation des ressources</li>
                    <li>Déforestation</li>
                </ul>
                <br>
                <h4>🔹 Solutions</h4>
                <p>Aires protégées, économie circulaire, sobriété, énergies renouvelables, accords internationaux.</p>
            `,
            objectifs: [
                'Identifier les grands enjeux environnementaux',
                'Comprendre le lien entre activités humaines et dégradation',
                'Connaître des solutions possibles'
            ],
            matieres: [
                'Biodiversité',
                'Pollution',
                'Solutions durables'
            ],
            exercices: [
                { question: 'Qu\'est-ce que la biodiversité ?', options: ['La diversité des êtres vivants et des écosystèmes', 'Uniquement le nombre d\'animaux', 'La quantité de forêts', 'Le climat d\'une région'], correct: 0, correction: 'La biodiversité désigne la variété des espèces et des milieux.' }
            ]
        }
    ]
};

// =========================================================
// JEU DES CAPITALES
// =========================================================
var CAPITALES = [
    { pays: "France", capitale: "Paris", continent: "Europe" },
    { pays: "Belgique", capitale: "Bruxelles", continent: "Europe" },
    { pays: "Allemagne", capitale: "Berlin", continent: "Europe" },
    { pays: "Espagne", capitale: "Madrid", continent: "Europe" },
    { pays: "Italie", capitale: "Rome", continent: "Europe" },
    { pays: "Portugal", capitale: "Lisbonne", continent: "Europe" },
    { pays: "Pays-Bas", capitale: "Amsterdam", continent: "Europe" },
    { pays: "Royaume-Uni", capitale: "Londres", continent: "Europe" },
    { pays: "Irlande", capitale: "Dublin", continent: "Europe" },
    { pays: "Suisse", capitale: "Berne", continent: "Europe" },
    { pays: "Autriche", capitale: "Vienne", continent: "Europe" },
    { pays: "Pologne", capitale: "Varsovie", continent: "Europe" },
    { pays: "Suède", capitale: "Stockholm", continent: "Europe" },
    { pays: "Norvège", capitale: "Oslo", continent: "Europe" },
    { pays: "Danemark", capitale: "Copenhague", continent: "Europe" },
    { pays: "Finlande", capitale: "Helsinki", continent: "Europe" },
    { pays: "Grèce", capitale: "Athènes", continent: "Europe" },
    { pays: "Turquie", capitale: "Ankara", continent: "Europe/Asie" },
    { pays: "Russie", capitale: "Moscou", continent: "Europe/Asie" },
    { pays: "Ukraine", capitale: "Kiev", continent: "Europe" },
    { pays: "États-Unis", capitale: "Washington", continent: "Amérique" },
    { pays: "Canada", capitale: "Ottawa", continent: "Amérique" },
    { pays: "Mexique", capitale: "Mexico", continent: "Amérique" },
    { pays: "Brésil", capitale: "Brasilia", continent: "Amérique" },
    { pays: "Argentine", capitale: "Buenos Aires", continent: "Amérique" },
    { pays: "Chili", capitale: "Santiago", continent: "Amérique" },
    { pays: "Colombie", capitale: "Bogota", continent: "Amérique" },
    { pays: "Pérou", capitale: "Lima", continent: "Amérique" },
    { pays: "Chine", capitale: "Pékin", continent: "Asie" },
    { pays: "Japon", capitale: "Tokyo", continent: "Asie" },
    { pays: "Corée du Sud", capitale: "Séoul", continent: "Asie" },
    { pays: "Inde", capitale: "New Delhi", continent: "Asie" },
    { pays: "Thaïlande", capitale: "Bangkok", continent: "Asie" },
    { pays: "Vietnam", capitale: "Hanoï", continent: "Asie" },
    { pays: "Indonésie", capitale: "Jakarta", continent: "Asie" },
    { pays: "Australie", capitale: "Canberra", continent: "Océanie" },
    { pays: "Nouvelle-Zélande", capitale: "Wellington", continent: "Océanie" },
    { pays: "Égypte", capitale: "Le Caire", continent: "Afrique" },
    { pays: "Maroc", capitale: "Rabat", continent: "Afrique" },
    { pays: "Algérie", capitale: "Alger", continent: "Afrique" },
    { pays: "Tunisie", capitale: "Tunis", continent: "Afrique" },
    { pays: "Sénégal", capitale: "Dakar", continent: "Afrique" },
    { pays: "Afrique du Sud", capitale: "Pretoria", continent: "Afrique" },
    { pays: "Nigeria", capitale: "Abuja", continent: "Afrique" },
    { pays: "Kenya", capitale: "Nairobi", continent: "Afrique" },
    { pays: "Éthiopie", capitale: "Addis-Abeba", continent: "Afrique" }
];
