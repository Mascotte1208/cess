// =========================================================
// PROGRAMME OFFICIEL DE MATHÉMATIQUES - COMMUNAUTÉ FRANÇAISE
// 2e DEGRÉ - 3e ET 4e ANNÉES - VERSION COMPLÈTE
// =========================================================

var CHAPITRES = {
    // =========================================================
    // 3E ANNÉE
    // =========================================================
    '3e': [
        // ---- 1. ÉTUDE DES FONCTIONS ----
        {
            id: '3e_fonctions',
            titre: '📈 Étude des fonctions',
            desc: 'Graphiques, tableaux, formules, fonction du premier degré',
            niveau: '3e Année',
            icone: '📈',
            objectifs: [
                'À partir d\'une situation décrite en langage courant ou à partir d\'une formule, construire un tableau et un graphique.',
                'À partir du tableau relatif à une situation simple, proposer une formule qui relie une variable à son image.',
                'Se servir d\'un graphique pour répondre à des questions concernant certaines valeurs de la variable ou de ses images.',
                'Déterminer si un point dont on connaît les coordonnées appartient ou non au graphique d\'une fonction donnée.',
                'Reconnaître qu\'une fonction exprime une proportionnalité à partir de son tableau, de son graphique, de son équation.',
                'Interpréter les coefficients a et b dans f(x) = ax + b.',
                'Associer des fonctions du type f(x) = ax et f(x) = ax + b à leur graphique.',
                'Dessiner le graphique d\'une fonction du premier degré.',
                'Dessiner la droite d\'équation ax + by + c = 0.',
                'À partir des équations de deux droites, déterminer leurs positions respectives.',
                'Écrire l\'équation d\'une droite passant par un point donné et de direction donnée.'
            ],
            matieres: [
                'Distinction entre relation et fonction, définition de fonction d\'une variable.',
                'Modélisation de situations géométriques, physiques, économiques.',
                'Construction point par point de graphiques de fonctions : f(x) = ax, f(x) = ax + b, f(x) = ax², f(x) = √x, f(x) = a/x',
                'Graphique de la fonction f(x) = ax. Droite d\'équation y = ax. Proportionnalité des x et des y.',
                'Graphique de la fonction f(x) = ax + b. Droite d\'équation y = ax + b. Proportionnalité des accroissements.',
                'Droite d\'équation x = a. Équation ax + by + c = 0.',
                'Coefficient angulaire d\'une droite et condition de parallélisme.',
                'Équation de la droite passant par un point et de coefficient angulaire donné.',
                'Condition de perpendicularité de deux droites dans un repère orthonormé.'
            ],
            exercices: [
                { question: 'Quelle est l\'équation d\'une fonction linéaire ?', options: ['y = ax', 'y = ax + b', 'y = x²', 'y = 1/x'], correct: 0, correction: 'Une fonction linéaire est de la forme y = ax. Elle représente une proportionnalité.' },
                { question: 'Dans f(x) = 2x + 3, que représente le coefficient 2 ?', options: ['Le coefficient angulaire (la pente)', 'L\'ordonnée à l\'origine', 'La racine de la fonction', 'Le terme constant'], correct: 0, correction: '2 est le coefficient angulaire. Il représente la pente de la droite.' },
                { question: 'Dans f(x) = 2x + 3, que représente le nombre 3 ?', options: ['L\'ordonnée à l\'origine', 'Le coefficient angulaire', 'La racine de la fonction', 'La pente de la droite'], correct: 0, correction: '3 est l\'ordonnée à l\'origine. C\'est le point d\'intersection avec l\'axe des y.' },
                { question: 'Quelle est la condition de parallélisme de deux droites ?', options: ['Elles ont le même coefficient angulaire', 'Elles ont la même ordonnée à l\'origine', 'Elles sont perpendiculaires', 'Elles ont des coefficients angulaires inverses'], correct: 0, correction: 'Deux droites sont parallèles si et seulement si elles ont le même coefficient angulaire.' },
                { question: 'Comment passe-t-on de y = ax à y = ax + b ?', options: ['Par une translation verticale de b', 'Par une translation horizontale de b', 'Par une rotation', 'Par une homothétie'], correct: 0, correction: 'La translation de vecteur (0, b) permet de passer de y = ax à y = ax + b.' }
            ]
        },
        // ---- 2. ALGÈBRE - ÉQUATIONS DU 1er DEGRÉ ----
        {
            id: '3e_algebre_equations',
            titre: '🔢 Équations du 1er degré',
            desc: 'Équations, systèmes, inéquations, résolution de problèmes',
            niveau: '3e Année',
            icone: '🔢',
            objectifs: [
                'Connaître et utiliser les propriétés des égalités pour justifier l\'équivalence de deux équations.',
                'Reconnaître si un nombre est ou n\'est pas solution d\'une équation.',
                'Résoudre algébriquement et graphiquement une équation du premier degré à une inconnue.',
                'Vérifier la solution d\'une équation.',
                'Reconnaître ce que sont des équations impossibles et indéterminées.',
                'Reconnaître si un couple de nombres est ou n\'est pas solution d\'un système.',
                'Résoudre algébriquement et graphiquement un système de deux équations à deux inconnues.',
                'Résoudre une inéquation du premier degré à une inconnue.',
                'Résoudre un problème en précisant les différentes étapes.'
            ],
            matieres: [
                'Égalités, addition et multiplication. Résolution algébrique d\'une équation du premier degré.',
                'Interprétation graphique de ax + b = 0. Notion de zéro de la fonction.',
                'Équations impossibles et indéterminées.',
                'Résolution de problèmes par la méthode algébrique (une équation).',
                'Systèmes de deux équations du premier degré à deux inconnues.',
                'Méthodes de substitution et de combinaison.',
                'Systèmes impossibles et indéterminés.',
                'Résolution graphique de systèmes.',
                'Inégalités, addition et multiplication. Résolution d\'inéquations.',
                'Interprétation graphique de ax + b > 0 (ou < 0).'
            ],
            exercices: [
                { question: 'Résoudre : 2x + 3 = 11', options: ['x = 4', 'x = 5', 'x = 3', 'x = 7'], correct: 0, correction: '2x = 8 → x = 4' },
                { question: 'Résoudre : 3x - 2 = 13', options: ['x = 5', 'x = 4', 'x = 6', 'x = 3'], correct: 0, correction: '3x = 15 → x = 5' },
                { question: 'Résoudre le système : x + y = 5 et x - y = 1', options: ['(3,2)', '(2,3)', '(4,1)', '(1,4)'], correct: 0, correction: 'Par addition : 2x = 6 → x = 3, y = 2' },
                { question: 'Résoudre : 2x - 4 > 0', options: ['x > 2', 'x < 2', 'x > -2', 'x < -2'], correct: 0, correction: '2x > 4 → x > 2' },
                { question: 'Qu\'est-ce qu\'une équation indéterminée ?', options: ['Elle a une infinité de solutions', 'Elle n\'a pas de solution', 'Elle a une solution unique', 'Elle a deux solutions'], correct: 0, correction: 'Une équation indéterminée a une infinité de solutions.' }
            ]
        },
        // ---- 3. CALCUL NUMÉRIQUE ET POLYNÔMES ----
        {
            id: '3e_algebre_polynomes',
            titre: '🔢 Polynômes et calcul algébrique',
            desc: 'Puissances, polynômes, factorisation, produits remarquables',
            niveau: '3e Année',
            icone: '🔢',
            objectifs: [
                'Utiliser les propriétés des puissances pour modifier l\'écriture d\'une expression algébrique.',
                'Reconnaître la forme d\'une expression algébrique (somme, produit, quotient).',
                'Calculer la valeur numérique d\'un polynôme.',
                'Modifier la forme d\'une expression algébrique pour résoudre une équation, simplifier une fraction.',
                'Transformer une formule pour isoler une variable.',
                'Se servir de la loi du reste lors de la simplification de fractions rationnelles.'
            ],
            matieres: [
                'Puissances à exposants entiers : définitions et propriétés.',
                'Polynômes : degré, somme, produit de deux polynômes.',
                'Valeurs numériques de fonctions polynômes.',
                'Mise en évidence, factorisation par utilisation des produits remarquables : a² - b², a² ± 2ab + b².',
                'Opérations simples sur les fractions algébriques.',
                'Division d\'un polynôme par un polynôme : quotient et reste.',
                'Division d\'un polynôme par (x - a), loi du reste.'
            ],
            exercices: [
                { question: 'Factoriser : x² - 9', options: ['(x-3)(x+3)', '(x-3)²', '(x+3)²', 'x²-9'], correct: 0, correction: 'a² - b² = (a-b)(a+b)' },
                { question: 'Développer : (x + 3)²', options: ['x² + 6x + 9', 'x² + 9', 'x² + 3x + 9', 'x² + 6x + 3'], correct: 0, correction: '(a+b)² = a² + 2ab + b²' },
                { question: 'Que vaut 2³ × 2⁴ ?', options: ['2⁷', '2¹²', '4⁷', '2¹'], correct: 0, correction: '2³ × 2⁴ = 2³⁺⁴ = 2⁷' },
                { question: 'Que vaut (2³)⁴ ?', options: ['2¹²', '2⁷', '2⁶⁴', '2⁴³'], correct: 0, correction: '(aᵐ)ⁿ = aᵐⁿ → (2³)⁴ = 2¹²' },
                { question: 'Factoriser : 4x² - 12x + 9', options: ['(2x-3)²', '(2x+3)²', '(2x-3)(2x+3)', '4(x-3)²'], correct: 0, correction: '4x² - 12x + 9 = (2x)² - 2×(2x)×3 + 3² = (2x-3)²' }
            ]
        },
        // ---- 4. THÉORÈME DE PYTHAGORE ----
        {
            id: '3e_pythagore',
            titre: '📐 Théorème de Pythagore',
            desc: 'Découverte, démonstration, applications, nombres irrationnels',
            niveau: '3e Année',
            icone: '📐',
            objectifs: [
                'Associer une égalité entre deux expressions algébriques à une égalité d\'aires.',
                'Reconnaître une situation dans laquelle il est opportun d\'utiliser le théorème de Pythagore ou sa réciproque.',
                'Utiliser les propriétés du triangle rectangle dans des calculs, des constructions et des démonstrations.',
                'Estimer l\'ordre de grandeur d\'un irrationnel et s\'en servir pour vérifier la plausibilité d\'un résultat.'
            ],
            matieres: [
                'Découverte, énoncé et démonstration du théorème de Pythagore.',
                'Caractérisation d\'un triangle rectangle (réciproque).',
                'Problèmes de construction et de calcul : diagonale d\'un carré, hauteur d\'un triangle équilatéral, distance entre deux points, diagonale d\'un cube.',
                'Valeur approchée et encadrement de la racine carrée d\'un nombre positif.',
                'Utilisation de la calculatrice.',
                'Racine carrée d\'un produit, d\'un quotient.'
            ],
            exercices: [
                { question: 'Quel est le théorème de Pythagore ?', options: ['a² + b² = c²', 'a + b = c', 'a × b = c', 'a² = b² + c²'], correct: 0, correction: 'Dans un triangle rectangle, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés.' },
                { question: 'Quelle est la diagonale d\'un carré de côté 1 ?', options: ['√2', '2', '√3', '1'], correct: 0, correction: 'd² = 1² + 1² = 2 → d = √2' },
                { question: 'Quelle est la hauteur d\'un triangle équilatéral de côté 2 ?', options: ['√3', '2', '√2', '1'], correct: 0, correction: 'h² = 2² - 1² = 3 → h = √3' }
            ]
        },
        // ---- 5. CONFIGURATIONS DE THALÈS ----
        {
            id: '3e_thalès',
            titre: '📐 Configurations de Thalès',
            desc: 'Proportions, rapports, constructions',
            niveau: '3e Année',
            icone: '📐',
            objectifs: [
                'Reconnaître une configuration de Thalès dans une figure et en déduire des égalités de rapports.',
                'Dans des calculs ou une démonstration, utiliser les propriétés des proportions.',
                'À partir d\'une égalité de rapports, rechercher une configuration de Thalès qui conduit à une construction ou à une démonstration.'
            ],
            matieres: [
                'Découverte et énoncé des propriétés liées aux configurations de Thalès.',
                'Configurations triangulaires.',
                'Configurations d\'un faisceau de droites parallèles coupées par deux sécantes.',
                'Problèmes de construction et de calcul : construction de la quatrième proportionnelle, partage d\'un segment en n parties égales, coordonnées du milieu d\'un segment.',
                'Propriétés des proportions : conversion d\'une égalité entre deux rapports en une égalité entre deux produits, permutation des moyens ou des extrêmes.'
            ],
            exercices: [
                { question: 'Dans une configuration de Thalès, si on a AB/AC = AD/AE, que peut-on en déduire ?', options: ['Les droites BD et CE sont parallèles', 'Les droites AB et CD sont parallèles', 'Les droites AC et DE sont parallèles', 'Les droites AB et DE sont parallèles'], correct: 0, correction: 'D\'après le théorème de Thalès, si AB/AC = AD/AE alors les droites BD et CE sont parallèles.' },
                { question: 'Comment appelle-t-on la propriété "permutation des moyens" dans une proportion ?', options: ['Si a/b = c/d alors a/c = b/d', 'Si a/b = c/d alors a+b = c+d', 'Si a/b = c/d alors a×b = c×d', 'Si a/b = c/d alors a-d = c-b'], correct: 0, correction: 'Dans une proportion, on peut permuter les moyens : a/b = c/d → a/c = b/d' }
            ]
        },
        // ---- 6. ANGLES ET ISOMÉTRIE ----
        {
            id: '3e_angles_isometrie',
            titre: '📐 Angles et isométrie',
            desc: 'Angles, cas d\'isométrie des triangles',
            niveau: '3e Année',
            icone: '📐',
            objectifs: [
                'Dans une configuration, déterminer la mesure d\'un angle à partir des données.',
                'Utiliser les propriétés d\'angles dans des calculs ou des démonstrations.',
                'Exprimer les données minimales qui permettent de reproduire une figure donnée.',
                'Reconnaître des figures isométriques et identifier une (ou des) isométrie(s) qui les applique(nt) l\'une sur l\'autre.',
                'Reconnaître des triangles isométriques dans une configuration et justifier la démarche.'
            ],
            matieres: [
                'Angles au centre, angles inscrits, angles tangentielles.',
                'Angles à côtés parallèles, angles à côtés perpendiculaires.',
                'Caractérisation d\'un triangle rectangle par son inscriptibilité dans un demi-cercle.',
                'Figures isométriques.',
                'Cas d\'isométrie des triangles : CCC, CAC, ACA.',
                'Activités de construction et de démonstration.'
            ],
            exercices: [
                { question: 'Quelle est la somme des angles d\'un triangle ?', options: ['180°', '90°', '360°', '270°'], correct: 0, correction: 'La somme des angles d\'un triangle est 180°.' },
                { question: 'Qu\'est-ce qu\'une figure isométrique ?', options: ['Une figure superposable par translation, rotation, symétrie', 'Une figure de même aire', 'Une figure de même périmètre', 'Une figure de même couleur'], correct: 0, correction: 'Deux figures isométriques sont superposables par une suite d\'isométries.' }
            ]
        },
        // ---- 7. SIMILITUDE ET TRIGONOMÉTRIE ----
        {
            id: '3e_similitude_trigo',
            titre: '📐 Similitude et trigonométrie',
            desc: 'Cas de similitude, trigonométrie du triangle rectangle',
            niveau: '3e Année',
            icone: '📐',
            objectifs: [
                'Reconnaître des figures semblables et énoncer les critères utilisés.',
                'Reconnaître des triangles semblables dans une configuration.',
                'Repérer les côtés et les angles homologues dans des triangles semblables.',
                'Utiliser la calculatrice pour déterminer un nombre trigonométrique d\'un angle aigu et réciproquement.',
                'Faire un schéma relatif à une situation donnée et y reporter les données et les inconnues.',
                'Connaître, choisir et utiliser la formule adéquate pour résoudre un problème.'
            ],
            matieres: [
                'Figures semblables. Cas de similitude des triangles.',
                'Problèmes de construction et de calcul.',
                'Définition du cosinus, du sinus et de la tangente d\'un angle aigu.',
                'Utilisation de la calculatrice.',
                'Formules fondamentales : sin² α + cos² α = 1, tgα = sinα/cosα.',
                'Calcul des nombres trigonométriques dans des triangles rectangles particuliers (45°, 30°, 60°).',
                'Résolution de problèmes (calcul de distances inaccessibles).'
            ],
            exercices: [
                { question: 'Que vaut sin(30°) ?', options: ['0.5', '0.707', '1', '0.866'], correct: 0, correction: 'sin(30°) = 1/2 = 0.5' },
                { question: 'Que vaut cos(60°) ?', options: ['0.5', '0.866', '0.707', '1'], correct: 0, correction: 'cos(60°) = 1/2 = 0.5' },
                { question: 'Que vaut tan(45°) ?', options: ['1', '0.5', '√2', '√3'], correct: 0, correction: 'tan(45°) = 1' },
                { question: 'Que vaut sin² α + cos² α ?', options: ['1', '0', '2', 'α'], correct: 0, correction: 'La formule fondamentale : sin² α + cos² α = 1' }
            ]
        }
    ],
    // =========================================================
    // 4E ANNÉE - À VENIR DANS LA PARTIE 2
    // =========================================================
    '4e': [
        // Les chapitres de 4e seront dans la partie 2
    ]
};// =========================================================
// 4E ANNÉE
// =========================================================
    '4e': [
        // ---- 1. FONCTIONS DE RÉFÉRENCE ----
        {
            id: '4e_fonctions_ref',
            titre: '📈 Fonctions de référence',
            desc: 'Fonctions usuelles, transformations, domaines, zéros',
            niveau: '4e Année',
            icone: '📈',
            objectifs: [
                'Relier le graphique de chaque fonction de référence à son équation et réciproquement.',
                'Du graphique d\'une fonction f(x) déduire celui des fonctions f(x)+k, f(x+k), kf(x), f(kx), |f(x)| pour des valeurs simples de k.',
                'Savoir rechercher le domaine et les zéros d\'une fonction de référence.',
                'Déterminer si une fonction de référence est paire ou impaire.',
                'Étudier la croissance d\'une fonction de référence sur un intervalle.'
            ],
            matieres: [
                'Fonctions usuelles de référence : f(x) = x, x², x³, 1/x, √x, ³√x, |x|, sin x, cos x.',
                'Fonctions liées aux fonctions de références : f(x)+k, f(x+k), kf(x), f(kx), |f(x)|.',
                'Domaine de définition d\'une fonction.',
                'Zéros d\'une fonction.',
                'Parité, périodicité.',
                'Croissance sur un intervalle, maximum, minimum.'
            ],
            exercices: [
                { question: 'Quelle est la fonction de référence pour une parabole ?', options: ['x²', 'x', '1/x', '√x'], correct: 0, correction: 'La fonction x² donne une parabole. Son graphique est symétrique par rapport à l\'axe des y.' },
                { question: 'Que devient f(x) = x² si on fait f(x) + 3 ?', options: ['La parabole monte de 3', 'La parabole descend de 3', 'La parabole s\'élargit', 'La parabole se rétrécit'], correct: 0, correction: 'f(x)+3 décale la courbe vers le haut de 3 unités.' },
                { question: 'Que devient f(x) = x² si on fait f(x+2) ?', options: ['La parabole se décale de 2 vers la gauche', 'La parabole se décale de 2 vers la droite', 'La parabole monte de 2', 'La parabole descend de 2'], correct: 0, correction: 'f(x+2) décale la courbe de 2 unités vers la gauche.' },
                { question: 'Qu\'est-ce que le domaine de définition d\'une fonction ?', options: ['L\'ensemble des valeurs que peut prendre x', 'L\'ensemble des valeurs que peut prendre y', 'L\'intersection avec l\'axe des x', 'L\'intersection avec l\'axe des y'], correct: 0, correction: 'Le domaine de définition est l\'ensemble des valeurs de x pour lesquelles la fonction est définie.' }
            ]
        },
        // ---- 2. ALGÈBRE - 2e DEGRÉ ----
        {
            id: '4e_algebre_2deg',
            titre: '🔢 Algèbre - 2e degré',
            desc: 'Équations du second degré, paraboles, trinômes',
            niveau: '4e Année',
            icone: '🔢',
            objectifs: [
                'Construire le graphique cartésien de y = ax² + bx + c.',
                'Préciser l\'axe de symétrie et le sommet de la parabole obtenue.',
                'Résoudre une équation ou une inéquation du deuxième degré.',
                'Vérifier les solutions d\'une équation du deuxième degré et les interpréter graphiquement.',
                'Déterminer le produit et la somme des racines d\'une équation du deuxième degré.',
                'Factoriser un trinôme du deuxième degré.',
                'Résoudre un problème conduisant à une équation du deuxième degré.'
            ],
            matieres: [
                'Graphique de la fonction du deuxième degré.',
                'Sommet et axe de symétrie de la parabole.',
                'Résolution de l\'équation du deuxième degré : ax² + bx + c = 0.',
                'Produit et somme des racines.',
                'Interprétation graphique des solutions.',
                'Factorisation de trinômes du deuxième degré.',
                'Résolution algébrique et graphique d\'inéquations du type ax² + bx + c < 0.',
                'Problèmes conduisant à une équation du deuxième degré.'
            ],
            exercices: [
                { question: 'Quelle est la formule du discriminant Δ ?', options: ['b² - 4ac', 'b² + 4ac', 'a² - 4bc', 'c² - 4ab'], correct: 0, correction: 'Pour une équation ax² + bx + c = 0, Δ = b² - 4ac' },
                { question: 'Résoudre x² - 4 = 0', options: ['x = 2 ou x = -2', 'x = 2', 'x = -2', 'x = 4'], correct: 0, correction: 'x² = 4 → x = ±2' },
                { question: 'Si Δ > 0, combien y a-t-il de solutions ?', options: ['2 solutions distinctes', '1 solution double', '0 solution', 'Une infinité de solutions'], correct: 0, correction: 'Si Δ > 0, l\'équation a deux solutions réelles distinctes.' },
                { question: 'Quelle est la somme des racines de l\'équation ax² + bx + c = 0 ?', options: ['-b/a', 'b/a', 'c/a', '-c/a'], correct: 0, correction: 'La somme des racines est S = -b/a' },
                { question: 'Quel est le produit des racines de l\'équation ax² + bx + c = 0 ?', options: ['c/a', 'b/a', '-b/a', '-c/a'], correct: 0, correction: 'Le produit des racines est P = c/a' }
            ]
        },
        // ---- 3. CALCUL VECTORIEL ----
        {
            id: '4e_vecteurs',
            titre: '📐 Calcul vectoriel',
            desc: 'Vecteurs, produit scalaire, applications',
            niveau: '4e Année',
            icone: '📐',
            objectifs: [
                'Décomposer un vecteur suivant les directions du repère et lui associer un couple de nombres.',
                'Interpréter géométriquement l\'égalité de deux vecteurs en se référant à des configurations de parallélogrammes.',
                'Donner la signification des notations 0⃗, -u⃗, 2u⃗.',
                'Construire la somme et la différence de deux vecteurs et leur associer un couple de nombres.',
                'Utiliser le théorème de Thalès pour construire le produit d\'un vecteur par un nombre.',
                'Écrire et démontrer des propriétés d\'alignement, de parallélisme.',
                'Calculer un produit scalaire.',
                'Interpréter géométriquement des relations vectorielles.'
            ],
            matieres: [
                'Vecteur : composantes, somme, produit par un nombre.',
                'Propriétés. Relation de Chasles.',
                'Applications : alignement, parallélisme, centre de gravité d\'un triangle.',
                'Produit scalaire dans le plan et ses propriétés.',
                'Expression du produit scalaire avec la fonction cosinus, la projection d\'un vecteur, les composantes dans un repère orthonormé.',
                'Théorème généralisé de Pythagore (produit scalaire).'
            ],
            exercices: [
                { question: 'Que représente le produit scalaire de deux vecteurs ?', options: ['Un nombre réel', 'Un vecteur', 'Une distance', 'Un angle'], correct: 0, correction: 'Le produit scalaire de deux vecteurs est un nombre réel.' },
                { question: 'Que vaut le produit scalaire de deux vecteurs orthogonaux ?', options: ['0', '1', 'Le produit de leurs normes', '-1'], correct: 0, correction: 'Le produit scalaire de deux vecteurs orthogonaux est nul.' },
                { question: 'La relation de Chasles pour les vecteurs s\'écrit :', options: ['AB⃗ + BC⃗ = AC⃗', 'AB⃗ - BC⃗ = AC⃗', 'AB⃗ × BC⃗ = AC⃗', 'AB⃗ / BC⃗ = AC⃗'], correct: 0, correction: 'La relation de Chasles : AB⃗ + BC⃗ = AC⃗' },
                { question: 'Comment calcule-t-on le produit scalaire à partir des composantes dans un repère orthonormé ?', options: ['u·v = x₁x₂ + y₁y₂', 'u·v = x₁ + x₂', 'u·v = y₁ + y₂', 'u·v = x₁y₂ + x₂y₁'], correct: 0, correction: 'Dans un repère orthonormé, u·v = x₁x₂ + y₁y₂' }
            ]
        },
        // ---- 4. TRIGONOMÉTRIE AVANCÉE ----
        {
            id: '4e_trigo_avancee',
            titre: '📐 Trigonométrie avancée',
            desc: 'Cercle trigonométrique, angles orientés, formules',
            niveau: '4e Année',
            icone: '📐',
            objectifs: [
                'Faire le lien entre les mesures d\'un arc et d\'un angle.',
                'Utiliser le cercle trigonométrique.',
                'Déterminer le sinus, cosinus, tangente et cotangente d\'un angle orienté.',
                'Utiliser les formules fondamentales.',
                'Utiliser les formules de l\'aire, du sinus et du cosinus dans le triangle quelconque.'
            ],
            matieres: [
                'Valeur approchée du nombre π (méthode d\'Archimède).',
                'Angles et arcs, définition du radian.',
                'Cercle trigonométrique, angle orienté.',
                'Sinus, cosinus, tangente et cotangente d\'un angle orienté.',
                'Angles associés (symétries et rotations de k/2π).',
                'Formules fondamentales : sin² α + cos² α = 1, tgα = sinα/cosα.',
                'Expression trigonométrique du coefficient angulaire d\'une droite.'
            ],
            exercices: [
                { question: 'Que vaut cos(60°) ?', options: ['0.5', '0.866', '0.707', '1'], correct: 0, correction: 'cos(60°) = 1/2 = 0.5' },
                { question: 'Que vaut sin(90°) ?', options: ['1', '0', '0.5', '0.866'], correct: 0, correction: 'sin(90°) = 1' },
                { question: 'Dans le cercle trigonométrique, un angle de π/2 correspond à combien de degrés ?', options: ['90°', '180°', '45°', '60°'], correct: 0, correction: 'π/2 radians = 90°' },
                { question: 'Quelle est la période de la fonction sin x ?', options: ['2π', 'π', 'π/2', '4π'], correct: 0, correction: 'La fonction sin x est périodique de période 2π.' },
                { question: 'Quelle est la période de la fonction cos x ?', options: ['2π', 'π', 'π/2', '4π'], correct: 0, correction: 'La fonction cos x est périodique de période 2π.' }
            ]
        },
        // ---- 5. LIEUX GÉOMÉTRIQUES ----
        {
            id: '4e_lieux',
            titre: '📐 Lieux géométriques',
            desc: 'Constructions, médiatrice, cercle, parabole',
            niveau: '4e Année',
            icone: '📐',
            objectifs: [
                'Utiliser les lieux de base et les propriétés connues pour effectuer une construction ou rechercher un lieu.',
                'Dans une recherche de lieu discerner ce qui est mobile de ce qui reste fixe.',
                'Établir les équations des lieux cités dans le programme.'
            ],
            matieres: [
                'Problèmes de construction.',
                'Recherche de quelques lieux géométriques.',
                'Médiatrice d\'un segment donné.',
                'Cercle de centre et de rayon donnés.',
                'Parabole de foyer et de directrice parallèle à Ox donnés.',
                'Arc capable d\'un angle donné.'
            ],
            exercices: [
                { question: 'Qu\'est-ce que la médiatrice d\'un segment ?', options: ['L\'ensemble des points équidistants des extrémités', 'La droite qui coupe le segment en son milieu', 'La perpendiculaire au segment', 'Toutes ces réponses'], correct: 3, correction: 'La médiatrice est la perpendiculaire au segment en son milieu, elle est l\'ensemble des points équidistants des extrémités.' },
                { question: 'Comment appelle-t-on l\'ensemble des points situés à une distance donnée d\'un point fixe ?', options: ['Un cercle', 'Une droite', 'Une médiatrice', 'Une parabole'], correct: 0, correction: 'Un cercle est l\'ensemble des points situés à une distance donnée (le rayon) d\'un point fixe (le centre).' }
            ]
        },
        // ---- 6. STATISTIQUES ----
        {
            id: '4e_statistiques',
            titre: '📊 Statistiques',
            desc: 'Traitement numérique de données, paramètres, diagrammes',
            niveau: '4e Année',
            icone: '📊',
            objectifs: [
                'Maîtriser le vocabulaire et les procédures de calcul nécessaires à l\'élaboration de différents diagrammes.',
                'Calculer les valeurs centrales : mode, moyenne, médiane, quartiles.',
                'Choisir la représentation graphique la plus adéquate pour la situation traitée.',
                'Calculer les paramètres de dispersion : étendue, écart interquartile, écart type.',
                'Préciser l\'effet d\'un changement d\'origine, d\'unité sur la moyenne et l\'écart-type.'
            ],
            matieres: [
                'Tableau recensé, ordonné, groupé. Effectifs, fréquences.',
                'Effectifs cumulés, fréquences cumulées.',
                'Représentations graphiques : diagrammes en bâtonnets, diagrammes circulaires, histogrammes.',
                'Mode, moyenne, médiane, quartiles.',
                'Paramètres de dispersion : étendue, écart interquartile, variance, écart type.',
                'Effet d\'un changement d\'origine, d\'unité sur la moyenne et l\'écart type.'
            ],
            exercices: [
                { question: 'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options: ['7', '6', '8', '5'], correct: 0, correction: 'La médiane est la valeur centrale de la série ordonnée : 7' },
                { question: 'Quelle est la moyenne de 4, 6, 8, 10, 12 ?', options: ['8', '7', '9', '6'], correct: 0, correction: '(4+6+8+10+12)/5 = 40/5 = 8' },
                { question: 'Qu\'est-ce que le mode dans une série statistique ?', options: ['La valeur la plus fréquente', 'La moyenne', 'La médiane', 'L\'étendue'], correct: 0, correction: 'Le mode est la valeur qui apparaît le plus fréquemment dans la série.' },
                { question: 'Comment calcule-t-on l\'étendue d\'une série statistique ?', options: ['Max - Min', 'Max + Min', 'Moyenne - Médiane', 'Moyenne + Médiane'], correct: 0, correction: 'L\'étendue est la différence entre la valeur maximale et la valeur minimale.' }
            ]
        }
    ]
};

// =========================================================
// GÉNÉRATION DES QUESTIONS DE QUIZ
// =========================================================

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
// DONNÉES UTILISATEUR
// =========================================================

var USER_DATA = {
    progress: {},
    quizResults: {},
    totalTime: 0,
    revisions: {},
    chapitreScores: {}
};

// =========================================================
// ÉTAT
// =========================================================

var currentTab = 'dashboard';
var currentQuiz = { index: 0, questions: [], answers: [], score: 0, total: 0 };
var currentExamen = { index: 0, questions: [], answers: [], score: 0, total: 0, timer: null, timeLeft: 0 };
var currentChapitreId = null;

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
}// =========================================================
// NAVIGATION
// =========================================================

function showTab(tab) {
    currentTab = tab;
    var tabs = ['dashboard', 'annee3', 'annee4', 'quiz', 'examens', 'revisions'];
    for (var i = 0; i < tabs.length; i++) {
        var el = document.getElementById(tabs[i]);
        if (el) el.classList.add('hidden');
        var btn = document.getElementById('tab' + tabs[i].charAt(0).toUpperCase() + tabs[i].slice(1));
        if (btn) btn.classList.remove('active');
    }
    var target = document.getElementById(tab);
    if (target) target.classList.remove('hidden');
    var btnTarget = document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (btnTarget) btnTarget.classList.add('active');
    
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'annee3') renderChapitres('3e');
    if (tab === 'annee4') renderChapitres('4e');
    if (tab === 'quiz') updateQuizChapitres();
    if (tab === 'revisions') renderRevisions();
}

function goHome() {
    showTab('dashboard');
}

// =========================================================
// THEME
// =========================================================

function toggleTheme() {
    document.body.classList.toggle('dark');
    var btn = document.querySelector('.nav-btn:last-child');
    if (btn) btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// =========================================================
// DASHBOARD
// =========================================================

function renderDashboard() {
    var totalChapitres = 0;
    var revisites = 0;
    var tempsTotal = USER_DATA.totalTime || 0;
    
    var annees = ['3e', '4e'];
    for (var a = 0; a < annees.length; a++) {
        var chaps = CHAPITRES[annees[a]] || [];
        totalChapitres += chaps.length;
        for (var c = 0; c < chaps.length; c++) {
            var prog = USER_DATA.progress[chaps[c].id] || 0;
            if (prog >= 100) revisites++;
        }
    }
    
    document.getElementById('totalChapitres').textContent = totalChapitres;
    document.getElementById('revisites').textContent = totalChapitres > 0 ? Math.round(revisites / totalChapitres * 100) + '%' : '0%';
    
    var quizTotal = Object.keys(USER_DATA.quizResults || {}).length;
    var quizOk = 0;
    for (var key in USER_DATA.quizResults) {
        if (USER_DATA.quizResults[key] >= 80) quizOk++;
    }
    document.getElementById('quizReussis').textContent = quizTotal > 0 ? Math.round(quizOk / quizTotal * 100) + '%' : '0%';
    document.getElementById('tempsTotal').textContent = Math.floor(tempsTotal / 60) + 'h' + (tempsTotal % 60) + 'm';
    
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
        var label = annee === '3e' ? '📖 3e Année' : '📖 4e Année';
        var color = percent >= 80 ? 'var(--green)' : percent >= 50 ? 'var(--amber)' : 'var(--blue)';
        progressHtml += `
            <div style="margin: 8px 0;">
                <div style="display: flex; justify-content: space-between; font-size: 13px;">
                    <span>${label}</span>
                    <span style="font-weight: 900;">${percent}%</span>
                </div>
                <div class="progress-bar" style="height: 6px; background: var(--soft); border-radius: 3px; overflow: hidden;">
                    <div style="width: ${percent}%; height: 100%; background: ${color}; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>
        `;
    }
    document.getElementById('progressionAnnees').innerHTML = progressHtml;
    
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
        urgentHtml = '<div style="color: var(--green); font-weight: 900; padding: 10px;">🎉 Tous les chapitres sont en bonne voie !</div>';
    } else {
        for (var u = 0; u < Math.min(urgents.length, 4); u++) {
            var chap = urgents[u];
            urgentHtml += `
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--line);">
                    <span>${chap.icone} ${chap.titre}</span>
                    <span style="color: var(--red); font-weight: 900;">${USER_DATA.progress[chap.id] || 0}%</span>
                </div>
            `;
        }
    }
    document.getElementById('chapitresUrgents').innerHTML = urgentHtml;
}

// =========================================================
// RENDU DES CHAPITRES PAR ANNÉE
// =========================================================

function renderChapitres(annee) {
    var containerId = 'chapitres' + annee;
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var chapitres = CHAPITRES[annee] || [];
    if (chapitres.length === 0) {
        container.innerHTML = '<div class="empty" style="text-align: center; padding: 40px; color: var(--muted);">📚 Aucun chapitre pour cette année.</div>';
        return;
    }
    
    var html = '';
    for (var i = 0; i < chapitres.length; i++) {
        var chap = chapitres[i];
        var progress = USER_DATA.progress[chap.id] || 0;
        var status = progress >= 100 ? 'revise' : progress > 0 ? 'en-cours' : 'non-vu';
        var statusLabel = progress >= 100 ? '✅ Révisé' : progress > 0 ? '⏳ En cours' : '📖 Non vu';
        
        html += `
            <div class="chapitre-card" onclick="openChapitre('${chap.id}')">
                <div class="chapitre-header">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 24px;">${chap.icone}</span>
                        <span class="chapitre-title">${chap.titre}</span>
                    </div>
                    <span class="chapitre-badge ${status}">${statusLabel}</span>
                </div>
                <div class="chapitre-desc">${chap.desc}</div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); margin-top: 6px;">
                    <span>Niveau: ${chap.niveau}</span>
                    <span>${chap.exercices ? chap.exercices.length : 0} exercices</span>
                </div>
                <div class="chapitre-progress" style="margin-top: 8px;">
                    <span style="width: ${progress}%;"></span>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

// =========================================================
// OUVERTURE D'UN CHAPITRE
// =========================================================

function openChapitre(chapitreId) {
    currentChapitreId = chapitreId;
    
    var found = null;
    var foundAnnee = null;
    for (var annee in CHAPITRES) {
        for (var i = 0; i < CHAPITRES[annee].length; i++) {
            if (CHAPITRES[annee][i].id === chapitreId) {
                found = CHAPITRES[annee][i];
                foundAnnee = annee;
                break;
            }
        }
        if (found) break;
    }
    
    if (!found) return;
    
    var modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.6); z-index: 1000;
        display: flex; align-items: center; justify-content: center;
        padding: 20px;
        animation: fadeIn .3s ease;
    `;
    
    var content = document.createElement('div');
    content.style.cssText = `
        background: var(--surface); border-radius: var(--radius);
        max-width: 750px; width: 100%; max-height: 90vh;
        overflow-y: auto; padding: 30px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        position: relative;
    `;
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
        position: sticky; top: 0; float: right;
        background: none; border: none; font-size: 24px;
        cursor: pointer; color: var(--muted);
        padding: 0 4px;
    `;
    closeBtn.onclick = function() { document.body.removeChild(modal); };
    
    var html = `
        <h2 style="margin: 0 0 4px 0;">${found.icone} ${found.titre}</h2>
        <p style="color: var(--muted); margin-bottom: 16px;">${found.desc} • ${found.niveau}</p>
        
        <div style="margin: 16px 0; display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="primary-btn" onclick="startChapitreQuiz('${found.id}')">🎯 Quiz du chapitre</button>
            <button class="ghost-btn" onclick="markChapitreDone('${found.id}')">✅ Marquer comme révisé</button>
            <button class="ghost-btn" onclick="document.body.removeChild(document.querySelector('div[style*=\\"position: fixed\\"]'))">← Retour</button>
        </div>
        
        <h3>🎯 Objectifs du chapitre</h3>
        <ul style="margin: 8px 0 16px 20px; line-height: 1.6;">
    `;
    
    if (found.objectifs) {
        for (var o = 0; o < found.objectifs.length; o++) {
            html += `<li>${found.objectifs[o]}</li>`;
        }
    }
    html += `</ul>`;
    
    html += `<h3>📝 Matières abordées</h3><ul style="margin: 8px 0 16px 20px; line-height: 1.6;">`;
    if (found.matieres) {
        for (var m = 0; m < found.matieres.length; m++) {
            html += `<li>${found.matieres[m]}</li>`;
        }
    }
    html += `</ul>`;
    
    if (found.exercices) {
        html += `<h3>🎯 Exercices</h3>`;
        for (var e = 0; e < found.exercices.length; e++) {
            var ex = found.exercices[e];
            html += `
                <div style="background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 14px; margin: 8px 0;">
                    <b>${ex.question}</b>
                    <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">
            `;
            for (var p = 0; p < ex.options.length; p++) {
                var isCorrect = p === ex.correct;
                html += `
                    <button style="text-align: left; padding: 8px 12px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); cursor: pointer; transition: all 0.2s;" 
                            onclick="checkExo(this, ${isCorrect}, '${ex.correction || ''}')">
                        ${String.fromCharCode(65 + p)}. ${ex.options[p]}
                    </button>
                `;
            }
            html += `</div><div class="exo-feedback" style="margin-top: 6px; font-size: 13px;"></div></div>`;
        }
    }
    
    content.innerHTML = html;
    content.prepend(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
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
        btn.style.background = 'var(--green)';
        btn.style.color = 'white';
        btn.style.borderColor = 'var(--green)';
        feedback.innerHTML = `<span style="color: var(--green); font-weight: 900;">✅ Correct ! ${correction ? correction : ''}</span>`;
    } else {
        btn.style.background = 'var(--red)';
        btn.style.color = 'white';
        btn.style.borderColor = 'var(--red)';
        feedback.innerHTML = `<span style="color: var(--red); font-weight: 900;">❌ Incorrect. ${correction ? 'Correction: ' + correction : ''}</span>`;
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
    currentQuiz.answers = [];
    showTab('quiz');
    renderQuiz();
}

function markChapitreDone(chapitreId) {
    USER_DATA.progress[chapitreId] = 100;
    saveUserData();
    renderDashboard();
    var modal = document.querySelector('div[style*="position: fixed; top: 0; left: 0; right: 0; bottom: 0;"]');
    if (modal) document.body.removeChild(modal);
    renderChapitres('3e');
    renderChapitres('4e');
    alert('✅ Chapitre marqué comme révisé !');
}

// =========================================================
// QUIZ
// =========================================================

function updateQuizChapitres() {
    var annee = document.getElementById('quizAnnee').value;
    var chapitreSelect = document.getElementById('quizChapitre');
    var chapitres = CHAPITRES[annee] || [];
    chapitreSelect.innerHTML = '<option value="all">Tous les chapitres</option>';
    for (var i = 0; i < chapitres.length; i++) {
        chapitreSelect.innerHTML += `<option value="${chapitres[i].id}">${chapitres[i].icone} ${chapitres[i].titre}</option>`;
    }
}

function startQuiz() {
    var annee = document.getElementById('quizAnnee').value;
    var chapitre = document.getElementById('quizChapitre').value;
    
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
    currentQuiz.answers = [];
    renderQuiz();
}

function renderQuiz() {
    var container = document.getElementById('quizContent');
    if (currentQuiz.index >= currentQuiz.total) {
        showQuizResult();
        return;
    }
    
    var q = currentQuiz.questions[currentQuiz.index];
    var progress = Math.round((currentQuiz.index) / currentQuiz.total * 100);
    
    var html = `
        <div style="margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; font-size: 14px; color: var(--muted);">
                <span>Question ${currentQuiz.index + 1} / ${currentQuiz.total}</span>
                <span>Score: ${currentQuiz.score}</span>
            </div>
            <div class="progress-bar" style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden;">
                <div style="width: ${progress}%; height: 100%; background: var(--blue); border-radius: 2px; transition: width 0.3s;"></div>
            </div>
        </div>
        <div class="quiz-question">
            <div class="question-text">${q.question}</div>
            <div class="quiz-options">
    `;
    
    for (var i = 0; i < q.options.length; i++) {
        html += `<button onclick="answerQuiz(${i})">${String.fromCharCode(65 + i)}. ${q.options[i]}</button>`;
    }
    
    html += `
            </div>
            <div id="quizFeedback"></div>
        </div>
    `;
    
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
    
    if (isCorrect) currentQuiz.score++;
    
    var feedback = document.getElementById('quizFeedback');
    var correction = q.correction || '';
    feedback.innerHTML = `
        <div class="quiz-result ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.'}
            ${correction ? '<div style="margin-top: 4px; font-size: 13px;">' + correction + '</div>' : ''}
        </div>
        <button class="primary-btn" onclick="nextQuizQuestion()" style="margin-top: 10px;">➡️ Question suivante</button>
    `;
}

function nextQuizQuestion() {
    currentQuiz.index++;
    renderQuiz();
}

function showQuizResult() {
    var container = document.getElementById('quizContent');
    var percent = Math.round(currentQuiz.score / currentQuiz.total * 100);
    var message = percent >= 80 ? '🌟 Excellent !' : percent >= 60 ? '👍 Bon travail !' : '📚 Continue à t\'entraîner !';
    
    var html = `
        <div style="text-align: center; padding: 30px 0;">
            <div style="font-size: 48px; margin-bottom: 10px;">${percent >= 80 ? '🏆' : percent >= 60 ? '📈' : '📚'}</div>
            <h2>Quiz terminé !</h2>
            <div style="font-size: 36px; font-weight: 900; color: ${percent >= 80 ? 'var(--green)' : percent >= 60 ? 'var(--amber)' : 'var(--red)'};">${percent}%</div>
            <p style="font-size: 18px; margin: 10px 0;">${currentQuiz.score} / ${currentQuiz.total} bonnes réponses</p>
            <p style="color: var(--muted);">${message}</p>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">
                <button class="primary-btn" onclick="startQuiz()">🔄 Refaire le quiz</button>
                <button class="ghost-btn" onclick="showTab('dashboard')">📊 Retour au tableau</button>
            </div>
        </div>
    `;
    container.innerHTML = html;
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
    
    var count = niveau === 'complet' ? 45 : niveau === '4e' ? 25 : 20;
    questions = questions.slice(0, count);
    
    if (questions.length < 10) {
        alert('Pas assez de questions pour cet examen.');
        return;
    }
    
    currentExamen.questions = questions;
    currentExamen.index = 0;
    currentExamen.score = 0;
    currentExamen.total = questions.length;
    currentExamen.answers = [];
    currentExamen.timeLeft = niveau === 'complet' ? 4200 : niveau === '4e' ? 2400 : 1800;
    
    var container = document.getElementById('examenContent');
    container.innerHTML = `
        <div style="margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; font-size: 14px;">
                <span>⏱️ <span id="examenTimer">${formatTime(currentExamen.timeLeft)}</span></span>
                <span>Question <span id="examenProgress">1</span> / ${currentExamen.total}</span>
                <span>Score: <span id="examenScore">0</span></span>
            </div>
            <div class="progress-bar" style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden;">
                <div id="examenBar" style="width: 0%; height: 100%; background: var(--blue); border-radius: 2px; transition: width 0.3s;"></div>
            </div>
        </div>
        <div id="examenQuestion"></div>
    `;
    
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
    document.getElementById('examenProgress').textContent = currentExamen.index + 1;
    document.getElementById('examenScore').textContent = currentExamen.score;
    document.getElementById('examenBar').style.width = (currentExamen.index / currentExamen.total * 100) + '%';
    
    var html = `
        <div class="quiz-question">
            <div class="question-text">${q.question}</div>
            <div class="quiz-options">
    `;
    
    for (var i = 0; i < q.options.length; i++) {
        html += `<button onclick="answerExamen(${i})">${String.fromCharCode(65 + i)}. ${q.options[i]}</button>`;
    }
    
    html += `
            </div>
            <div id="examenFeedback"></div>
        </div>
    `;
    
    document.getElementById('examenQuestion').innerHTML = html;
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
    document.getElementById('examenScore').textContent = currentExamen.score;
    
    var feedback = document.getElementById('examenFeedback');
    feedback.innerHTML = `
        <div class="quiz-result ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.'}
            <button class="primary-btn" onclick="nextExamenQuestion()" style="margin-top: 10px;">➡️ Question suivante</button>
        </div>
    `;
}

function nextExamenQuestion() {
    currentExamen.index++;
    renderExamenQuestion();
}

function finishExamen() {
    if (currentExamen.timer) clearInterval(currentExamen.timer);
    
    var percent = Math.round(currentExamen.score / currentExamen.total * 100);
    var message = percent >= 80 ? '🌟 Félicitations ! Tu as réussi avec brio !' : percent >= 60 ? '👍 Bonne performance, continue à t\'entraîner !' : '📚 Continue à réviser, tu vas y arriver !';
    
    var html = `
        <div style="text-align: center; padding: 30px 0;">
            <div style="font-size: 64px; margin-bottom: 10px;">${percent >= 80 ? '🎉' : percent >= 60 ? '📈' : '📚'}</div>
            <h2>Examen terminé !</h2>
            <div style="font-size: 48px; font-weight: 900; color: ${percent >= 80 ? 'var(--green)' : percent >= 60 ? 'var(--amber)' : 'var(--red)'};">${percent}%</div>
            <p style="font-size: 18px; margin: 10px 0;">${currentExamen.score} / ${currentExamen.total} bonnes réponses</p>
            <p style="color: var(--muted);">${message}</p>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">
                <button class="primary-btn" onclick="startExamen('${currentExamen.questions[0]?.annee || '3e'}')">🔄 Refaire l'examen</button>
                <button class="ghost-btn" onclick="showTab('dashboard')">📊 Retour au tableau</button>
            </div>
        </div>
    `;
    
    document.getElementById('examenContent').innerHTML = html;
}

// =========================================================
// RÉVISIONS
// =========================================================

function renderRevisions() {
    var container = document.getElementById('revisionsContent');
    var html = '';
    
    var total = 0;
    var done = 0;
    
    for (var annee in CHAPITRES) {
        var chaps = CHAPITRES[annee] || [];
        if (chaps.length === 0) continue;
        total += chaps.length;
        var anneeDone = 0;
        for (var i = 0; i < chaps.length; i++) {
            var prog = USER_DATA.progress[chaps[i].id] || 0;
            if (prog >= 100) anneeDone++;
        }
        done += anneeDone;
        var percent = chaps.length > 0 ? Math.round(anneeDone / chaps.length * 100) : 0;
        var label = annee === '3e' ? '3e Année' : '4e Année';
        var color = percent >= 80 ? 'var(--green)' : percent >= 50 ? 'var(--amber)' : 'var(--blue)';
        
        html += `
            <div style="margin: 10px 0; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 900;">📖 ${label}</span>
                    <span style="font-weight: 900; color: ${color};">${percent}%</span>
                </div>
                <div class="progress-bar" style="height: 6px; margin: 6px 0;">
                    <div style="width: ${percent}%; height: 100%; background: ${color}; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;">
        `;
        for (var c = 0; c < chaps.length; c++) {
            var chap = chaps[c];
            var prog2 = USER_DATA.progress[chap.id] || 0;
            var status = prog2 >= 100 ? '✅' : prog2 > 0 ? '⏳' : '📖';
            html += `<span style="font-size: 12px; background: var(--soft); padding: 2px 8px; border-radius: 10px;">${status} ${chap.titre}</span>`;
        }
        html += `</div></div>`;
    }
    
    var percentTotal = total > 0 ? Math.round(done / total * 100) : 0;
    
    html = `
        <div style="text-align: center; padding: 16px; background: var(--soft); border-radius: 12px; margin-bottom: 16px;">
            <span style="font-size: 20px; font-weight: 900;">Progression globale : ${percentTotal}%</span>
            <div class="progress-bar" style="height: 8px; margin-top: 8px;">
                <div style="width: ${percentTotal}%; height: 100%; background: linear-gradient(90deg, var(--blue), var(--purple)); border-radius: 4px; transition: width 0.6s ease;"></div>
            </div>
            <p style="margin-top: 8px; font-size: 13px; color: var(--muted);">
                ${done} / ${total} chapitres révisés
                ${percentTotal >= 100 ? '🎉 Tu es prêt pour l\'examen !' : ''}
            </p>
        </div>
    ` + html;
    
    if (total === 0) {
        html = '<div style="text-align: center; padding: 40px; color: var(--muted);">📚 Aucun chapitre disponible pour le moment.</div>';
    }
    
    container.innerHTML = html;
}

// =========================================================
// EFFACER TOUTE PROGRESSION
// =========================================================

function clearAllProgress() {
    if (confirm('⚠️ Es-tu sûr de vouloir effacer toute ta progression ?')) {
        USER_DATA.progress = {};
        USER_DATA.quizResults = {};
        USER_DATA.totalTime = 0;
        saveUserData();
        renderDashboard();
        renderChapitres('3e');
        renderChapitres('4e');
        renderRevisions();
        alert('🗑️ Toute progression a été effacée.');
    }
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

// =========================================================
// INITIALISATION
// =========================================================

loadUserData();
showTab('dashboard');

console.log('📚 Programme officiel de Mathématiques - 2e degré chargé !');
console.log('📖 Chapitres disponibles :', Object.keys(CHAPITRES).length);
console.log('🎯 Questions de quiz :', QUESTIONS_QUIZ.length);
