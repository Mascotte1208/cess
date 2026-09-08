// ====== Données enrichies des chapitres =========
var CHAPITRES = {
  '3e': [
    {
      id: '3e_fonctions',
      titre: "1. Approche graphique d'une fonction",
      desc: 'UAA3 — Comprendre les machines, les graphiques et les tableaux',
      niveau: '3e',
      icone: '📈',
      color: '#3182ce',
      cours: `
        <h4>Notion de fonction : machine à transformer les nombres</h4>
        <p>Une fonction est une relation qui associe à chaque nombre entrant un seul nombre sortant. Exemple : f(x) = 3x -1.</p>
        <h4>Lire un graphique</h4>
        <ul>
          <li><b>Antécédent (x)</b> : nombre d'entrée</li>
          <li><b>Image (f(x) ou y)</b> : nombre de sortie</li>
          <li><b>Domaine de définition</b> : ensemble des x valides</li>
          <li><b>Ensemble image</b> : ensemble des valeurs prises par f(x)</li>
        </ul>
        <p>On peut repérer des points clés comme l’ordonnée à l’origine, les zéros de fonction, et analyser la croissance.</p>
        <h4>Tableau de signes et variations</h4>
        <p>Le signe de la fonction (positive ou négative) est visible au-dessus ou en dessous de l’axe des abscisses.</p>
        <p>Un tableau de variations résume la croissance/décroissance sur différents intervalles.</p>
        <h4>Exemple graphique</h4>
        <p>Tracer f(x) = 2x + 1, repérer ses zéros, son domaine, et conclure sur ses variations.</p>
        <h4>Exercices guidés</h4>
        <ol>
          <li>Compléter un tableau d'entrée/sortie pour une fonction donnée.</li>
          <li>Déterminer des antécédents et images à partir d’un graphique.</li>
          <li>Construire un tableau de signes à partir du graphique.</li>
          <li>Tracer le graphique d’une fonction linéaire avec conditions précises.</li>
        </ol>
      `,
      objectifs: [
        'Comprendre la notion de fonction et différencier fonction/ relation',
        'Lire images et antécédents sur un graphique',
        'Construire et interpréter un tableau de signes et de variations',
        'Tracer des fonctions simples et résoudre des équations graphiquement'
      ],
      matieres: [
        'Notion de fonction et vocabulaire',
        'Lecture graphique (zéros, ordonnée à l’origine)',
        'Tableaux de signes et variations',
        'Résolution graphique d’équations et inéquations'
      ],
      exercices: [
        {
          question: "Qu'est-ce qu'une fonction ?",
          options: [
            'Une relation qui donne au plus une image par antécédent',
            'Une relation qui donne plusieurs images',
            'Une machine qui additionne',
            'Un tableau de valeurs'
          ],
          correct: 0,
          correction: 'Une fonction associe à chaque x au plus une seule valeur y.'
        },
        {
          question: 'Que signifie f(2) = 3 ?',
          options: [
            "L'image de 2 est 3",
            "L'antécédent de 2 est 3",
            "La fonction est croissante",
            "Le domaine est [2,3]"
          ],
          correct: 0,
          correction: "f(2) = 3 signifie que l'image de 2 par la fonction f est 3."
        },
        {
          question: "Comment trouve-t-on le zéro d'une fonction graphiquement ?",
          options: [
            "Intersection avec l’axe des abscisses",
            "Intersection avec l’axe des ordonnées",
            "Le sommet de la courbe",
            "Le point le plus bas"
          ],
          correct: 0,
          correction: "Le zéro est l’abscisse où le graphe coupe l’axe des x."
        }
      ]
    },
    {
      id: '3e_algebre_polynomes',
      titre: '2. Polynômes & Factorisation',
      desc: 'UAA5 — Calculs, identités remarquables et méthodes de factorisation',
      niveau: '3e',
      icone: '🔢',
      color: '#e53e3e',
      cours: `
        <h4>Définition d’un polynôme</h4>
        <p>Un polynôme est une somme de monômes : termes composés d’un coefficient et d’une partie littérale.</p>
        <h4>Les produits remarquables</h4>
        <ul>
          <li>(a + b)² = a² + 2ab + b²</li>
          <li>(a - b)² = a² - 2ab + b²</li>
          <li>a² - b² = (a - b)(a + b)</li>
        </ul>
        <h4>Méthode des rectangles</h4>
        <p>Pour factoriser x² + 5x + 6, on cherche deux nombres dont le produit vaut 6 et la somme vaut 5. Ici 2 et 3 donnent (x + 2)(x + 3).</p>
        <h4>Division Euclidienne & Loi du reste</h4>
        <p>Un polynôme P(x) divisé par (x - a) a pour reste P(a). Si P(a) = 0 alors (x - a) est un facteur.</p>
        <h4>Exercices guidés</h4>
        <ol>
          <li>Réduire et ordonner des polynômes</li>
          <li>Développer et factoriser avec la méthode des rectangles</li>
          <li>Utiliser la règle du produit nul pour résoudre des équations</li>
          <li>Conditions d’existence et simplification de fractions algébriques</li>
        </ol>
      `,
      objectifs: [
        'Connaître les produits remarquables',
        'Maîtriser la méthode des rectangles',
        'Utiliser la division euclidienne et la loi du reste',
        'Factoriser et résoudre des équations polynomiales'
      ],
      matieres: [
        'Réduction et ordonnancement des polynômes',
        'Produits remarquables',
        'Méthode des rectangles',
        'Equations et fractions algébriques'
      ],
      exercices: [
        {
          question: 'Factoriser : x² - 9',
          options: ['(x-3)(x+3)', '(x-3)²', '(x+3)²', 'x²-9'],
          correct: 0,
          correction:'x² - 9 = (x-3)(x+3) car différence de carrés'
        },
        {
          question: 'Factoriser : x² + 5x + 6',
          options: ['(x+2)(x+3)', '(x+1)(x+6)', '(x-2)(x-3)', 'Impossible'],
          correct: 0,
          correction:'On cherche facteurs de 6 qui sommés font 5 : 2 et 3, donc (x+2)(x+3)'
        }
      ]
    },
    // Ajoutez ici d’autres chapitres comme Pythagore, Thalès, trigonométrie...
  ],

  // Ajoutez aussi pour 4e, 5e, 6e selon vos PDF...
};

// ====== FORMULES enrichies =======
var FORMULES_DATA = {
  algebre: [
    {id:'alg_1', titre:'Identité remarquable', definition:'(a+b)² = a² + 2ab + b²', exemple:'(x+3)² = x² + 6x + 9', icone:'🔢', categorie:'Algèbre'},
    {id:'alg_2', titre:'Différence de carrés', definition:'a² - b² = (a-b)(a+b)', exemple:'x² - 9 = (x-3)(x+3)', icone:'🔢', categorie:'Algèbre'},
    {id:'alg_3', titre:'Discriminant', definition:'Δ = b² - 4ac', exemple:'Pour x² + 2x - 3, Δ = 16', icone:'🔢', categorie:'Algèbre'},
    {id:'alg_4', titre:'Racines du 2nd degré', definition:'x = (-b ± √Δ) / 2a', exemple:'x = (-2 ± 4)/2 → 1 ou -3', icone:'🔢', categorie:'Algèbre'}
  ],
  geometrie: [
    {id:'geo_1', titre:'Théorème de Pythagore', definition:'a² + b² = c² (triangle rectangle)', exemple:'3² + 4² = 5²', icone:'📐', categorie:'Géométrie'},
    {id:'geo_2', titre:'Théorème de Thalès', definition:'AB/AC = AD/AE (si BD // CE)', exemple:'Calculer une longueur inconnue', icone:'📐', categorie:'Géométrie'},
    {id:'geo_3', titre:'Distance entre deux points', definition:'d = √[(xB-xA)² + (yB-yA)²]', exemple:'A(0,0), B(3,4) → d = 5', icone:'📐', categorie:'Géométrie'},
    {id:'geo_4', titre:'Équation du cercle', definition:'(x-a)² + (y-b)² = r²', exemple:'Centre (0,0), rayon 3 → x²+y²=9', icone:'📐', categorie:'Géométrie'}
  ],
  trigonometrie: [
    {id:'trigo_1', titre:'Sinus', definition:'sin(α) = opposé / hypoténuse', exemple:'sin(30°) = 0.5', icone:'📐', categorie:'Trigonométrie'},
    {id:'trigo_2', titre:'Cosinus', definition:'cos(α) = adjacent / hypoténuse', exemple:'cos(60°) = 0.5', icone:'📐', categorie:'Trigonométrie'},
    {id:'trigo_3', titre:'Tangente', definition:'tan(α) = opposé / adjacent', exemple:'tan(45°) = 1', icone:'📐', categorie:'Trigonométrie'},
    {id:'trigo_4', titre:'Relation fondamentale', definition:'sin²α + cos²α = 1', exemple:'Formule à connaître par cœur', icone:'📐', categorie:'Trigonométrie'}
  ],
  analyse: [
    {id:'ana_1', titre:"Dérivée d'une puissance", definition:"(xⁿ)' = n·xⁿ⁻¹", exemple:"(x³)' = 3x²", icone:"📈", categorie:"Analyse"},
    {id:'ana_2', titre:"Dérivée d'un produit", definition:"(uv)' = u'v + uv'", exemple:"(x²·x)' → règle du produit", icone:"📈", categorie:"Analyse"},
    {id:'ana_3', titre:"Dérivée d'un quotient", definition:"(u/v)' = (u'v - uv') / v²", exemple:"Utile pour fonctions rationnelles", icone:"📈", categorie:"Analyse"},
    {id:'ana_4', titre:"Primitive d'une puissance", definition:"∫xⁿ dx = xⁿ⁺¹/(n+1) + C", exemple:"∫x dx = x²/2 + C", icone:"📈", categorie:"Analyse"},
    {id:'ana_5', titre:"Intégrale définie", definition:"∫ₐᵇ f(x) dx = F(b) - F(a)", exemple:"Aire sous la courbe entre a et b", icone:"📈", categorie:"Analyse"}
  ],
  vecteurs: [
    {id:'vec_1', titre:'Produit scalaire', definition:'u·v = ||u|| × ||v|| × cos(α)', exemple:'Si orthogonaux, u·v = 0', icone:'➡️', categorie:'Vecteurs'}
  ],
  statistiques: [
    {id:'stat_1', titre:'Moyenne', definition:'x̄ = Σxi / n', exemple:'(4+6+8)/3 = 6', icone:'📊', categorie:'Statistiques'},
    {id:'stat_2', titre:'Écart-type', definition:'σ = √Variance', exemple:'Mesure dispersion', icone:'📊', categorie:'Statistiques'},
    {id:'stat_3', titre:'Probabilité conditionnelle', definition:'P(A|B) = P(A∩B)/P(B)', exemple:'Probabilité de A sachant B', icone:'📊', categorie:'Statistiques'}
  ],
  complexes: [
    {id:'comp_1', titre:'Module', definition:'|z| = √(a² + b²)', exemple:'|3+4i| = 5', icone:'ℂ', categorie:'Nombres complexes'},
    {id:'comp_2', titre:'Unité imaginaire', definition:'i² = -1', exemple:'Base des nombres complexes', icone:'ℂ', categorie:'Nombres complexes'}
  ]
};

// ==== QUESTIONS_QUIZ enrichies ===
// Exemple d’une sélection d’exercices issus de vos documents pour 3e_fonctions
var QUESTIONS_QUIZ = [
  {
    id: 'q0',
    annee: '3e',
    chapitre: '3e_fonctions',
    question: "Qu'est-ce qu'une fonction ?",
    options: [
      'Une relation qui donne au plus une image par antécédent',
      'Une relation qui donne plusieurs images',
      'Une machine qui additionne',
      'Un tableau de valeurs'
    ],
    correct: 0,
    correction: "Une fonction associe à chaque x au plus une seule valeur y."
  },
  // Plus d’exercices à copier depuis vos chapitres...
  {
    id: 'q1',
    annee: '3e',
    chapitre: '3e_algebre_polynomes',
    question: 'Factoriser : x² - 9',
    options: [
      '(x-3)(x+3)',
      '(x-3)²',
      '(x+3)²',
      'x²-9'
    ],
    correct: 0,
    correction: 'x² - 9 = (x-3)(x+3) car différence de carrés.'
  }
  // Ajoutez d’autres questions similaires...
];

// Le reste du fichier JS contient les fonctions et structure initiale, à garder intactes - et que je peux vous livrer complètes si vous souhaitez.

// --- Fonctions et état : copier depuis votre ces-maths.js d’origine ---
// Ils gèrent la navigation, le rendering des cours, quiz, formules, sauvegardes localStorage etc.

// Exemple : showTab('cours'), renderRevision(), startQuiz() etc.

// ============================================================================
// Vous pouvez copier ces trois fichiers dans votre repo GitHub, en remplaçant l'existant.
// ============================================================================

