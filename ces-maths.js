// =========================================================
// PROGRAMME OFFICIEL COMPLET - BASE SUR VOS PDF
// =========================================================

var CHAPITRES = {
    '3e': [
        {
            id: '3e_fonctions',
            titre: '1. Approche graphique d\'une fonction',
            desc: 'UAA3 - Machines, tableaux, domaines, images, antécédents, variations',
            niveau: '3e Année',
            icone: '📈',
            color: '#3182ce',
            objectifs: [
                'Distinguer graphiquement fonction et relation',
                'Se servir d\'un graphique pour répondre à des questions',
                'Donner une interprétation graphique de m et p dans y = mx+p',
                'Rechercher le domaine, l\'ensemble-image et les points d\'intersection',
                'Écrire les parties de R où une fonction est positive, négative ou nulle'
            ],
            matieres: [
                'Notion de fonction et vocabulaire (machine à transformer)',
                'Fonction ou simple relation ?',
                'Image de..., Antécédents de...',
                'Domaine de définition (Domf), Ensemble image (Imf)',
                'Zéros, ordonnée à l\'origine, signe, croissance/décroissance',
                'Tableau de variation et tableau de signes'
            ],
            exercices: [
                { question: 'Qu\'est-ce qu\'une fonction ?', options: ['Une relation qui donne au plus une image par antécédent', 'Une relation qui donne plusieurs images', 'Une machine qui additionne', 'Un tableau de valeurs'], correct: 0, correction: 'Une fonction associe à chaque x au plus un seul y.' },
                { question: 'Que signifie f(2) = 3 ?', options: ['L\'image de 2 est 3', 'L\'antécédent de 2 est 3', 'La fonction est croissante', 'Le domaine est [2,3]'], correct: 0, correction: 'f(2)=3 se lit : l\'image de 2 par la fonction f est 3.' },
                { question: 'Comment trouve-t-on le zéro d\'une fonction graphiquement ?', options: ['Intersection avec l\'axe des abscisses', 'Intersection avec l\'axe des ordonnées', 'Le sommet de la courbe', 'Le point le plus bas'], correct: 0, correction: 'Le zéro est l\'abscisse du point d\'intersection avec l\'axe des x.' }
            ]
        },
        {
            id: '3e_algebre_polynomes',
            titre: '2. Polynômes & Factorisation',
            desc: 'UAA5 - Monômes, opérations, produits remarquables, méthode des rectangles',
            niveau: '3e Année',
            icone: '🔢',
            color: '#e53e3e',
            objectifs: [
                'Réduire et ordonner un polynôme',
                'Effectuer les 4 opérations sur les polynômes',
                'Factoriser via : mise en évidence, différence de carrés, trinôme carré parfait, méthode des rectangles',
                'Appliquer la loi du reste et la division par (x-a)'
            ],
            matieres: [
                'Vocabulaire : monôme, degré, coefficient, terme indépendant',
                'Règles de calcul littéral, priorités opératoires',
                'Produits remarquables : (a+b)², (a-b)², a²-b²',
                'Factorisation au maximum (toutes techniques)',
                'Division euclidienne par (x-a), Loi du reste',
                'Résolution d\'équations par le produit nul'
            ],
            exercices: [
                { question: 'Factoriser : x² - 9', options: ['(x-3)(x+3)', '(x-3)²', '(x+3)²', 'x²-9'], correct: 0, correction: 'a² - b² = (a-b)(a+b)' },
                { question: 'Dans une division de P(x) par (x-a), que vaut le reste ?', options: ['P(a)', 'P(-a)', '0', 'Le quotient'], correct: 0, correction: 'Le reste de la division de P(x) par (x-a) est P(a).' }
            ]
        },
        {
            id: '3e_pythagore',
            titre: '3. Théorème de Pythagore',
            desc: 'Triangle rectangle, a² + b² = c², diagonales',
            niveau: '3e Année',
            icone: '📐',
            color: '#805ad5',
            objectifs: [
                'Utiliser le théorème de Pythagore',
                'Utiliser la réciproque du théorème de Pythagore',
                'Calculer des distances dans l\'espace (cube, parallélépipède)',
                'Construire des segments de longueur √n'
            ],
            matieres: [
                'Théorème de Pythagore : a² + b² = c²',
                'Réciproque du théorème de Pythagore',
                'Nombres irrationnels (√2, √3...)',
                'Diagonale d\'un carré, d\'un cube'
            ],
            exercices: [
                { question: 'Quel est le théorème de Pythagore ?', options: ['a² + b² = c²', 'a + b = c', 'a × b = c', 'a² = b² + c²'], correct: 0, correction: 'Dans un triangle rectangle, a² + b² = c²' },
                { question: 'Quelle est la diagonale d\'un carré de côté 1 ?', options: ['√2', '2', '√3', '1'], correct: 0, correction: 'd² = 1² + 1² = 2 → d = √2' }
            ]
        },
        {
            id: '3e_thalès',
            titre: '4. Configurations de Thalès',
            desc: 'UAA1 - Projections parallèles, rapports, triangles semblables',
            niveau: '3e Année',
            icone: '📐',
            color: '#319795',
            objectifs: [
                'Reconnaître une configuration de Thalès',
                'Utiliser les propriétés des proportions',
                'Partager un segment en n parties égales',
                'Calculer un segment inconnu'
            ],
            matieres: [
                'Projections parallèles',
                'Théorème de Thalès et sa réciproque',
                'Propriétés des proportions (moyens, extrêmes)',
                'Rapports de longueurs et triangles semblables'
            ],
            exercices: [
                { question: 'Dans une configuration de Thalès, si AB/AC = AD/AE, que peut-on en déduire ?', options: ['BD // CE', 'AB // CD', 'AC // DE', 'AB // DE'], correct: 0, correction: 'D\'après le théorème de Thalès, BD // CE' }
            ]
        },
        {
            id: '3e_angles_isometrie',
            titre: '5. Angles, Isométrie & Similitude',
            desc: 'UAA1 - Triangles isométriques (CCC, CAC, ACA) et semblables (AA...)',
            niveau: '3e Année',
            icone: '📐',
            color: '#d69e2e',
            objectifs: [
                'Reconnaître des triangles isométriques et semblables',
                'Justifier à l\'aide des cas d\'isométrie (CAC, ACA, CCC)',
                'Démontrer une propriété (bissectrice, médiane...)'
            ],
            matieres: [
                'Triangles isométriques (cas : C-C-C, C-A-C, A-C-A)',
                'Triangles semblables (cas : C-C-C, C-A-C, A-A)',
                'Relations métriques dans le triangle rectangle',
                'Propriétés des quadrilatères et droites remarquables'
            ],
            exercices: [
                { question: 'Si deux triangles ont leurs trois côtés de même longueur, ils sont...', options: ['Isométriques', 'Semblables', 'Rectangles', 'Équilatéraux'], correct: 0, correction: 'Le critère CCC garantit l\'isométrie.' }
            ]
        },
        {
            id: '3e_radicaux',
            titre: '6. Radicaux d\'indice 2 et 3',
            desc: 'UAA5 - Racines carrées, cubiques, simplification, opérations',
            niveau: '3e Année',
            icone: '√',
            color: '#2a7a5a',
            objectifs: [
                'Simplifier des radicaux numériques',
                'Effectuer les opérations de base sur des radicaux',
                'Rendre rationnel un dénominateur'
            ],
            matieres: [
                'Définition et vocabulaire (radical, radicant)',
                'Racine d\'un produit, d\'un quotient',
                'Racine d\'une somme (piège à éviter !)',
                'Simplification, addition, multiplication',
                'Rendre rationnel le dénominateur',
                'Nombres irrationnels, encadrement'
            ],
            exercices: [
                { question: 'Que vaut √8 simplifié ?', options: ['2√2', '4√2', '2√4', '√4'], correct: 0, correction: '√8 = √(4*2) = 2√2' }
            ]
        },
        {
            id: '3e_trigo_rect',
            titre: '7. Trigonométrie du triangle rectangle',
            desc: 'UAA2 - Sinus, cosinus, tangente, résolution de problèmes',
            niveau: '3e Année',
            icone: '📐',
            color: '#e88a00',
            objectifs: [
                'Connaître, choisir la formule adéquate',
                'Établir les nombres trigonométriques dans les triangles rectangles particuliers (30, 45, 60 degrés)',
                'Utiliser la calculatrice',
                'Faire un schéma relatif à une situation'
            ],
            matieres: [
                'Sinus : côté opposé / hypoténuse',
                'Cosinus : côté adjacent / hypoténuse',
                'Tangente : côté opposé / côté adjacent',
                'Pente et inclinaison',
                'Angles particuliers : 30°, 45°, 60°',
                'Applications : hauteur d\'un arbre, cerf-volant'
            ],
            exercices: [
                { question: 'Que vaut sin(30°) ?', options: ['0.5', '0.707', '1', '0.866'], correct: 0, correction: 'sin(30°) = 1/2 = 0.5' }
            ]
        }
    ],
    '4e': [
        {
            id: '4e_fonctions_ref',
            titre: '1. Fonctions de référence',
            desc: 'UAA4 - Étude graphique et algébrique des fonctions usuelles',
            niveau: '4e Année',
            icone: '📈',
            color: '#3182ce',
            objectifs: [
                'Déterminer le domaine, ensemble image, zéros, ordonnée à l\'origine',
                'Étudier la croissance, décroissance, parité d\'une fonction',
                'Tracer le graphique des fonctions de référence (x², √x, 1/x, x³...)'
            ],
            matieres: [
                'Fonctions : x, x², x³, 1/x, √x, |x|',
                'Domaine de définition et ensemble image',
                'Parité (paire, impaire)',
                'Transformations : translations, affinités, symétries'
            ],
            exercices: [
                { question: 'Quelle est la fonction de référence pour une parabole ?', options: ['x²', 'x', '1/x', '√x'], correct: 0, correction: 'La fonction x² donne une parabole' }
            ]
        },
        {
            id: '4e_polynomes_2deg',
            titre: '2. Polynômes & Équations 2nd degré',
            desc: 'UAA5 - Discriminant, racines, forme canonique, factorisation',
            niveau: '4e Année',
            icone: '🔢',
            color: '#e53e3e',
            objectifs: [
                'Construire le graphique de y = ax² + bx + c',
                'Résoudre une équation du deuxième degré',
                'Déterminer le produit et la somme des racines',
                'Factoriser un trinôme'
            ],
            matieres: [
                'Forme canonique : a(x - α)² + β',
                'Discriminant Δ = b² - 4ac',
                'Racines x = (-b ± √Δ)/2a',
                'Somme (-b/a) et produit (c/a) des racines',
                'Factorisation des trinômes',
                'Problèmes avec paramètre'
            ],
            exercices: [
                { question: 'Quelle est la formule du discriminant Δ ?', options: ['b² - 4ac', 'b² + 4ac', 'a² - 4bc', 'c² - 4ab'], correct: 0, correction: 'Δ = b² - 4ac' },
                { question: 'Résoudre x² - 4 = 0', options: ['x = 2 ou x = -2', 'x = 2', 'x = -2', 'x = 4'], correct: 0, correction: 'x² = 4 → x = ±2' }
            ]
        },
        {
            id: '4e_vecteurs',
            titre: '3. Calcul vectoriel',
            desc: 'UAA3 - Relation de Chasles, produit scalaire, applications physiques',
            niveau: '4e Année',
            icone: '➡️',
            color: '#805ad5',
            objectifs: [
                'Décomposer un vecteur suivant les axes du repère',
                'Calculer un produit scalaire',
                'Interpréter géométriquement des relations vectorielles'
            ],
            matieres: [
                'Vecteurs : composantes, somme, produit par un nombre',
                'Relation de Chasles',
                'Produit scalaire : définition géométrique et analytique',
                'Théorème généralisé de Pythagore',
                'Applications physiques : force, vitesse, travail'
            ],
            exercices: [
                { question: 'Que représente le produit scalaire de deux vecteurs ?', options: ['Un nombre réel', 'Un vecteur', 'Une distance', 'Un angle'], correct: 0, correction: 'Le produit scalaire est un nombre réel' },
                { question: 'Que vaut le produit scalaire de deux vecteurs orthogonaux ?', options: ['0', '1', 'Le produit de leurs normes', '-1'], correct: 0, correction: 'Le produit scalaire de deux vecteurs orthogonaux est nul' }
            ]
        },
        {
            id: '4e_trigo_cercle',
            titre: '4. Cercle trigonométrique',
            desc: 'UAA3 - Angles orientés, sinus, cosinus, tangente, formules',
            niveau: '4e Année',
            icone: '📐',
            color: '#d69e2e',
            objectifs: [
                'Représenter sur un cercle trigonométrique un angle',
                'Établir le lien entre triangles semblables et nombres trigonométriques',
                'Résoudre des triangles quelconques (loi des sinus, Al Kashi)'
            ],
            matieres: [
                'Cercle trigonométrique (rayon 1, repère orthonormé)',
                'Angles orientés (sens positif, négatif)',
                'Sinus = ordonnée, Cosinus = abscisse, Tangente = axe des tangentes',
                'Relation fondamentale : sin² α + cos² α = 1',
                'Angles associés (supplémentaires, opposés)',
                'Loi des sinus et Théorème d\'Al Kashi'
            ],
            exercices: [
                { question: 'Que vaut cos(60°) ?', options: ['0.5', '0.866', '0.707', '1'], correct: 0, correction: 'cos(60°) = 1/2 = 0.5' },
                { question: 'Que vaut sin² α + cos² α ?', options: ['1', '0', '2', 'α'], correct: 0, correction: 'La formule fondamentale donne toujours 1' }
            ]
        },
        {
            id: '4e_statistiques',
            titre: '5. Statistiques descriptives',
            desc: 'UAA1 - Variables, tableaux, graphiques, paramètres, Tchebychev',
            niveau: '4e Année',
            icone: '📊',
            color: '#e88a00',
            objectifs: [
                'Expliquer le vocabulaire statistique',
                'Identifier les différents types de caractères',
                'Calculer ou estimer les indicateurs de position et de dispersion',
                'Utiliser l\'inégalité de Tchebychev'
            ],
            matieres: [
                'Population, individu, échantillon, variable',
                'Variable qualitative / quantitative (discrète, continue)',
                'Tableau recensé : effectifs, fréquences, cumulés',
                'Diagrammes : bâtonnets, secteurs, histogramme',
                'Paramètres de position : mode, moyenne, médiane, quartiles',
                'Paramètres de dispersion : étendue, écart-type, variance',
                'Boîte à moustaches'
            ],
            exercices: [
                { question: 'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options: ['7', '6', '8', '5'], correct: 0, correction: 'La médiane est la valeur centrale : 7' },
                { question: 'Quelle est la moyenne de 4, 6, 8, 10, 12 ?', options: ['8', '7', '9', '6'], correct: 0, correction: '(4+6+8+10+12)/5 = 40/5 = 8' }
            ]
        },
        {
            id: '4e_equations_ineq',
            titre: '6. Équations & Inéquations',
            desc: 'UAA5 - Principes d\'équivalence, produits nuls, fractions algébriques',
            niveau: '4e Année',
            icone: '🔢',
            color: '#c81e2c',
            objectifs: [
                'Résoudre une équation, une inéquation du premier degré',
                'Utiliser la règle du produit nul',
                'Résoudre une équation contenant des fractions rationnelles'
            ],
            matieres: [
                'Principes d\'équivalence (addition, multiplication...)',
                'Résolution d\'équations du 1er degré',
                'Règle du produit nul : a.b = 0 ⇔ a = 0 ou b = 0',
                'Équations se ramenant au 1er degré',
                'Inéquations et intervalles',
                'Fractions algébriques (C.E., simplification)'
            ],
            exercices: [
                { question: 'Résoudre : 2x + 3 = 11', options: ['x = 4', 'x = 5', 'x = 3', 'x = 7'], correct: 0, correction: '2x = 8 → x = 4' },
                { question: 'Résoudre x(x-3) = 0', options: ['x = 0 ou x = 3', 'x = 3', 'x = 0', 'x = -3'], correct: 0, correction: 'Un produit est nul si un de ses facteurs est nul.' }
            ]
        },
        {
            id: '4e_systemes',
            titre: '7. Systèmes d\'équations',
            desc: 'UAA5 - Méthodes de substitution, combinaison, interprétation graphique',
            niveau: '4e Année',
            icone: '🔢',
            color: '#1c5fa8',
            objectifs: [
                'Résoudre un système de deux équations à deux inconnues',
                'Interpréter graphiquement la solution',
                'Résoudre des problèmes contextualisés'
            ],
            matieres: [
                'Équations du 1er degré à deux inconnues',
                'Méthode de substitution',
                'Méthode de combinaison (élimination)',
                'Interprétation graphique : sécantes, parallèles, confondues',
                'Systèmes impossibles et indéterminés'
            ],
            exercices: [
                { question: 'Résoudre le système : x + y = 5 et x - y = 1', options: ['(3,2)', '(2,3)', '(4,1)', '(1,4)'], correct: 0, correction: 'Par addition : 2x = 6 → x = 3, y = 2' }
            ]
        },
        {
            id: '4e_fct_premier_degre',
            titre: '8. Fonction du premier degré',
            desc: 'UAA4 - Droites, m et p, intersections, résolution graphique',
            niveau: '4e Année',
            icone: '📈',
            color: '#1e7a3c',
            objectifs: [
                'Associer f(x) = mx+p à son graphique',
                'Interpréter m (pente) et p (ordonnée à l\'origine)',
                'Résoudre graphiquement et algébriquement f(x) = g(x)'
            ],
            matieres: [
                'Forme générale y = mx + p',
                'Taux d\'accroissement',
                'Zéro de la fonction (x = -p/m)',
                'Ordonnée à l\'origine (p)',
                'Croissance et décroissance selon le signe de m',
                'Fonction affine / linéaire / constante',
                'Position relative de deux droites'
            ],
            exercices: [
                { question: 'Dans f(x) = 2x + 3, que représente le coefficient 2 ?', options: ['Le taux d\'accroissement', 'L\'ordonnée à l\'origine', 'La racine', 'Le terme constant'], correct: 0, correction: '2 est le coefficient angulaire (la pente)' },
                { question: 'Dans f(x) = 2x + 3, que représente le nombre 3 ?', options: ['L\'ordonnée à l\'origine', 'Le coefficient angulaire', 'La racine', 'La pente'], correct: 0, correction: '3 est l\'ordonnée à l\'origine' }
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
            color: '#3182ce',
            objectifs: [
                'Comprendre la notion de limite',
                'Utiliser les fonctions exponentielles et logarithmes'
            ],
            matieres: ['Limites de fonctions', 'Fonction exponentielle', 'Fonction logarithme'],
            exercices: [
                { question: 'Que vaut e^0 ?', options: ['1', '0', 'e', '2.718'], correct: 0, correction: 'e^0 = 1' }
            ]
        },
        {
            id: '5e_nombres_complexes',
            titre: '2. Nombres complexes',
            desc: 'Forme algébrique, trigonométrique, opérations',
            niveau: '5e Année',
            icone: 'ℂ',
            color: '#805ad5',
            objectifs: [
                'Représenter un nombre complexe',
                'Effectuer des opérations sur les nombres complexes'
            ],
            matieres: ['Définition des nombres complexes', 'Forme algébrique : a + ib', 'Module et argument'],
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
            color: '#319795',
            objectifs: [
                'Étudier les coniques (cercle, ellipse, parabole, hyperbole)'
            ],
            matieres: ['Équation cartésienne d\'une droite', 'Cercle, ellipse, parabole, hyperbole'],
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
            color: '#e53e3e',
            objectifs: [
                'Calculer la dérivée d\'une fonction',
                'Utiliser la dérivée pour étudier les variations'
            ],
            matieres: ['Définition de la dérivée', 'Dérivées des fonctions usuelles', 'Tableau de variations, extremums'],
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
                'Calculer une intégrale définie'
            ],
            matieres: ['Primitives d\'une fonction', 'Intégrale définie', 'Calcul d\'aires sous une courbe'],
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
            color: '#d69e2e',
            objectifs: [
                'Comprendre la notion de variable aléatoire',
                'Utiliser les lois de probabilité usuelles'
            ],
            matieres: ['Variables aléatoires discrètes et continues', 'Espérance, variance', 'Loi binomiale, loi normale'],
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

// ---- DONNÉES DES FORMULES (CONFORME AUX PDFS) ----
var FORMULES_DATA = {
    algebre: [
        { id: 'alg_1', titre: 'Identités remarquables', definition: '(a+b)² = a² + 2ab + b²', exemple: '(x+3)² = x² + 6x + 9', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_2', titre: 'Différence de carrés', definition: 'a² - b² = (a-b)(a+b)', exemple: 'x² - 9 = (x-3)(x+3)', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_3', titre: 'Discriminant', definition: 'Δ = b² - 4ac', exemple: 'Pour x² + 2x - 3, Δ = 4 + 12 = 16', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_4', titre: 'Racines du 2nd degré', definition: 'x = (-b ± √Δ) / 2a', exemple: 'x = (-2 ± 4)/2 → x = 1 ou -3', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_5', titre: 'Forme canonique', definition: 'a(x - α)² + β', exemple: 'x² + 6x + 5 = (x+3)² - 4', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_6', titre: 'Produit nul', definition: 'a.b = 0 ⇔ a = 0 ou b = 0', exemple: 'x(x-3)=0 ⇔ x=0 ou x=3', icone: '🔢', categorie: 'Algèbre' }
    ],
    geometrie: [
        { id: 'geo_1', titre: 'Théorème de Pythagore', definition: 'a² + b² = c² (triangle rectangle)', exemple: '3² + 4² = 5²', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_2', titre: 'Théorème de Thalès', definition: 'AB/AC = AD/AE', exemple: 'Si BD // CE', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_3', titre: 'Médiatrice', definition: 'Ensemble des points équidistants', exemple: 'MA = MB', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_4', titre: 'Cercle', definition: 'Ensemble des points à distance r de O', exemple: 'x² + y² = r²', icone: '📐', categorie: 'Géométrie' }
    ],
    trigonometrie: [
        { id: 'trigo_1', titre: 'Sinus', definition: 'sin(α) = opposé/hypoténuse', exemple: 'sin(30°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_2', titre: 'Cosinus', definition: 'cos(α) = adjacent/hypoténuse', exemple: 'cos(60°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_3', titre: 'Tangente', definition: 'tan(α) = opposé/adjacent', exemple: 'tan(45°) = 1', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_4', titre: 'Relation fondamentale', definition: 'sin² α + cos² α = 1', exemple: 'Toujours vrai', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_5', titre: 'Loi des sinus', definition: 'a/sin α = b/sin β = c/sin γ', exemple: 'Dans tout triangle', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_6', titre: 'Théorème d\'Al Kashi', definition: 'a² = b² + c² - 2bc cos α', exemple: 'Pythagore généralisé', icone: '📐', categorie: 'Trigonométrie' }
    ],
    analyse: [
        { id: 'ana_1', titre: 'Dérivée de x^n', definition: 'f\'(x) = n × x^(n-1)', exemple: '(x²)\' = 2x', icone: '📈', categorie: 'Analyse' },
        { id: 'ana_2', titre: 'Primitive de x^n', definition: '∫x^n dx = x^(n+1)/(n+1) + C', exemple: '∫x dx = x²/2 + C', icone: '📈', categorie: 'Analyse' }
    ],
    vecteurs: [
        { id: 'vec_1', titre: 'Produit scalaire', definition: 'u·v = u1×v1 + u2×v2', exemple: '(1,2)·(3,4) = 3+8 = 11', icone: '➡️', categorie: 'Vecteurs' },
        { id: 'vec_2', titre: 'Norme', definition: '||u|| = √(u1² + u2²)', exemple: '||(3,4)|| = 5', icone: '➡️', categorie: 'Vecteurs' }
    ],
    statistiques: [
        { id: 'stat_1', titre: 'Moyenne', definition: 'x̄ = Σxi/n', exemple: '(4+6+8)/3 = 6', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_2', titre: 'Variance', definition: 'σ² = Σ(xi - x̄)²/n', exemple: 'Mesure la dispersion', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_3', titre: 'Écart-type', definition: 'σ = √σ²', exemple: 'Racine de la variance', icone: '📊', categorie: 'Statistiques' }
    ],
    complexes: [
        { id: 'comp_1', titre: 'Définition de i', definition: 'i² = -1', exemple: '√-1 = i', icone: 'ℂ', categorie: 'Nombres complexes' },
        { id: 'comp_2', titre: 'Module', definition: '|z| = √(a² + b²)', exemple: '|3+4i| = 5', icone: 'ℂ', categorie: 'Nombres complexes' }
    ]
};

var favorisFormules = JSON.parse(localStorage.getItem('favorisFormules') || '[]');
var favorisChapitres = JSON.parse(localStorage.getItem('favorisChapitres') || '[]');

// ---- DONNEES UTILISATEUR ----
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

// =========================================================
// NAVIGATION
// =========================================================

function showTab(tab) {
    currentTab = tab;
    var tabs = ['dashboard', 'revision', 'formules', 'entrainer', 'suivi'];
    for (var i = 0; i < tabs.length; i++) {
        var el = document.getElementById(tabs[i]);
        if (el) el.classList.add('hidden');
        
        var navEl = document.getElementById('nav' + tabs[i].charAt(0).toUpperCase() + tabs[i].slice(1));
        if (navEl) navEl.classList.remove('active');
    }
    
    var target = document.getElementById(tab);
    if (target) target.classList.remove('hidden');
    
    var navTarget = document.getElementById('nav' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (navTarget) navTarget.classList.add('active');
    
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'revision') { renderRevision(); }
    if (tab === 'formules') renderFormules();
    if (tab === 'entrainer') { updateQuizChapitres(); }
    if (tab === 'suivi') renderSuivi();
}

function goHome() {
    showTab('dashboard');
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    var btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// =========================================================
// DASHBOARD (ACCUEIL)
// =========================================================

function renderDashboard() {
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
    
    var percentGlobal = totalChapitres > 0 ? Math.round(revisites / totalChapitres * 100) : 0;
    document.getElementById('globalProgress').textContent = percentGlobal;
    
    var progressHtml = '';
    for (var a2 = 0; a2 < annees.length; a2++) {
        var annee = annees[a2];
        var chaps2 = CHAPITRES[annee] || [];
        var total = chaps2.length;
        var done = 0;
        for (var c2 = 0; c2 < chaps2.length; c2++) {
            if (USER_DATA.progress[chaps2[c2].id] >= 100) done++;
        }
        var percent = total > 0 ? Math.round(done / total * 100) : 0;
        var label = annee + 'e Année';
        var color = percent >= 80 ? '#38a169' : percent >= 50 ? '#d69e2e' : '#3182ce';
        
        progressHtml += '<div class="progress-item">';
        progressHtml += '<div class="progress-label"><span>' + label + '</span><span>' + percent + '%</span></div>';
        progressHtml += '<div class="progress-bar"><div class="progress-fill" style="width: ' + percent + '%; background: ' + color + ';"></div></div>';
        progressHtml += '</div>';
    }
    document.getElementById('progressionAnnees').innerHTML = progressHtml;
    
    var urgents = [];
    for (var a3 = 0; a3 < annees.length; a3++) {
        var chaps3 = CHAPITRES[annees[a3]] || [];
        for (var c3 = 0; c3 < chaps3.length; c3++) {
            var chap = chaps3[c3];
            var prog = USER_DATA.progress[chap.id] || 0;
            if (prog < 30) urgents.push(chap);
        }
    }
    
    var urgentHtml = '';
    if (urgents.length === 0) {
        urgentHtml = '<div style="color: #38a169; font-weight: 900;">🎉 Tout est en bonne voie !</div>';
    } else {
        for (var u = 0; u < Math.min(urgents.length, 3); u++) {
            var chap = urgents[u];
            urgentHtml += '<div class="urgent-item"><span>' + chap.icone + ' ' + chap.titre + '</span><b>' + (USER_DATA.progress[chap.id] || 0) + '%</b></div>';
        }
    }
    document.getElementById('chapitresUrgents').innerHTML = urgentHtml;
    
    var allFormules = [];
    for (var cat in FORMULES_DATA) {
        allFormules = allFormules.concat(FORMULES_DATA[cat]);
    }
    var formulesJour = allFormules.slice(0, 3);
    var formulesHtml = '';
    for (var f = 0; f < formulesJour.length; f++) {
        formulesHtml += '<div class="formule-mini"><b>' + formulesJour[f].exemple + '</b> ' + formulesJour[f].titre + '</div>';
    }
    document.getElementById('formulesDuJour').innerHTML = formulesHtml;
}

// =========================================================
// RÉVISER
// =========================================================

function renderRevision() {
    var container = document.getElementById('contenuAnnee');
    container.innerHTML = '';
    container.classList.add('hidden');
    document.getElementById('choixAnnee').classList.remove('hidden');
}

function showAnnee(annee) {
    var container = document.getElementById('contenuAnnee');
    var chapitres = CHAPITRES[annee] || [];
    document.getElementById('choixAnnee').classList.add('hidden');
    container.classList.remove('hidden');
    
    if (chapitres.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--muted);">📚 Aucun chapitre.</div>';
        return;
    }
    
    var html = '<div class="page-header" style="margin-bottom: 15px;"><h3>' + annee + 'e Année</h3><button class="ghost-btn" onclick="renderRevision()">← Retour aux années</button></div>';
    html += '<div class="chapitre-list">';
    
    for (var i = 0; i < chapitres.length; i++) {
        var chap = chapitres[i];
        var progress = USER_DATA.progress[chap.id] || 0;
        var status = progress >= 100 ? 'statut-revise' : progress > 0 ? 'statut-cours' : 'statut-vu';
        var statusLabel = progress >= 100 ? '✅ Révisé' : progress > 0 ? '⏳ En cours' : '📖 Non vu';
        
        html += '<div class="chapitre-row" onclick="openChapitre(\'' + chap.id + '\')">';
        html += '<div class="chap-left"><span class="chap-icon">' + chap.icone + '</span><span class="chap-title">' + chap.titre + '</span></div>';
        html += '<span class="chap-status ' + status + '">' + statusLabel + '</span>';
        html += '</div>';
    }
    html += '</div>';
    container.innerHTML = html;
}

// =========================================================
// FORMULES
// =========================================================

function renderFormules() {
    var searchInput = document.getElementById('formuleSearch');
    var search = searchInput ? searchInput.value.toLowerCase() : '';
    var list = document.getElementById('formulesList');
    
    var html = '';
    var total = 0;
    
    for (var categorie in FORMULES_DATA) {
        var formules = FORMULES_DATA[categorie];
        for (var i = 0; i < formules.length; i++) {
            var f = formules[i];
            if (search && f.titre.toLowerCase().indexOf(search) === -1 && f.definition.toLowerCase().indexOf(search) === -1) continue;
            total++;
            
            var estFavori = favorisFormules.indexOf(f.id) !== -1;
            var color = categorie === 'algebre' ? '#e53e3e' : categorie === 'geometrie' ? '#3182ce' : categorie === 'trigonometrie' ? '#d69e2e' : categorie === 'analyse' ? '#805ad5' : categorie === 'vecteurs' ? '#319795' : categorie === 'statistiques' ? '#d69e2e' : '#38a169';
            
            html += '<div class="formule-card" data-cat="' + categorie + '">';
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
    
    var pills = document.querySelectorAll('.filtres-pills .pill');
    for (var i = 0; i < pills.length; i++) {
        pills[i].classList.remove('active');
    }
    if (categorie === 'all') {
        pills[0].classList.add('active');
    } else {
        var allPills = document.querySelectorAll('.filtres-pills .pill');
        for (var p = 0; p < allPills.length; p++) {
            if (allPills[p].textContent.toLowerCase().includes(categorie)) {
                allPills[p].classList.add('active');
                break;
            }
        }
    }
    
    var cards = document.querySelectorAll('#formulesList .formule-card');
    for (var c = 0; c < cards.length; c++) {
        var card = cards[c];
        var display = (categorie === 'all' || card.getAttribute('data-cat') === categorie) ? 'block' : 'none';
        card.style.display = display;
    }
}

function toggleFavoriFormule(id) {
    var index = favorisFormules.indexOf(id);
    if (index !== -1) favorisFormules.splice(index, 1);
    else favorisFormules.push(id);
    localStorage.setItem('favorisFormules', JSON.stringify(favorisFormules));
    renderFormules();
}

// =========================================================
// S'ENTRAÎNER (QUIZ & EXAMENS)
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
    
    var annee = anneeSelect.value;
    var chapitre = chapitreSelect.value;
    
    var questions = QUESTIONS_QUIZ.filter(function(q) { 
        if (annee !== 'all' && q.annee !== annee) return false;
        if (chapitre !== 'all' && q.chapitre !== chapitre) return false;
        return true;
    });
    
    if (questions.length === 0) {
        alert('Aucune question disponible.');
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
    var message = percent >= 80 ? '🌟 Excellent !' : percent >= 60 ? '👍 Bon travail !' : '📚 Continue !';
    
    var quizId = 'quiz_' + new Date().getTime();
    USER_DATA.quizResults[quizId] = percent;
    saveUserData();
    
    var html = '<div style="text-align: center; padding: 30px 0;">';
    html += '<div style="font-size: 48px; margin-bottom: 10px;">' + (percent >= 80 ? '🏆' : percent >= 60 ? '📈' : '📚') + '</div>';
    html += '<h2>Quiz terminé !</h2>';
    html += '<div style="font-size: 36px; font-weight: 900; color: ' + (percent >= 80 ? '#38a169' : percent >= 60 ? '#d69e2e' : '#e53e3e') + ';">' + percent + '%</div>';
    html += '<p style="font-size: 18px; margin: 10px 0;">' + currentQuiz.score + ' / ' + currentQuiz.total + ' bonnes réponses</p>';
    html += '<p style="color: var(--muted);">' + message + '</p>';
    html += '<div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startQuiz()">🔄 Refaire</button>';
    html += '<button class="ghost-btn" onclick="showTab(\'entrainer\')">📊 Retour</button>';
    html += '</div></div>';
    container.innerHTML = html;
}

function startDefiJour() {
    var questions = shuffle(QUESTIONS_QUIZ.slice()).slice(0, 5);
    if (questions.length === 0) return;
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
    var questions = niveau === 'complet' ? shuffle(allQuestions) : shuffle(allQuestions.filter(function(q) { return q.annee === niveau; }));
    var count = niveau === 'complet' ? 50 : niveau === '6e' ? 30 : niveau === '5e' ? 25 : 20;
    questions = questions.slice(0, count);
    
    if (questions.length < 10) {
        alert('Pas assez de questions.');
        return;
    }
    
    currentExamen.questions = questions;
    currentExamen.index = 0;
    currentExamen.score = 0;
    currentExamen.total = questions.length;
    currentExamen.niveau = niveau;
    currentExamen.timeLeft = niveau === 'complet' ? 5400 : niveau === '6e' ? 3000 : niveau === '5e' ? 2400 : 1800;
    
    var container = document.getElementById('examenContent');
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
    document.getElementById('examenProgress').textContent = currentExamen.index + 1;
    document.getElementById('examenScore').textContent = currentExamen.score;
    document.getElementById('examenBar').style.width = (currentExamen.index / currentExamen.total * 100) + '%';
    
    var html = '<div class="quiz-question"><div class="question-text">' + q.question + '</div><div class="quiz-options">';
    for (var i = 0; i < q.options.length; i++) {
        html += '<button onclick="answerExamen(' + i + ')">' + String.fromCharCode(65 + i) + '. ' + q.options[i] + '</button>';
    }
    html += '</div><div id="examenFeedback"></div></div>';
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
    feedback.innerHTML = '<div class="quiz-result ' + (isCorrect ? 'correct' : 'wrong') + '">' + (isCorrect ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.') + '</div><button class="primary-btn" onclick="nextExamenQuestion()" style="margin-top: 10px;">➡️ Question suivante</button>';
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
    var html = '<div style="text-align: center; padding: 30px 0;">';
    html += '<div style="font-size: 64px; margin-bottom: 10px;">' + (percent >= 80 ? '🎉' : percent >= 60 ? '📈' : '📚') + '</div>';
    html += '<h2>Examen terminé !</h2>';
    html += '<div style="font-size: 48px; font-weight: 900; color: ' + (percent >= 80 ? '#38a169' : percent >= 60 ? '#d69e2e' : '#e53e3e') + ';">' + percent + '%</div>';
    html += '<p style="font-size: 18px; margin: 10px 0;">' + currentExamen.score + ' / ' + currentExamen.total + ' bonnes réponses</p>';
    html += '<p style="color: var(--muted);">' + message + '</p>';
    html += '<div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startExamen(\'' + currentExamen.niveau + '\')">🔄 Refaire</button>';
    html += '<button class="ghost-btn" onclick="showTab(\'entrainer\')">📊 Retour</button>';
    html += '</div></div>';
    
    container.innerHTML = html;
    renderDashboard();
}

// =========================================================
// STATISTIQUES & SUIVI
// =========================================================

function renderSuivi() {
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
    
    var el1 = document.getElementById('statsRevisites');
    if (el1) el1.textContent = totalChapitres > 0 ? Math.round(revisites / totalChapitres * 100) + '%' : '0%';
    
    var el2 = document.getElementById('statsQuizTotal');
    if (el2) el2.textContent = Object.keys(USER_DATA.quizResults || {}).length;
    
    var meilleur = 0;
    for (var key in USER_DATA.quizResults) {
        if (USER_DATA.quizResults[key] > meilleur) meilleur = USER_DATA.quizResults[key];
    }
    var el3 = document.getElementById('statsMeilleur');
    if (el3) el3.textContent = meilleur + '%';
    
    var el4 = document.getElementById('statsSerie');
    if (el4) el4.textContent = USER_DATA.streak || 0;
    
    // Badges
    var badges = getBadges();
    var unlocked = badges.filter(function(b) { return b.unlocked; });
    var badgeHtml = '';
    for (var b = 0; b < badges.length; b++) {
        badgeHtml += '<div class="badge-item ' + (badges[b].unlocked ? 'unlocked' : 'locked') + '">' + badges[b].icon + ' ' + badges[b].name + '</div>';
    }
    document.getElementById('badgeDisplay').innerHTML = badgeHtml;
    
    // Favoris
    var favHtml = '';
    for (var f in favorisFormules) {
        var found = false;
        for (var cat in FORMULES_DATA) {
            for (var i = 0; i < FORMULES_DATA[cat].length; i++) {
                if (FORMULES_DATA[cat][i].id === favorisFormules[f]) {
                    favHtml += '<div>' + FORMULES_DATA[cat][i].icone + ' ' + FORMULES_DATA[cat][i].titre + '</div>';
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
    }
    document.getElementById('favorisList').innerHTML = favHtml || '<div style="color: var(--muted);">Aucun favori</div>';
}

function getBadges() {
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
    return [
        { id: 'apprenti', name: 'Apprenti', icon: '🥉', unlocked: total >= 5 },
        { id: 'expert', name: 'Expert', icon: '🥇', unlocked: total >= 15 && revisites > 10 },
        { id: 'streak', name: 'Série', icon: '🔥', unlocked: USER_DATA.streak >= 10 }
    ];
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

function openChapitre(chapitreId) {
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
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;';
    var content = document.createElement('div');
    content.style.cssText = 'background: var(--surface); border-radius: 18px; max-width: 750px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); position: relative;';
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position: sticky; top: 0; float: right; background: none; border: none; font-size: 24px; cursor: pointer; color: var(--muted); padding: 0 4px;';
    closeBtn.onclick = function() { document.body.removeChild(modal); };
    
    var html = '<h2 style="margin: 0 0 4px 0;">' + found.icone + ' ' + found.titre + '</h2>';
    html += '<p style="color: var(--muted); margin-bottom: 16px;">' + found.desc + '</p>';
    html += '<div style="margin: 16px 0; display: flex; gap: 10px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startChapitreQuiz(\'' + found.id + '\')">🎯 Quiz</button>';
    html += '<button class="ghost-btn" onclick="markChapitreDone(\'' + found.id + '\')">✅ Marquer révisé</button>';
    html += '</div>';
    
    html += '<h3>🎯 Objectifs</h3><ul style="margin: 8px 0 16px 20px;">';
    for (var o = 0; o < found.objectifs.length; o++) {
        html += '<li>' + found.objectifs[o] + '</li>';
    }
    html += '</ul>';
    
    html += '<h3>📝 Matières</h3><ul style="margin: 8px 0 16px 20px;">';
    for (var m = 0; m < found.matieres.length; m++) {
        html += '<li>' + found.matieres[m] + '</li>';
    }
    html += '</ul>';
    
    if (found.exercices) {
        html += '<h3>🎯 Exercices</h3>';
        for (var e = 0; e < found.exercices.length; e++) {
            var ex = found.exercices[e];
            html += '<div style="background: var(--soft); border-radius: 10px; padding: 14px; margin: 8px 0;">';
            html += '<b>' + ex.question + '</b><div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">';
            for (var p = 0; p < ex.options.length; p++) {
                var isCorrect = p === ex.correct;
                html += '<button style="text-align: left; padding: 8px; border: 1px solid var(--line); border-radius: 6px; cursor: pointer;" onclick="checkExo(this, ' + isCorrect + ', \'' + (ex.correction || '') + '\')">' + String.fromCharCode(65 + p) + '. ' + ex.options[p] + '</button>';
            }
            html += '</div><div class="exo-feedback" style="margin-top: 6px; font-size: 13px;"></div></div>';
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
        buttons[i].disabled = true;
        buttons[i].style.opacity = '0.7';
    }
    if (isCorrect) {
        btn.style.background = '#38a169';
        btn.style.color = 'white';
        if (feedback) feedback.innerHTML = '<span style="color: #38a169; font-weight: 900;">✅ Correct ! ' + correction + '</span>';
    } else {
        btn.style.background = '#e53e3e';
        btn.style.color = 'white';
        if (feedback) feedback.innerHTML = '<span style="color: #e53e3e; font-weight: 900;">❌ Incorrect. ' + correction + '</span>';
    }
}

function startChapitreQuiz(chapitreId) {
    var questions = QUESTIONS_QUIZ.filter(function(q) { return q.chapitre === chapitreId; });
    if (questions.length === 0) return;
    currentQuiz.questions = shuffle(questions);
    currentQuiz.index = 0;
    currentQuiz.score = 0;
    currentQuiz.total = currentQuiz.questions.length;
    showTab('entrainer');
    renderQuiz();
}

function markChapitreDone(chapitreId) {
    USER_DATA.progress[chapitreId] = 100;
    saveUserData();
    renderDashboard();
    var modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) document.body.removeChild(modal);
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
        showTab('revision');
        showAnnee(found.niveau.replace('e', '')); // Simplification pour trouver l'année
    }
}

// =========================================================
// INITIALISATION
// =========================================================
loadUserData();
showTab('dashboard');
console.log('📚 Programme complet chargé !');
