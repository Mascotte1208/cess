// =========================================================
// APP.JS - Logique principale (chargement optimisé)
// =========================================================

// ---- État utilisateur ----
var USER_DATA = { progress:{}, quizResults:{}, revisions:{}, streak:0 };
var favorisFormules = [];
var currentTab = 'dashboard';
var currentMatiere = 'maths';
var currentQuiz = { index:0, questions:[], answers:[], score:0, total:0 };
var currentExamen = { index:0, questions:[], answers:[], score:0, total:0, timer:null, timeLeft:0, niveau:'3e' };

// ---- Fusion des matières (après chargement des data) ----
var MATIERES = {
    'maths': CHAPITRES,
    'geographie': GEO_CHAPITRES
};

var MATIERE_INFO = {
    'maths': { nom: 'Mathématiques', icone: '📐' },
    'geographie': { nom: 'Géographie', icone: '🌍' }
};

// ---- Construction UNIQUE des questions de quiz (optimisé) ----
var QUESTIONS_QUIZ = [];

function buildQuestionsQuiz() {
    QUESTIONS_QUIZ = [];
    for (var matiere in MATIERES) {
        for (var annee in MATIERES[matiere]) {
            var chaps = MATIERES[matiere][annee];
            for (var c = 0; c < chaps.length; c++) {
                var chap = chaps[c];
                if (chap.exercices) {
                    for (var e = 0; e < chap.exercices.length; e++) {
                        var ex = chap.exercices[e];
                        QUESTIONS_QUIZ.push({
                            id: 'q' + QUESTIONS_QUIZ.length,
                            matiere: matiere,
                            annee: annee,
                            chapitre: chap.id,
                            question: ex.question,
                            options: ex.options,
                            correct: ex.correct,
                            correction: ex.correction || ''
                        });
                    }
                }
            }
        }
    }
}

// ---- LocalStorage ----
function loadUserData(){
    try {
        var saved = localStorage.getItem('cesMathData');
        if (saved) {
            var parsed = JSON.parse(saved);
            for (var key in parsed) USER_DATA[key] = parsed[key];
        }
        var favs = localStorage.getItem('cesMathFavoris');
        if (favs) favorisFormules = JSON.parse(favs);
    } catch (e) {
        console.warn('Impossible de charger les données sauvegardées :', e);
    }
}

function saveUserData(){
    try {
        localStorage.setItem('cesMathData', JSON.stringify(USER_DATA));
        localStorage.setItem('cesMathFavoris', JSON.stringify(favorisFormules));
    } catch (e) {
        console.warn('Impossible de sauvegarder les données :', e);
    }
}

// =========================================================
// NAVIGATION
// =========================================================
function showTab(tab){
    currentTab = tab;
    var tabs = ['dashboard','cours','formules','entrainer','suivi'];
    for (var i=0;i<tabs.length;i++){
        var el = document.getElementById(tabs[i]);
        if (el) el.classList.add('hidden');
        var navEl = document.getElementById('nav'+tabs[i].charAt(0).toUpperCase()+tabs[i].slice(1));
        if (navEl) navEl.classList.remove('active');
    }
    var target = document.getElementById(tab);
    if (target) target.classList.remove('hidden');
    var navTarget = document.getElementById('nav'+tab.charAt(0).toUpperCase()+tab.slice(1));
    if (navTarget) navTarget.classList.add('active');

    if (tab==='dashboard') renderDashboard();
    if (tab==='cours') renderMatiereSelector();
    if (tab==='formules') renderFormules();
    if (tab==='entrainer') updateQuizChapitres();
    if (tab==='suivi') renderSuivi();
}

function goHome(){ showTab('dashboard'); }

function toggleTheme(){
    document.body.classList.toggle('dark');
    var btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = document.body.classList.contains('dark') ? '☀️ Mode clair' : '🌙 Mode sombre';
}

// =========================================================
// MATIÈRE ET COURS
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
        var desc = (matiere === 'maths') ? ANNEE_DESC[a] : 'Chapitres de géographie';
        html += `<div class="annee-card" style="--tab-color:${col.c}; --tab-color-light:${col.l};" onclick="showAnnee('${a}')">
                    <span class="annee-icon">${a}</span>
                    <div class="annee-info"><h3>${a} Année</h3><p>${desc}</p></div>
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
        for (var annee in MATIERES[m]) chapsM = chapsM.concat(MATIERES[m][annee] || []);
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
        var chaps = MATIERES[matiere][annee] || [];
        for (var c=0; c<chaps.length; c++) if ((USER_DATA.progress[chaps[c].id]||0) < 30) urgents.push(chaps[c]);
    }
    var urgentHtml = urgents.length === 0 ? '<div style="color:var(--vert);font-weight:800;">🎉 Tout est en bonne voie !</div>' : '';
    for (var u=0; u<Math.min(3, urgents.length); u++){
        urgentHtml += `<div class="urgent-item"><span>${urgents[u].icone} ${urgents[u].titre}</span><b>${USER_DATA.progress[urgents[u].id]||0}%</b></div>`;
    }
    document.getElementById('chapitresUrgents').innerHTML = urgentHtml;

    // Formules du jour (optimisé)
    renderFormulesDuJour();
    
    renderSuivi();
}

function renderFormulesDuJour() {
    var container = document.getElementById('formulesDuJour');
    if (!container) return;

    var allFormules = [];
    for (var cat in FORMULES_DATA) {
        allFormules = allFormules.concat(FORMULES_DATA[cat]);
    }
    // Prendre 3 formules au hasard
    var selected = shuffle(allFormules).slice(0, 3);
    var html = '';
    for (var i = 0; i < selected.length; i++) {
        var f = selected[i];
        html += `<div class="formule-mini">
                    <b>${f.icone} ${f.titre}</b>
                    ${f.definition}
                 </div>`;
    }
    container.innerHTML = html;
}

function renderSuivi(){
    var totalChapitres = 0, revisites = 0;
    for (var matiere in MATIERES) for (var annee in MATIERES[matiere]){
        var chaps = MATIERES[matiere][annee] || [];
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
    document.getElementById('favorisList').innerHTML = favorisFormules.length > 0 ? favorisFormules.map(function(id){ 
        var f = null; 
        for (var cat in FORMULES_DATA) for (var i=0;i<FORMULES_DATA[cat].length;i++) if (FORMULES_DATA[cat][i].id === id) f = FORMULES_DATA[cat][i]; 
        return f ? `<div>${f.icone} ${f.titre}</div>` : ''; 
    }).join('') : '<div class="fav-empty">Aucun favori pour l\u2019instant — étoilez une formule.</div>';
}

function getBadges(){
    var total = 0, revisites = 0;
    for (var matiere in MATIERES) for (var annee in MATIERES[matiere]){
        var chaps = MATIERES[matiere][annee] || [];
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
// FORMULES
// =========================================================
function renderFormules(){
    var searchInput = document.getElementById('formuleSearch');
    var search = searchInput ? searchInput.value.toLowerCase() : '';
    var list = document.getElementById('formulesList');
    var html = '', total = 0;
    for (var categorie in FORMULES_DATA){
        var formules = FORMULES_DATA[categorie];
        for (var i=0;i<formules.length;i++){
            var f = formules[i];
            if (search && f.titre.toLowerCase().indexOf(search) === -1 && f.definition.toLowerCase().indexOf(search) === -1) continue;
            total++;
            var estFavori = favorisFormules.indexOf(f.id) !== -1;
            var colorVar = CAT_COLOR[categorie] || '--bleu';
            var colorLight = CAT_COLOR_LIGHT[categorie] || '--bleu-clair';
            html += '<div class="formule-card" data-cat="'+categorie+'">';
            html += '<div class="formule-header">';
            html += '<span class="formule-icon">'+f.icone+'</span>';
            html += '<span class="formule-title">'+f.titre+'</span>';
            html += '<span class="formule-categorie" style="background:var('+colorLight+');color:var('+colorVar+');">'+f.categorie+'</span>';
            html += '</div>';
            html += '<div class="formule-definition">'+f.definition+'</div>';
            html += '<div class="formule-math">'+f.exemple+'</div>';
            html += '<div class="formule-actions"><button onclick="toggleFavoriFormule(\''+f.id+'\')">'+(estFavori?'⭐':'☆')+' Favori</button></div>';
            html += '</div>';
        }
    }
    document.getElementById('formulesCount').textContent = total;
    list.innerHTML = total === 0 ? '<div style="text-align:center;padding:40px;color:var(--ink-soft);">Aucune formule trouvée.</div>' : html;
}

function rechercherFormule(){ renderFormules(); }

function filtrerFormules(categorie, btn){
    document.getElementById('formuleSearch').value = '';
    var pills = document.querySelectorAll('.filtres-pills .pill');
    for (var i=0;i<pills.length;i++) pills[i].classList.remove('active');
    if (btn) btn.classList.add('active');
    renderFormules();
    var cards = document.querySelectorAll('#formulesList .formule-card');
    for (var c=0;c<cards.length;c++) cards[c].style.display = (categorie === 'all' || cards[c].getAttribute('data-cat') === categorie) ? 'block' : 'none';
}

function toggleFavoriFormule(id){
    var index = favorisFormules.indexOf(id);
    if (index !== -1) favorisFormules.splice(index, 1); else favorisFormules.push(id);
    saveUserData();
    renderFormules();
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
        buttons[i].classList.add('locked');
        if (i === q.correct) buttons[i].classList.add('correct');
        if (i === index && !isCorrect) buttons[i].classList.add('wrong');
    }
    if (isCorrect){ currentQuiz.score++; USER_DATA.streak++; } else USER_DATA.streak = 0;
    saveUserData();
    
    var feedback = isCorrect 
        ? `<div class="quiz-result correct">✅ Bonne réponse !</div>` 
        : `<div class="quiz-result wrong">❌ Pas tout à fait.<br><small>${q.correction || ''}</small></div>`;
    
    document.getElementById('quizFeedback').innerHTML = feedback + 
        `<button class="primary-btn" onclick="nextQuizQuestion()" style="margin-top:12px;">Question suivante →</button>`;
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
        buttons[i].classList.add('locked');
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
// UTILITAIRES
// =========================================================
function shuffle(array){ 
    var copy = array.slice(); 
    for (var i=copy.length-1;i>0;i--){ 
        var j = Math.floor(Math.random()*(i+1)); 
        var temp = copy[i]; 
        copy[i] = copy[j]; 
        copy[j] = temp; 
    } 
    return copy; 
}

function startRevision(){ showTab('cours'); }

// =========================================================
// JEU DES CAPITALES
// =========================================================
var currentCapitales = { index:0, questions:[], score:0, total:0 };

function startJeuCapitales() {
    if (typeof CAPITALES === 'undefined' || CAPITALES.length === 0) {
        alert('Données des capitales non chargées.');
        return;
    }
    // Prendre 10 pays au hasard
    var selected = shuffle(CAPITALES.slice()).slice(0, 10);
    currentCapitales.questions = selected;
    currentCapitales.index = 0;
    currentCapitales.score = 0;
    currentCapitales.total = selected.length;
    
    showTab('entrainer');
    renderCapitalesQuestion();
}

function renderCapitalesQuestion() {
    var container = document.getElementById('quizContent');
    if (currentCapitales.index >= currentCapitales.total) {
        showCapitalesResult();
        return;
    }
    
    var q = currentCapitales.questions[currentCapitales.index];
    
    // Créer 4 options (1 correcte + 3 fausses)
    var options = [q.capitale];
    var autres = CAPITALES.filter(function(c){ return c.capitale !== q.capitale; });
    autres = shuffle(autres);
    for (var i = 0; i < 3 && i < autres.length; i++) {
        options.push(autres[i].capitale);
    }
    options = shuffle(options);
    
    var correctIndex = options.indexOf(q.capitale);
    
    var html = `<div class="quiz-question">
        <div class="quiz-topline" style="margin-bottom:10px;">
            <span>Question ${currentCapitales.index + 1} / ${currentCapitales.total}</span>
            <span>Score : ${currentCapitales.score}</span>
        </div>
        <div class="question-text">Quelle est la capitale de <b>${q.pays}</b> ?</div>
        <div class="quiz-options">`;
    
    for (var i = 0; i < options.length; i++) {
        html += `<button onclick="answerCapitale(${i}, ${correctIndex}, '${q.capitale.replace(/'/g, "\\'")}')">${String.fromCharCode(65+i)}. ${options[i]}</button>`;
    }
    
    html += `</div><div id="quizFeedback"></div></div>`;
    container.innerHTML = html;
}

function answerCapitale(index, correctIndex, bonneReponse) {
    var isCorrect = index === correctIndex;
    var buttons = document.querySelectorAll('#quizContent .quiz-options button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add('locked');
        if (i === correctIndex) buttons[i].classList.add('correct');
        if (i === index && !isCorrect) buttons[i].classList.add('wrong');
    }
    
    if (isCorrect) {
        currentCapitales.score++;
        USER_DATA.streak++;
    } else {
        USER_DATA.streak = 0;
    }
    saveUserData();
    
    var feedback = isCorrect 
        ? `<div class="quiz-result correct">✅ Bonne réponse !</div>` 
        : `<div class="quiz-result wrong">❌ La capitale est <b>${bonneReponse}</b></div>`;
    
    document.getElementById('quizFeedback').innerHTML = feedback + 
        `<button class="primary-btn" onclick="nextCapitale()" style="margin-top:12px;">Question suivante →</button>`;
}

function nextCapitale() {
    currentCapitales.index++;
    renderCapitalesQuestion();
}

function showCapitalesResult() {
    var percent = Math.round(currentCapitales.score / currentCapitales.total * 100);
    USER_DATA.quizResults['capitales_' + new Date().getTime()] = percent;
    saveUserData();
    
    document.getElementById('quizContent').innerHTML = `
        <div class="panel" style="text-align:center;">
            <h2>🌍 Jeu des Capitales terminé !</h2>
            <h1 style="font-family:var(--font-head);font-size:42px;">${percent}%</h1>
            <p style="margin:12px 0;color:var(--ink-soft);">${currentCapitales.score} / ${currentCapitales.total} bonnes réponses</p>
            <button class="primary-btn" onclick="startJeuCapitales()">Rejouer</button>
            <button class="ghost-btn" style="margin-left:8px;" onclick="showTab('entrainer')">Retour</button>
        </div>`;
    renderSuivi();
}

// =========================================================
// INITIALISATION (optimisée)
// =========================================================
function initApp() {
    // 1. Charger les données utilisateur
    loadUserData();
    
    // 2. Construire les questions une seule fois
    buildQuestionsQuiz();
    
    // 3. Afficher le dashboard
    showTab('dashboard');
}

// Démarrer l'application
initApp();
