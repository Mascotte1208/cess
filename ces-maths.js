// =========================================================
// DONNÉES - MATHÉMATIQUES CESS (4E ANNÉE COMPLÈTE)
// =========================================================

var CHAPITRES = {
    '4e': [
        { 
            id: '4e_algebre', 
            titre: '🔢 Algèbre', 
            desc: 'Équations, inéquations, systèmes, factorisation',
            niveau: 'Fondamental',
            icone: '🔢',
            fiches: [
                { titre: 'Équations du 1er degré', contenu: 'Résoudre ax + b = c', exemple: '2x + 3 = 7 → x = 2' },
                { titre: 'Inéquations', contenu: 'Résoudre ax + b < c', exemple: '2x + 3 < 7 → x < 2' },
                { titre: 'Systèmes d\'équations', contenu: 'Méthode par substitution ou combinaison', exemple: 'x + y = 5, 2x - y = 4 → x = 3, y = 2' },
                { titre: 'Factorisation', contenu: 'Mise en évidence, produit remarquable', exemple: 'x² - 4 = (x-2)(x+2)' }
            ],
            exercices: [
                { question: 'Résoudre : 2x + 3 = 11', options: ['x = 4', 'x = 5', 'x = 3', 'x = 7'], correct: 0, correction: '2x = 8 → x = 4' },
                { question: 'Résoudre : 3x - 2 = 13', options: ['x = 5', 'x = 4', 'x = 6', 'x = 3'], correct: 0, correction: '3x = 15 → x = 5' },
                { question: 'Résoudre : 4x - 5 = 15', options: ['x = 5', 'x = 4', 'x = 6', 'x = 3'], correct: 0, correction: '4x = 20 → x = 5' },
                { question: 'Factoriser : x² - 9', options: ['(x-3)(x+3)', '(x-3)²', '(x+3)²', 'x²-9'], correct: 0, correction: 'Identité remarquable a²-b² = (a-b)(a+b)' }
            ]
        },
        { 
            id: '4e_geometrie', 
            titre: '📐 Géométrie', 
            desc: 'Triangles, quadrilatères, Pythagore, Thalès',
            niveau: 'Fondamental',
            icone: '📐',
            fiches: [
                { titre: 'Théorème de Pythagore', contenu: 'a² + b² = c² (triangle rectangle)', exemple: '3² + 4² = 5² → 9 + 16 = 25' },
                { titre: 'Triangles remarquables', contenu: 'Isocèle, équilatéral, rectangle', exemple: 'Triangle isocèle = 2 côtés égaux' },
                { titre: 'Quadrilatères', contenu: 'Carré, rectangle, losange, parallélogramme', exemple: 'Carré = 4 côtés égaux, 4 angles droits' },
                { titre: 'Théorème de Thalès', contenu: 'Règle de proportionnalité', exemple: 'AB/AC = AD/AE' }
            ],
            exercices: [
                { question: 'Quel est le théorème de Pythagore ?', options: ['a² + b² = c²', 'a + b = c', 'a × b = c', 'a² = b² + c²'], correct: 0, correction: 'a² + b² = c²' },
                { question: 'Quelle est la somme des angles d\'un triangle ?', options: ['180°', '90°', '360°', '270°'], correct: 0, correction: '180°' },
                { question: 'Quel quadrilatère a 4 côtés égaux et 4 angles droits ?', options: ['Carré', 'Rectangle', 'Losange', 'Parallélogramme'], correct: 0, correction: 'Le carré' },
                { question: 'Dans un triangle rectangle, l\'hypoténuse est...', options: ['Le plus grand côté', 'Le plus petit côté', 'Le côté adjacent', 'La hauteur'], correct: 0, correction: 'Le plus grand côté' }
            ]
        },
        { 
            id: '4e_statistiques', 
            titre: '📊 Statistiques', 
            desc: 'Moyenne, médiane, mode, diagrammes',
            niveau: 'Fondamental',
            icone: '📊',
            fiches: [
                { titre: 'Moyenne', contenu: 'Somme des valeurs / nombre de valeurs', exemple: '3+5+7+9+11 = 35 → 35/5 = 7' },
                { titre: 'Médiane', contenu: 'Valeur qui coupe la série en 2', exemple: '3,5,7,9,11 → médiane = 7' },
                { titre: 'Mode', contenu: 'Valeur la plus fréquente', exemple: '3,5,5,7,9 → mode = 5' },
                { titre: 'Diagrammes', contenu: 'Histogramme, diagramme circulaire, nuage de points', exemple: 'Histogramme = barres' }
            ],
            exercices: [
                { question: 'Quelle est la médiane de 3, 5, 7, 9, 11 ?', options: ['7', '6', '8', '5'], correct: 0, correction: 'La valeur du milieu est 7' },
                { question: 'Quelle est la moyenne de 4, 6, 8, 10, 12 ?', options: ['8', '7', '9', '6'], correct: 0, correction: '(4+6+8+10+12)/5 = 40/5 = 8' },
                { question: 'Qu\'est-ce que le mode dans une série statistique ?', options: ['La valeur la plus fréquente', 'La moyenne', 'La médiane', 'L\'étendue'], correct: 0, correction: 'Le mode est la valeur la plus fréquente' },
                { question: 'Comment calcule-t-on la moyenne ?', options: ['Somme/nombre', 'Nombre/somme', 'Produit/nombre', 'Somme/produit'], correct: 0, correction: 'Somme divisée par le nombre de valeurs' }
            ]
        },
        { 
            id: '4e_probabilites', 
            titre: '🎲 Probabilités', 
            desc: 'Notions de base, arbres de probabilité',
            niveau: 'Fondamental',
            icone: '🎲',
            fiches: [
                { titre: 'Probabilité', contenu: 'Nombre de cas favorables / nombre de cas possibles', exemple: 'P(pile) = 1/2' },
                { titre: 'Arbre de probabilité', contenu: 'Représentation des probabilités en arbre', exemple: 'Pile/Face → 2 branches' },
                { titre: 'Événements', contenu: 'Certain, impossible, probable', exemple: 'P(certain) = 1, P(impossible) = 0' },
                { titre: 'Loi des grands nombres', contenu: 'La probabilité se stabilise avec un grand nombre d\'expériences', exemple: '1000 lancers de pièce → 50% pile' }
            ],
            exercices: [
                { question: 'Quelle est la probabilité de tomber sur pile avec une pièce ?', options: ['1/2', '1/4', '1/3', '2/3'], correct: 0, correction: 'P(pile) = 1/2' },
                { question: 'Quelle est la probabilité de tomber sur 3 avec un dé ?', options: ['1/6', '1/3', '1/2', '1/4'], correct: 0, correction: 'P(3) = 1/6' },
                { question: 'Quelle est la probabilité d\'un événement certain ?', options: ['1', '0', '0.5', '2'], correct: 0, correction: 'Un événement certain a une probabilité de 1' },
                { question: 'Quelle est la probabilité d\'un événement impossible ?', options: ['0', '1', '0.5', '2'], correct: 0, correction: 'Un événement impossible a une probabilité de 0' }
            ]
        }
    ],
    '5e': [], // À remplir plus tard
    '6e': []  // À remplir plus tard
};

// ---- QUESTIONS DE QUIZ ----
var QUESTIONS_QUIZ = [];

// Générer les questions à partir des chapitres
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

// ---- DONNÉES UTILISATEUR ----
var USER_DATA = {
    progress: {},
    quizResults: {},
    totalTime: 0,
    revisions: {},
    chapitreScores: {}
};

// ---- ÉTAT ----
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
    var tabs = ['dashboard', 'annee4', 'annee5', 'annee6', 'quiz', 'examens', 'revisions'];
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
    
    var annees = ['4e', '5e', '6e'];
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
        var label = annee === '4e' ? '📖 4e Année' : annee === '5e' ? '📖 5e Année' : '📖 6e Année';
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
                    <span>${chap.fiches ? chap.fiches.length : 0} fiches</span>
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
        max-width: 700px; width: 100%; max-height: 90vh;
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
        <p style="color: var(--muted); margin-bottom: 16px;">${found.desc} • Niveau: ${found.niveau}</p>
        
        <div style="margin: 16px 0; display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="primary-btn" onclick="startChapitreQuiz('${found.id}')">🎯 Quiz du chapitre</button>
            <button class="ghost-btn" onclick="markChapitreDone('${found.id}')">✅ Marquer comme révisé</button>
            <button class="ghost-btn" onclick="document.body.removeChild(document.querySelector('div[style*=\\"position: fixed\\"]'))">← Retour</button>
        </div>
        
        <h3>📝 Fiches de révision</h3>
    `;
    
    if (found.fiches) {
        for (var f = 0; f < found.fiches.length; f++) {
            var fiche = found.fiches[f];
            html += `
                <div style="background: var(--soft); border-radius: 10px; padding: 14px; margin: 8px 0;">
                    <b>${fiche.titre}</b>
                    <p style="margin: 4px 0; font-size: 14px;">${fiche.contenu}</p>
                    <div style="background: var(--surface); border-radius: 6px; padding: 8px 12px; font-size: 13px; border-left: 3px solid var(--blue);">
                        📌 ${fiche.exemple}
                    </div>
                </div>
            `;
        }
    }
    
    if (found.exercices) {
        html += `<h3 style="margin-top: 16px;">🎯 Exercices</h3>`;
        for (var e = 0; e < found.exercices.length; e++) {
            var ex = found.exercices[e];
            html += `
                <div style="background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 14px; margin: 8px 0;">
                    <b>${ex.question}</b>
                    <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">
            `;
            for (var o = 0; o < ex.options.length; o++) {
                var isCorrect = o === ex.correct;
                html += `
                    <button style="text-align: left; padding: 8px 12px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); cursor: pointer; transition: all 0.2s;" 
                            onclick="checkExo(this, ${isCorrect}, '${ex.correction || ''}')">
                        ${String.fromCharCode(65 + o)}. ${ex.options[o]}
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
        // Marquer la bonne réponse
        var correctIndex = 0;
        for (var j = 0; j < buttons.length; j++) {
            var text = buttons[j].textContent;
            if (text.includes('✅') || text.includes('➡️')) continue;
            // On ne peut pas facilement identifier la bonne réponse, on laisse le feedback
        }
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
    renderChapitres('4e');
    renderChapitres('5e');
    renderChapitres('6e');
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
    currentExamen.answers = [];
    currentExamen.timeLeft = niveau === 'complet' ? 5400 : niveau === '6e' ? 3000 : niveau === '5e' ? 2400 : 1800;
    
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
                <button class="primary-btn" onclick="startExamen('${currentExamen.questions[0]?.annee || '4e'}')">🔄 Refaire l'examen</button>
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
        var label = annee === '4e' ? '4e Année' : annee === '5e' ? '5e Année' : '6e Année';
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
        renderChapitres('4e');
        renderChapitres('5e');
        renderChapitres('6e');
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

console.log('📚 CESS - Mathématiques 4e année chargé !');
console.log('📖 Chapitres disponibles :', Object.keys(CHAPITRES).length);
console.log('🎯 Questions de quiz :', QUESTIONS_QUIZ.length);
