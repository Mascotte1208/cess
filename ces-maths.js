// =========================================================
// PROGRAMME OFFICIEL COMPLET DE MATHEMATIQUES
// 3e, 4e, 5e ET 6e ANNÉES - TOUS LES CHAPITRES
// =========================================================

var CHAPITRES = {
    '3e': [
        {
            id: '3e_fonctions',
            titre: '1. Étude des fonctions',
            desc: 'Graphiques, tableaux, formules, f(x)=ax, f(x)=ax+b, f(x)=ax², f(x)=√x, f(x)=a/x',
            niveau: '3e Année',
            icone: '📈',
            color: '#1c5fa8',
            objectifs: [
                'Construire un tableau et un graphique à partir d\'une situation',
                'Proposer une formule reliant une variable à son image',
                'Déterminer si un point appartient au graphique d\'une fonction',
                'Interpréter les coefficients a et b dans f(x) = ax + b',
                'Dessiner le graphique d\'une fonction du premier degré'
            ],
            matieres: [
                'Distinction entre relation et fonction',
                'Fonctions du type f(x) = ax, f(x) = ax + b',
                'Fonctions f(x) = ax², f(x) = √x, f(x) = a/x',
                'Droite d\'équation y = ax + b, x = a',
                'Équation ax + by + c = 0',
                'Coefficient angulaire et parallélisme',
                'Lecture de graphiques issus de la presse'
            ],
            exercices: [
                { question: 'Quelle est l\'équation d\'une fonction linéaire ?', options: ['y = ax', 'y = ax + b', 'y = x²', 'y = 1/x'], correct: 0, correction: 'Une fonction linéaire est de la forme y = ax' },
                { question: 'Dans f(x) = 2x + 3, que représente le coefficient 2 ?', options: ['Le coefficient angulaire', 'L\'ordonnée à l\'origine', 'La racine', 'Le terme constant'], correct: 0, correction: '2 est le coefficient angulaire (la pente)' },
                { question: 'Dans f(x) = 2x + 3, que représente le nombre 3 ?', options: ['L\'ordonnée à l\'origine', 'Le coefficient angulaire', 'La racine', 'La pente'], correct: 0, correction: '3 est l\'ordonnée à l\'origine' },
                { question: 'Quelle est la forme générale d\'une fonction du second degré ?', options: ['f(x) = ax² + bx + c', 'f(x) = ax + b', 'f(x) = a/x', 'f(x) = √x'], correct: 0, correction: 'Une fonction du second degré est de la forme f(x) = ax² + bx + c' },
                { question: 'Quelle est la fonction de référence pour une parabole ?', options: ['f(x) = x²', 'f(x) = x', 'f(x) = 1/x', 'f(x) = √x'], correct: 0, correction: 'La fonction f(x) = x² donne une parabole' }
            ]
        },
        {
            id: '3e_fonction_premier_degre',
            titre: '2. Fonction du premier degré',
            desc: 'Droite d\'équation y=ax+b, x=a, ax+by+c=0, perpendicularité',
            niveau: '3e Année',
            icone: '📈',
            color: '#2a7a5a',
            objectifs: [
                'Reconnaître qu\'une fonction exprime une proportionnalité',
                'Interpréter les coefficients a et b dans f(x) = ax + b',
                'Dessiner le graphique d\'une fonction du premier degré',
                'Dessiner la droite d\'équation ax + by + c = 0',
                'Déterminer les positions relatives de deux droites',
                'Écrire l\'équation d\'une droite passant par un point donné'
            ],
            matieres: [
                'Graphique de f(x) = ax, droite y = ax, proportionnalité',
                'Graphique de f(x) = ax + b, droite y = ax + b',
                'Droite d\'équation x = a (non fonction)',
                'Équation ax + by + c = 0, formes canoniques',
                'Coefficient angulaire et condition de parallélisme',
                'Condition de perpendicularité dans un repère orthonormé',
                'Équation d\'une droite passant par un point de direction donnée'
            ],
            exercices: [
                { question: 'Quelle est la condition de parallélisme de deux droites ?', options: ['Même coefficient angulaire', 'Même ordonnée à l\'origine', 'Coefficients angulaires inverses', 'Produit des coefficients = 1'], correct: 0, correction: 'Deux droites sont parallèles si elles ont le même coefficient angulaire' },
                { question: 'Quelle est la condition de perpendicularité de deux droites ?', options: ['m1 × m2 = -1', 'm1 = m2', 'm1 + m2 = 0', 'm1 / m2 = 1'], correct: 0, correction: 'Deux droites sont perpendiculaires si le produit de leurs coefficients angulaires vaut -1' },
                { question: 'Comment passe-t-on de y = ax à y = ax + b ?', options: ['Par une translation verticale de b', 'Par une translation horizontale de b', 'Par une rotation', 'Par une homothétie'], correct: 0, correction: 'La translation de vecteur (0, b) permet de passer de y = ax à y = ax + b' }
            ]
        },
        {
            id: '3e_algebre_equations',
            titre: '3. Algèbre - Équations & systèmes',
            desc: 'Équations du 1er degré, systèmes, inéquations, résolution de problèmes',
            niveau: '3e Année',
            icone: '🔢',
            color: '#c81e2c',
            objectifs: [
                'Résoudre une équation du premier degré à une inconnue',
                'Résoudre un système de deux équations à deux inconnues',
                'Résoudre une inéquation du premier degré',
                'Résoudre un problème en précisant les différentes étapes'
            ],
            matieres: [
                'Équations du premier degré : propriétés des égalités',
                'Systèmes de deux équations à deux inconnues',
                'Inéquations du premier degré',
                'Résolution algébrique et graphique',
                'Équations impossibles et indéterminées',
                'Résolution de problèmes par la méthode algébrique'
            ],
            exercices: [
                { question: 'Résoudre : 2x + 3 = 11', options: ['x = 4', 'x = 5', 'x = 3', 'x = 7'], correct: 0, correction: '2x = 8 → x = 4' },
                { question: 'Résoudre le système : x + y = 5 et x - y = 1', options: ['(3,2)', '(2,3)', '(4,1)', '(1,4)'], correct: 0, correction: 'Par addition : 2x = 6 → x = 3, y = 2' },
                { question: 'Résoudre : 2x - 4 > 0', options: ['x > 2', 'x < 2', 'x > -2', 'x < -2'], correct: 0, correction: '2x > 4 → x > 2' }
            ]
        },
        {
            id: '3e_algebre_polynomes',
            titre: '4. Algèbre - Polynômes & divisions',
            desc: 'Polynômes, factorisation, produits remarquables, division par (x-a), loi du reste',
            niveau: '3e Année',
            icone: '🔢',
            color: '#e8a400',
            objectifs: [
                'Utiliser les propriétés des puissances',
                'Reconnaître la forme d\'une expression algébrique',
                'Calculer la valeur numérique d\'un polynôme',
                'Factoriser et développer des polynômes',
                'Effectuer la division d\'un polynôme par (x - a)',
                'Utiliser la loi du reste'
            ],
            matieres: [
                'Puissances à exposants entiers',
                'Polynômes : degré, somme, produit, factorisation',
                'Produits remarquables : (a+b)², (a-b)², a²-b²',
                'Division d\'un polynôme par un polynôme',
                'Division d\'un polynôme par (x - a), loi du reste',
                'Opérations simples sur les fractions algébriques'
            ],
            exercices: [
                { question: 'Factoriser : x² - 9', options: ['(x-3)(x+3)', '(x-3)²', '(x+3)²', 'x²-9'], correct: 0, correction: 'a² - b² = (a-b)(a+b)' },
                { question: 'Développer : (x + 3)²', options: ['x² + 6x + 9', 'x² + 9', 'x² + 3x + 9', 'x² + 6x + 3'], correct: 0, correction: '(a+b)² = a² + 2ab + b²' },
                { question: 'Que vaut 2³ × 2⁴ ?', options: ['2⁷', '2¹²', '4⁷', '2¹'], correct: 0, correction: '2³ × 2⁴ = 2⁷' },
                { question: 'Dans la division d\'un polynôme par (x-a), que vaut le reste ?', options: ['P(a)', 'P(-a)', '0', 'Le quotient'], correct: 0, correction: 'Le reste de la division de P(x) par (x-a) est P(a) (loi du reste)' }
            ]
        },
        {
            id: '3e_pythagore',
            titre: '5. Théorème de Pythagore',
            desc: 'Découverte, démonstration, applications, espace, nombres irrationnels',
            niveau: '3e Année',
            icone: '📐',
            color: '#6b46c1',
            objectifs: [
                'Utiliser le théorème de Pythagore',
                'Utiliser la réciproque du théorème de Pythagore',
                'Calculer des distances dans l\'espace (cube, parallélépipède)',
                'Construire des segments de longueur √n',
                'Estimer l\'ordre de grandeur d\'un irrationnel'
            ],
            matieres: [
                'Théorème de Pythagore : a² + b² = c²',
                'Réciproque du théorème de Pythagore',
                'Construction de segments de longueur √n',
                'Diagonale d\'un carré, hauteur d\'un triangle équilatéral',
                'Distance entre deux points dans un repère orthonormé',
                'Diagonale d\'un cube, d\'un parallélépipède rectangle',
                'Valeur approchée et encadrement de √a',
                'Nombres irrationnels'
            ],
            exercices: [
                { question: 'Quel est le théorème de Pythagore ?', options: ['a² + b² = c²', 'a + b = c', 'a × b = c', 'a² = b² + c²'], correct: 0, correction: 'Dans un triangle rectangle, a² + b² = c²' },
                { question: 'Quelle est la diagonale d\'un carré de côté 1 ?', options: ['√2', '2', '√3', '1'], correct: 0, correction: 'd² = 1² + 1² = 2 → d = √2' },
                { question: 'Quelle est la diagonale d\'un cube de côté 1 ?', options: ['√3', '√2', '2', '1'], correct: 0, correction: 'd² = 1² + 1² + 1² = 3 → d = √3' }
            ]
        },
        {
            id: '3e_thalès',
            titre: '6. Configurations de Thalès',
            desc: 'Proportions, rapports, faisceau de droites parallèles, sections',
            niveau: '3e Année',
            icone: '📐',
            color: '#0e7c86',
            objectifs: [
                'Reconnaître une configuration de Thalès',
                'Utiliser les propriétés des proportions',
                'Construire la quatrième proportionnelle',
                'Partager un segment en n parties égales',
                'Section d\'un prisme, d\'une pyramide'
            ],
            matieres: [
                'Configurations triangulaires de Thalès',
                'Configurations d\'un faisceau de droites parallèles',
                'Projection parallèle d\'une droite graduée',
                'Propriétés des proportions',
                'Construction de la quatrième proportionnelle',
                'Partage d\'un segment en n parties égales',
                'Section d\'un prisme, d\'une pyramide'
            ],
            exercices: [
                { question: 'Dans une configuration de Thalès, si AB/AC = AD/AE, que peut-on en déduire ?', options: ['BD // CE', 'AB // CD', 'AC // DE', 'AB // DE'], correct: 0, correction: 'D\'après le théorème de Thalès, BD // CE' },
                { question: 'Comment appelle-t-on la propriété "permutation des moyens" dans une proportion ?', options: ['a/b = c/d → a/c = b/d', 'a/b = c/d → a+b = c+d', 'a/b = c/d → a×b = c×d', 'a/b = c/d → a-d = c-b'], correct: 0, correction: 'Dans une proportion, on peut permuter les moyens : a/b = c/d → a/c = b/d' }
            ]
        },
        {
            id: '3e_angles_similitude',
            titre: '7. Angles, Isométrie & Similitude',
            desc: 'Angles, cas d\'isométrie, cas de similitude, trigonométrie',
            niveau: '3e Année',
            icone: '📐',
            color: '#e88a00',
            objectifs: [
                'Déterminer la mesure d\'un angle',
                'Utiliser les propriétés d\'angles',
                'Reconnaître des figures isométriques',
                'Reconnaître des figures semblables',
                'Utiliser la trigonométrie du triangle rectangle'
            ],
            matieres: [
                'Angles au centre, angles inscrits, angles tangentiels',
                'Angles à côtés parallèles, perpendiculaires',
                'Caractérisation d\'un triangle rectangle par son inscriptibilité',
                'Figures isométriques, cas d\'isométrie des triangles',
                'Figures semblables, cas de similitude des triangles',
                'Trigonométrie : cosinus, sinus, tangente',
                'Valeurs pour 30°, 45°, 60°',
                'Pente exprimée en %, distances inaccessibles'
            ],
            exercices: [
                { question: 'Quelle est la somme des angles d\'un triangle ?', options: ['180°', '90°', '360°', '270°'], correct: 0, correction: 'La somme des angles d\'un triangle est 180°' },
                { question: 'Que vaut sin(30°) ?', options: ['0.5', '0.707', '1', '0.866'], correct: 0, correction: 'sin(30°) = 1/2 = 0.5' },
                { question: 'Que vaut cos(60°) ?', options: ['0.5', '0.866', '0.707', '1'], correct: 0, correction: 'cos(60°) = 1/2 = 0.5' },
                { question: 'Que vaut tan(45°) ?', options: ['1', '0.5', '√2', '√3'], correct: 0, correction: 'tan(45°) = 1' }
            ]
        }
    ],
    '4e': [
        {
            id: '4e_fonctions_ref',
            titre: '1. Fonctions de référence',
            desc: 'x, x², x³, 1/x, √x, ³√x, |x|, sin x, cos x',
            niveau: '4e Année',
            icone: '📈',
            color: '#1c5fa8',
            objectifs: [
                'Relier le graphique d\'une fonction à son équation',
                'Déterminer le domaine et les zéros d\'une fonction',
                'Déterminer la parité et la croissance d\'une fonction'
            ],
            matieres: [
                'Fonctions de référence : x, x², x³, 1/x, √x, ³√x, |x|, sin x, cos x',
                'Domaine de définition, zéros d\'une fonction',
                'Parité, périodicité, croissance, maximum, minimum'
            ],
            exercices: [
                { question: 'Quelle est la fonction de référence pour une parabole ?', options: ['x²', 'x', '1/x', '√x'], correct: 0, correction: 'La fonction x² donne une parabole' },
                { question: 'Quelle est la fonction de référence pour une hyperbole ?', options: ['1/x', 'x²', 'x', '√x'], correct: 0, correction: 'La fonction 1/x donne une hyperbole' },
                { question: 'Quelle est la fonction de référence pour une racine carrée ?', options: ['√x', 'x²', '1/x', 'x³'], correct: 0, correction: 'La fonction √x est la racine carrée' }
            ]
        },
        {
            id: '4e_transformations',
            titre: '2. Transformations de fonctions',
            desc: 'f(x)+k, f(x+k), kf(x), f(kx), |f(x)|, symétries',
            niveau: '4e Année',
            icone: '🔄',
            color: '#2a7a5a',
            objectifs: [
                'Déduire les graphiques de f(x)+k, f(x+k), kf(x)',
                'Déduire les graphiques de f(kx), |f(x)|',
                'Utiliser les symétries relativement à Ox, Oy, O'
            ],
            matieres: [
                'Transformations : f(x)+k, f(x+k), kf(x), f(kx), |f(x)|',
                'Symétries relativement à Ox, Oy et O',
                'Changement de repère'
            ],
            exercices: [
                { question: 'Que devient f(x) = x² si on fait f(x) + 3 ?', options: ['La parabole monte de 3', 'La parabole descend de 3', 'La parabole s\'élargit', 'La parabole se rétrécit'], correct: 0, correction: 'f(x)+3 décale la courbe vers le haut' },
                { question: 'Que devient f(x) = x² si on fait f(x+2) ?', options: ['La parabole se décale de 2 vers la gauche', 'La parabole se décale de 2 vers la droite', 'La parabole monte de 2', 'La parabole descend de 2'], correct: 0, correction: 'f(x+2) décale la courbe de 2 unités vers la gauche' }
            ]
        },
        {
            id: '4e_algebre_2deg',
            titre: '3. Algèbre - 2e degré',
            desc: 'Équations du second degré, paraboles, forme canonique, paramètre',
            niveau: '4e Année',
            icone: '🔢',
            color: '#c81e2c',
            objectifs: [
                'Construire le graphique de y = ax² + bx + c',
                'Résoudre une équation du deuxième degré',
                'Déterminer le produit et la somme des racines',
                'Factoriser un trinôme du deuxième degré',
                'Utiliser la forme canonique'
            ],
            matieres: [
                'Graphique de la fonction du deuxième degré',
                'Sommet et axe de symétrie de la parabole',
                'Résolution de l\'équation du deuxième degré',
                'Produit et somme des racines',
                'Factorisation des trinômes du deuxième degré',
                'Forme canonique : ax² + bx + c = a(x - α)² + β',
                'Problèmes avec paramètre'
            ],
            exercices: [
                { question: 'Quelle est la formule du discriminant Δ ?', options: ['b² - 4ac', 'b² + 4ac', 'a² - 4bc', 'c² - 4ab'], correct: 0, correction: 'Δ = b² - 4ac' },
                { question: 'Résoudre x² - 4 = 0', options: ['x = 2 ou x = -2', 'x = 2', 'x = -2', 'x = 4'], correct: 0, correction: 'x² = 4 → x = ±2' },
                { question: 'Quelle est la forme canonique de x² + 6x + 5 ?', options: ['(x+3)² - 4', '(x+3)² + 4', '(x-3)² - 4', '(x-3)² + 4'], correct: 0, correction: 'x² + 6x + 5 = (x+3)² - 4' }
            ]
        },
        {
            id: '4e_vecteurs',
            titre: '4. Calcul vectoriel',
            desc: 'Vecteurs, produit scalaire, applications physiques',
            niveau: '4e Année',
            icone: '📐',
            color: '#6b46c1',
            objectifs: [
                'Décomposer un vecteur suivant les axes du repère',
                'Construire la somme et la différence de deux vecteurs',
                'Calculer un produit scalaire',
                'Interpréter géométriquement des relations vectorielles',
                'Résoudre des problèmes de force ou vitesse'
            ],
            matieres: [
                'Vecteurs : composantes, somme, produit par un nombre',
                'Relation de Chasles',
                'Produit scalaire dans le plan et ses propriétés',
                'Projection d\'un vecteur sur l\'autre',
                'Théorème généralisé de Pythagore',
                'Applications physiques : force, vitesse, travail'
            ],
            exercices: [
                { question: 'Que représente le produit scalaire de deux vecteurs ?', options: ['Un nombre réel', 'Un vecteur', 'Une distance', 'Un angle'], correct: 0, correction: 'Le produit scalaire est un nombre réel' },
                { question: 'Que vaut le produit scalaire de deux vecteurs orthogonaux ?', options: ['0', '1', 'Le produit de leurs normes', '-1'], correct: 0, correction: 'Le produit scalaire de deux vecteurs orthogonaux est nul' }
            ]
        },
        {
            id: '4e_trigo_avancee',
            titre: '5. Trigonométrie avancée',
            desc: 'Cercle trigonométrique, angles orientés, formules du triangle quelconque',
            niveau: '4e Année',
            icone: '📐',
            color: '#0e7c86',
            objectifs: [
                'Faire le lien entre arc et angle',
                'Utiliser le cercle trigonométrique',
                'Déterminer le sinus, cosinus, tangente d\'un angle orienté',
                'Utiliser les formules fondamentales',
                'Utiliser les formules du triangle quelconque'
            ],
            matieres: [
                'Valeur approchée du nombre π (méthode d\'Archimède)',
                'Angles et arcs, radian',
                'Cercle trigonométrique, angle orienté',
                'Sinus, cosinus, tangente, cotangente',
                'Angles associés, formules fondamentales',
                'Formule de l\'aire du triangle quelconque',
                'Formule du sinus, formule du cosinus',
                'Critère d\'inscriptibilité d\'un quadrilatère',
                'Arc capable d\'un angle donné'
            ],
            exercices: [
                { question: 'Que vaut cos(60°) ?', options: ['0.5', '0.866', '0.707', '1'], correct: 0, correction: 'cos(60°) = 1/2 = 0.5' },
                { question: 'Que vaut sin² α + cos² α ?', options: ['1', '0', '2', 'α'], correct: 0, correction: 'La formule fondamentale donne toujours 1' },
                { question: 'Un angle de π/2 correspond à combien de degrés ?', options: ['90°', '180°', '45°', '60°'], correct: 0, correction: 'π/2 radians = 90°' }
            ]
        },
        {
            id: '4e_statistiques',
            titre: '6. Statistiques',
            desc: 'Effectifs cumulés, moyenne, médiane, variance, écart-type, Σ',
            niveau: '4e Année',
            icone: '📊',
            color: '#e8a400',
            objectifs: [
                'Maîtriser le vocabulaire et les procédures de calcul',
                'Calculer les valeurs centrales (mode, moyenne, médiane)',
                'Calculer les paramètres de dispersion',
                'Interpréter les résultats',
                'Utiliser le signe de sommation Σ'
            ],
            matieres: [
                'Tableaux, effectifs, fréquences, effectifs cumulés',
                'Moyenne, médiane, mode, quartiles',
                'Diagrammes : bâtonnets, circulaires, histogrammes',
                'Paramètres de dispersion : étendue, écart interquartile, variance, écart-type',
                'Signe de sommation Σ (simple manipulation)',
                'Changement d\'origine et d\'unité'
            ],
            exercices: [
                { question: 'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options: ['7', '6', '8', '5'], correct: 0, correction: 'La médiane est la valeur centrale : 7' },
                { question: 'Quelle est la moyenne de 4, 6, 8, 10, 12 ?', options: ['8', '7', '9', '6'], correct: 0, correction: '(4+6+8+10+12)/5 = 40/5 = 8' },
                { question: 'Que mesure l\'écart-type ?', options: ['La dispersion autour de la moyenne', 'La moyenne', 'La médiane', 'Le maximum'], correct: 0, correction: 'L\'écart-type mesure la dispersion des valeurs autour de la moyenne' }
            ]
        },
        {
            id: '4e_lieux',
            titre: '7. Lieux géométriques',
            desc: 'Médiatrice, cercle, parabole, arc capable, équations de lieux',
            niveau: '4e Année',
            icone: '📍',
            color: '#e88a00',
            objectifs: [
                'Utiliser les lieux de base pour effectuer une construction',
                'Discerner ce qui est mobile de ce qui reste fixe',
                'Établir les équations des lieux cités',
                'Résoudre des problèmes d\'intersection de lieux'
            ],
            matieres: [
                'Médiatrice d\'un segment : ensemble des points équidistants',
                'Cercle de centre et de rayon donnés',
                'Parabole de foyer et de directrice parallèle à Ox',
                'Arc capable d\'un angle donné',
                'Intersection de deux lieux pour résoudre des constructions',
                'Équations de lieux en exprimant des égalités de distances'
            ],
            exercices: [
                { question: 'Qu\'est-ce que la médiatrice d\'un segment ?', options: ['L\'ensemble des points équidistants des extrémités', 'La droite qui coupe le segment en son milieu', 'La perpendiculaire au segment', 'Toutes ces réponses'], correct: 3, correction: 'La médiatrice est la perpendiculaire au segment en son milieu' },
                { question: 'Quel est l\'ensemble des points situés à une distance donnée d\'un point fixe ?', options: ['Un cercle', 'Une droite', 'Une médiatrice', 'Une parabole'], correct: 0, correction: 'Un cercle est l\'ensemble des points situés à une distance donnée d\'un point fixe' },
                { question: 'Qu\'est-ce que l\'arc capable d\'un angle donné ?', options: ['L\'ensemble des points d\'où l\'on voit un segment sous un angle donné', 'Un arc de cercle', 'La médiatrice d\'un segment', 'Une droite'], correct: 0, correction: 'L\'arc capable est l\'ensemble des points d\'où l\'on voit un segment sous un angle donné' }
            ]
        },
        {
            id: '4e_coefficients',
            titre: '8. Méthode des coefficients indéterminés',
            desc: 'Détermination de coefficients, systèmes d\'équations, applications',
            niveau: '4e Année',
            icone: '🔢',
            color: '#1c5fa8',
            objectifs: [
                'Déterminer des coefficients d\'une expression algébrique',
                'Résoudre des systèmes d\'équations',
                'Appliquer la méthode à des problèmes concrets'
            ],
            matieres: [
                'Méthode des coefficients indéterminés',
                'Déterminer α, β, γ pour qu\'une courbe passe par des points donnés',
                'Déterminer α, β tels que ax² + bx + c = a(x - α)² + β',
                'Systèmes de plus de deux inconnues'
            ],
            exercices: [
                { question: 'La méthode des coefficients indéterminés permet de...', options: ['Trouver des coefficients inconnus', 'Résoudre des équations du second degré', 'Factoriser des polynômes', 'Calculer des intégrales'], correct: 0, correction: 'La méthode des coefficients indéterminés permet de déterminer des coefficients inconnus' }
            ]
        }
    ],
    '5e': [
        {
            id: '5e_analyse',
            titre: '1. Analyse',
            desc: 'Limites, fonctions exponentielles et logarithmes',
            niveau: '5e Année',
            icone: '📈',
            color: '#1c5fa8',
            objectifs: [
                'Comprendre la notion de limite d\'une fonction',
                'Utiliser les fonctions exponentielles et logarithmes',
                'Résoudre des équations exponentielles et logarithmiques'
            ],
            matieres: [
                'Limites de fonctions',
                'Fonction exponentielle : définition et propriétés',
                'Fonction logarithme népérien',
                'Équations et inéquations exponentielles'
            ],
            exercices: [
                { question: 'Que vaut e^0 ?', options: ['1', '0', 'e', '2.718'], correct: 0, correction: 'e^0 = 1' },
                { question: 'Que vaut ln(1) ?', options: ['0', '1', 'e', '2.718'], correct: 0, correction: 'ln(1) = 0' }
            ]
        },
        {
            id: '5e_nombres_complexes',
            titre: '2. Nombres complexes',
            desc: 'Forme algébrique, trigonométrique, opérations',
            niveau: '5e Année',
            icone: 'ℂ',
            color: '#6b46c1',
            objectifs: [
                'Représenter un nombre complexe',
                'Effectuer des opérations sur les nombres complexes',
                'Passer de la forme algébrique à la forme trigonométrique'
            ],
            matieres: [
                'Définition des nombres complexes',
                'Forme algébrique : a + ib',
                'Opérations : addition, multiplication, conjugué',
                'Module et argument, forme trigonométrique',
                'Formule de Moivre'
            ],
            exercices: [
                { question: 'Que vaut i² ?', options: ['-1', '1', 'i', '0'], correct: 0, correction: 'i² = -1' }
            ]
        },
        {
            id: '5e_geometrie_analytique',
            titre: '3. Géométrie analytique',
            desc: 'Équations de droites, coniques, transformations',
            niveau: '5e Année',
            icone: '📐',
            color: '#0e7c86',
            objectifs: [
                'Utiliser les équations de droites dans le plan',
                'Étudier les coniques (cercle, ellipse, parabole, hyperbole)',
                'Appliquer les transformations géométriques'
            ],
            matieres: [
                'Équation cartésienne d\'une droite',
                'Cercle, ellipse, parabole, hyperbole',
                'Transformations : translation, rotation, homothétie'
            ],
            exercices: [
                { question: 'Quelle est l\'équation d\'un cercle de centre (0,0) et de rayon r ?', options: ['x² + y² = r²', 'x + y = r', 'x² - y² = r²', 'xy = r'], correct: 0, correction: 'L\'équation d\'un cercle est x² + y² = r²' }
            ]
        }
    ],
    '6e': [
        {
            id: '6e_derivees',
            titre: '1. Dérivées',
            desc: 'Fonctions dérivées, applications, étude de fonctions',
            niveau: '6e Année',
            icone: '📉',
            color: '#c81e2c',
            objectifs: [
                'Calculer la dérivée d\'une fonction',
                'Utiliser la dérivée pour étudier les variations',
                'Déterminer les extremums d\'une fonction'
            ],
            matieres: [
                'Définition de la dérivée',
                'Dérivées des fonctions usuelles',
                'Règles de dérivation',
                'Tableau de variations, extremums'
            ],
            exercices: [
                { question: 'Que vaut la dérivée de f(x) = x² ?', options: ['2x', 'x', '2x²', 'x²'], correct: 0, correction: 'La dérivée de x² est 2x' }
            ]
        },
        {
            id: '6e_integrales',
            titre: '2. Intégrales',
            desc: 'Primitives, calcul d\'aires, applications',
            niveau: '6e Année',
            icone: '∫',
            color: '#1e7a3c',
            objectifs: [
                'Déterminer une primitive d\'une fonction',
                'Calculer une intégrale définie',
                'Interpréter géométriquement l\'intégrale'
            ],
            matieres: [
                'Primitives d\'une fonction',
                'Intégrale définie : définition et propriétés',
                'Théorème fondamental du calcul intégral',
                'Calcul d\'aires sous une courbe'
            ],
            exercices: [
                { question: 'Quelle est la primitive de f(x) = x ?', options: ['x²/2', 'x²', '2x', '1'], correct: 0, correction: 'La primitive de x est x²/2' }
            ]
        },
        {
            id: '6e_probabilites',
            titre: '3. Probabilités et statistiques avancées',
            desc: 'Variables aléatoires, lois, échantillonnage',
            niveau: '6e Année',
            icone: '📊',
            color: '#e8a400',
            objectifs: [
                'Comprendre la notion de variable aléatoire',
                'Calculer les caractéristiques d\'une variable aléatoire',
                'Utiliser les lois de probabilité usuelles'
            ],
            matieres: [
                'Variables aléatoires discrètes et continues',
                'Espérance, variance, écart-type',
                'Loi binomiale, loi normale, loi de Poisson',
                'Échantillonnage et estimation'
            ],
            exercices: [
                { question: 'Que représente l\'espérance d\'une variable aléatoire ?', options: ['La moyenne théorique', 'La médiane', 'Le mode', 'La variance'], correct: 0, correction: 'L\'espérance est la moyenne théorique' }
            ]
        }
    ]
};

// ---- GENERATION DES QUESTIONS DE QUIZ ----
var QUESTIONS_QUIZ = [];

for (var annee in CHAPITRES) {
    var chapitres = CHAPITRES[annee];
    for (var i = 0; i < chapitres.length; i++) {
        var chapitre = chapitres[i];
        if (chapitre.exercices) {
            for (var j = 0; j < chapitre.exercices.length; j++) {
                var ex = chapitre.exercices[j];
                QUESTIONS_QUIZ.push({
                    id: 'q' + QUESTIONS_QUIZ.length,
                    annee: annee,
                    chapitre: chapitre.id,
                    question: ex.question,
                    options: ex.options,
                    correct: ex.correct,
                    correction: ex.correction || ''
                });
            }
        }
    }
}

// =========================================================
// DONNÉES DES FORMULES (66 FORMULES)
// =========================================================

var FORMULES_DATA = {
    algebre: [
        { id: 'alg_1', titre: 'Équation du premier degré', definition: 'ax + b = 0 → x = -b/a', exemple: '2x + 4 = 0 → x = -2', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_2', titre: 'Système d\'équations', definition: 'x + y = a, x - y = b', exemple: 'x = (a+b)/2, y = (a-b)/2', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_3', titre: 'Produit remarquable (a+b)²', definition: '(a+b)² = a² + 2ab + b²', exemple: '(x+3)² = x² + 6x + 9', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_4', titre: 'Produit remarquable (a-b)²', definition: '(a-b)² = a² - 2ab + b²', exemple: '(x-3)² = x² - 6x + 9', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_5', titre: 'Produit remarquable a²-b²', definition: 'a² - b² = (a-b)(a+b)', exemple: 'x² - 9 = (x-3)(x+3)', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_6', titre: 'Discriminant Δ', definition: 'Δ = b² - 4ac', exemple: 'Pour x² + 2x - 3, Δ = 4 + 12 = 16', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_7', titre: 'Racines du second degré', definition: 'x = (-b ± √Δ)/2a', exemple: 'x = (-2 ± 4)/2 → x = 1 ou -3', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_8', titre: 'Forme canonique', definition: 'a(x - α)² + β', exemple: 'x² + 6x + 5 = (x+3)² - 4', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_9', titre: 'Somme des racines', definition: 'S = -b/a', exemple: 'x² - 5x + 6 = 0 → S = 5', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_10', titre: 'Produit des racines', definition: 'P = c/a', exemple: 'x² - 5x + 6 = 0 → P = 6', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_11', titre: 'Puissance a^n × a^m', definition: 'a^n × a^m = a^(n+m)', exemple: '2³ × 2⁴ = 2⁷', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_12', titre: 'Puissance (a^n)^m', definition: '(a^n)^m = a^(n×m)', exemple: '(2³)⁴ = 2¹²', icone: '🔢', categorie: 'Algèbre' }
    ],
    geometrie: [
        { id: 'geo_1', titre: 'Théorème de Pythagore', definition: 'a² + b² = c² (triangle rectangle)', exemple: '3² + 4² = 5²', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_2', titre: 'Réciproque de Pythagore', definition: 'Si a² + b² = c² alors triangle rectangle', exemple: 'Vérifier 3² + 4² = 5²', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_3', titre: 'Théorème de Thalès', definition: 'AB/AC = AD/AE', exemple: 'Calculer une longueur inconnue', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_4', titre: 'Diagonale d\'un carré', definition: 'd = a√2', exemple: 'a = 1 → d = √2', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_5', titre: 'Hauteur triangle équilatéral', definition: 'h = a√3/2', exemple: 'a = 2 → h = √3', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_6', titre: 'Diagonale d\'un cube', definition: 'd = a√3', exemple: 'a = 1 → d = √3', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_7', titre: 'Aire d\'un triangle', definition: 'A = (base × hauteur)/2', exemple: 'base=5, hauteur=4 → A=10', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_8', titre: 'Aire d\'un rectangle', definition: 'A = L × l', exemple: 'L=5, l=3 → A=15', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_9', titre: 'Aire d\'un carré', definition: 'A = c²', exemple: 'c=4 → A=16', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_10', titre: 'Volume d\'un cube', definition: 'V = a³', exemple: 'a=3 → V=27', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_11', titre: 'Médiatrice d\'un segment', definition: 'Ensemble des points équidistants', exemple: 'MA = MB', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_12', titre: 'Cercle', definition: 'Ensemble des points à distance r de O', exemple: 'x² + y² = r²', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_13', titre: 'Arc capable', definition: 'Points d\'où l\'on voit un segment sous un angle', exemple: 'Angle constant', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_14', titre: 'Somme des angles d\'un triangle', definition: '180°', exemple: '60+60+60 = 180', icone: '📐', categorie: 'Géométrie' }
    ],
    trigonometrie: [
        { id: 'trigo_1', titre: 'Sinus', definition: 'sin(α) = opposé/hypoténuse', exemple: 'sin(30°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_2', titre: 'Cosinus', definition: 'cos(α) = adjacent/hypoténuse', exemple: 'cos(60°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_3', titre: 'Tangente', definition: 'tan(α) = opposé/adjacent', exemple: 'tan(45°) = 1', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_4', titre: 'sin² α + cos² α = 1', definition: 'Formule fondamentale', exemple: 'sin²(30°) + cos²(30°) = 1', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_5', titre: 'tan α = sin α/cos α', definition: 'Rapport fondamental', exemple: 'tan(45°) = sin(45°)/cos(45°) = 1', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_6', titre: 'sin(30°)', definition: '1/2', exemple: '0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_7', titre: 'cos(30°)', definition: '√3/2', exemple: '0.866', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_8', titre: 'sin(45°)', definition: '√2/2', exemple: '0.707', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_9', titre: 'cos(60°)', definition: '1/2', exemple: '0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_10', titre: 'Conversion degrés-radians', definition: 'π rad = 180°', exemple: 'π/2 rad = 90°', icone: '📐', categorie: 'Trigonométrie' }
    ],
    analyse: [
        { id: 'ana_1', titre: 'Dérivée de x^n', definition: 'f\'(x) = n×x^(n-1)', exemple: '(x²)\' = 2x', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_2', titre: 'Dérivée de e^x', definition: '(e^x)\' = e^x', exemple: 'e^x reste inchangé', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_3', titre: 'Dérivée de ln(x)', definition: '(ln x)\' = 1/x', exemple: 'ln(2x)\' = 1/x', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_4', titre: 'Dérivée d\'une somme', definition: '(f+g)\' = f\' + g\'', exemple: '(x²+x)\' = 2x+1', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_5', titre: 'Dérivée d\'un produit', definition: '(fg)\' = f\'g + fg\'', exemple: '(x²×x)\' = 2x×x + x²×1 = 3x²', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_6', titre: 'Primitive de x^n', definition: '∫x^n dx = x^(n+1)/(n+1) + C', exemple: '∫x dx = x²/2 + C', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_7', titre: 'Primitive de e^x', definition: '∫e^x dx = e^x + C', exemple: '∫e^x dx = e^x + C', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_8', titre: 'Primitive de 1/x', definition: '∫1/x dx = ln|x| + C', exemple: '∫1/x dx = ln|x| + C', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_9', titre: 'e^0', definition: 'e^0 = 1', exemple: 'e^0 = 1', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_10', titre: 'ln(1)', definition: 'ln(1) = 0', exemple: 'ln(1) = 0', icone: '📈', categorie: 'Analyse' }
    ],
    vecteurs: [
        { id: 'vec_1', titre: 'Vecteur AB', definition: 'AB = B - A', exemple: 'A(1,2), B(3,4) → AB = (2,2)', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_2', titre: 'Somme de vecteurs', definition: 'u + v = (u1+v1, u2+v2)', exemple: '(1,2) + (3,4) = (4,6)', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_3', titre: 'Produit scalaire', definition: 'u·v = u1×v1 + u2×v2', exemple: '(1,2)·(3,4) = 3+8 = 11', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_4', titre: 'Norme d\'un vecteur', definition: '||u|| = √(u1² + u2²)', exemple: '||(3,4)|| = 5', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_5', titre: 'Vecteurs orthogonaux', definition: 'u·v = 0', exemple: '(1,0)·(0,1) = 0', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_6', titre: 'Relation de Chasles', definition: 'AB + BC = AC', exemple: 'A→B + B→C = A→C', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_7', titre: 'Projection d\'un vecteur', definition: 'proj_u(v) = (u·v)/||u||² × u', exemple: 'Projection orthogonale', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_8', titre: 'Produit scalaire et angle', definition: 'u·v = ||u||×||v||×cos(α)', exemple: 'cos(α) = u·v/(||u||×||v||)', icone: '➡️', categorie: 'Vecteurs' }
    ],
    statistiques: [
        { id: 'stat_1', titre: 'Moyenne', definition: 'x̄ = Σxi/n', exemple: '(4+6+8)/3 = 6', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_2', titre: 'Médiane', definition: 'Valeur centrale', exemple: '3,5,7 → médiane = 5', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_3', titre: 'Mode', definition: 'Valeur la plus fréquente', exemple: '3,5,5,7 → mode = 5', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_4', titre: 'Variance', definition: 'σ² = Σ(xi - x̄)²/n', exemple: 'Mesure la dispersion', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_5', titre: 'Écart-type', definition: 'σ = √σ²', exemple: 'Racine de la variance', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_6', titre: 'Étendue', definition: 'Max - Min', exemple: '3,5,7,9 → étendue = 6', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_7', titre: 'Effectif cumulé', definition: 'Somme des effectifs', exemple: 'Suivi des cumuls', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_8', titre: 'Fréquence', definition: 'Effectif/Total', exemple: '5/20 = 25%', icone: '📊', categorie: 'Statistiques' }
    ],
    complexes: [
        { id: 'comp_1', titre: 'Définition de i', definition: 'i² = -1', exemple: '√-1 = i', icone: 'ℂ', categorie: 'Nombres complexes' },
        { id: 'comp_2', titre: 'Forme algébrique', definition: 'z = a + ib', exemple: '3 + 4i', icone: 'ℂ', categorie: 'Nombres complexes' },
        { id: 'comp_3', titre: 'Conjugué', definition: 'conj(z) = a - ib', exemple: 'conj(3+4i) = 3-4i', icone: 'ℂ', categorie: 'Nombres complexes' },
        { id: 'comp_4', titre: 'Module', definition: '|z| = √(a² + b²)', exemple: '|3+4i| = 5', icone: 'ℂ', categorie: 'Nombres complexes' }
    ]
};

var favorisFormules = JSON.parse(localStorage.getItem('favorisFormules') || '[]');
var favorisChapitres = JSON.parse(localStorage.getItem('favorisChapitres') || '[]');

// =========================================================
// DONNEES UTILISATEUR
// =========================================================

var USER_DATA = {
    progress: {},
    quizResults: {},
    totalTime: 0,
    revisions: {},
    chapitreScores: {},
    examensCompleted: {},
    streak: 0
};

// ---- ETAT ----
var currentTab = 'dashboard';
var currentQuiz = { index: 0, questions: [], answers: [], score: 0, total: 0 };
var currentExamen = { index: 0, questions: [], answers: [], score: 0, total: 0, timer: null, timeLeft: 0, niveau: '3e' };
var currentChapitreId = null;

// =========================================================
// FONCTION PRINCIPALE $ POUR RÉCUPÉRER LES ÉLÉMENTS
// =========================================================

function $(id) {
    return document.getElementById(id);
}

// =========================================================
// CHARGEMENT & SAUVEGARDE
// =========================================================

function loadUserData() {
    try {
        var saved = localStorage.getItem('cesMathData');
        if (saved) {
            var parsed = JSON.parse(saved);
            USER_DATA = { ...USER_DATA, ...parsed };
        }
    } catch (e) {
        console.warn('Erreur chargement:', e);
    }
}

function saveUserData() {
    try {
        localStorage.setItem('cesMathData', JSON.stringify(USER_DATA));
    } catch (e) {
        console.warn('Erreur sauvegarde:', e);
    }
}

// =========================================================
// NAVIGATION - CORRIGÉE (avec 'fiches' ajouté)
// =========================================================

function showTab(tab) {
    currentTab = tab;
    
    // Cacher toutes les sections
    var tabs = ['dashboard', 'revision', 'formules', 'fiches', 'quiz', 'examens', 'stats', 'favoris'];
    for (var i = 0; i < tabs.length; i++) {
        var el = document.getElementById(tabs[i]);
        if (el) el.classList.add('hidden');
        
        var btn = document.getElementById('tab' + tabs[i].charAt(0).toUpperCase() + tabs[i].slice(1));
        if (btn) btn.classList.remove('active');
    }
    
    // Afficher la section cible
    var target = document.getElementById(tab);
    if (target) target.classList.remove('hidden');
    
    var btnTarget = document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (btnTarget) btnTarget.classList.add('active');
    
    // Charger le contenu
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'revision') renderRevision();
    if (tab === 'formules') renderFormules();
    if (tab === 'fiches') { /* Rien à charger dynamiquement, le HTML est déjà prêt */ }
    if (tab === 'quiz') { updateQuizChapitres(); }
    if (tab === 'stats') renderStats();
    if (tab === 'favoris') renderFavoris();
}

function goHome() {
    showTab('dashboard');
}

// =========================================================
// THEME
// =========================================================

function toggleTheme() {
    document.body.classList.toggle('dark');
    var btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// =========================================================
// DASHBOARD
// =========================================================

function renderDashboard() {
    var totalChapitres = 0;
    var revisites = 0;
    var tempsTotal = USER_DATA.totalTime || 0;
    var streak = USER_DATA.streak || 0;
    
    var annees = ['3e', '4e', '5e', '6e'];
    for (var a = 0; a < annees.length; a++) {
        var chaps = CHAPITRES[annees[a]] || [];
        totalChapitres += chaps.length;
        for (var c = 0; c < chaps.length; c++) {
            var prog = USER_DATA.progress[chaps[c].id] || 0;
            if (prog >= 100) revisites++;
        }
    }
    
    var totalEl = document.getElementById('totalChapitres');
    if (totalEl) totalEl.textContent = totalChapitres;
    
    var revEl = document.getElementById('revisites');
    if (revEl) revEl.textContent = totalChapitres > 0 ? Math.round(revisites / totalChapitres * 100) + '%' : '0%';
    
    var quizTotal = Object.keys(USER_DATA.quizResults || {}).length;
    var quizOk = 0;
    for (var key in USER_DATA.quizResults) {
        if (USER_DATA.quizResults[key] >= 80) quizOk++;
    }
    
    var quizEl = document.getElementById('quizReussis');
    if (quizEl) quizEl.textContent = quizTotal > 0 ? Math.round(quizOk / quizTotal * 100) + '%' : '0%';
    
    var tempsEl = document.getElementById('tempsTotal');
    if (tempsEl) tempsEl.textContent = Math.floor(tempsTotal / 60) + 'h' + (tempsTotal % 60) + 'm';
    
    var streakEl = document.getElementById('streakDisplay');
    if (streakEl) streakEl.textContent = streak;
    
    var favsEl = document.getElementById('favorisCount');
    if (favsEl) favsEl.textContent = favorisFormules.length + favorisChapitres.length;
    
    var formulesEl = document.getElementById('formulesCount');
    if (formulesEl) formulesEl.textContent = 66;
    
    var badges = getBadges();
    var unlocked = badges.filter(function(b) { return b.unlocked; });
    var badgeEl = document.getElementById('badgeCount');
    if (badgeEl) badgeEl.textContent = unlocked.length;
    
    // Progression par année
    var progressHtml = '';
    for (var a2 = 0; a2 < annees.length; a2++) {
        var annee = annees[a2];
        var chaps2 = CHAPITRES[annee] || [];
        var total = chaps2.length;
        var done = 0;
        for (var c2 = 0; c2 < chaps2.length; c2++) {
            if (USER_DATA.progress[chaps2[c2].id] && USER_DATA.progress[chaps2[c2].id] >= 100) done++;
        }
        var percent = total > 0 ? Math.round(done / total * 100) : 0;
        var label = annee === '3e' ? '3e Année' : annee === '4e' ? '4e Année' : annee === '5e' ? '5e Année' : '6e Année';
        var color = percent >= 80 ? '#1e7a3c' : percent >= 50 ? '#e8a400' : '#1c5fa8';
        progressHtml += '<div style="margin: 8px 0;"><div style="display: flex; justify-content: space-between; font-size: 13px;"><span>' + label + '</span><span style="font-weight: 900;">' + percent + '%</span></div><div style="height: 6px; background: var(--soft); border-radius: 3px; overflow: hidden;"><div style="width: ' + percent + '%; height: 100%; background: ' + color + '; border-radius: 3px; transition: width 0.6s ease;"></div></div></div>';
    }
    var progEl = document.getElementById('progressionAnnees');
    if (progEl) progEl.innerHTML = progressHtml;
    
    // Chapitres urgents
    var urgents = [];
    for (var a3 = 0; a3 < annees.length; a3++) {
        var chaps3 = CHAPITRES[annees[a3]] || [];
        for (var c3 = 0; c3 < chaps3.length; c3++) {
            var chap = chaps3[c3];
            var prog = USER_DATA.progress[chap.id] || 0;
            if (prog < 30) {
                urgents.push(chap);
            }
        }
    }
    
    var urgentHtml = '';
    if (urgents.length === 0) {
        urgentHtml = '<div style="color: #1e7a3c; font-weight: 900; padding: 10px;">🎉 Tous les chapitres sont en bonne voie !</div>';
    } else {
        for (var u = 0; u < Math.min(urgents.length, 4); u++) {
            var chap = urgents[u];
            urgentHtml += '<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--line);"><span>' + chap.icone + ' ' + chap.titre + '</span><span style="color: #c81e2c; font-weight: 900;">' + (USER_DATA.progress[chap.id] || 0) + '%</span></div>';
        }
    }
    var urgentEl = document.getElementById('chapitresUrgents');
    if (urgentEl) urgentEl.innerHTML = urgentHtml;
    
    // Badges
    var badgeHtml = '';
    if (unlocked.length === 0) {
        badgeHtml = '<span style="color: var(--muted); font-size: 13px;">Aucun badge débloqué. Continue à t\'entraîner !</span>';
    } else {
        for (var b = 0; b < badges.length; b++) {
            var badge = badges[b];
            badgeHtml += '<div class="badge-item ' + (badge.unlocked ? 'unlocked' : 'locked') + '"><span class="badge-icon">' + badge.icon + '</span> ' + badge.name + '</div>';
        }
    }
    var badgeDisplay = document.getElementById('badgeDisplay');
    if (badgeDisplay) badgeDisplay.innerHTML = badgeHtml;
}

// =========================================================
// BADGES
// =========================================================

function getBadges() {
    var badges = [];
    var total = 0;
    var revisites = 0;
    var annees = ['3e', '4e', '5e', '6e'];
    for (var a = 0; a < annees.length; a++) {
        var chaps = CHAPITRES[annees[a]] || [];
        total += chaps.length;
        for (var c = 0; c < chaps.length; c++) {
            if (USER_DATA.progress[chaps[c].id] >= 100) revisites++;
        }
    }
    var percent = total > 0 ? Math.round(revisites / total * 100) : 0;
    
    badges.push({ id: 'apprenti', name: 'Apprenti', icon: '🥉', unlocked: total >= 5 });
    badges.push({ id: 'conducteur', name: 'Conducteur', icon: '🥈', unlocked: total >= 10 });
    badges.push({ id: 'expert', name: 'Expert', icon: '🥇', unlocked: total >= 15 && percent >= 80 });
    badges.push({ id: 'master', name: 'Master', icon: '🏆', unlocked: total >= 20 && percent >= 85 });
    badges.push({ id: 'streak', name: 'Série', icon: '🔥', unlocked: USER_DATA.streak >= 10 });
    
    return badges;
}

// =========================================================
// RÉVISION PAR ANNÉE
// =========================================================

function renderRevision() {
    var container = document.getElementById('contenuAnnee');
    if (container) container.innerHTML = '';
}

function showAnnee(annee) {
    var container = document.getElementById('contenuAnnee');
    var chapitres = CHAPITRES[annee] || [];
    
    if (!container) return;
    
    if (chapitres.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--muted);">📚 Aucun chapitre pour cette année.</div>';
        return;
    }
    
    var html = '<h3 style="margin: 16px 0 8px 0;">' + (annee === '3e' ? '3e' : annee === '4e' ? '4e' : annee === '5e' ? '5e' : '6e') + ' Année</h3>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">';
    
    for (var i = 0; i < chapitres.length; i++) {
        var chap = chapitres[i];
        var progress = USER_DATA.progress[chap.id] || 0;
        var status = progress >= 100 ? 'revise' : progress > 0 ? 'en-cours' : 'non-vu';
        var statusLabel = progress >= 100 ? '✅ Révisé' : progress > 0 ? '⏳ En cours' : '📖 Non vu';
        var badgeColor = progress >= 100 ? '#1e7a3c' : progress > 0 ? '#e8a400' : '#68707a';
        
        html += '<div class="chapitre-card" onclick="openChapitre(\'' + chap.id + '\')" style="border-color: ' + chap.color + ';">';
        html += '<div class="chapitre-header">';
        html += '<div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 24px;">' + chap.icone + '</span><span class="chapitre-title">' + chap.titre + '</span></div>';
        html += '<span class="chapitre-badge ' + status + '">' + statusLabel + '</span>';
        html += '</div>';
        html += '<div class="chapitre-desc">' + chap.desc + '</div>';
        html += '<div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--muted); margin-top: 4px;"><span>Niveau: ' + chap.niveau + '</span><span>' + (chap.exercices ? chap.exercices.length : 0) + ' exercices</span></div>';
        html += '<div class="chapitre-progress"><span style="width: ' + progress + '%;"></span></div>';
        html += '</div>';
    }
    html += '</div>';
    container.innerHTML = html;
}

// =========================================================
// ENCYCLOPÉDIE DES FORMULES
// =========================================================

function renderFormules() {
    var searchInput = document.getElementById('formuleSearch');
    var search = searchInput ? searchInput.value.toLowerCase() : '';
    var list = document.getElementById('formulesList');
    
    if (!list) return;
    
    var html = '';
    var total = 0;
    
    for (var categorie in FORMULES_DATA) {
        var formules = FORMULES_DATA[categorie];
        for (var i = 0; i < formules.length; i++) {
            var f = formules[i];
            if (search && f.titre.toLowerCase().indexOf(search) === -1 && f.definition.toLowerCase().indexOf(search) === -1) continue;
            total++;
            
            var estFavori = favorisFormules.indexOf(f.id) !== -1;
            var color = categorie === 'algebre' ? '#c81e2c' : categorie === 'geometrie' ? '#1c5fa8' : categorie === 'trigonometrie' ? '#e8a400' : categorie === 'analyse' ? '#6b46c1' : categorie === 'vecteurs' ? '#0e7c86' : categorie === 'statistiques' ? '#e88a00' : '#2a7a5a';
            
            html += '<div class="formule-card">';
            html += '<div class="formule-header">';
            html += '<span class="formule-icon">' + f.icone + '</span>';
            html += '<span class="formule-title">' + f.titre + '</span>';
            html += '<span class="formule-categorie" style="background: ' + color + '20; color: ' + color + ';">' + f.categorie + '</span>';
            html += '</div>';
            html += '<div class="formule-definition">📖 ' + f.definition + '</div>';
            html += '<div class="formule-math">' + f.exemple + '</div>';
            html += '<div class="formule-actions">';
            html += '<button onclick="toggleFavoriFormule(\'' + f.id + '\')">' + (estFavori ? '⭐' : '☆') + ' Favori</button>';
            html += '</div>';
            html += '</div>';
        }
    }
    
    if (total === 0) {
        list.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--muted);">Aucune formule trouvée.</div>';
    } else {
        list.innerHTML = html;
    }
}

function rechercherFormule() {
    renderFormules();
}

function filtrerFormules(categorie) {
    var searchInput = document.getElementById('formuleSearch');
    if (searchInput) searchInput.value = '';
    
    var cards = document.querySelectorAll('#formulesList .formule-card');
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cat = card.querySelector('.formule-categorie');
        if (cat) {
            var display = cat.textContent.toLowerCase() === categorie.toLowerCase() ? 'block' : 'none';
            card.style.display = display;
        }
    }
}

function toggleFavoriFormule(id) {
    var index = favorisFormules.indexOf(id);
    if (index !== -1) {
        favorisFormules.splice(index, 1);
    } else {
        favorisFormules.push(id);
    }
    localStorage.setItem('favorisFormules', JSON.stringify(favorisFormules));
    renderFormules();
    renderDashboard();
}

// =========================================================
// OUVERTURE D'UN CHAPITRE
// =========================================================

function openChapitre(chapitreId) {
    currentChapitreId = chapitreId;
    
    var found = null;
    for (var annee in CHAPITRES) {
        for (var i = 0; i < CHAPITRES[annee].length; i++) {
            if (CHAPITRES[annee][i].id === chapitreId) {
                found = CHAPITRES[annee][i];
                break;
            }
        }
        if (found) break;
    }
    
    if (!found) return;
    
    var modal = document.createElement('div');
    modal.className = 'chapitre-modal';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;';
    
    var content = document.createElement('div');
    content.style.cssText = 'background: var(--surface); border-radius: 18px; max-width: 750px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); position: relative;';
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position: sticky; top: 0; float: right; background: none; border: none; font-size: 24px; cursor: pointer; color: var(--muted); padding: 0 4px;';
    closeBtn.onclick = function() { document.body.removeChild(modal); };
    
    var html = '<h2 style="margin: 0 0 4px 0; color: ' + found.color + ';">' + found.icone + ' ' + found.titre + '</h2>';
    html += '<p style="color: var(--muted); margin-bottom: 16px;">' + found.desc + ' • ' + found.niveau + '</p>';
    
    html += '<div style="margin: 16px 0; display: flex; gap: 10px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startChapitreQuiz(\'' + found.id + '\')">🎯 Quiz du chapitre</button>';
    html += '<button class="ghost-btn" onclick="markChapitreDone(\'' + found.id + '\')">✅ Marquer comme révisé</button>';
    html += '<button class="ghost-btn" onclick="toggleFavoriChapitre(\'' + found.id + '\')">⭐ Favori</button>';
    html += '<button class="ghost-btn" onclick="document.body.removeChild(this.parentElement.parentElement.parentElement)">← Retour</button>';
    html += '</div>';
    
    html += '<h3>🎯 Objectifs</h3><ul style="margin: 8px 0 16px 20px; line-height: 1.6;">';
    if (found.objectifs) {
        for (var o = 0; o < found.objectifs.length; o++) {
            html += '<li>' + found.objectifs[o] + '</li>';
        }
    }
    html += '</ul>';
    
    html += '<h3>📝 Matières</h3><ul style="margin: 8px 0 16px 20px; line-height: 1.6;">';
    if (found.matieres) {
        for (var m = 0; m < found.matieres.length; m++) {
            html += '<li>' + found.matieres[m] + '</li>';
        }
    }
    html += '</ul>';
    
    if (found.exercices) {
        html += '<h3>🎯 Exercices</h3>';
        for (var e = 0; e < found.exercices.length; e++) {
            var ex = found.exercices[e];
            html += '<div style="background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 14px; margin: 8px 0;">';
            html += '<b>' + ex.question + '</b>';
            html += '<div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">';
            for (var p = 0; p < ex.options.length; p++) {
                var isCorrect = p === ex.correct;
                html += '<button style="text-align: left; padding: 8px 12px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); cursor: pointer;" onclick="checkExo(this, ' + isCorrect + ', \'' + (ex.correction || '') + '\')">' + String.fromCharCode(65 + p) + '. ' + ex.options[p] + '</button>';
            }
            html += '</div><div class="exo-feedback" style="margin-top: 6px; font-size: 13px;"></div></div>';
        }
    }
    
    content.innerHTML = html;
    content.prepend(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

function toggleFavoriChapitre(id) {
    var index = favorisChapitres.indexOf(id);
    if (index !== -1) {
        favorisChapitres.splice(index, 1);
    } else {
        favorisChapitres.push(id);
    }
    localStorage.setItem('favorisChapitres', JSON.stringify(favorisChapitres));
    renderDashboard();
}

function checkExo(btn, isCorrect, correction) {
    var parent = btn.parentElement.parentElement;
    var feedback = parent.querySelector('.exo-feedback');
    var buttons = parent.querySelectorAll('button');
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.cursor = 'default';
        buttons[i].disabled = true;
        buttons[i].style.opacity = '0.7';
    }
    
    if (isCorrect) {
        btn.style.background = '#1e7a3c';
        btn.style.color = 'white';
        btn.style.borderColor = '#1e7a3c';
        if (feedback) feedback.innerHTML = '<span style="color: #1e7a3c; font-weight: 900;">✅ Correct ! ' + (correction ? correction : '') + '</span>';
    } else {
        btn.style.background = '#c81e2c';
        btn.style.color = 'white';
        btn.style.borderColor = '#c81e2c';
        if (feedback) feedback.innerHTML = '<span style="color: #c81e2c; font-weight: 900;">❌ Incorrect. ' + (correction ? 'Correction: ' + correction : '') + '</span>';
    }
}

function startChapitreQuiz(chapitreId) {
    var questions = QUESTIONS_QUIZ.filter(function(q) { return q.chapitre === chapitreId; });
    if (questions.length === 0) {
        alert('Aucune question pour ce chapitre.');
        return;
    }
    currentQuiz.questions = shuffle(questions);
    currentQuiz.index = 0;
    currentQuiz.score = 0;
    currentQuiz.total = currentQuiz.questions.length;
    showTab('quiz');
    renderQuiz();
}

function markChapitreDone(chapitreId) {
    USER_DATA.progress[chapitreId] = 100;
    saveUserData();
    renderDashboard();
    var modal = document.querySelector('.chapitre-modal');
    if (modal) document.body.removeChild(modal);
    alert('✅ Chapitre marqué comme révisé !');
}

// =========================================================
// QUIZ
// =========================================================

function updateQuizChapitres() {
    var anneeSelect = document.getElementById('quizAnnee');
    var chapitreSelect = document.getElementById('quizChapitre');
    
    if (!anneeSelect || !chapitreSelect) return;
    
    var annee = anneeSelect.value;
    var chapitres = CHAPITRES[annee] || [];
    chapitreSelect.innerHTML = '<option value="all">Tous les chapitres</option>';
    for (var i = 0; i < chapitres.length; i++) {
        chapitreSelect.innerHTML += '<option value="' + chapitres[i].id + '">' + chapitres[i].icone + ' ' + chapitres[i].titre + '</option>';
    }
}

function startQuiz() {
    var anneeSelect = document.getElementById('quizAnnee');
    var chapitreSelect = document.getElementById('quizChapitre');
    
    if (!anneeSelect || !chapitreSelect) return;
    
    var annee = anneeSelect.value;
    var chapitre = chapitreSelect.value;
    
    var questions = QUESTIONS_QUIZ.filter(function(q) { 
        if (annee !== 'all' && q.annee !== annee) return false;
        if (chapitre !== 'all' && q.chapitre !== chapitre) return false;
        return true;
    });
    
    if (questions.length === 0) {
        alert('Aucune question disponible pour cette sélection.');
        return;
    }
    
    currentQuiz.questions = shuffle(questions);
    currentQuiz.index = 0;
    currentQuiz.score = 0;
    currentQuiz.total = currentQuiz.questions.length;
    renderQuiz();
}

function renderQuiz() {
    var container = document.getElementById('quizContent');
    if (!container) return;
    
    if (currentQuiz.index >= currentQuiz.total) {
        showQuizResult();
        return;
    }
    
    var q = currentQuiz.questions[currentQuiz.index];
    var progress = Math.round((currentQuiz.index) / currentQuiz.total * 100);
    
    var html = '<div style="margin-bottom: 16px;"><div style="display: flex; justify-content: space-between; font-size: 14px; color: var(--muted);"><span>Question ' + (currentQuiz.index + 1) + ' / ' + currentQuiz.total + '</span><span>Score: ' + currentQuiz.score + '</span></div><div style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden;"><div style="width: ' + progress + '%; height: 100%; background: var(--blue); border-radius: 2px; transition: width 0.3s;"></div></div></div>';
    html += '<div class="quiz-question">';
    html += '<div class="question-text">' + q.question + '</div>';
    html += '<div class="quiz-options">';
    for (var i = 0; i < q.options.length; i++) {
        html += '<button onclick="answerQuiz(' + i + ')">' + String.fromCharCode(65 + i) + '. ' + q.options[i] + '</button>';
    }
    html += '</div><div id="quizFeedback"></div></div>';
    
    container.innerHTML = html;
}

function answerQuiz(index) {
    var q = currentQuiz.questions[currentQuiz.index];
    var isCorrect = index === q.correct;
    
    var buttons = document.querySelectorAll('.quiz-options button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add('locked');
        if (i === q.correct) buttons[i].classList.add('correct');
        if (i === index && !isCorrect) buttons[i].classList.add('wrong');
    }
    
    if (isCorrect) {
        currentQuiz.score++;
        USER_DATA.streak = (USER_DATA.streak || 0) + 1;
    } else {
        USER_DATA.streak = 0;
    }
    saveUserData();
    
    var feedback = document.getElementById('quizFeedback');
    var correction = q.correction || '';
    if (feedback) {
        feedback.innerHTML = '<div class="quiz-result ' + (isCorrect ? 'correct' : 'wrong') + '">' + (isCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.') + (correction ? '<div style="margin-top: 4px; font-size: 13px;">' + correction + '</div>' : '') + '</div><button class="primary-btn" onclick="nextQuizQuestion()" style="margin-top: 10px;">➡️ Question suivante</button>';
    }
}

function nextQuizQuestion() {
    currentQuiz.index++;
    renderQuiz();
}

function showQuizResult() {
    var container = document.getElementById('quizContent');
    if (!container) return;
    
    var percent = Math.round(currentQuiz.score / currentQuiz.total * 100);
    var message = percent >= 80 ? '🌟 Excellent !' : percent >= 60 ? '👍 Bon travail !' : '📚 Continue à t\'entraîner !';
    
    var quizId = 'quiz_' + new Date().getTime();
    USER_DATA.quizResults[quizId] = percent;
    saveUserData();
    
    var html = '<div style="text-align: center; padding: 30px 0;">';
    html += '<div style="font-size: 48px; margin-bottom: 10px;">' + (percent >= 80 ? '🏆' : percent >= 60 ? '📈' : '📚') + '</div>';
    html += '<h2>Quiz terminé !</h2>';
    html += '<div style="font-size: 36px; font-weight: 900; color: ' + (percent >= 80 ? '#1e7a3c' : percent >= 60 ? '#e8a400' : '#c81e2c') + ';">' + percent + '%</div>';
    html += '<p style="font-size: 18px; margin: 10px 0;">' + currentQuiz.score + ' / ' + currentQuiz.total + ' bonnes réponses</p>';
    html += '<p style="color: var(--muted);">' + message + '</p>';
    html += '<div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startQuiz()">🔄 Refaire le quiz</button>';
    html += '<button class="ghost-btn" onclick="showTab(\'dashboard\')">📊 Retour</button>';
    html += '</div></div>';
    container.innerHTML = html;
    
    renderDashboard();
}

// =========================================================
// DÉFI DU JOUR
// =========================================================

function startDefiJour() {
    var questions = shuffle(QUESTIONS_QUIZ.slice()).slice(0, 5);
    if (questions.length === 0) {
        alert('Aucune question disponible.');
        return;
    }
    currentQuiz.questions = questions;
    currentQuiz.index = 0;
    currentQuiz.score = 0;
    currentQuiz.total = questions.length;
    renderQuiz();
}

// =========================================================
// EXAMENS BLANCS
// =========================================================

function startExamen(niveau) {
    var allQuestions = QUESTIONS_QUIZ.slice();
    var questions = [];
    
    if (niveau === 'complet') {
        questions = shuffle(allQuestions);
    } else {
        questions = shuffle(allQuestions.filter(function(q) { return q.annee === niveau; }));
    }
    
    var count = niveau === 'complet' ? 50 : niveau === '6e' ? 30 : niveau === '5e' ? 25 : 20;
    questions = questions.slice(0, count);
    
    if (questions.length < 10) {
        alert('Pas assez de questions pour cet examen.');
        return;
    }
    
    currentExamen.questions = questions;
    currentExamen.index = 0;
    currentExamen.score = 0;
    currentExamen.total = questions.length;
    currentExamen.niveau = niveau;
    currentExamen.timeLeft = niveau === 'complet' ? 5400 : niveau === '6e' ? 3000 : niveau === '5e' ? 2400 : 1800;
    
    var container = document.getElementById('examenContent');
    if (!container) return;
    
    container.innerHTML = '<div style="margin-bottom: 16px;"><div style="display: flex; justify-content: space-between; font-size: 14px;"><span>⏱️ <span id="examenTimer">' + formatTime(currentExamen.timeLeft) + '</span></span><span>Question <span id="examenProgress">1</span> / ' + currentExamen.total + '</span><span>Score: <span id="examenScore">0</span></span></div><div style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden;"><div id="examenBar" style="width: 0%; height: 100%; background: var(--blue); border-radius: 2px; transition: width 0.3s;"></div></div></div><div id="examenQuestion"></div>';
    
    renderExamenQuestion();
    
    if (currentExamen.timer) clearInterval(currentExamen.timer);
    currentExamen.timer = setInterval(function() {
        currentExamen.timeLeft--;
        var timerEl = document.getElementById('examenTimer');
        if (timerEl) timerEl.textContent = formatTime(currentExamen.timeLeft);
        if (currentExamen.timeLeft <= 0) {
            clearInterval(currentExamen.timer);
            finishExamen();
        }
    }, 1000);
}

function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function renderExamenQuestion() {
    if (currentExamen.index >= currentExamen.total) {
        finishExamen();
        return;
    }
    
    var q = currentExamen.questions[currentExamen.index];
    var progressEl = document.getElementById('examenProgress');
    var scoreEl = document.getElementById('examenScore');
    var barEl = document.getElementById('examenBar');
    var questionEl = document.getElementById('examenQuestion');
    
    if (progressEl) progressEl.textContent = currentExamen.index + 1;
    if (scoreEl) scoreEl.textContent = currentExamen.score;
    if (barEl) barEl.style.width = (currentExamen.index / currentExamen.total * 100) + '%';
    
    if (!questionEl) return;
    
    var html = '<div class="quiz-question">';
    html += '<div class="question-text">' + q.question + '</div>';
    html += '<div class="quiz-options">';
    for (var i = 0; i < q.options.length; i++) {
        html += '<button onclick="answerExamen(' + i + ')">' + String.fromCharCode(65 + i) + '. ' + q.options[i] + '</button>';
    }
    html += '</div><div id="examenFeedback"></div></div>';
    
    questionEl.innerHTML = html;
}

function answerExamen(index) {
    var q = currentExamen.questions[currentExamen.index];
    var isCorrect = index === q.correct;
    
    var buttons = document.querySelectorAll('#examenQuestion .quiz-options button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add('locked');
        if (i === q.correct) buttons[i].classList.add('correct');
        if (i === index && !isCorrect) buttons[i].classList.add('wrong');
    }
    
    if (isCorrect) currentExamen.score++;
    var scoreEl = document.getElementById('examenScore');
    if (scoreEl) scoreEl.textContent = currentExamen.score;
    
    var feedback = document.getElementById('examenFeedback');
    if (feedback) {
        feedback.innerHTML = '<div class="quiz-result ' + (isCorrect ? 'correct' : 'wrong') + '">' + (isCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.') + '</div><button class="primary-btn" onclick="nextExamenQuestion()" style="margin-top: 10px;">➡️ Question suivante</button>';
    }
}

function nextExamenQuestion() {
    currentExamen.index++;
    renderExamenQuestion();
}

function finishExamen() {
    if (currentExamen.timer) clearInterval(currentExamen.timer);
    
    var percent = Math.round(currentExamen.score / currentExamen.total * 100);
    var message = percent >= 80 ? '🎉 Félicitations !' : percent >= 60 ? '👍 Bonne performance !' : '📚 Continue à réviser !';
    
    var examId = 'exam_' + currentExamen.niveau + '_' + new Date().getTime();
    USER_DATA.quizResults[examId] = percent;
    saveUserData();
    
    var container = document.getElementById('examenContent');
    if (!container) return;
    
    var html = '<div style="text-align: center; padding: 30px 0;">';
    html += '<div style="font-size: 64px; margin-bottom: 10px;">' + (percent >= 80 ? '🎉' : percent >= 60 ? '📈' : '📚') + '</div>';
    html += '<h2>Examen terminé !</h2>';
    html += '<div style="font-size: 48px; font-weight: 900; color: ' + (percent >= 80 ? '#1e7a3c' : percent >= 60 ? '#e8a400' : '#c81e2c') + ';">' + percent + '%</div>';
    html += '<p style="font-size: 18px; margin: 10px 0;">' + currentExamen.score + ' / ' + currentExamen.total + ' bonnes réponses</p>';
    html += '<p style="color: var(--muted);">' + message + '</p>';
    html += '<div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startExamen(\'' + currentExamen.niveau + '\')">🔄 Refaire</button>';
    html += '<button class="ghost-btn" onclick="showTab(\'dashboard\')">📊 Retour</button>';
    html += '</div></div>';
    
    container.innerHTML = html;
    renderDashboard();
}

// =========================================================
// STATISTIQUES
// =========================================================

function renderStats() {
    var totalChapitres = 0;
    var revisites = 0;
    var annees = ['3e', '4e', '5e', '6e'];
    for (var a = 0; a < annees.length; a++) {
        var chaps = CHAPITRES[annees[a]] || [];
        totalChapitres += chaps.length;
        for (var c = 0; c < chaps.length; c++) {
            if (USER_DATA.progress[chaps[c].id] >= 100) revisites++;
        }
    }
    
    var el1 = document.getElementById('statsTotalChapitres');
    if (el1) el1.textContent = totalChapitres;
    
    var el2 = document.getElementById('statsRevisites');
    if (el2) el2.textContent = totalChapitres > 0 ? Math.round(revisites / totalChapitres * 100) + '%' : '0%';
    
    var el3 = document.getElementById('statsQuizTotal');
    if (el3) el3.textContent = Object.keys(USER_DATA.quizResults || {}).length;
    
    var meilleur = 0;
    for (var key in USER_DATA.quizResults) {
        if (USER_DATA.quizResults[key] > meilleur) meilleur = USER_DATA.quizResults[key];
    }
    var el4 = document.getElementById('statsMeilleur');
    if (el4) el4.textContent = meilleur + '%';
    
    var el5 = document.getElementById('statsTemps');
    if (el5) el5.textContent = Math.floor((USER_DATA.totalTime || 0) / 60) + 'h';
    
    var el6 = document.getElementById('statsSerie');
    if (el6) el6.textContent = USER_DATA.streak || 0;
    
    // Performance par catégorie
    var perfHtml = '';
    var categories = ['3e', '4e', '5e', '6e'];
    for (var i = 0; i < categories.length; i++) {
        var cat = categories[i];
        var chaps2 = CHAPITRES[cat] || [];
        var total2 = chaps2.length;
        var done2 = 0;
        for (var c2 = 0; c2 < chaps2.length; c2++) {
            if (USER_DATA.progress[chaps2[c2].id] >= 100) done2++;
        }
        var percent2 = total2 > 0 ? Math.round(done2 / total2 * 100) : 0;
        var label2 = cat === '3e' ? '3e Année' : cat === '4e' ? '4e Année' : cat === '5e' ? '5e Année' : '6e Année';
        var color2 = percent2 >= 80 ? '#1e7a3c' : percent2 >= 50 ? '#e8a400' : '#c81e2c';
        perfHtml += '<div style="margin: 6px 0;"><div style="display: flex; justify-content: space-between;"><span>' + label2 + '</span><span style="font-weight: 900; color: ' + color2 + ';">' + percent2 + '%</span></div><div style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden;"><div style="width: ' + percent2 + '%; height: 100%; background: ' + color2 + '; border-radius: 2px; transition: width 0.6s ease;"></div></div></div>';
    }
    var perfEl = document.getElementById('categoryPerformance');
    if (perfEl) perfEl.innerHTML = perfHtml || '<div style="color: var(--muted);">Aucune donnée.</div>';
    
    // Points faibles
    var weakHtml = '';
    var weaks = [];
    for (var a2 = 0; a2 < annees.length; a2++) {
        var chaps3 = CHAPITRES[annees[a2]] || [];
        for (var c3 = 0; c3 < chaps3.length; c3++) {
            var chap = chaps3[c3];
            var prog = USER_DATA.progress[chap.id] || 0;
            if (prog < 50) {
                weaks.push({ titre: chap.titre, niveau: chap.niveau, progress: prog });
            }
        }
    }
    weaks.sort(function(a, b) { return a.progress - b.progress; });
    if (weaks.length === 0) {
        weakHtml = '<div style="color: #1e7a3c; font-weight: 900;">🎉 Aucun point faible détecté !</div>';
    } else {
        for (var w = 0; w < Math.min(weaks.length, 5); w++) {
            weakHtml += '<div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid var(--line);"><span>' + weaks[w].titre + '</span><span style="color: #c81e2c; font-weight: 900;">' + weaks[w].progress + '%</span></div>';
        }
    }
    var weakEl = document.getElementById('weakCategories');
    if (weakEl) weakEl.innerHTML = weakHtml;
}

// =========================================================
// FAVORIS
// =========================================================

function renderFavoris() {
    // Formules favorites
    var htmlFormules = '';
    var count = 0;
    for (var categorie in FORMULES_DATA) {
        var formules = FORMULES_DATA[categorie];
        for (var i = 0; i < formules.length; i++) {
            var f = formules[i];
            if (favorisFormules.indexOf(f.id) !== -1) {
                count++;
                htmlFormules += '<div style="padding: 8px 12px; border-bottom: 1px solid var(--line);"><span>' + f.icone + '</span> <b>' + f.titre + '</b><br><span style="font-size: 12px; color: var(--muted);">' + f.definition + '</span></div>';
            }
        }
    }
    var favFormEl = document.getElementById('favorisFormules');
    if (favFormEl) favFormEl.innerHTML = count > 0 ? htmlFormules : '<div style="color: var(--muted); padding: 10px;">Aucune formule favorite.</div>';
    
    // Chapitres favoris
    var htmlChapitres = '';
    var count2 = 0;
    for (var annee in CHAPITRES) {
        var chaps = CHAPITRES[annee];
        for (var i = 0; i < chaps.length; i++) {
            var chap = chaps[i];
            if (favorisChapitres.indexOf(chap.id) !== -1) {
                count2++;
                htmlChapitres += '<div style="padding: 8px 12px; border-bottom: 1px solid var(--line);"><span>' + chap.icone + '</span> <b>' + chap.titre + '</b><br><span style="font-size: 12px; color: var(--muted);">' + chap.niveau + '</span></div>';
            }
        }
    }
    var favChapEl = document.getElementById('favorisChapitres');
    if (favChapEl) favChapEl.innerHTML = count2 > 0 ? htmlChapitres : '<div style="color: var(--muted); padding: 10px;">Aucun chapitre favori.</div>';
}

// =========================================================
// UTILITAIRES
// =========================================================

function shuffle(array) {
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}

function startRevision() {
    var found = null;
    for (var annee in CHAPITRES) {
        for (var i = 0; i < CHAPITRES[annee].length; i++) {
            var chap = CHAPITRES[annee][i];
            if (!USER_DATA.progress[chap.id] || USER_DATA.progress[chap.id] < 100) {
                found = chap;
                break;
            }
        }
        if (found) break;
    }
    
    if (found) {
        openChapitre(found.id);
    } else {
        alert('🎉 Tous les chapitres sont révisés ! Tu es prêt pour l\'examen !');
    }
}

function clearAllProgress() {
    if (confirm('⚠️ Es-tu sûr de vouloir effacer toute ta progression ?')) {
        USER_DATA.progress = {};
        USER_DATA.quizResults = {};
        USER_DATA.totalTime = 0;
        USER_DATA.streak = 0;
        saveUserData();
        renderDashboard();
        alert('🗑️ Toute progression a été effacée.');
    }
}

// =========================================================
// INITIALISATION
// =========================================================

loadUserData();
showTab('dashboard');

console.log('📚 Programme officiel complet de Mathématiques chargé !');
console.log('📖 Chapitres :', Object.keys(CHAPITRES).length);
console.log('📚 Formules :', Object.keys(FORMULES_DATA).reduce(function(acc, key) {
    return acc + FORMULES_DATA[key].length;
}, 0));
