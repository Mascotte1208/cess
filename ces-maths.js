// =========================================================
// PROGRAMME COMPLET - MODULES DE COURS INTERACTIFS
// =========================================================

var CHAPITRES = {
    '3e': [
        {
            id: '3e_fonctions',
            titre: '1. Approche graphique d\'une fonction',
            desc: 'UAA3 - Comprendre les machines, les graphiques et les tableaux',
            niveau: '3e',
            icone: '📈',
            color: '#3182ce',
            // Cours résumé pour l'élève
            cours: `
                <h4>🔹 C'est quoi une fonction ?</h4>
                <p>Une fonction est comme une <b>machine à transformer les nombres</b>. On introduit un nombre (x), la machine applique une règle (par exemple : "multiplier par 2 et ajouter 3"), et un nombre sort (y ou f(x)).</p>
                <br>
                <h4>🔹 Vocabulaire essentiel</h4>
                <ul>
                    <li><b>Antécédent (x)</b> : Le nombre qui entre dans la machine.</li>
                    <li><b>Image (y ou f(x))</b> : Le nombre qui sort.</li>
                    <li><b>Domaine (dom f)</b> : Tous les nombres qu'on peut mettre dans la machine (les x).</li>
                    <li><b>Ensemble image (Im f)</b> : Tous les résultats possibles (les y).</li>
                </ul>
                <br>
                <h4>🔹 Comment lire un graphique ?</h4>
                <p><b>Zéro d'une fonction</b> : C'est l'endroit où la courbe coupe l'axe horizontal (l'axe des x). Ici, f(x) = 0.</p>
                <p><b>Ordonnée à l'origine</b> : C'est l'endroit où la courbe coupe l'axe vertical (l'axe des y). Ici, x = 0.</p>
                <p><b>Croissance / Décroissance</b> : Si la courbe monte de gauche à droite, elle est croissante. Si elle descend, elle est décroissante.</p>
            `,
            objectifs: [
                'Comprendre la notion de machine et de fonction',
                'Savoir lire une image et un antécédent sur un graphique',
                'Distinguer une fonction d\'une simple relation',
                'Déterminer le domaine et l\'ensemble image'
            ],
            matieres: [
                'Vocabulaire : antécédents, images',
                'Lecture graphique (axe x, axe y)',
                'Tableaux de valeurs et de variations',
                'Fonction ou relation ?'
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
            desc: 'UAA5 - Calculs, identités remarquables et méthodes de factorisation',
            niveau: '3e',
            icone: '🔢',
            color: '#e53e3e',
            cours: `
                <h4>🔹 C\'est quoi un polynôme ?</h4>
                <p>Un polynôme est une somme de termes (ex: <b>2x² - 5x + 3</b>). Chaque terme est un produit d\'un nombre (le coefficient) et d\'une ou plusieurs lettres (la partie littérale).</p>
                <br>
                <h4>🔹 Les produits remarquables (À connaître par cœur !)</h4>
                <ul>
                    <li><b>(a + b)²</b> = a² + 2ab + b²</li>
                    <li><b>(a - b)²</b> = a² - 2ab + b²</li>
                    <li><b>a² - b²</b> = (a - b)(a + b) (Différence de carrés)</li>
                </ul>
                <br>
                <h4>🔹 Factoriser = Transformer une somme en produit</h4>
                <p>Pour factoriser, on cherche le facteur commun !</p>
                <p><b>Exemple :</b> 3x + 6 = 3(x + 2). Ici, le facteur commun est 3.</p>
                <p><b>Autre méthode (Rectangles) :</b> Pour x² + 5x + 6, on cherche deux nombres qui multipliés donnent 6 et additionnés donnent 5. Ce sont 2 et 3. Donc x² + 5x + 6 = (x + 2)(x + 3).</p>
            `,
            objectifs: [
                'Maîtriser les produits remarquables',
                'Factoriser une expression algébrique',
                'Résoudre des équations grâce au produit nul'
            ],
            matieres: [
                'Identités remarquables',
                'Mise en évidence',
                'Méthode des rectangles',
                'Règle du produit nul'
            ],
            exercices: [
                { question: 'Factoriser : x² - 9', options: ['(x-3)(x+3)', '(x-3)²', '(x+3)²', 'x²-9'], correct: 0, correction: 'a² - b² = (a-b)(a+b)' },
                { question: 'Factoriser : x² + 5x + 6', options: ['(x+2)(x+3)', '(x+1)(x+6)', '(x-2)(x-3)', 'Impossible'], correct: 0, correction: '2*3=6 et 2+3=5' }
            ]
        },
        {
            id: '3e_pythagore',
            titre: '3. Théorème de Pythagore',
            desc: 'UAA2 - Le triangle rectangle et ses propriétés',
            niveau: '3e',
            icone: '📐',
            color: '#805ad5',
            cours: `
                <h4>🔹 Le théorème</h4>
                <p>Dans un triangle <b>rectangle</b> (qui a un angle droit), le carré de l\'hypoténuse (le côté le plus long, opposé à l\'angle droit) est égal à la somme des carrés des deux autres côtés.</p>
                <br>
                <p style="text-align:center; font-size:20px;"><b>a² + b² = c²</b></p>
                <br>
                <h4>🔹 À quoi ça sert ?</h4>
                <p>À calculer une longueur inconnue ! Si on connaît deux côtés, on peut trouver le troisième.</p>
                <p><b>Exemple :</b> Si les côtés de l\'angle droit mesurent 3 et 4, alors : 3² + 4² = 9 + 16 = 25. L\'hypoténuse vaut √25 = 5.</p>
                <br>
                <h4>⚠️ ATTENTION</h4>
                <p>La réciproque sert à prouver qu\'un triangle est rectangle. Si a² + b² = c², alors le triangle est rectangle !</p>
            `,
            objectifs: [
                'Utiliser le théorème pour calculer une longueur',
                'Utiliser la réciproque pour prouver qu\'un triangle est rectangle'
            ],
            matieres: [
                'Triangle rectangle, hypoténuse',
                'Calcul de la diagonale d\'un carré',
                'Nombres irrationnels (√2)'
            ],
            exercices: [
                { question: 'Quel est le théorème de Pythagore ?', options: ['a² + b² = c²', 'a + b = c', 'a × b = c', 'a² = b² + c²'], correct: 0, correction: 'Dans un triangle rectangle, a² + b² = c²' },
                { question: 'Quelle est la diagonale d\'un carré de côté 1 ?', options: ['√2', '2', '√3', '1'], correct: 0, correction: 'd² = 1² + 1² = 2 → d = √2' }
            ]
        },
        {
            id: '3e_thalès',
            titre: '4. Théorème de Thalès',
            desc: 'UAA1 - Les projections parallèles et les proportions',
            niveau: '3e',
            icone: '📐',
            color: '#319795',
            cours: `
                <h4>🔹 Le théorème</h4>
                <p>Quand deux droites parallèles coupent deux droites sécantes, elles déterminent des segments de longueurs <b>proportionnelles</b>.</p>
                <br>
                <p style="text-align:center; font-size:20px;"><b>AB / AC = AD / AE = BD / CE</b></p>
                <br>
                <h4>🔹 À quoi ça sert ?</h4>
                <p>À calculer une longueur inconnue dans une figure avec des parallèles, ou à calculer une distance inaccessible (comme la hauteur d\'une pyramide grâce à son ombre !).</p>
                <br>
                <h4>🔹 La réciproque</h4>
                <p>Si les rapports sont égaux (AB/AC = AD/AE), alors les droites sont parallèles !</p>
            `,
            objectifs: [
                'Reconnaître une configuration de Thalès',
                'Calculer une longueur grâce aux rapports',
                'Partager un segment en parties égales'
            ],
            matieres: [
                'Projections parallèles',
                'Proportions',
                'Théorème des milieux'
            ],
            exercices: [
                { question: 'Dans une configuration de Thalès, si AB/AC = AD/AE, que peut-on en déduire ?', options: ['BD // CE', 'AB // CD', 'AC // DE', 'AB // DE'], correct: 0, correction: 'D\'après le théorème de Thalès, BD // CE' }
            ]
        },
        {
            id: '3e_trigo_rect',
            titre: '5. Trigonométrie du triangle rectangle',
            desc: 'UAA2 - Sinus, Cosinus, Tangente pour calculer des distances',
            niveau: '3e',
            icone: '📐',
            color: '#e88a00',
            cours: `
                <h4>🔹 Les 3 formules magiques (SOH CAH TOA)</h4>
                <p>Dans un triangle rectangle, pour un angle aigu α :</p>
                <ul>
                    <li><b>Sinus (sin α)</b> = Côté opposé / Hypoténuse</li>
                    <li><b>Cosinus (cos α)</b> = Côté adjacent / Hypoténuse</li>
                    <li><b>Tangente (tan α)</b> = Côté opposé / Côté adjacent</li>
                </ul>
                <br>
                <h4>🔹 Exemple concret</h4>
                <p>Pour trouver la hauteur d\'un arbre, on mesure la distance au sol (adjacent) et l\'angle de vision. On utilise la tangente : Hauteur = Distance × tan(angle).</p>
            `,
            objectifs: [
                'Identifier le côté opposé, adjacent et l\'hypoténuse',
                'Choisir la bonne formule (sin, cos, tan)',
                'Calculer un côté ou un angle'
            ],
            matieres: [
                'SOH CAH TOA',
                'Calculs de distances inaccessibles',
                'Pente et inclinaison'
            ],
            exercices: [
                { question: 'Que vaut sin(30°) ?', options: ['0.5', '0.707', '1', '0.866'], correct: 0, correction: 'sin(30°) = 1/2 = 0.5' }
            ]
        }
    ],
    '4e': [
        {
            id: '4e_polynomes_2deg',
            titre: '1. Équations du 2ème degré',
            desc: 'UAA5 - Discriminant, racines et paraboles',
            niveau: '4e',
            icone: '🔢',
            color: '#e53e3e',
            cours: `
                <h4>🔹 La forme générale</h4>
                <p><b>ax² + bx + c = 0</b></p>
                <br>
                <h4>🔹 Le discriminant (Delta Δ)</h4>
                <p>Pour savoir combien il y a de solutions, on calcule : <b>Δ = b² - 4ac</b></p>
                <ul>
                    <li>Si Δ > 0 : 2 solutions.</li>
                    <li>Si Δ = 0 : 1 solution.</li>
                    <li>Si Δ < 0 : Aucune solution réelle.</li>
                </ul>
                <br>
                <h4>🔹 Les solutions</h4>
                <p>Si Δ ≥ 0, les solutions sont : <b>x = (-b ± √Δ) / 2a</b></p>
            `,
            objectifs: [
                'Calculer le discriminant',
                'Résoudre une équation du second degré',
                'Étudier le signe d\'un trinôme'
            ],
            matieres: [
                'Discriminant',
                'Formule de résolution',
                'Racines et sommet de la parabole'
            ],
            exercices: [
                { question: 'Quelle est la formule du discriminant Δ ?', options: ['b² - 4ac', 'b² + 4ac', 'a² - 4bc', 'c² - 4ab'], correct: 0, correction: 'Δ = b² - 4ac' },
                { question: 'Résoudre x² - 4 = 0', options: ['x = 2 ou x = -2', 'x = 2', 'x = -2', 'x = 4'], correct: 0, correction: 'x² = 4 → x = ±2' }
            ]
        },
        {
            id: '4e_vecteurs',
            titre: '2. Calcul vectoriel',
            desc: 'UAA3 - Vecteurs et produit scalaire',
            niveau: '4e',
            icone: '➡️',
            color: '#805ad5',
            cours: `
                <h4>🔹 Le produit scalaire</h4>
                <p>Le produit scalaire de deux vecteurs est un <b>nombre</b> !</p>
                <p><b>u · v = ||u|| × ||v|| × cos(α)</b> (où α est l\'angle entre les vecteurs).</p>
                <br>
                <p>Si les vecteurs sont perpendiculaires (orthogonaux), leur produit scalaire vaut <b>0</b>.</p>
            `,
            objectifs: [
                'Calculer un produit scalaire',
                'Déterminer si deux vecteurs sont orthogonaux',
                'Utiliser les relations de Chasles'
            ],
            matieres: [
                'Relation de Chasles',
                'Produit scalaire géométrique',
                'Applications physiques (travail, force)'
            ],
            exercices: [
                { question: 'Que représente le produit scalaire de deux vecteurs ?', options: ['Un nombre réel', 'Un vecteur', 'Une distance', 'Un angle'], correct: 0, correction: 'Le produit scalaire est un nombre réel' },
                { question: 'Que vaut le produit scalaire de deux vecteurs orthogonaux ?', options: ['0', '1', 'Le produit de leurs normes', '-1'], correct: 0, correction: 'Le produit scalaire de deux vecteurs orthogonaux est nul' }
            ]
        },
        {
            id: '4e_statistiques',
            titre: '3. Statistiques',
            desc: 'UAA1 - Moyenne, médiane, variance et graphiques',
            niveau: '4e',
            icone: '📊',
            color: '#d69e2e',
            cours: `
                <h4>🔹 Les paramètres de position</h4>
                <ul>
                    <li><b>Moyenne</b> : On additionne tout et on divise par le nombre total.</li>
                    <li><b>Médiane</b> : On range dans l\'ordre, la valeur du milieu.</li>
                    <li><b>Mode</b> : La valeur qui revient le plus souvent.</li>
                </ul>
                <br>
                <h4>🔹 Les paramètres de dispersion</h4>
                <p>Ils indiquent si les données sont regroupées ou étalées autour de la moyenne.</p>
                <ul>
                    <li><b>Variance (V)</b> : Moyenne des carrés des écarts à la moyenne.</li>
                    <li><b>Écart-type (σ)</b> : Racine carrée de la variance. Il s\'exprime dans la même unité que les données.</li>
                </ul>
                <br>
                <h4>🔹 La boîte à moustaches</h4>
                <p>Elle visualise les quartiles Q1, Q2 (médiane) et Q3, ainsi que les valeurs min et max.</p>
            `,
            objectifs: [
                'Calculer moyenne, médiane, mode',
                'Calculer variance et écart-type',
                'Interpréter une boîte à moustaches'
            ],
            matieres: [
                'Tableaux de fréquences',
                'Diagrammes en bâtonnets, histogrammes',
                'Quartiles et écart-type',
                'Inégalité de Tchebychev'
            ],
            exercices: [
                { question: 'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options: ['7', '6', '8', '5'], correct: 0, correction: 'La médiane est la valeur centrale : 7' },
                { question: 'Quelle est la moyenne de 4, 6, 8, 10, 12 ?', options: ['8', '7', '9', '6'], correct: 0, correction: '(4+6+8+10+12)/5 = 40/5 = 8' }
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

// ---- DONNÉES DES FORMULES ----
var FORMULES_DATA = {
    algebre: [
        { id: 'alg_1', titre: 'Identité remarquable', definition: '(a+b)² = a² + 2ab + b²', exemple: '(x+3)² = x² + 6x + 9', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_2', titre: 'Différence de carrés', definition: 'a² - b² = (a-b)(a+b)', exemple: 'x² - 9 = (x-3)(x+3)', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_3', titre: 'Discriminant', definition: 'Δ = b² - 4ac', exemple: 'Pour x² + 2x - 3, Δ = 4 + 12 = 16', icone: '🔢', categorie: 'Algèbre' },
        { id: 'alg_4', titre: 'Racines du 2nd degré', definition: 'x = (-b ± √Δ)/2a', exemple: 'x = (-2 ± 4)/2 → x = 1 ou -3', icone: '🔢', categorie: 'Algèbre' }
    ],
    geometrie: [
        { id: 'geo_1', titre: 'Théorème de Pythagore', definition: 'a² + b² = c² (triangle rectangle)', exemple: '3² + 4² = 5²', icone: '📐', categorie: 'Géométrie' },
        { id: 'geo_2', titre: 'Théorème de Thalès', definition: 'AB/AC = AD/AE (si BD // CE)', exemple: 'Calculer une longueur inconnue', icone: '📐', categorie: 'Géométrie' }
    ],
    trigonometrie: [
        { id: 'trigo_1', titre: 'Sinus', definition: 'sin(α) = opposé / hypoténuse', exemple: 'sin(30°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_2', titre: 'Cosinus', definition: 'cos(α) = adjacent / hypoténuse', exemple: 'cos(60°) = 0.5', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_3', titre: 'Tangente', definition: 'tan(α) = opposé / adjacent', exemple: 'tan(45°) = 1', icone: '📐', categorie: 'Trigonométrie' },
        { id: 'trigo_4', titre: 'Relation fondamentale', definition: 'sin² α + cos² α = 1', exemple: 'Formule magique', icone: '📐', categorie: 'Trigonométrie' }
    ],
    vecteurs: [
        { id: 'vec_1', titre: 'Produit scalaire', definition: 'u·v = ||u|| × ||v|| × cos(α)', exemple: 'Si orthogonaux, u·v = 0', icone: '➡️', categorie: 'Vecteurs' }
    ],
    statistiques: [
        { id: 'stat_1', titre: 'Moyenne', definition: 'x̄ = Σxi / n', exemple: '(4+6+8)/3 = 6', icone: '📊', categorie: 'Statistiques' },
        { id: 'stat_2', titre: 'Écart-type', definition: 'σ = √Variance', exemple: 'Mesure la dispersion', icone: '📊', categorie: 'Statistiques' }
    ],
    complexes: [
        { id: 'comp_1', titre: 'Module', definition: '|z| = √(a² + b²)', exemple: '|3+4i| = 5', icone: 'ℂ', categorie: 'Nombres complexes' }
    ]
};

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
    var tabs = ['dashboard', 'cours', 'formules', 'entrainer', 'suivi'];
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
    if (tab === 'cours') { renderRevision(); }
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
// AFFICHAGE DES COURS
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
// OUVERTURE D'UN COURS (THÉORIE + OBJECTIFS + QUIZ)
// =========================================================

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
    content.style.cssText = 'background: var(--surface); border-radius: 18px; max-width: 850px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); position: relative;';
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position: sticky; top: 0; float: right; background: none; border: none; font-size: 24px; cursor: pointer; color: var(--muted); padding: 0 4px;';
    closeBtn.onclick = function() { document.body.removeChild(modal); };
    
    var html = '<h2 style="margin: 0 0 4px 0;">' + found.icone + ' ' + found.titre + '</h2>';
    html += '<p style="color: var(--muted); margin-bottom: 16px;">' + found.desc + '</p>';
    
    // BLOC COURS / THÉORIE
    html += '<div style="background: var(--soft); border-left: 6px solid var(--blue); border-radius: 8px; padding: 20px; margin-bottom: 20px;">';
    html += '<h3 style="margin-top: 0;">📖 Cours</h3>';
    html += found.cours;
    html += '</div>';
    
    // BLOC OBJECTIFS
    html += '<h3>🎯 Objectifs</h3><ul style="margin: 8px 0 16px 20px;">';
    for (var o = 0; o < found.objectifs.length; o++) {
        html += '<li>' + found.objectifs[o] + '</li>';
    }
    html += '</ul>';
    
    // BLOC MATIERES
    html += '<h3>📝 Matières</h3><ul style="margin: 8px 0 16px 20px;">';
    for (var m = 0; m < found.matieres.length; m++) {
        html += '<li>' + found.matieres[m] + '</li>';
    }
    html += '</ul>';
    
    // BOUTONS ACTIONS
    html += '<div style="display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startChapitreQuiz(\'' + found.id + '\')">🎯 Faire le Quiz</button>';
    html += '<button class="ghost-btn" onclick="markChapitreDone(\'' + found.id + '\')">✅ Marquer comme révisé</button>';
    html += '</div>';
    
    content.innerHTML = html;
    content.prepend(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

function markChapitreDone(chapitreId) {
    USER_DATA.progress[chapitreId] = 100;
    saveUserData();
    renderDashboard();
    var modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) document.body.removeChild(modal);
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

// =========================================================
// DASHBOARD
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
// SUIVI
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
    
    document.getElementById('statsRevisites').textContent = totalChapitres > 0 ? Math.round(revisites / totalChapitres * 100) + '%' : '0%';
    document.getElementById('statsQuizTotal').textContent = Object.keys(USER_DATA.quizResults || {}).length;
    
    var meilleur = 0;
    for (var key in USER_DATA.quizResults) {
        if (USER_DATA.quizResults[key] > meilleur) meilleur = USER_DATA.quizResults[key];
    }
    document.getElementById('statsMeilleur').textContent = meilleur + '%';
    document.getElementById('statsSerie').textContent = USER_DATA.streak || 0;
    
    // Badges
    var badges = getBadges();
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
        showTab('cours');
        showAnnee(found.niveau);
    }
}

// =========================================================
// INITIALISATION
// =========================================================
var favorisFormules = JSON.parse(localStorage.getItem('favorisFormules') || '[]');
loadUserData();
showTab('dashboard');
console.log('📚 Cours interactif chargé !');
