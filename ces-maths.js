// =========================================================
// APP PRINCIPALE : GESTION DES MATIÈRES (Maths + Géo)
// =========================================================

// 1. Fusion des données Maths (définies ci-dessous) et Géo (chargées depuis geo-data.js)
var MATIERES = {
    'maths': CHAPITRES,
    'geographie': GEO_CHAPITRES
};

var MATIERE_INFO = {
    'maths': { nom: 'Mathématiques', icone: '📐' },
    'geographie': { nom: 'Géographie', icone: '🌍' }
};

var ANNEE_COLOR = {'3e':{c:'#1c5fa8', l:'#e8f0fe'}, '4e':{c:'#6b46c1', l:'#f1ebfb'}, '5e':{c:'#0e7c86', l:'#e4f5f6'}, '6e':{c:'#c81e2c', l:'#fdecea'}};
var ANNEE_DESC = {'3e':'Risques, Fonctions, Algèbre...', '4e':'Eau, Nourriture, 2nd degré...', '5e':'Énergie, Analyse, Complexes...', '6e':'Aménagement, Dérivées, Suites...'};

var currentMatiere = 'maths';

// =========================================================
// DONNÉES UTILISATEUR & ÉTAT
// =========================================================
var USER_DATA = { progress:{}, quizResults:{}, revisions:{}, streak:0 };
var favorisFormules = [];
var currentTab = 'dashboard';
var currentQuiz = { index:0, questions:[], score:0, total:0 };
var currentExamen = { index:0, questions:[], score:0, total:0, timer:null, timeLeft:0, niveau:'3e' };

// 2. Génération des questions de quiz (depuis les deux matières)
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

// =========================================================
// SAUVEGARDE
// =========================================================
function loadUserData(){
    try { var saved = localStorage.getItem('cesMathData'); if (saved) USER_DATA = JSON.parse(saved); } catch(e){}
    try { var favs = localStorage.getItem('cesMathFavoris'); if (favs) favorisFormules = JSON.parse(favs); } catch(e){}
}
function saveUserData(){
    localStorage.setItem('cesMathData', JSON.stringify(USER_DATA));
    localStorage.setItem('cesMathFavoris', JSON.stringify(favorisFormules));
}

// =========================================================
// NAVIGATION
// =========================================================
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

// =========================================================
// COURS : NAVIGATION MATIÈRE -> ANNÉE -> CHAPITRE
// =========================================================
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

// =========================================================
// CHAPITRE & QUIZ
// =========================================================
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

// =========================================================
// DASHBOARD & STATS
// =========================================================
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

// =========================================================
// QUIZ & EXAMENS
// =========================================================
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

// EXAMENS
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

// =========================================================
// FORMULES & DONNÉES MATHS
// =========================================================

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
        {id:'stat_2', titre:'Écart-type', definition:'σ = √Variance', exemple:'Mesure la dispersion', icone:'📊', categorie:'Statistiques'}
    ],
    complexes: [
        {id:'comp_1', titre:'Module', definition:'|z| = √(a² + b²)', exemple:'|3+4i| = 5', icone:'ℂ', categorie:'Nombres complexes'}
    ]
};

// 3. DÉFINITION DES CHAPITRES DE MATHS
var CHAPITRES = {
    '3e': [
        {id:'3e_fonctions', titre:"1. Approche graphique d'une fonction", desc:'UAA3 — Comprendre les machines, les graphiques', niveau:'3e', icone:'📈', color:'#3182ce',
            cours:`<h4>C'est quoi une fonction ?</h4><p>Une fonction est comme une <b>machine à transformer les nombres</b>.</p><h4>Vocabulaire</h4><ul><li><b>Antécédent (x)</b> : le nombre qui entre.</li><li><b>Image (y ou f(x))</b> : le nombre qui sort.</li></ul>`,
            objectifs:['Comprendre la notion de fonction'], matieres:['Vocabulaire'], 
            exercices:[{question:"Qu'est-ce qu'une fonction ?", options:['Une relation qui donne au plus une image par antécédent','Une relation qui donne plusieurs images','Une machine qui additionne','Un tableau de valeurs'], correct:0, correction:'Une fonction associe à chaque x au plus un seul y.'}]},
        {id:'3e_algebre', titre:'2. Polynômes & Factorisation', desc:'UAA5 — Calculs et identités', niveau:'3e', icone:'🔢', color:'#e53e3e',
            cours:`<h4>Produits remarquables</h4><ul><li><b>(a + b)²</b> = a² + 2ab + b²</li><li><b>a² - b²</b> = (a - b)(a + b)</li></ul>`,
            objectifs:['Maîtriser les produits remarquables'], matieres:['Identités remarquables'],
            exercices:[{question:'Factoriser : x² - 9', options:['(x-3)(x+3)','(x-3)²','(x+3)²','x²-9'], correct:0, correction:'a² - b² = (a-b)(a+b)'}]},
        {id:'3e_pythagore', titre:'3. Théorème de Pythagore', desc:'UAA2 — Le triangle rectangle', niveau:'3e', icone:'📐', color:'#805ad5',
            cours:`<h4>Le théorème</h4><p>a² + b² = c²</p>`,
            objectifs:['Utiliser le théorème'], matieres:['Triangle rectangle'],
            exercices:[{question:'Quel est le théorème de Pythagore ?', options:['a² + b² = c²','a + b = c','a × b = c','a² = b² + c²'], correct:0, correction:'Dans un triangle rectangle, a² + b² = c²'}]},
        {id:'3e_thales', titre:'4. Théorème de Thalès', desc:'UAA1 — Les proportions', niveau:'3e', icone:'📐', color:'#319795',
            cours:`<h4>Le théorème</h4><p>AB / AC = AD / AE</p>`,
            objectifs:['Reconnaître une configuration'], matieres:['Proportions'],
            exercices:[{question:'Dans une configuration de Thalès, si AB/AC = AD/AE, que peut-on en déduire ?', options:['BD // CE','AB // CD','AC // DE','AB // DE'], correct:0, correction:'D\u2019après Thalès, BD // CE'}]}
    ],
    '4e': [
        {id:'4e_polynomes', titre:'1. Équations du 2e degré', desc:'UAA5 — Discriminant', niveau:'4e', icone:'🔢', color:'#e53e3e',
            cours:`<h4>Le discriminant</h4><p><b>Δ = b² - 4ac</b></p>`,
            objectifs:['Calculer le discriminant'], matieres:['Discriminant'],
            exercices:[{question:'Quelle est la formule du discriminant Δ ?', options:['b² - 4ac','b² + 4ac','a² - 4bc','c² - 4ab'], correct:0, correction:'Δ = b² - 4ac'}]},
        {id:'4e_vecteurs', titre:'2. Calcul vectoriel', desc:'UAA3 — Produit scalaire', niveau:'4e', icone:'➡️', color:'#805ad5',
            cours:`<h4>Produit scalaire</h4><p>u·v = ||u|| × ||v|| × cos(α)</p>`,
            objectifs:['Calculer un produit scalaire'], matieres:['Produit scalaire'],
            exercices:[{question:'Le produit scalaire de deux vecteurs orthogonaux vaut...', options:['0','1','-1','∞'], correct:0, correction:'Il est nul.'}]}
    ],
    '5e': [
        {id:'5e_limites', titre:'1. Limites de fonctions', desc:'UAA1 — Analyse', niveau:'5e', icone:'📈', color:'#3182ce',
            cours:`<h4>Formes indéterminées</h4><p><b>0/0</b>, <b>∞/∞</b>, <b>∞ - ∞</b></p>`,
            objectifs:['Lever une forme indéterminée'], matieres:['Limites'],
            exercices:[{question:'Limite de 1/x quand x → +∞ ?', options:['0','+∞','1','-∞'], correct:0, correction:'Elle tend vers 0.'}]},
        {id:'5e_derivees', titre:'2. Introduction à la dérivée', desc:'UAA1 — Taux de variation', niveau:'5e', icone:'📐', color:'#e53e3e',
            cours:`<h4>Dérivées usuelles</h4><ul><li>(xⁿ)' = n·xⁿ⁻¹</li></ul>`,
            objectifs:['Dériver une fonction'], matieres:['Dérivée'],
            exercices:[{question:'Dérivée de x³ ?', options:['3x²','x²','3x','x³'], correct:0, correction:'(x³)\' = 3x²'}]}
    ],
    '6e': [
        {id:'6e_derivees', titre:'1. Dérivées et étude de fonctions', desc:'UAA1 — Règles', niveau:'6e', icone:'📐', color:'#e53e3e',
            cours:`<h4>Signe de la dérivée</h4><p>Si f'(x) > 0, f est croissante.</p>`,
            objectifs:['Étudier le signe'], matieres:['Tableau de variation'],
            exercices:[{question:'Si f\u2019(x) > 0 sur un intervalle, alors f est...', options:['Croissante','Décroissante','Constante','Négative'], correct:0, correction:'Une dérivée positive = croissance.'}]},
        {id:'6e_integrales', titre:'2. Intégrales', desc:'UAA2 — Aire', niveau:'6e', icone:'∫', color:'#805ad5',
            cours:`<h4>Primitive</h4><p>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</p>`,
            objectifs:['Calculer une primitive'], matieres:['Primitives'],
            exercices:[{question:'Primitive de x ?', options:['x²/2','x²','2x','1'], correct:0, correction:'∫x dx = x²/2 + C'}]}
    ]
};

// =========================================================
// FORMULES & RECHERCHE
// =========================================================
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

// =========================================================
// UTILITAIRES
// =========================================================
function shuffle(array){ var copy = array.slice(); for (var i=copy.length-1;i>0;i--){ var j = Math.floor(Math.random()*(i+1)); var temp = copy[i]; copy[i] = copy[j]; copy[j] = temp; } return copy; }
function startRevision(){ showTab('cours'); }

// =========================================================
// INITIALISATION
// =========================================================
loadUserData();
showTab('dashboard');
