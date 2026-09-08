// =========================================================
// DONNÉES - MATHÉMATIQUES CESS
// =========================================================

var CHAPITRES = {
    '4e': [
        { id: '4e_algebre', titre: 'Algèbre', desc: 'Équations, inéquations, systèmes', niveau: 'Fondamental', icone: '🔢' },
        { id: '4e_geometrie', titre: 'Géométrie', desc: 'Triangles, quadrilatères, théorème de Pythagore', niveau: 'Fondamental', icone: '📐' },
        { id: '4e_statistiques', titre: 'Statistiques', desc: 'Moyenne, médiane, mode, diagrammes', niveau: 'Fondamental', icone: '📊' },
        { id: '4e_probabilites', titre: 'Probabilités', desc: 'Notions de base, arbres de probabilité', niveau: 'Fondamental', icone: '🎲' }
    ],
    '5e': [
        { id: '5e_fonctions', titre: 'Fonctions', desc: 'Linéaires, affines, représentations graphiques', niveau: 'Intermédiaire', icone: '📈' },
        { id: '5e_trigonometrie', titre: 'Trigonométrie', desc: 'Sinus, cosinus, tangente, angles', niveau: 'Intermédiaire', icone: '📐' },
        { id: '5e_geometrie_espace', titre: 'Géométrie dans l\'espace', desc: 'Volumes, sections, solides', niveau: 'Intermédiaire', icone: '🧊' },
        { id: '5e_statistiques_avancees', titre: 'Statistiques avancées', desc: 'Écart-type, variance, corrélation', niveau: 'Intermédiaire', icone: '📊' }
    ],
    '6e': [
        { id: '6e_derivees', titre: 'Dérivées', desc: 'Fonctions dérivées, taux de variation', niveau: 'Avancé', icone: '📉' },
        { id: '6e_integrales', titre: 'Intégrales', desc: 'Primitives, calcul d\'aires', niveau: 'Avancé', icone: '∫' },
        { id: '6e_nombres_complexes', titre: 'Nombres complexes', desc: 'Forme algébrique, trigonométrique', niveau: 'Avancé', icone: 'ℂ' },
        { id: '6e_exponentielles', titre: 'Exponentielles et logarithmes', desc: 'Croissance, décroissance, applications', niveau: 'Avancé', icone: '📈' },
        { id: '6e_geometrie_analytique', titre: 'Géométrie analytique', desc: 'Équations de droites, cercles, coniques', niveau: 'Avancé', icone: '📐' }
    ]
};

// ---- QUESTIONS DE QUIZ ----
var QUESTIONS_QUIZ = [
    // 4e Année
    { id: 'q1', annee: '4e', chapitre: '4e_algebre', question: 'Résoudre : 2x + 3 = 11', options: ['x = 4', 'x = 5', 'x = 3', 'x = 7'], correct: 0 },
    { id: 'q2', annee: '4e', chapitre: '4e_algebre', question: 'Résoudre : 3x - 2 = 13', options: ['x = 5', 'x = 4', 'x = 6', 'x = 3'], correct: 0 },
    { id: 'q3', annee: '4e', chapitre: '4e_geometrie', question: 'Quel est le théorème de Pythagore ?', options: ['a² + b² = c²', 'a + b = c', 'a × b = c', 'a² = b² + c²'], correct: 0 },
    { id: 'q4', annee: '4e', chapitre: '4e_statistiques', question: 'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options: ['7', '6', '8', '5'], correct: 0 },
    { id: 'q5', annee: '4e', chapitre: '4e_probabilites', question: 'Quelle est la probabilité de tomber sur pile ?', options: ['1/2', '1/4', '1/3', '2/3'], correct: 0 },
    { id: 'q6', annee: '4e', chapitre: '4e_algebre', question: 'Résoudre : 4x - 5 = 15', options: ['x = 5', 'x = 4', 'x = 6', 'x = 3'], correct: 0 },
    { id: 'q7', annee: '4e', chapitre: '4e_geometrie', question: 'Quelle est la somme des angles d\'un triangle ?', options: ['180°', '90°', '360°', '270°'], correct: 0 },
    
    // 5e Année
    { id: 'q8', annee: '5e', chapitre: '5e_fonctions', question: 'Quelle est l\'équation d\'une fonction linéaire ?', options: ['y = ax + b', 'y = ax', 'y = x²', 'y = 1/x'], correct: 1 },
    { id: 'q9', annee: '5e', chapitre: '5e_fonctions', question: 'Si f(x) = 2x + 3, que vaut f(4) ?', options: ['11', '8', '7', '9'], correct: 0 },
    { id: 'q10', annee: '5e', chapitre: '5e_trigonometrie', question: 'Que vaut sin(30°) ?', options: ['0.5', '0.707', '1', '0.866'], correct: 0 },
    { id: 'q11', annee: '5e', chapitre: '5e_geometrie_espace', question: 'Quelle est la formule du volume d\'une sphère ?', options: ['4/3 × π × r³', 'π × r² × h', '4 × π × r²', '2/3 × π × r³'], correct: 0 },
    { id: 'q12', annee: '5e', chapitre: '5e_statistiques_avancees', question: 'Que mesure l\'écart-type ?', options: ['La dispersion', 'La moyenne', 'La médiane', 'Le maximum'], correct: 0 },
    { id: 'q13', annee: '5e', chapitre: '5e_fonctions', question: 'Si f(x) = 3x - 2, que vaut f(5) ?', options: ['13', '15', '10', '8'], correct: 0 },
    
    // 6e Année
    { id: 'q14', annee: '6e', chapitre: '6e_derivees', question: 'Que vaut la dérivée de f(x) = x² ?', options: ['2x', 'x', '2x²', 'x²'], correct: 0 },
    { id: 'q15', annee: '6e', chapitre: '6e_derivees', question: 'Que vaut f\'(3) si f(x) = x² ?', options: ['6', '3', '9', '4'], correct: 0 },
    { id: 'q16', annee: '6e', chapitre: '6e_integrales', question: 'Quelle est la primitive de f(x) = x ?', options: ['x²/2', 'x²', '2x', '1'], correct: 0 },
    { id: 'q17', annee: '6e', chapitre: '6e_nombres_complexes', question: 'Que vaut i² ?', options: ['-1', '1', 'i', '0'], correct: 0 },
    { id: 'q18', annee: '6e', chapitre: '6e_exponentielles', question: 'Que vaut e^0 ?', options: ['1', '0', 'e', '2.718'], correct: 0 },
    { id: 'q19', annee: '6e', chapitre: '6e_derivees', question: 'Que vaut la dérivée de f(x) = 3x² ?', options: ['6x', '3x', '6x²', 'x²'], correct: 0 },
    { id: 'q20', annee: '6e', chapitre: '6e_geometrie_analytique', question: 'Quelle est l\'équation d\'une droite passant par (0,0) et (1,1) ?', options: ['y = x', 'y = 2x', 'y = x + 1', 'y = 1'], correct: 0 }
];

// ---- DONNÉES UTILISATEUR ----
var USER_DATA = {
    progress: {},
    quizResults: {},
    totalTime: 0,
    revisions: {}
};

// ---- ÉTAT ----
var currentTab = 'dashboard';
var currentQuiz = { index: 0, questions: [], answers: [], score: 0, total: 0 };

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
    var tabs = ['dashboard', 'annee4', 'annee5', 'annee6', 'quiz', 'examens'];
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
    if (tab === 'annee4') renderChapitres('4e');
    if (tab === 'annee5') renderChapitres('5e');
    if (tab === 'annee6') renderChapitres('6e');
    if (tab === 'quiz') updateQuizChapitres();
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
    var quizReussis = 0;
    var tempsTotal = USER_DATA.totalTime || 0;
    
    var annees = ['4e', '5e', '6e'];
    for (var a = 0; a < annees.length; a++) {
        var chaps = CHAPITRES[annees[a]];
        totalChapitres += chaps.length;
        for (var c = 0; c < chaps.length; c++) {
            if (USER_DATA.progress[chaps[c].id] && USER_DATA.progress[chaps[c].id] >= 100) {
                revisites++;
            }
        }
    }
    
    document.getElementById('totalChapitres').textContent = totalChapitres;
    document.getElementById('revisites').textContent = totalChapitres > 0 ? Math.round(revisites / totalChapitres * 100) + '%' : '0%';
    
    var quizTotal = Object.keys(USER_DATA.quizResults || {}).length;
    var quizOk = Object.values(USER_DATA.quizResults || {}).filter(function(v) { return v >= 80; }).length;
    document.getElementById('quizReussis').textContent = quizTotal > 0 ? Math.round(quizOk / quizTotal * 100) + '%' : '0%';
    document.getElementById('tempsTotal').textContent = Math.floor(tempsTotal / 60) + 'h' + (tempsTotal % 60) + 'm';
    
    // Progression par année
    var progressHtml = '';
    for (var a2 = 0; a2 < annees.length; a2++) {
        var annee = annees[a2];
        var chaps2 = CHAPITRES[annee];
        var total = chaps2.length;
        var done = 0;
        for (var c2 = 0; c2 < chaps2.length; c2++) {
            if (USER_DATA.progress[chaps2[c2].id] && USER_DATA.progress[chaps2[c2].id
