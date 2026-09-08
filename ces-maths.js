// =========================================================
// DONNÉES DU PROGRAMME (MATHS) - COMPLÈTES
// =========================================================
var CHAPITRES = {
    '3e': [
        {
            id:'3e_fonctions', titre:"1. Approche graphique d'une fonction",
            desc:'UAA3 — Comprendre les machines, les graphiques et les tableaux', niveau:'3e', icone:'📈', color:'#3182ce',
            cours:`<h4>C'est quoi une fonction ?</h4>
                <p>Une fonction est comme une <b>machine à transformer les nombres</b>. On introduit un nombre (x), la machine applique une règle, et un nombre sort (y ou f(x)).</p>
                <h4>Vocabulaire essentiel</h4>
                <ul>
                    <li><b>Antécédent (x)</b> : le nombre qui entre dans la machine.</li>
                    <li><b>Image (y ou f(x))</b> : le nombre qui sort.</li>
                    <li><b>Domaine (dom f)</b> : tous les x qu'on peut mettre dans la machine.</li>
                    <li><b>Ensemble image (Im f)</b> : tous les résultats possibles.</li>
                </ul>
                <h4>Lire un graphique</h4>
                <p><b>Zéro d'une fonction</b> : là où la courbe coupe l'axe des x (f(x) = 0). <b>Ordonnée à l'origine</b> : là où elle coupe l'axe des y (x = 0). Une courbe qui monte de gauche à droite est croissante, qui descend est décroissante.</p>`,
            objectifs:['Comprendre la notion de machine et de fonction','Lire une image et un antécédent sur un graphique','Distinguer une fonction d\u2019une simple relation','Déterminer le domaine et l\u2019ensemble image'],
            matieres:['Vocabulaire : antécédents, images','Lecture graphique (axe x, axe y)','Tableaux de valeurs et de variations','Fonction ou relation ?'],
            exercices:[
                {question:"Qu'est-ce qu'une fonction ?", options:['Une relation qui donne au plus une image par antécédent','Une relation qui donne plusieurs images','Une machine qui additionne','Un tableau de valeurs'], correct:0, correction:'Une fonction associe à chaque x au plus un seul y.'},
                {question:'Que signifie f(2) = 3 ?', options:["L'image de 2 est 3","L'antécédent de 2 est 3",'La fonction est croissante','Le domaine est [2,3]'], correct:0, correction:"f(2)=3 se lit : l'image de 2 par f est 3."},
                {question:"Comment trouve-t-on le zéro d'une fonction graphiquement ?", options:['Intersection avec l\u2019axe des abscisses','Intersection avec l\u2019axe des ordonnées','Le sommet de la courbe','Le point le plus bas'], correct:0, correction:'Le zéro est l\u2019abscisse du point d\u2019intersection avec l\u2019axe des x.'}
            ]
        },
        {
            id:'3e_algebre_polynomes', titre:'2. Polynômes & Factorisation',
            desc:'UAA5 — Calculs, identités remarquables et méthodes de factorisation', niveau:'3e', icone:'🔢', color:'#e53e3e',
            cours:`<h4>C'est quoi un polynôme ?</h4>
                <p>Un polynôme est une somme de termes (ex : <b>2x² - 5x + 3</b>). Chaque terme est un produit d'un coefficient et d'une partie littérale.</p>
                <h4>Les produits remarquables</h4>
                <ul>
                    <li><b>(a + b)²</b> = a² + 2ab + b²</li>
                    <li><b>(a - b)²</b> = a² - 2ab + b²</li>
                    <li><b>a² - b²</b> = (a - b)(a + b)</li>
                </ul>
                <h4>Factoriser = transformer une somme en produit</h4>
                <p><b>Exemple :</b> 3x + 6 = 3(x + 2) — facteur commun 3.</p>
                <p><b>Méthode des rectangles :</b> pour x² + 5x + 6, on cherche deux nombres qui multipliés donnent 6 et additionnés donnent 5 : 2 et 3. Donc x² + 5x + 6 = (x + 2)(x + 3).</p>`,
            objectifs:['Maîtriser les produits remarquables','Factoriser une expression algébrique','Résoudre des équations grâce au produit nul'],
            matieres:['Identités remarquables','Mise en évidence','Méthode des rectangles','Règle du produit nul'],
            exercices:[
                {question:'Factoriser : x² - 9', options:['(x-3)(x+3)','(x-3)²','(x+3)²','x²-9'], correct:0, correction:'a² - b² = (a-b)(a+b)'},
                {question:'Factoriser : x² + 5x + 6', options:['(x+2)(x+3)','(x+1)(x+6)','(x-2)(x-3)','Impossible'], correct:0, correction:'2×3=6 et 2+3=5'}
            ]
        },
        {
            id:'3e_pythagore', titre:'3. Théorème de Pythagore',
            desc:'UAA2 — Le triangle rectangle et ses propriétés', niveau:'3e', icone:'📐', color:'#805ad5',
            cours:`<h4>Le théorème</h4>
                <p>Dans un triangle <b>rectangle</b>, le carré de l'hypoténuse (côté le plus long) est égal à la somme des carrés des deux autres côtés.</p>
                <p style="text-align:center;font-size:19px;"><b>a² + b² = c²</b></p>
                <h4>À quoi ça sert ?</h4>
                <p>À calculer une longueur inconnue. <b>Exemple :</b> côtés 3 et 4 → 3² + 4² = 25 → hypoténuse = √25 = 5.</p>
                <h4>Attention</h4>
                <p>La réciproque prouve qu'un triangle est rectangle : si a² + b² = c², le triangle est rectangle.</p>`,
            objectifs:['Utiliser le théorème pour calculer une longueur','Utiliser la réciproque pour prouver qu\u2019un triangle est rectangle'],
            matieres:['Triangle rectangle, hypoténuse','Diagonale d\u2019un carré','Nombres irrationnels (√2)'],
            exercices:[
                {question:'Quel est le théorème de Pythagore ?', options:['a² + b² = c²','a + b = c','a × b = c','a² = b² + c²'], correct:0, correction:'Dans un triangle rectangle, a² + b² = c²'},
                {question:"Quelle est la diagonale d'un carré de côté 1 ?", options:['√2','2','√3','1'], correct:0, correction:'d² = 1² + 1² = 2 → d = √2'}
            ]
        },
        {
            id:'3e_thales', titre:'4. Théorème de Thalès',
            desc:'UAA1 — Les projections parallèles et les proportions', niveau:'3e', icone:'📐', color:'#319795',
            cours:`<h4>Le théorème</h4>
                <p>Quand deux droites parallèles coupent deux droites sécantes, elles déterminent des segments de longueurs <b>proportionnelles</b>.</p>
                <p style="text-align:center;font-size:18px;"><b>AB / AC = AD / AE = BD / CE</b></p>
                <h4>À quoi ça sert ?</h4>
                <p>À calculer une longueur inconnue, ou une distance inaccessible (hauteur d'une pyramide grâce à son ombre).</p>
                <h4>La réciproque</h4>
                <p>Si AB/AC = AD/AE, alors les droites BD et CE sont parallèles.</p>`,
            objectifs:['Reconnaître une configuration de Thalès','Calculer une longueur grâce aux rapports','Partager un segment en parties égales'],
            matieres:['Projections parallèles','Proportions','Théorème des milieux'],
            exercices:[
                {question:'Dans une configuration de Thalès, si AB/AC = AD/AE, que peut-on en déduire ?', options:['BD // CE','AB // CD','AC // DE','AB // DE'], correct:0, correction:'D\u2019après Thalès, BD // CE'}
            ]
        },
        {
            id:'3e_trigo_rect', titre:'5. Trigonométrie du triangle rectangle',
            desc:'UAA2 — Sinus, cosinus, tangente pour calculer des distances', niveau:'3e', icone:'📐', color:'#e88a00',
            cours:`<h4>Les 3 formules (SOH CAH TOA)</h4>
                <p>Pour un angle aigu α dans un triangle rectangle :</p>
                <ul>
                    <li><b>sin α</b> = opposé / hypoténuse</li>
                    <li><b>cos α</b> = adjacent / hypoténuse</li>
                    <li><b>tan α</b> = opposé / adjacent</li>
                </ul>
                <h4>Exemple concret</h4>
                <p>Pour la hauteur d'un arbre : Hauteur = Distance × tan(angle).</p>`,
            objectifs:['Identifier opposé, adjacent, hypoténuse','Choisir la bonne formule (sin, cos, tan)','Calculer un côté ou un angle'],
            matieres:['SOH CAH TOA','Distances inaccessibles','Pente et inclinaison'],
            exercices:[
                {question:'Que vaut sin(30°) ?', options:['0.5','0.707','1','0.866'], correct:0, correction:'sin(30°) = 1/2 = 0.5'}
            ]
        }
    ],
    '4e': [
        {
            id:'4e_polynomes_2deg', titre:'1. Équations du 2e degré',
            desc:'UAA5 — Discriminant, racines et paraboles', niveau:'4e', icone:'🔢', color:'#e53e3e',
            cours:`<h4>La forme générale</h4><p><b>ax² + bx + c = 0</b></p>
                <h4>Le discriminant Δ</h4><p><b>Δ = b² - 4ac</b></p>
                <ul><li>Δ > 0 : 2 solutions</li><li>Δ = 0 : 1 solution</li><li>Δ < 0 : aucune solution réelle</li></ul>
                <h4>Les solutions</h4><p>Si Δ ≥ 0 : <b>x = (-b ± √Δ) / 2a</b></p>`,
            objectifs:['Calculer le discriminant','Résoudre une équation du second degré','Étudier le signe d\u2019un trinôme'],
            matieres:['Discriminant','Formule de résolution','Racines et sommet de la parabole'],
            exercices:[
                {question:'Quelle est la formule du discriminant Δ ?', options:['b² - 4ac','b² + 4ac','a² - 4bc','c² - 4ab'], correct:0, correction:'Δ = b² - 4ac'},
                {question:'Résoudre x² - 4 = 0', options:['x = 2 ou x = -2','x = 2','x = -2','x = 4'], correct:0, correction:'x² = 4 → x = ±2'}
            ]
        },
        {
            id:'4e_vecteurs', titre:'2. Calcul vectoriel',
            desc:'UAA3 — Vecteurs et produit scalaire', niveau:'4e', icone:'➡️', color:'#805ad5',
            cours:`<h4>Le produit scalaire</h4>
                <p>Le produit scalaire de deux vecteurs est un <b>nombre</b> : <b>u·v = ||u|| × ||v|| × cos(α)</b>.</p>
                <p>Si les vecteurs sont orthogonaux, leur produit scalaire vaut <b>0</b>.</p>`,
            objectifs:['Calculer un produit scalaire','Déterminer si deux vecteurs sont orthogonaux','Utiliser la relation de Chasles'],
            matieres:['Relation de Chasles','Produit scalaire géométrique','Applications physiques (travail, force)'],
            exercices:[
                {question:'Que représente le produit scalaire de deux vecteurs ?', options:['Un nombre réel','Un vecteur','Une distance','Un angle'], correct:0, correction:'Le produit scalaire est un nombre réel'},
                {question:'Que vaut le produit scalaire de deux vecteurs orthogonaux ?', options:['0','1','Le produit de leurs normes','-1'], correct:0, correction:'Il est nul.'}
            ]
        },
        {
            id:'4e_statistiques', titre:'3. Statistiques',
            desc:'UAA1 — Moyenne, médiane, variance et graphiques', niveau:'4e', icone:'📊', color:'#d69e2e',
            cours:`<h4>Paramètres de position</h4>
                <ul><li><b>Moyenne</b> : somme divisée par le nombre total.</li><li><b>Médiane</b> : valeur du milieu une fois rangées.</li><li><b>Mode</b> : valeur la plus fréquente.</li></ul>
                <h4>Paramètres de dispersion</h4>
                <ul><li><b>Variance (V)</b> : moyenne des carrés des écarts à la moyenne.</li><li><b>Écart-type (σ)</b> : racine carrée de la variance.</li></ul>
                <h4>Boîte à moustaches</h4><p>Elle visualise Q1, la médiane (Q2), Q3, ainsi que le min et le max.</p>`,
            objectifs:['Calculer moyenne, médiane, mode','Calculer variance et écart-type','Interpréter une boîte à moustaches'],
            matieres:['Tableaux de fréquences','Diagrammes, histogrammes','Quartiles et écart-type'],
            exercices:[
                {question:'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options:['7','6','8','5'], correct:0, correction:'La valeur centrale est 7.'},
                {question:'Quelle est la moyenne de 4, 6, 8, 10, 12 ?', options:['8','7','9','6'], correct:0, correction:'(4+6+8+10+12)/5 = 8'}
            ]
        },
        {
            id:'4e_fonctions_ref', titre:'4. Fonctions de référence',
            desc:'UAA4 — Fonction affine, quadratique et leurs paramètres', niveau:'4e', icone:'📈', color:'#3182ce',
            cours:`<h4>La fonction affine</h4><p><b>f(x) = mx + p</b> : m est la pente (croissante si m>0), p est l'ordonnée à l'origine.</p>
                <h4>La fonction quadratique</h4><p><b>f(x) = a(x-k)² + h</b> : parabole de sommet (k, h). Si a>0, elle ouvre vers le haut.</p>
                <h4>Effet des paramètres</h4><p>Changer a, k ou h déplace ou déforme le graphique sans changer sa nature.</p>`,
            objectifs:['Reconnaître une fonction affine ou quadratique','Identifier pente et ordonnée à l\u2019origine','Trouver le sommet d\u2019une parabole'],
            matieres:['Fonction affine','Fonction quadratique','Forme canonique'],
            exercices:[
                {question:'Dans f(x) = 3x + 2, que représente 3 ?', options:['La pente','L\u2019ordonnée à l\u2019origine','Le sommet','Le discriminant'], correct:0, correction:'Dans mx+p, m est la pente.'}
            ]
        }
    ],
    '5e': [
        {
            id:'5e_limites', titre:'1. Limites de fonctions',
            desc:"UAA1 — Comportement d'une fonction aux bornes de son domaine", niveau:'5e', icone:'📈', color:'#3182ce',
            cours:`<h4>L'idée intuitive</h4>
                <p>La limite décrit ce que devient f(x) quand x se rapproche d'une valeur (ou de l'infini), sans forcément l'atteindre.</p>
                <h4>Les formes indéterminées</h4>
                <p>Ce sont les cas où on ne peut pas conclure directement : <b>0/0</b>, <b>∞/∞</b>, <b>∞ - ∞</b>, <b>0 × ∞</b>. Il faut alors transformer l'expression (factoriser, simplifier) avant de conclure.</p>
                <h4>Asymptotes</h4>
                <p>Si lim f(x) = L quand x → ∞, la droite y = L est une <b>asymptote horizontale</b>. Si lim f(x) = ±∞ quand x → a, la droite x = a est une <b>asymptote verticale</b>.</p>`,
            objectifs:['Calculer une limite en un point ou en l\u2019infini','Lever une forme indéterminée','Déterminer les asymptotes d\u2019une fonction'],
            matieres:['Limites finies et infinies','Formes indéterminées','Asymptotes horizontales et verticales'],
            exercices:[
                {question:"Quelle est la limite de f(x) = 1/x quand x → +∞ ?", options:['0','+∞','1','Elle n\u2019existe pas'], correct:0, correction:'1/x devient de plus en plus petit : la limite est 0.'},
                {question:'0/0 est une forme...', options:['Indéterminée','Toujours nulle','Toujours infinie','Impossible à rencontrer'], correct:0, correction:'0/0 ne permet pas de conclure directement : il faut transformer l\u2019expression.'}
            ]
        },
        {
            id:'5e_derivees_intro', titre:'2. Introduction à la dérivée',
            desc:"UAA1 — Nombre dérivé, tangente et taux de variation", niveau:'5e', icone:'📐', color:'#e53e3e',
            cours:`<h4>Le taux de variation</h4>
                <p>Le taux de variation moyen entre a et b mesure la pente moyenne de la courbe : <b>(f(b) - f(a)) / (b - a)</b>.</p>
                <h4>Le nombre dérivé</h4>
                <p>La dérivée f'(a) est la limite de ce taux quand b se rapproche de a : elle donne la <b>pente de la tangente</b> à la courbe au point a.</p>
                <h4>Fonctions dérivées usuelles</h4>
                <ul><li>(k)' = 0</li><li>(x)' = 1</li><li>(x²)' = 2x</li><li>(xⁿ)' = n·xⁿ⁻¹</li></ul>`,
            objectifs:['Calculer un taux de variation moyen','Comprendre le lien entre dérivée et tangente','Dériver une fonction polynomiale simple'],
            matieres:['Taux de variation','Nombre dérivé','Règles de dérivation de base'],
            exercices:[
                {question:'Le nombre dérivé f\u2019(a) représente géométriquement...', options:['La pente de la tangente en a','La valeur de f en a','L\u2019aire sous la courbe','Le zéro de la fonction'], correct:0, correction:'f\u2019(a) est la pente de la tangente au point a.'},
                {question:'Quelle est la dérivée de x³ ?', options:['3x²','x²','3x','x³'], correct:0, correction:'(xⁿ)\u2019 = n·xⁿ⁻¹, donc (x³)\u2019 = 3x²'}
            ]
        },
        {
            id:'5e_complexes', titre:'3. Nombres complexes',
            desc:'UAA3 — Forme algébrique, module et opérations', niveau:'5e', icone:'ℂ', color:'#805ad5',
            cours:`<h4>Pourquoi les complexes ?</h4>
                <p>Pour donner un sens à √(-1). On pose <b>i² = -1</b>, et tout nombre complexe s'écrit <b>z = a + bi</b> (forme algébrique), avec a la partie réelle et b la partie imaginaire.</p>
                <h4>Le module</h4>
                <p><b>|z| = √(a² + b²)</b> : c'est la distance entre le point z et l'origine dans le plan complexe.</p>
                <h4>Opérations</h4>
                <p>On additionne et multiplie les complexes comme des polynômes, en remplaçant i² par -1 quand il apparaît.</p>`,
            objectifs:['Écrire un nombre complexe sous forme algébrique','Calculer le module d\u2019un complexe','Additionner et multiplier des complexes'],
            matieres:['Forme algébrique a + bi','Module et plan complexe','Opérations sur les complexes'],
            exercices:[
                {question:'Que vaut i² ?', options:['-1','1','0','i'], correct:0, correction:'Par définition, i² = -1.'},
                {question:'Quel est le module de z = 3 + 4i ?', options:['5','7','25','12'], correct:0, correction:'|z| = √(3² + 4²) = √25 = 5'}
            ]
        },
        {
            id:'5e_geo_analytique', titre:'4. Géométrie analytique',
            desc:'UAA4 — Droites et cercles dans un repère', niveau:'5e', icone:'📐', color:'#0e7c86',
            cours:`<h4>L'équation d'une droite</h4>
                <p><b>y = mx + p</b>, où m est la pente : <b>m = (y_B - y_A) / (x_B - x_A)</b>.</p>
                <h4>Distance entre deux points</h4>
                <p><b>d(A,B) = √[(x_B - x_A)² + (y_B - y_A)²]</b> — c'est Pythagore appliqué dans le repère.</p>
                <h4>L'équation d'un cercle</h4>
                <p>Un cercle de centre (a, b) et de rayon r a pour équation : <b>(x - a)² + (y - b)² = r²</b>.</p>`,
            objectifs:['Calculer la pente d\u2019une droite','Calculer la distance entre deux points','Écrire l\u2019équation d\u2019un cercle'],
            matieres:['Équation de droite','Distance dans le plan','Équation du cercle'],
            exercices:[
                {question:'Quelle est l\u2019équation d\u2019un cercle de centre (0,0) et de rayon 3 ?', options:['x² + y² = 9','x² + y² = 3','x + y = 9','(x-3)² + y² = 0'], correct:0, correction:'(x-a)²+(y-b)²=r² avec a=b=0 et r=3 donne x²+y²=9.'}
            ]
        }
    ],
    '6e': [
        {
            id:'6e_derivees', titre:'1. Dérivées et étude de fonctions',
            desc:'UAA1 — Règles de dérivation, croissance et extrema', niveau:'6e', icone:'📐', color:'#e53e3e',
            cours:`<h4>Règles de dérivation</h4>
                <ul>
                    <li><b>(u + v)' = u' + v'</b></li>
                    <li><b>(u × v)' = u'v + uv'</b></li>
                    <li><b>(u / v)' = (u'v - uv') / v²</b></li>
                </ul>
                <h4>Signe de la dérivée</h4>
                <p>Si <b>f'(x) > 0</b>, f est croissante. Si <b>f'(x) < 0</b>, f est décroissante. Là où f'(x) = 0 et change de signe, f admet un <b>extremum</b> (maximum ou minimum).</p>
                <h4>Tableau de variation</h4>
                <p>Il résume le signe de f' et le sens de variation de f sur tout le domaine — c'est l'outil central pour étudier une fonction.</p>`,
            objectifs:['Appliquer les règles de dérivation','Étudier le signe d\u2019une dérivée','Construire un tableau de variation et trouver les extrema'],
            matieres:['Dérivée d\u2019un produit, d\u2019un quotient','Tableau de variation','Extrema locaux'],
            exercices:[
                {question:'Si f\u2019(x) > 0 sur un intervalle, alors f est...', options:['Croissante','Décroissante','Constante','Négative'], correct:0, correction:'Une dérivée positive signale une fonction croissante.'},
                {question:'Quelle est la dérivée de u×v ?', options:["u'v + uv'","u'v'","u'v - uv'","(u'v)/(uv')"], correct:0, correction:"Règle du produit : (uv)' = u'v + uv'"}
            ]
        },
        {
            id:'6e_integrales', titre:'2. Intégrales',
            desc:"UAA2 — Primitives, calcul d'aires et intégrale définie", niveau:'6e', icone:'∫', color:'#805ad5',
            cours:`<h4>La primitive</h4>
                <p>F est une primitive de f si <b>F' = f</b>. C'est l'opération inverse de la dérivation.</p>
                <h4>L'intégrale définie</h4>
                <p><b>∫ₐᵇ f(x) dx = F(b) - F(a)</b> représente l'aire (algébrique) entre la courbe de f et l'axe des x, entre a et b.</p>
                <h4>Primitives usuelles</h4>
                <ul><li>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</li><li>∫ k dx = kx + C</li></ul>`,
            objectifs:['Calculer une primitive simple','Calculer une intégrale définie','Interpréter l\u2019intégrale comme une aire'],
            matieres:['Primitives usuelles','Intégrale définie','Calcul d\u2019aires'],
            exercices:[
                {question:'Quelle est une primitive de f(x) = x ?', options:['x²/2','x²','2x','1'], correct:0, correction:"∫x dx = x²/2 + C"},
                {question:'∫ₐᵇ f(x) dx représente géométriquement...', options:["L'aire entre la courbe et l'axe des x",'La pente de la tangente','Le zéro de f','La moyenne de f'], correct:0, correction:"C'est l'aire algébrique sous la courbe entre a et b."}
            ]
        },
        {
            id:'6e_probabilites', titre:'3. Probabilités',
            desc:'UAA3 — Probabilités conditionnelles et lois de probabilité', niveau:'6e', icone:'🎲', color:'#d69e2e',
            cours:`<h4>Probabilité conditionnelle</h4>
                <p><b>P(A|B) = P(A ∩ B) / P(B)</b> : la probabilité de A sachant que B est déjà réalisé.</p>
                <h4>Événements indépendants</h4>
                <p>A et B sont indépendants si <b>P(A ∩ B) = P(A) × P(B)</b>.</p>
                <h4>Loi binomiale</h4>
                <p>Elle modélise le nombre de succès sur n répétitions indépendantes d'une expérience à deux issues (succès/échec) de probabilité p.</p>`,
            objectifs:['Calculer une probabilité conditionnelle','Vérifier l\u2019indépendance de deux événements','Reconnaître une situation binomiale'],
            matieres:['Probabilité conditionnelle','Indépendance','Loi binomiale'],
            exercices:[
                {question:'Deux événements A et B sont indépendants si...', options:['P(A ∩ B) = P(A) × P(B)','P(A ∩ B) = P(A) + P(B)','P(A|B) = 1','P(A) = P(B)'], correct:0, correction:"C'est la définition de l'indépendance."}
            ]
        },
        {
            id:'6e_suites', titre:'4. Suites numériques',
            desc:'UAA4 — Suites arithmétiques et géométriques', niveau:'6e', icone:'🔢', color:'#0e7c86',
            cours:`<h4>Suite arithmétique</h4>
                <p>On passe d'un terme à l'autre en <b>ajoutant</b> une raison r constante : <b>u_(n+1) = u_n + r</b>, et <b>u_n = u_0 + n·r</b>.</p>
                <h4>Suite géométrique</h4>
                <p>On passe d'un terme à l'autre en <b>multipliant</b> par une raison q constante : <b>u_(n+1) = u_n × q</b>, et <b>u_n = u_0 × qⁿ</b>.</p>
                <h4>Limite d'une suite géométrique</h4>
                <p>Si |q| < 1, alors u_n tend vers 0. Si q > 1, u_n tend vers +∞.</p>`,
            objectifs:['Reconnaître une suite arithmétique ou géométrique','Calculer le terme général','Étudier la limite d\u2019une suite géométrique'],
            matieres:['Suite arithmétique','Suite géométrique','Limites de suites'],
            exercices:[
                {question:'Dans une suite arithmétique de raison r, on a...', options:['u_(n+1) = u_n + r','u_(n+1) = u_n × r','u_(n+1) = u_n - r²','u_(n+1) = r/u_n'], correct:0, correction:'On ajoute la raison r à chaque étape.'},
                {question:'Une suite géométrique de raison q = 0.5 tend vers...', options:['0','+∞','1','-∞'], correct:0, correction:'|q| < 1 donc la suite tend vers 0.'}
            ]
        }
    ]
};

// ---- FORMULES ----
var FORMULES_DATA = {
    algebre: [
        {id:'alg_1', titre:'Identité remarquable', definition:'(a+b)² = a² + 2ab + b²', exemple:'(x+3)² = x² + 6x + 9', icone:'🔢', categorie:'Algèbre'},
        {id:'alg_2', titre:'Différence de carrés', definition:'a² - b² = (a-b)(a+b)', exemple:'x² - 9 = (x-3)(x+3)', icone:'🔢', categorie:'Algèbre'},
        {id:'alg_3', titre:'Discriminant', definition:'Δ = b² - 4ac', exemple:'Pour x² + 2x - 3, Δ = 16', icone:'🔢', categorie:'Algèbre'},
        {id:'alg_4', titre:'Racines du 2nd degré', definition:'x = (-b ± √Δ)/2a', exemple:'x = (-2 ± 4)/2 → 1 ou -3', icone:'🔢', categorie:'Algèbre'}
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
        {id:'ana_1', titre:'Dérivée d\u2019une puissance', definition:"(xⁿ)' = n·xⁿ⁻¹", exemple:"(x³)' = 3x²", icone:'📈', categorie:'Analyse'},
        {id:'ana_2', titre:'Dérivée d\u2019un produit', definition:"(uv)' = u'v + uv'", exemple:"(x²·x)' → règle du produit", icone:'📈', categorie:'Analyse'},
        {id:'ana_3', titre:'Dérivée d\u2019un quotient', definition:"(u/v)' = (u'v - uv')/v²", exemple:'Utile pour les fonctions rationnelles', icone:'📈', categorie:'Analyse'},
        {id:'ana_4', titre:'Primitive d\u2019une puissance', definition:'∫xⁿ dx = xⁿ⁺¹/(n+1) + C', exemple:'∫x dx = x²/2 + C', icone:'📈', categorie:'Analyse'},
        {id:'ana_5', titre:'Intégrale définie', definition:'∫ₐᵇ f(x)dx = F(b) - F(a)', exemple:'Aire sous la courbe entre a et b', icone:'📈', categorie:'Analyse'}
    ],
    vecteurs: [
        {id:'vec_1', titre:'Produit scalaire', definition:'u·v = ||u|| × ||v|| × cos(α)', exemple:'Si orthogonaux, u·v = 0', icone:'➡️', categorie:'Vecteurs'}
    ],
    statistiques: [
        {id:'stat_1', titre:'Moyenne', definition:'x̄ = Σxi / n', exemple:'(4+6+8)/3 = 6', icone:'📊', categorie:'Statistiques'},
        {id:'stat_2', titre:'Écart-type', definition:'σ = √Variance', exemple:'Mesure la dispersion', icone:'📊', categorie:'Statistiques'},
        {id:'stat_3', titre:'Probabilité conditionnelle', definition:'P(A|B) = P(A∩B) / P(B)', exemple:'Probabilité de A sachant B', icone:'📊', categorie:'Statistiques'}
    ],
    complexes: [
        {id:'comp_1', titre:'Module', definition:'|z| = √(a² + b²)', exemple:'|3+4i| = 5', icone:'ℂ', categorie:'Nombres complexes'},
        {id:'comp_2', titre:'Unité imaginaire', definition:'i² = -1', exemple:'Base des nombres complexes', icone:'ℂ', categorie:'Nombres complexes'}
    ]
};

// ---- DONNÉES UTILISATEUR & ÉTAT ----
var USER_DATA = { progress:{}, quizResults:{}, revisions:{}, streak:0 };
var favorisFormules = [];
var currentTab = 'dashboard';
var currentQuiz = { index:0, questions:[], score:0, total:0 };
var currentExamen = { index:0, questions:[], score:0, total:0, timer:null, timeLeft:0, niveau:'3e' };
var currentMatiere = 'maths';

// Fusion Maths + Géo
var MATIERES = {
    'maths': CHAPITRES,
    'geographie': GEO_CHAPITRES
};

var MATIERE_INFO = { 'maths': { nom:'Mathématiques', icone:'📐' }, 'geographie': { nom:'Géographie', icone:'🌍' } };
var ANNEE_COLOR = {'3e':{c:'#1c5fa8', l:'#e8f0fe'}, '4e':{c:'#6b46c1', l:'#f1ebfb'}, '5e':{c:'#0e7c86', l:'#e4f5f6'}, '6e':{c:'#c81e2c', l:'#fdecea'}};
var ANNEE_DESC = {'3e':'Risques, Fonctions, Algèbre...', '4e':'Eau, Nourriture, 2nd degré...', '5e':'Énergie, Analyse, Complexes...', '6e':'Aménagement, Dérivées, Suites...'};

// Génération des questions
var QUESTIONS_QUIZ = [];
for (var matiere in MATIERES){
    for (var annee in MATIERES[matiere]){
        var chapList = MATIERES[matiere][annee];
        for (var i=0; i<chapList.length; i++){
            if (chapList[i].exercices){
                for (var j=0; j<chapList[i].exercices.length; j++){
                    var ex = chapList[i].exercices[j];
                    QUESTIONS_QUIZ.push({ id:'q'+QUESTIONS_QUIZ.length, matiere:matiere, annee:annee, chapitre:chapList[i].id, question:ex.question, options:ex.options, correct:ex.correct, correction:ex.correction || '' });
                }
            }
        }
    }
}

// ---- SAUVEGARDE ----
function loadUserData(){
    try { var saved = localStorage.getItem('cesMathData'); if (saved) USER_DATA = JSON.parse(saved); }
    catch(e){}
    try { var favs = localStorage.getItem('cesMathFavoris'); if (favs) favorisFormules = JSON.parse(favs); }
    catch(e){}
}
function saveUserData(){
    localStorage.setItem('cesMathData', JSON.stringify(USER_DATA));
    localStorage.setItem('cesMathFavoris', JSON.stringify(favorisFormules));
}

// ---- NAVIGATION ----
function showTab(tab){
    currentTab = tab;
    var tabs = ['dashboard','cours','formules','entrainer','suivi'];
    for (var i=0;i<tabs.length;i++){
        document.getElementById(tabs[i]).classList.add('hidden');
        document.getElementById('nav'+tabs[i].charAt(0).toUpperCase()+tabs[i].slice(1)).classList.remove('active');
    }
    document.getElementById(tab).classList.remove('hidden');
    document.getElementById('nav'+tab.charAt(0).toUpperCase()+tab.slice(1)).classList.add('active');
    
    if (tab==='dashboard') renderDashboard();
    if (tab==='cours') renderMatiereSelector();
    if (tab==='formules') renderFormules();
    if (tab==='entrainer') updateQuizChapitres();
    if (tab==='suivi') renderSuivi();
}
function goHome(){ showTab('dashboard'); }
function toggleTheme(){
    document.body.classList.toggle('dark');
    document.getElementById('themeBtn').textContent = document.body.classList.contains('dark') ? '☀️ Mode clair' : '🌙 Mode sombre';
}

// ---- COURS ----
function renderMatiereSelector(){
    document.getElementById('choixMatiere').classList.remove('hidden');
    document.getElementById('choixAnnee').classList.add('hidden');
    document.getElementById('contenuAnnee').classList.add('hidden');
    
    var html = '';
    var matieres = ['maths', 'geographie'];
    for (var i=0; i<matieres.length; i++){
        var m = matieres[i];
        var info = MATIERE_INFO[m];
        var col = m === 'maths' ? {c:'#1d4ed8', l:'#e8f0fe'} : {c:'#0e7c86', l:'#e4f5f6'};
        html += `<div class="annee-card" style="--tab-color:${col.c}; --tab-color-light:${col.l};" onclick="showMatiere('${m}')">
                    <span class="annee-icon">${info.icone}</span>
                    <div class="annee-info"><h3>${info.nom}</h3><p>Choisissez cette matière pour voir les chapitres.</p></div>
                </div>`;
    }
    document.getElementById('choixMatiere').innerHTML = html;
}

function showMatiere(matiere){
    currentMatiere = matiere;
    document.getElementById('choixMatiere').classList.add('hidden');
    var sel = document.getElementById('choixAnnee');
    sel.classList.remove('hidden');
    
    var html = '';
    var annees = ['3e','4e','5e','6e'];
    for (var i=0; i<annees.length; i++){
        var a = annees[i];
        var col = ANNEE_COLOR[a];
        html += `<div class="annee-card" style="--tab-color:${col.c}; --tab-color-light:${col.l};" onclick="showAnnee('${a}')">
                    <span class="annee-icon">${a}</span>
                    <div class="annee-info"><h3>${a} Année</h3><p>${ANNEE_DESC[a]}</p></div>
                </div>`;
    }
    sel.innerHTML = html;
}

function showAnnee(annee){
    var container = document.getElementById('contenuAnnee');
    var chapitres = (MATIERES[currentMatiere] && MATIERES[currentMatiere][annee]) || [];
    document.getElementById('choixAnnee').classList.add('hidden');
    container.classList.remove('hidden');

    if (chapitres.length === 0){
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--ink-soft);">Aucun chapitre pour le moment.</div>';
        return;
    }

    var html = `<div class="page-header" style="margin-bottom:15px;">
                    <h3 style="font-family:var(--font-head);font-size:18px;">${MATIERE_INFO[currentMatiere].icone} ${MATIERE_INFO[currentMatiere].nom} — ${annee}e Année</h3>
                    <button class="ghost-btn" onclick="showMatiere('${currentMatiere}')">← Retour aux années</button>
                </div><div class="chapitre-list">`;
    
    for (var i=0; i<chapitres.length; i++){
        var chap = chapitres[i];
        var progress = USER_DATA.progress[chap.id] || 0;
        var status = progress >= 100 ? 'statut-revise' : progress > 0 ? 'statut-cours' : 'statut-vu';
        var label = progress >= 100 ? '✅ Révisé' : progress > 0 ? '⏳ En cours' : '📖 Non vu';
        html += `<div class="chapitre-row" onclick="openChapitre('${chap.id}')">
                    <div class="chap-left"><span class="chap-icon">${chap.icone}</span><span class="chap-title">${chap.titre}</span></div>
                    <span class="chap-status ${status}">${label}</span>
                </div>`;
    }
    html += '</div>';
    container.innerHTML = html;
}

function findChapitre(chapitreId){
    for (var matiere in MATIERES){
        for (var annee in MATIERES[matiere]){
            for (var i=0; i<MATIERES[matiere][annee].length; i++){
                if (MATIERES[matiere][annee][i].id === chapitreId) return MATIERES[matiere][annee][i];
            }
        }
    }
    return null;
}

function openChapitre(chapitreId){
    var found = findChapitre(chapitreId);
    if (!found) return;

    var backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.onclick = function(e){ if (e.target === backdrop) closeModal(backdrop); };

    var card = document.createElement('div');
    card.className = 'modal-card';

    var html = `<div class="modal-head">
                    <button class="modal-close" onclick="closeModal(this.closest('.modal-backdrop'))">✕</button>
                    <h2 class="modal-h2">${found.icone} ${found.titre}</h2>
                    <p class="modal-desc">${found.desc}</p>
                </div>
                <div class="modal-body">
                    <div class="cours-block">${found.cours}</div>
                    <h3>🎯 Objectifs</h3><ul>`;
    for (var o=0; o<found.objectifs.length; o++) html += `<li>${found.objectifs[o]}</li>`;
    html += `</ul><h3>📝 Matières</h3><ul>`;
    for (var m=0; m<found.matieres.length; m++) html += `<li>${found.matieres[m]}</li>`;
    html += `</ul><div class="modal-actions">
                <button class="primary-btn" onclick="startChapitreQuiz('${found.id}')">🎯 Faire le quiz</button>
                <button class="ghost-btn" onclick="markChapitreDone('${found.id}', this)">✅ Marquer comme révisé</button>
            </div></div>`;

    card.innerHTML = html;
    backdrop.appendChild(card);
    document.body.appendChild(backdrop);
}

function closeModal(backdrop){
    if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
}

function markChapitreDone(chapitreId, btn){
    USER_DATA.progress[chapitreId] = 100;
    saveUserData();
    renderDashboard();
    var backdrop = btn ? btn.closest('.modal-backdrop') : document.querySelector('.modal-backdrop');
    closeModal(backdrop);
    if (currentTab === 'cours'){
        var matiere = 'maths'; var annee = '3e';
        for (var m in MATIERES) for (var a in MATIERES[m]) for (var i=0;i<MATIERES[m][a].length;i++) if (MATIERES[m][a][i].id === chapitreId) { matiere = m; annee = a; }
        showMatiere(matiere);
        showAnnee(annee);
    }
}

function startChapitreQuiz(chapitreId){
    var questions = QUESTIONS_QUIZ.filter(function(q){ return q.chapitre === chapitreId; });
    if (questions.length === 0) return;
    currentQuiz.questions = shuffle(questions);
    currentQuiz.index = 0; currentQuiz.score = 0; currentQuiz.total = currentQuiz.questions.length;
    closeModal(document.querySelector('.modal-backdrop'));
    showTab('entrainer');
    renderQuiz();
}

// ---- DASHBOARD ----
function renderDashboard(){
    var total = 0, revisites = 0;
    for (var matiere in MATIERES) for (var annee in MATIERES[matiere]){
        var chaps = MATIERES[matiere][annee];
        total += chaps.length;
        for (var c=0; c<chaps.length; c++) if (USER_DATA.progress[chaps[c].id] >= 100) revisites++;
    }
    document.getElementById('globalProgress').textContent = total>0 ? Math.round(revisites/total*100) : 0;
    
    var progHtml = '';
    var matieres = ['maths', 'geographie'];
    for (var i=0; i<matieres.length; i++){
        var m = matieres[i];
        var chapsM = [];
        for (var annee in MATIERES[m]) chapsM = chapsM.concat(MATIERES[m][annee]);
        var doneM = 0;
        for (var c=0; c<chapsM.length; c++) if (USER_DATA.progress[chapsM[c].id] >= 100) doneM++;
        var percent = chapsM.length>0 ? Math.round(doneM/chapsM.length*100) : 0;
        progHtml += `<div class="progress-item">
                        <div class="progress-label"><span>${MATIERE_INFO[m].icone} ${MATIERE_INFO[m].nom}</span><span>${percent}%</span></div>
                        <div class="progress-bar"><div class="progress-fill" style="width:${percent}%;background:${percent>=80?'var(--vert)':percent>=50?'var(--ambre)':'var(--bleu)'};"></div></div>
                     </div>`;
    }
    document.getElementById('progressionMatieres').innerHTML = progHtml;
    
    var urgents = [];
    for (var matiere in MATIERES) for (var annee in MATIERES[matiere]){
        var chaps = MATIERES[matiere][annee];
        for (var c=0; c<chaps.length; c++) if ((USER_DATA.progress[chaps[c].id]||0) < 30) urgents.push(chaps[c]);
    }
    var urgentHtml = urgents.length === 0 ? '<div style="color:var(--vert);font-weight:800;">🎉 Tout est en bonne voie !</div>' : '';
    for (var u=0; u<Math.min(3, urgents.length); u++){
        urgentHtml += `<div class="urgent-item"><span>${urgents[u].icone} ${urgents[u].titre}</span><b>${USER_DATA.progress[urgents[u].id]||0}%</b></div>`;
    }
    document.getElementById('chapitresUrgents').innerHTML = urgentHtml;
    
    renderSuivi();
}

// ---- FORMULES ----
function renderFormules(){
    var search = document.getElementById('formuleSearch').value.toLowerCase();
    var html = '', total = 0;
    for (var cat in FORMULES_DATA){
        for (var i=0; i<FORMULES_DATA[cat].length; i++){
            var f = FORMULES_DATA[cat][i];
            if (search && f.titre.toLowerCase().indexOf(search) === -1 && f.definition.toLowerCase().indexOf(search) === -1) continue;
            total++;
            var estFavori = favorisFormules.indexOf(f.id) !== -1;
            var colorVar = cat === 'algebre' ? '--rouge' : cat === 'geometrie' ? '--bleu' : cat === 'trigonometrie' ? '--ambre' : cat === 'analyse' ? '--violet' : cat === 'vecteurs' ? '--teal' : cat === 'statistiques' ? '--ambre' : '--vert';
            var colorLight = cat === 'algebre' ? '--rouge-clair' : cat === 'geometrie' ? '--bleu-clair' : cat === 'trigonometrie' ? '--ambre-clair' : cat === 'analyse' ? '--violet-clair' : cat === 'vecteurs' ? '--teal-clair' : cat === 'statistiques' ? '--ambre-clair' : '--vert-clair';
            html += `<div class="formule-card" data-cat="${cat}">
                <div class="formule-header">
                    <span class="formule-icon">${f.icone}</span>
                    <span class="formule-title">${f.titre}</span>
                    <span class="formule-categorie" style="background:var(${colorLight});color:var(${colorVar});">${f.categorie}</span>
                </div>
                <div class="formule-definition">${f.definition}</div>
                <div class="formule-math">${f.exemple}</div>
                <div class="formule-actions"><button onclick="toggleFavoriFormule('${f.id}')">${estFavori?'⭐':'☆'} Favori</button></div>
            </div>`;
        }
    }
    document.getElementById('formulesCount').textContent = total;
    document.getElementById('formulesList').innerHTML = total === 0 ? '<div style="text-align:center;padding:40px;color:var(--ink-soft);">Aucune formule trouvée.</div>' : html;
}
function rechercherFormule(){ renderFormules(); }
function filtrerFormules(categorie, btn){
    document.getElementById('formuleSearch').value = '';
    var pills = document.querySelectorAll('.filtres-pills .pill');
    for (var i=0;i<pills.length;i++) pills[i].classList.remove('active');
    if (btn) btn.classList.add('active');
    renderFormules();
    var cards = document.querySelectorAll('#formulesList .formule-card');
    for (var c=0; c<cards.length; c++) cards[c].style.display = (categorie === 'all' || cards[c].getAttribute('data-cat') === categorie) ? 'block' : 'none';
}
function toggleFavoriFormule(id){
    var index = favorisFormules.indexOf(id);
    if (index !== -1) favorisFormules.splice(index, 1); else favorisFormules.push(id);
    saveUserData();
    renderFormules();
}

// ---- SUIVI ----
function renderSuivi(){
    var totalChapitres = 0, revisites = 0;
    for (var matiere in MATIERES) for (var annee in MATIERES[matiere]){
        var chaps = MATIERES[matiere][annee];
        totalChapitres += chaps.length;
        for (var c=0; c<chaps.length; c++) if (USER_DATA.progress[chaps[c].id] >= 100) revisites++;
    }
    document.getElementById('statsRevisites').textContent = totalChapitres>0 ? Math.round(revisites/totalChapitres*100)+'%' : '0%';
    document.getElementById('statsQuizTotal').textContent = Object.keys(USER_DATA.quizResults||{}).length;
    var meilleur = 0;
    for (var key in USER_DATA.quizResults) if (USER_DATA.quizResults[key] > meilleur) meilleur = USER_DATA.quizResults[key];
    document.getElementById('statsMeilleur').textContent = meilleur+'%';
    document.getElementById('statsSerie').textContent = USER_DATA.streak || 0;
    
    var badges = getBadges();
    var badgeHtml = '';
    for (var b=0; b<badges.length; b++) badgeHtml += `<div class="badge-item ${badges[b].unlocked?'unlocked':'locked'}">${badges[b].icon} ${badges[b].name}</div>`;
    document.getElementById('badgeDisplay').innerHTML = badgeHtml;
    document.getElementById('favorisList').innerHTML = favorisFormules.length > 0 ? favorisFormules.map(function(id){ var f = null; for (var cat in FORMULES_DATA) for (var i=0;i<FORMULES_DATA[cat].length;i++) if (FORMULES_DATA[cat][i].id === id) f = FORMULES_DATA[cat][i]; return f ? `<div>${f.icone} ${f.titre}</div>` : ''; }).join('') : '<div class="fav-empty">Aucun favori pour l\u2019instant — étoilez une formule.</div>';
}
function getBadges(){
    var total = 0, revisites = 0;
    for (var matiere in MATIERES) for (var annee in MATIERES[matiere]){
        var chaps = MATIERES[matiere][annee];
        total += chaps.length;
        for (var c=0; c<chaps.length; c++) if (USER_DATA.progress[chaps[c].id] >= 100) revisites++;
    }
    return [
        {id:'apprenti', name:'Apprenti — 3 chapitres', icon:'🥉', unlocked: revisites >= 3},
        {id:'expert', name:'Expert — 10 chapitres', icon:'🥇', unlocked: revisites >= 10},
        {id:'streak', name:'Série de 10 bonnes réponses', icon:'🔥', unlocked: USER_DATA.streak >= 10}
    ];
}

// ---- QUIZ & EXAMENS ----
function updateQuizChapitres(){
    var annee = document.getElementById('quizAnnee').value;
    var chapitreSelect = document.getElementById('quizChapitre');
    chapitreSelect.innerHTML = '<option value="all">Tous les chapitres</option>';
    for (var matiere in MATIERES){
        var chaps = MATIERES[matiere][annee] || [];
        for (var i=0; i<chaps.length; i++) chapitreSelect.innerHTML += `<option value="${chaps[i].id}">${chaps[i].icone} ${chaps[i].titre}</option>`;
    }
}
function startQuiz(){
    var annee = document.getElementById('quizAnnee').value;
    var chapitre = document.getElementById('quizChapitre').value;
    var questions = QUESTIONS_QUIZ.filter(function(q){
        if (annee !== 'all' && q.annee !== annee) return false;
        if (chapitre !== 'all' && q.chapitre !== chapitre) return false;
        return true;
    });
    if (questions.length === 0) return;
    currentQuiz.questions = shuffle(questions);
    currentQuiz.index = 0; currentQuiz.score = 0; currentQuiz.total = currentQuiz.questions.length;
    renderQuiz();
}
function renderQuiz(){
    var container = document.getElementById('quizContent');
    if (currentQuiz.index >= currentQuiz.total){ showQuizResult(); return; }
    var q = currentQuiz.questions[currentQuiz.index];
    var html = `<div class="quiz-question"><div class="question-text">${q.question}</div><div class="quiz-options">`;
    for (var i=0; i<q.options.length; i++) html += `<button onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${q.options[i]}</button>`;
    html += `</div><div id="quizFeedback"></div></div>`;
    container.innerHTML = html;
}
function answerQuiz(index){
    var q = currentQuiz.questions[currentQuiz.index];
    var isCorrect = index === q.correct;
    var buttons = document.querySelectorAll('#quizContent .quiz-options button');
    for (var i=0; i<buttons.length; i++){
        buttons[i].disabled = true;
        if (i === q.correct) buttons[i].classList.add('correct');
        if (i === index && !isCorrect) buttons[i].classList.add('wrong');
    }
    if (isCorrect){ currentQuiz.score++; USER_DATA.streak++; } else USER_DATA.streak = 0;
    saveUserData();
    document.getElementById('quizFeedback').innerHTML = `<div class="quiz-result ${isCorrect?'correct':'wrong'}">${isCorrect?'✅ Bonne réponse !':'❌ Pas tout à fait.'}</div><button class="primary-btn" onclick="nextQuizQuestion()" style="margin-top:12px;">Question suivante →</button>`;
}
function nextQuizQuestion(){ currentQuiz.index++; renderQuiz(); }
function showQuizResult(){
    var percent = Math.round(currentQuiz.score/currentQuiz.total*100);
    USER_DATA.quizResults['quiz_'+new Date().getTime()] = percent;
    saveUserData();
    document.getElementById('quizContent').innerHTML = `<div class="panel" style="text-align:center;"><h2>Quiz terminé !</h2><h1 style="font-family:var(--font-head);">${percent}%</h1><button class="primary-btn" onclick="startQuiz()">Refaire</button></div>`;
    renderSuivi();
}
function startDefiJour(){
    var questions = shuffle(QUESTIONS_QUIZ.slice()).slice(0,5);
    if (questions.length === 0) return;
    currentQuiz.questions = questions; currentQuiz.index = 0; currentQuiz.score = 0; currentQuiz.total = questions.length;
    renderQuiz();
}

// EXAMENS (SIMPLIFIÉ MAIS FONCTIONNEL)
function startExamen(niveau){
    var questions = QUESTIONS_QUIZ.filter(function(q){ return q.annee === niveau || niveau === 'complet'; }).slice(0, niveau==='complet'?50:niveau==='6e'?30:niveau==='5e'?25:20);
    if (questions.length < 3) return;
    currentExamen.questions = shuffle(questions); currentExamen.index = 0; currentExamen.score = 0; currentExamen.total = questions.length;
    document.getElementById('examenContent').innerHTML = `<div class="quiz-topline" style="margin-bottom:8px;"><span>Question <span id="examenProgress">1</span> / ${currentExamen.total}</span><span>Score : <span id="examenScore">0</span></span></div><div id="examenQuestion"></div>`;
    renderExamenQuestion();
}
function renderExamenQuestion(){
    if (currentExamen.index >= currentExamen.total){ finishExamen(); return; }
    var q = currentExamen.questions[currentExamen.index];
    document.getElementById('examenProgress').textContent = currentExamen.index+1;
    document.getElementById('examenScore').textContent = currentExamen.score;
    var html = `<div class="quiz-question"><div class="question-text">${q.question}</div><div class="quiz-options">`;
    for (var i=0; i<q.options.length; i++) html += `<button onclick="answerExamen(${i})">${String.fromCharCode(65+i)}. ${q.options[i]}</button>`;
    html += `</div><div id="examenFeedback"></div></div>`;
    document.getElementById('examenQuestion').innerHTML = html;
}
function answerExamen(index){
    var q = currentExamen.questions[currentExamen.index];
    var isCorrect = index === q.correct;
    var buttons = document.querySelectorAll('#examenQuestion .quiz-options button');
    for (var i=0; i<buttons.length; i++){
        buttons[i].disabled = true;
        if (i === q.correct) buttons[i].classList.add('correct');
        if (i === index && !isCorrect) buttons[i].classList.add('wrong');
    }
    if (isCorrect) currentExamen.score++;
    document.getElementById('examenScore').textContent = currentExamen.score;
    document.getElementById('examenFeedback').innerHTML = `<button class="primary-btn" onclick="nextExamenQuestion()" style="margin-top:12px;">Question suivante →</button>`;
}
function nextExamenQuestion(){ currentExamen.index++; renderExamenQuestion(); }
function finishExamen(){
    var percent = Math.round(currentExamen.score/currentExamen.total*100);
    USER_DATA.quizResults['exam_'+new Date().getTime()] = percent;
    saveUserData();
    document.getElementById('examenContent').innerHTML = `<div class="panel" style="text-align:center;"><h2>Examen terminé !</h2><h1 style="font-family:var(--font-head);">${percent}%</h1></div>`;
    renderSuivi();
}

// ---- UTILITAIRES ----
function shuffle(array){ var copy = array.slice(); for (var i=copy.length-1;i>0;i--){ var j = Math.floor(Math.random()*(i+1)); var temp = copy[i]; copy[i] = copy[j]; copy[j] = temp; } return copy; }
function startRevision(){ showTab('cours'); }

// ---- INITIALISATION ----
loadUserData();
showTab('dashboard');
