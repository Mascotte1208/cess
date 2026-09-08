// =========================================================
// PROGRAMME OFFICIEL DE MATHÉMATIQUES - COMMUNAUTÉ FRANÇAISE
// 2e DEGRÉ - 3e ET 4e ANNÉES
// =========================================================

var CHAPITRES = {
    '3e': [
        {
            id: '3e_fonctions',
            titre: 'Etude des fonctions',
            desc: 'Graphiques, tableaux, formules, fonction du premier degre',
            niveau: '3e Annee',
            icone: '📈',
            objectifs: [
                'Construire un tableau et un graphique a partir d une situation',
                'Proposer une formule reliant une variable a son image',
                'Determiner si un point appartient au graphique d une fonction',
                'Interpreter les coefficients a et b dans f(x) = ax + b',
                'Dessiner le graphique d une fonction du premier degre'
            ],
            matieres: [
                'Distinction entre relation et fonction',
                'Fonctions du type f(x) = ax, f(x) = ax + b',
                'Droite d equation y = ax + b, x = a',
                'Equation ax + by + c = 0',
                'Coefficient angulaire et parallelisme',
                'Equation d une droite passant par un point donne'
            ],
            exercices: [
                { question: 'Quelle est l equation d une fonction lineaire', options: ['y = ax', 'y = ax + b', 'y = x2', 'y = 1/x'], correct: 0, correction: 'Une fonction lineaire est de la forme y = ax' },
                { question: 'Dans f(x) = 2x + 3, que represente le coefficient 2', options: ['Le coefficient angulaire', 'L ordonnee a l origine', 'La racine', 'Le terme constant'], correct: 0, correction: '2 est le coefficient angulaire (la pente)' },
                { question: 'Dans f(x) = 2x + 3, que represente le nombre 3', options: ['L ordonnee a l origine', 'Le coefficient angulaire', 'La racine', 'La pente'], correct: 0, correction: '3 est l ordonnee a l origine (intersection avec l axe des y)' }
            ]
        },
        {
            id: '3e_algebre',
            titre: 'Algebre',
            desc: 'Equations, systemes, inequations, polynomes',
            niveau: '3e Annee',
            icone: '🔢',
            objectifs: [
                'Resoudre une equation du premier degre a une inconnue',
                'Resoudre un systeme de deux equations a deux inconnues',
                'Resoudre une inequation du premier degre',
                'Utiliser les proprietes des puissances',
                'Factoriser et developper des polynomes'
            ],
            matieres: [
                'Equations du premier degre : proprietes des egalites',
                'Systemes de deux equations a deux inconnues',
                'Inequations du premier degre',
                'Puissances a exposants entiers',
                'Polynomes : degre, somme, produit, factorisation',
                'Produits remarquables : (a+b)2, (a-b)2, a2-b2'
            ],
            exercices: [
                { question: 'Resoudre : 2x + 3 = 11', options: ['x = 4', 'x = 5', 'x = 3', 'x = 7'], correct: 0, correction: '2x = 8 donc x = 4' },
                { question: 'Resoudre le systeme : x + y = 5 et x - y = 1', options: ['(3,2)', '(2,3)', '(4,1)', '(1,4)'], correct: 0, correction: 'Par addition : 2x = 6 donc x = 3, y = 2' },
                { question: 'Factoriser : x2 - 9', options: ['(x-3)(x+3)', '(x-3)2', '(x+3)2', 'x2-9'], correct: 0, correction: 'a2 - b2 = (a-b)(a+b)' }
            ]
        },
        {
            id: '3e_geometrie',
            titre: 'Geometrie et trigonometrie',
            desc: 'Pythagore, Thales, angles, isometrie, similitude',
            niveau: '3e Annee',
            icone: '📐',
            objectifs: [
                'Utiliser le theoreme de Pythagore',
                'Reconnaitre une configuration de Thales',
                'Determiner la mesure d un angle',
                'Reconnaitre des triangles isometriques et semblables',
                'Utiliser la trigonometrie du triangle rectangle'
            ],
            matieres: [
                'Theoreme de Pythagore et sa reciproque',
                'Nombres irrationnels et racines carrees',
                'Configurations de Thales',
                'Angles au centre, angles inscrits',
                'Cas d isometrie des triangles',
                'Cas de similitude des triangles',
                'Trigonometrie : cosinus, sinus, tangente'
            ],
            exercices: [
                { question: 'Quel est le theoreme de Pythagore', options: ['a2 + b2 = c2', 'a + b = c', 'a x b = c', 'a2 = b2 + c2'], correct: 0, correction: 'Dans un triangle rectangle, a2 + b2 = c2' },
                { question: 'Que vaut sin(30°)', options: ['0.5', '0.707', '1', '0.866'], correct: 0, correction: 'sin(30°) = 1/2 = 0.5' },
                { question: 'Quelle est la somme des angles d un triangle', options: ['180°', '90°', '360°', '270°'], correct: 0, correction: 'La somme des angles d un triangle est 180°' }
            ]
        }
    ],
    '4e': [
        {
            id: '4e_fonctions_ref',
            titre: 'Fonctions de reference',
            desc: 'Fonctions usuelles, transformations, domaines, zeros',
            niveau: '4e Annee',
            icone: '📈',
            objectifs: [
                'Relier le graphique d une fonction a son equation',
                'Deduire les graphiques de f(x)+k, f(x+k), kf(x)',
                'Rechercher le domaine et les zeros d une fonction',
                'Determiner la parite et la croissance d une fonction'
            ],
            matieres: [
                'Fonctions de reference : x, x2, x3, 1/x, racine de x, sin x, cos x',
                'Transformations : f(x)+k, f(x+k), kf(x), f(kx), valeur absolue de f(x)',
                'Domaine de definition, zeros d une fonction',
                'Parite, periodicite, croissance, maximum, minimum'
            ],
            exercices: [
                { question: 'Quelle est la fonction de reference pour une parabole', options: ['x2', 'x', '1/x', 'racine de x'], correct: 0, correction: 'La fonction x2 donne une parabole' },
                { question: 'Que devient f(x) = x2 si on fait f(x) + 3', options: ['La parabole monte de 3', 'La parabole descend de 3', 'La parabole s elargit', 'La parabole se retrecit'], correct: 0, correction: 'f(x)+3 decale la courbe vers le haut' }
            ]
        },
        {
            id: '4e_algebre_2deg',
            titre: 'Algebre - 2e degre',
            desc: 'Equations du second degre, paraboles, trinomes',
            niveau: '4e Annee',
            icone: '🔢',
            objectifs: [
                'Construire le graphique de y = ax2 + bx + c',
                'Resoudre une equation du deuxieme degre',
                'Determiner le produit et la somme des racines',
                'Factoriser un trinome du deuxieme degre'
            ],
            matieres: [
                'Graphique de la fonction du deuxieme degre',
                'Sommet et axe de symetrie de la parabole',
                'Resolution de l equation du deuxieme degre',
                'Produit et somme des racines',
                'Factorisation des trinomes du deuxieme degre'
            ],
            exercices: [
                { question: 'Quelle est la formule du discriminant Δ', options: ['b2 - 4ac', 'b2 + 4ac', 'a2 - 4bc', 'c2 - 4ab'], correct: 0, correction: 'Δ = b2 - 4ac pour une equation ax2 + bx + c = 0' },
                { question: 'Resoudre x2 - 4 = 0', options: ['x = 2 ou x = -2', 'x = 2', 'x = -2', 'x = 4'], correct: 0, correction: 'x2 = 4 donc x = ±2' }
            ]
        },
        {
            id: '4e_geometrie_vectorielle',
            titre: 'Geometrie vectorielle',
            desc: 'Vecteurs, produit scalaire, lieux geometriques',
            niveau: '4e Annee',
            icone: '📐',
            objectifs: [
                'Decomposer un vecteur suivant les axes du repere',
                'Construire la somme et la difference de deux vecteurs',
                'Calculer un produit scalaire',
                'Resoudre des problemes de lieux geometriques'
            ],
            matieres: [
                'Vecteurs : composantes, somme, produit par un nombre',
                'Relation de Chasles',
                'Produit scalaire dans le plan',
                'Lieux geometriques : mediatrice, cercle, parabole',
                'Equations de lieux'
            ],
            exercices: [
                { question: 'Que represente le produit scalaire de deux vecteurs', options: ['Un nombre reel', 'Un vecteur', 'Une distance', 'Un angle'], correct: 0, correction: 'Le produit scalaire est un nombre reel' },
                { question: 'La mediatrice d un segment est', options: ['L ensemble des points equidistants des extremites', 'La droite qui coupe le segment en son milieu', 'La perpendiculaire au segment', 'Toutes ces reponses'], correct: 0, correction: 'La mediatrice est la perpendiculaire au segment en son milieu' }
            ]
        },
        {
            id: '4e_trigonometrie',
            titre: 'Trigonometrie avancee',
            desc: 'Cercle trigonometrique, angles orientes, formules',
            niveau: '4e Annee',
            icone: '📐',
            objectifs: [
                'Faire le lien entre arc et angle',
                'Utiliser le cercle trigonometrique',
                'Determiner le sinus, cosinus, tangente d un angle oriente',
                'Utiliser les formules fondamentales'
            ],
            matieres: [
                'Valeur approchee du nombre π',
                'Angles et arcs, radian',
                'Cercle trigonometrique, angle oriente',
                'Sinus, cosinus, tangente, cotangente',
                'Angles associes',
                'Formules fondamentales'
            ],
            exercices: [
                { question: 'Que vaut cos(60°)', options: ['0.5', '0.866', '0.707', '1'], correct: 0, correction: 'cos(60°) = 1/2 = 0.5' },
                { question: 'Que vaut sin2 α + cos2 α', options: ['1', '0', '2', 'α'], correct: 0, correction: 'La formule fondamentale donne toujours 1' }
            ]
        },
        {
            id: '4e_statistiques',
            titre: 'Traitement numerique de donnees',
            desc: 'Statistiques, parametres, diagrammes',
            niveau: '4e Annee',
            icone: '📊',
            objectifs: [
                'Maitriser le vocabulaire et les procedures de calcul',
                'Calculer les valeurs centrales (mode, moyenne, mediane)',
                'Calculer les parametres de dispersion',
                'Interpreter les resultats'
            ],
            matieres: [
                'Tableaux, effectifs, frequences',
                'Moyenne, mediane, mode, quartiles',
                'Diagrammes : batonnets, circulaires, histogrammes',
                'Parametres de dispersion : etendue, ecart-type',
                'Changement d origine et d unite'
            ],
            exercices: [
                { question: 'Quelle est la mediane de 3, 5, 7, 9, 11', options: ['7', '6', '8', '5'], correct: 0, correction: 'La mediane est la valeur centrale : 7' },
                { question: 'Quelle est la moyenne de 4, 6, 8, 10, 12', options: ['8', '7', '9', '6'], correct: 0, correction: '(4+6+8+10+12)/5 = 40/5 = 8' }
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

// ---- DONNEES UTILISATEUR ----
var USER_DATA = {
    progress: {},
    quizResults: {},
    totalTime: 0,
    revisions: {},
    chapitreScores: {}
};

// ---- ETAT ----
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
}

// =========================================================
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
        var label = annee === '3e' ? '3e Annee' : '4e Annee';
        var color = percent >= 80 ? '#1e7a3c' : percent >= 50 ? '#e8a400' : '#1c5fa8';
        progressHtml += '<div style="margin: 8px 0;"><div style="display: flex; justify-content: space-between; font-size: 13px;"><span>' + label + '</span><span style="font-weight: 900;">' + percent + '%</span></div><div style="height: 6px; background: #eee; border-radius: 3px; overflow: hidden;"><div style="width: ' + percent + '%; height: 100%; background: ' + color + '; border-radius: 3px; transition: width 0.6s ease;"></div></div></div>';
    }
    document.getElementById('progressionAnnees').innerHTML = progressHtml;
    
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
        urgentHtml = '<div style="color: #1e7a3c; font-weight: 900; padding: 10px;">Tous les chapitres sont en bonne voie !</div>';
    } else {
        for (var u = 0; u < Math.min(urgents.length, 4); u++) {
            var chap = urgents[u];
            urgentHtml += '<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--line);"><span>' + chap.icone + ' ' + chap.titre + '</span><span style="color: #c81e2c; font-weight: 900;">' + (USER_DATA.progress[chap.id] || 0) + '%</span></div>';
        }
    }
    document.getElementById('chapitresUrgents').innerHTML = urgentHtml;
}

// =========================================================
// RENDU DES CHAPITRES
// =========================================================

function renderChapitres(annee) {
    var containerId = 'chapitres' + annee;
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var chapitres = CHAPITRES[annee] || [];
    if (chapitres.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--muted);">Aucun chapitre pour cette annee.</div>';
        return;
    }
    
    var html = '';
    for (var i = 0; i < chapitres.length; i++) {
        var chap = chapitres[i];
        var progress = USER_DATA.progress[chap.id] || 0;
        var status = progress >= 100 ? 'revise' : progress > 0 ? 'en-cours' : 'non-vu';
        var statusLabel = progress >= 100 ? 'Revisé' : progress > 0 ? 'En cours' : 'Non vu';
        var badgeColor = progress >= 100 ? '#1e7a3c' : progress > 0 ? '#e8a400' : '#68707a';
        
        html += '<div class="chapitre-card" onclick="openChapitre(\'' + chap.id + '\')" style="background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 16px; transition: all 0.2s; cursor: pointer; margin-bottom: 10px;">';
        html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">';
        html += '<div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 24px;">' + chap.icone + '</span><span style="font-weight: 900; font-size: 16px;">' + chap.titre + '</span></div>';
        html += '<span style="padding: 2px 10px; border-radius: 12px; font-size: 10px; font-weight: 900; background: ' + badgeColor + '; color: white;">' + statusLabel + '</span>';
        html += '</div>';
        html += '<div style="color: var(--muted); font-size: 13px; margin: 4px 0 10px 0;">' + chap.desc + '</div>';
        html += '<div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); margin-top: 6px;"><span>Niveau: ' + chap.niveau + '</span><span>' + (chap.exercices ? chap.exercices.length : 0) + ' exercices</span></div>';
        html += '<div style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden; margin-top: 8px;"><span style="display: block; height: 100%; width: ' + progress + '%; background: var(--blue); border-radius: 2px; transition: width 0.6s ease;"></span></div>';
        html += '</div>';
    }
    container.innerHTML = html;
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
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;';
    
    var content = document.createElement('div');
    content.style.cssText = 'background: var(--surface); border-radius: 18px; max-width: 750px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); position: relative;';
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position: sticky; top: 0; float: right; background: none; border: none; font-size: 24px; cursor: pointer; color: var(--muted); padding: 0 4px;';
    closeBtn.onclick = function() { document.body.removeChild(modal); };
    
    var html = '<h2 style="margin: 0 0 4px 0;">' + found.icone + ' ' + found.titre + '</h2>';
    html += '<p style="color: var(--muted); margin-bottom: 16px;">' + found.desc + ' • ' + found.niveau + '</p>';
    
    html += '<div style="margin: 16px 0; display: flex; gap: 10px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startChapitreQuiz(\'' + found.id + '\')" style="background: #1c5fa8; color: white; border: none; border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Quiz du chapitre</button>';
    html += '<button class="ghost-btn" onclick="markChapitreDone(\'' + found.id + '\')" style="background: transparent; color: var(--ink); border: 1px solid var(--line); border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Marquer comme revisé</button>';
    html += '<button class="ghost-btn" onclick="document.body.removeChild(this.parentElement.parentElement.parentElement)" style="background: transparent; color: var(--ink); border: 1px solid var(--line); border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Retour</button>';
    html += '</div>';
    
    html += '<h3>Objectifs du chapitre</h3><ul style="margin: 8px 0 16px 20px; line-height: 1.6;">';
    if (found.objectifs) {
        for (var o = 0; o < found.objectifs.length; o++) {
            html += '<li>' + found.objectifs[o] + '</li>';
        }
    }
    html += '</ul>';
    
    html += '<h3>Matieres abordees</h3><ul style="margin: 8px 0 16px 20px; line-height: 1.6;">';
    if (found.matieres) {
        for (var m = 0; m < found.matieres.length; m++) {
            html += '<li>' + found.matieres[m] + '</li>';
        }
    }
    html += '</ul>';
    
    if (found.exercices) {
        html += '<h3>Exercices</h3>';
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
        feedback.innerHTML = '<span style="color: #1e7a3c; font-weight: 900;">Correct ! ' + (correction ? correction : '') + '</span>';
    } else {
        btn.style.background = '#c81e2c';
        btn.style.color = 'white';
        btn.style.borderColor = '#c81e2c';
        feedback.innerHTML = '<span style="color: #c81e2c; font-weight: 900;">Incorrect. ' + (correction ? 'Correction: ' + correction : '') + '</span>';
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
    var modal = document.querySelector('div[style*="position: fixed; top: 0; left: 0; right: 0; bottom: 0;"]');
    if (modal) document.body.removeChild(modal);
    renderChapitres('3e');
    renderChapitres('4e');
    alert('Chapitre marque comme revisé !');
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
        chapitreSelect.innerHTML += '<option value="' + chapitres[i].id + '">' + chapitres[i].icone + ' ' + chapitres[i].titre + '</option>';
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
        alert('Aucune question disponible pour cette selection.');
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
    if (currentQuiz.index >= currentQuiz.total) {
        showQuizResult();
        return;
    }
    
    var q = currentQuiz.questions[currentQuiz.index];
    var progress = Math.round((currentQuiz.index) / currentQuiz.total * 100);
    
    var html = '<div style="margin-bottom: 16px;"><div style="display: flex; justify-content: space-between; font-size: 14px; color: var(--muted);"><span>Question ' + (currentQuiz.index + 1) + ' / ' + currentQuiz.total + '</span><span>Score: ' + currentQuiz.score + '</span></div><div style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden;"><div style="width: ' + progress + '%; height: 100%; background: var(--blue); border-radius: 2px; transition: width 0.3s;"></div></div></div>';
    html += '<div style="background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 20px; margin-bottom: 12px;">';
    html += '<div style="font-weight: 900; font-size: 17px; margin-bottom: 12px;">' + q.question + '</div>';
    html += '<div style="display: flex; flex-direction: column; gap: 8px;">';
    for (var i = 0; i < q.options.length; i++) {
        html += '<button onclick="answerQuiz(' + i + ')" style="text-align: left; padding: 12px 16px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); cursor: pointer; transition: all 0.2s; font-size: 14px;">' + String.fromCharCode(65 + i) + '. ' + q.options[i] + '</button>';
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
    
    if (isCorrect) currentQuiz.score++;
    
    var feedback = document.getElementById('quizFeedback');
    var correction = q.correction || '';
    feedback.innerHTML = '<div class="quiz-result ' + (isCorrect ? 'correct' : 'wrong') + '" style="margin-top: 12px; padding: 12px 16px; border-radius: 10px; font-weight: 600; background: ' + (isCorrect ? '#eaf6ee' : '#fbeaea') + '; color: ' + (isCorrect ? '#1e7a3c' : '#c81e2c') + '; border-left: 4px solid ' + (isCorrect ? '#1e7a3c' : '#c81e2c') + ';">' + (isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse.') + (correction ? '<div style="margin-top: 4px; font-size: 13px;">' + correction + '</div>' : '') + '</div><button class="primary-btn" onclick="nextQuizQuestion()" style="margin-top: 10px; background: #1c5fa8; color: white; border: none; border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Question suivante</button>';
}

function nextQuizQuestion() {
    currentQuiz.index++;
    renderQuiz();
}

function showQuizResult() {
    var container = document.getElementById('quizContent');
    var percent = Math.round(currentQuiz.score / currentQuiz.total * 100);
    var message = percent >= 80 ? 'Excellent !' : percent >= 60 ? 'Bon travail !' : 'Continue à t entraîner !';
    
    var html = '<div style="text-align: center; padding: 30px 0;">';
    html += '<div style="font-size: 48px; margin-bottom: 10px;">' + (percent >= 80 ? '🏆' : percent >= 60 ? '📈' : '📚') + '</div>';
    html += '<h2>Quiz terminé !</h2>';
    html += '<div style="font-size: 36px; font-weight: 900; color: ' + (percent >= 80 ? '#1e7a3c' : percent >= 60 ? '#e8a400' : '#c81e2c') + ';">' + percent + '%</div>';
    html += '<p style="font-size: 18px; margin: 10px 0;">' + currentQuiz.score + ' / ' + currentQuiz.total + ' bonnes réponses</p>';
    html += '<p style="color: var(--muted);">' + message + '</p>';
    html += '<div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startQuiz()" style="background: #1c5fa8; color: white; border: none; border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Refaire le quiz</button>';
    html += '<button class="ghost-btn" onclick="showTab(\'dashboard\')" style="background: transparent; color: var(--ink); border: 1px solid var(--line); border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Retour</button>';
    html += '</div></div>';
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
    
    var count = niveau === 'complet' ? 50 : 20;
    questions = questions.slice(0, count);
    
    if (questions.length < 10) {
        alert('Pas assez de questions pour cet examen.');
        return;
    }
    
    currentExamen.questions = questions;
    currentExamen.index = 0;
    currentExamen.score = 0;
    currentExamen.total = questions.length;
    currentExamen.timeLeft = niveau === 'complet' ? 5400 : 1800;
    
    var container = document.getElementById('examenContent');
    container.innerHTML = '<div style="margin-bottom: 16px;"><div style="display: flex; justify-content: space-between; font-size: 14px;"><span>Temps: <span id="examenTimer">' + formatTime(currentExamen.timeLeft) + '</span></span><span>Question <span id="examenProgress">1</span> / ' + currentExamen.total + '</span><span>Score: <span id="examenScore">0</span></span></div><div style="height: 4px; background: var(--soft); border-radius: 2px; overflow: hidden;"><div id="examenBar" style="width: 0%; height: 100%; background: var(--blue); border-radius: 2px; transition: width 0.3s;"></div></div></div><div id="examenQuestion"></div>';
    
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
    
    var html = '<div style="background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 20px; margin-bottom: 12px;">';
    html += '<div style="font-weight: 900; font-size: 17px; margin-bottom: 12px;">' + q.question + '</div>';
    html += '<div style="display: flex; flex-direction: column; gap: 8px;">';
    for (var i = 0; i < q.options.length; i++) {
        html += '<button onclick="answerExamen(' + i + ')" style="text-align: left; padding: 12px 16px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); cursor: pointer; transition: all 0.2s; font-size: 14px;">' + String.fromCharCode(65 + i) + '. ' + q.options[i] + '</button>';
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
    feedback.innerHTML = '<div class="quiz-result ' + (isCorrect ? 'correct' : 'wrong') + '" style="margin-top: 12px; padding: 12px 16px; border-radius: 10px; font-weight: 600; background: ' + (isCorrect ? '#eaf6ee' : '#fbeaea') + '; color: ' + (isCorrect ? '#1e7a3c' : '#c81e2c') + '; border-left: 4px solid ' + (isCorrect ? '#1e7a3c' : '#c81e2c') + ';">' + (isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse.') + '</div><button class="primary-btn" onclick="nextExamenQuestion()" style="margin-top: 10px; background: #1c5fa8; color: white; border: none; border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Question suivante</button>';
}

function nextExamenQuestion() {
    currentExamen.index++;
    renderExamenQuestion();
}

function finishExamen() {
    if (currentExamen.timer) clearInterval(currentExamen.timer);
    
    var percent = Math.round(currentExamen.score / currentExamen.total * 100);
    var message = percent >= 80 ? 'Félicitations !' : percent >= 60 ? 'Bonne performance !' : 'Continue à réviser !';
    
    var html = '<div style="text-align: center; padding: 30px 0;">';
    html += '<div style="font-size: 64px; margin-bottom: 10px;">' + (percent >= 80 ? '🎉' : percent >= 60 ? '📈' : '📚') + '</div>';
    html += '<h2>Examen terminé !</h2>';
    html += '<div style="font-size: 48px; font-weight: 900; color: ' + (percent >= 80 ? '#1e7a3c' : percent >= 60 ? '#e8a400' : '#c81e2c') + ';">' + percent + '%</div>';
    html += '<p style="font-size: 18px; margin: 10px 0;">' + currentExamen.score + ' / ' + currentExamen.total + ' bonnes réponses</p>';
    html += '<p style="color: var(--muted);">' + message + '</p>';
    html += '<div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">';
    html += '<button class="primary-btn" onclick="startExamen(\'' + (currentExamen.questions[0]?.annee || '3e') + '\')" style="background: #1c5fa8; color: white; border: none; border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Refaire</button>';
    html += '<button class="ghost-btn" onclick="showTab(\'dashboard\')" style="background: transparent; color: var(--ink); border: 1px solid var(--line); border-radius: 10px; padding: 10px 18px; font-weight: 900; cursor: pointer;">Retour</button>';
    html += '</div></div>';
    
    document.getElementById('examenContent').innerHTML = html;
}

// =========================================================
// REVISIONS
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
        var color = percent >= 80 ? '#1e7a3c' : percent >= 50 ? '#e8a400' : '#1c5fa8';
        
        html += '<div style="margin: 10px 0; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 16px;">';
        html += '<div style="display: flex; justify-content: space-between; align-items: center;"><span style="font-weight: 900;">' + label + '</span><span style="font-weight: 900; color: ' + color + ';">' + percent + '%</span></div>';
        html += '<div style="height: 6px; margin: 6px 0; background: var(--soft); border-radius: 3px; overflow: hidden;"><div style="width: ' + percent + '%; height: 100%; background: ' + color + '; border-radius: 3px; transition: width 0.6s ease;"></div></div>';
        html += '<div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;">';
        for (var c = 0; c < chaps.length; c++) {
            var chap = chaps[c];
            var prog2 = USER_DATA.progress[chap.id] || 0;
            var status = prog2 >= 100 ? '✅' : prog2 > 0 ? '⏳' : '📖';
            html += '<span style="font-size: 12px; background: var(--soft); padding: 2px 8px; border-radius: 10px;">' + status + ' ' + chap.titre + '</span>';
        }
        html += '</div></div>';
    }
    
    var percentTotal = total > 0 ? Math.round(done / total * 100) : 0;
    
    html = '<div style="text-align: center; padding: 16px; background: var(--soft); border-radius: 12px; margin-bottom: 16px;">';
    html += '<span style="font-size: 20px; font-weight: 900;">Progression globale : ' + percentTotal + '%</span>';
    html += '<div style="height: 8px; margin-top: 8px; background: var(--soft); border-radius: 4px; overflow: hidden;"><div style="width: ' + percentTotal + '%; height: 100%; background: linear-gradient(90deg, #1c5fa8, #6b46c1); border-radius: 4px; transition: width 0.6s ease;"></div></div>';
    html += '<p style="margin-top: 8px; font-size: 13px; color: var(--muted);">' + done + ' / ' + total + ' chapitres revisés' + (percentTotal >= 100 ? ' 🎉 Tu es prêt pour l examen !' : '') + '</p>';
    html += '</div>' + html;
    
    if (total === 0) {
        html = '<div style="text-align: center; padding: 40px; color: var(--muted);">Aucun chapitre disponible pour le moment.</div>';
    }
    
    container.innerHTML = html;
}

// =========================================================
// EFFACER TOUTE PROGRESSION
// =========================================================

function clearAllProgress() {
    if (confirm('Es-tu sur de vouloir effacer toute ta progression ?')) {
        USER_DATA.progress = {};
        USER_DATA.quizResults = {};
        USER_DATA.totalTime = 0;
        saveUserData();
        renderDashboard();
        renderChapitres('3e');
        renderChapitres('4e');
        renderRevisions();
        alert('Toute progression a été effacée.');
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
        alert('Tous les chapitres sont revisés ! Tu es prêt pour l examen !');
    }
}

// =========================================================
// INITIALISATION
// =========================================================

loadUserData();
showTab('dashboard');

console.log('Programme officiel de Mathematiques - 2e degre charge !');
console.log('Chapitres disponibles :', Object.keys(CHAPITRES).length);
console.log('Questions de quiz :', QUESTIONS_QUIZ.length);
