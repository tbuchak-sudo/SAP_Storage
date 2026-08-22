/**
 * 1. STATE LAYER (Handles localStorage and reactive updates)
 */
class AppState {
    constructor() {
        this.storageKey = 'sap_storage_lms_v2';
        this.progress = this.loadProgress();
    }

    loadProgress() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.error("Storage error", e);
            return {};
        }
    }

    saveProgress() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        this.notifyUI();
    }

    completeModule(moduleId) {
        this.progress[moduleId] = true;
        this.saveProgress();
    }

    isModuleCompleted(moduleId) {
        return !!this.progress[moduleId];
    }

    getProgressPercentage() {
        const total = AppData.modules.length;
        if (total === 0) return 0;
        const completed = Object.keys(this.progress).length;
        return Math.min(Math.round((completed / total) * 100), 100);
    }

    notifyUI() {
        const percent = this.getProgressPercentage();
        document.getElementById('progress-text').innerText = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
    }
}

/**
 * 2. COMPONENT LAYER (Generates HTML string from data)
 */
const Components = {
    Header: (title, badgeText, description) => `
        <div class="mb-8">
            ${badgeText ? `<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">${badgeText}</span>` : ''}
            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-2">${title}</h1>
            ${description ? `<p class="text-slate-500 text-lg">${description}</p>` : ''}
        </div>
    `,

    Home: () => `
        <div class="max-w-5xl mx-auto page-enter">
            <div class="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl mb-10 relative overflow-hidden">
                <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
                <div class="relative z-10">
                    <span class="bg-blue-600/40 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Внутрішній портал</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold mt-3 mb-4">SAP Storage</h1>
                    <p class="text-slate-300 text-lg max-w-2xl leading-relaxed">Навчіться розуміти складські процеси, логіку SAP та вирішувати реальні проблеми на сучасному рівні.</p>
                    <a href="#training" class="inline-block mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-900/50">
                        Розпочати навчання →
                    </a>
                </div>
            </div>

            <h2 class="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Швидкий старт
            </h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${AppData.modules.slice(0,3).map((m, i) => `
                    <a href="#sap/${m.id}" class="block bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                        <div class="text-blue-600 font-bold text-sm mb-1 group-hover:text-blue-700">Модуль ${i+1}</div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900">${m.title}</h3>
                        <p class="text-slate-500 text-sm line-clamp-2">${m.desc}</p>
                    </a>
                `).join('')}
                <a href="#procedures" class="block bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all group">
                    <div class="text-green-600 font-bold text-sm mb-1 group-hover:text-green-700">Практика</div>
                    <h3 class="text-xl font-bold mb-2 text-slate-900">Кейси</h3>
                    <p class="text-slate-500 text-sm line-clamp-2">Вирішення реальних виробничих проблем.</p>
                </a>
            </div>
        </div>
    `,

    Training: (state) => `
        <div class="max-w-4xl mx-auto page-enter">
            ${Components.Header('Навчальний маршрут', null, 'Пройдіть кожен крок послідовно для повного розуміння складу.')}
            
            <div class="space-y-4">
                ${AppData.modules.map((m, index) => {
                    const isDone = state.isModuleCompleted(m.id);
                    return `
                    <div class="bg-white p-6 rounded-2xl border ${isDone ? 'border-green-200 bg-green-50/10' : 'border-slate-200'} flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow gap-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl ${isDone ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'} flex items-center justify-center font-bold text-lg flex-shrink-0">
                                ${isDone ? '✓' : index + 1}
                            </div>
                            <div>
                                <h3 class="text-lg font-bold ${isDone ? 'text-green-900' : 'text-slate-900'}">${m.title}</h3>
                                <p class="text-slate-500 text-sm">${m.desc}</p>
                            </div>
                        </div>
                        <a href="#sap/${m.id}" class="w-full sm:w-auto px-6 py-2.5 ${isDone ? 'bg-white border border-green-300 text-green-700 hover:bg-green-50' : 'bg-slate-900 text-white hover:bg-blue-600'} font-bold rounded-xl text-sm transition-colors text-center shadow-sm">
                            ${isDone ? 'Повторити' : 'Вивчити'}
                        </a>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    `,

    ModuleDetail: (module, state) => `
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 page-enter relative">
            <a href="#training" class="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                Назад до модулів
            </a>
            
            ${Components.Header(module.title, 'Теорія')}
            
            <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg">
                ${module.content}
            </div>
            
            <div class="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                <button onclick="window.app.completeModule('${module.id}')" class="flex items-center px-8 py-3.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all shadow-lg shadow-green-900/20 transform hover:-translate-y-0.5">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Завершити модуль
                </button>
            </div>
        </div>
    `,

    Directory: () => `
        <div class="max-w-4xl mx-auto page-enter">
            ${Components.Header('Довідник SAP', null, 'Швидка довідка по основних інструментах.')}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><strong class="text-blue-600 text-lg block mb-1">COOIS</strong> Аналіз виробничих замовлень та потреб</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><strong class="text-blue-600 text-lg block mb-1">COGI</strong> Обробка помилок руху матеріалів</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><strong class="text-blue-600 text-lg block mb-1">ZEBWM</strong> Складські комірки та статуси залишків</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"><strong class="text-blue-600 text-lg block mb-1">MB51</strong> Історія та документи рухів матеріалу</div>
            </div>
        </div>
    `,

    ProceduresList: () => `
        <div class="max-w-4xl mx-auto page-enter">
            ${Components.Header('Порядки роботи', null, 'Офіційні алгоритми дій на базі стандартів підприємства.')}
            <div class="space-y-4">
                ${AppData.procedures.map(p => `
                    <a href="#procedures/${p.id}" class="block p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
                        <div class="flex items-start justify-between mb-2">
                            <h3 class="font-bold text-slate-900 text-xl group-hover:text-blue-700 transition-colors">${p.title}</h3>
                            <span class="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-bold border border-slate-200 ml-4 whitespace-nowrap">${p.code}</span>
                        </div>
                        <p class="text-sm text-slate-600">${p.shortDesc}</p>
                    </a>
                `).join('')}
            </div>
        </div>
    `,

    ProcedureDetail: (procedure) => `
        <div class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 page-enter">
            <a href="#procedures" class="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                Назад до списку
            </a>
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-100 pb-8">
                <h1 class="text-3xl font-extrabold text-slate-900 leading-tight">${procedure.title}</h1>
                <span class="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold border border-blue-100 self-start sm:self-auto whitespace-nowrap shadow-sm">
                    ${procedure.code}
                </span>
            </div>
            
            <div class="space-y-6">
                ${procedure.blocks.map(block => {
                    const styles = {
                        blue: { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-900', marker: 'text-blue-500' },
                        red: { bg: 'bg-red-50', border: 'border-red-200', title: 'text-red-900', marker: 'text-red-500' },
                        slate: { bg: 'bg-slate-50', border: 'border-slate-200', title: 'text-slate-900', marker: 'text-slate-400' }
                    };
                    const s = styles[block.style] || styles.slate;
                    
                    return `
                        <div class="${s.bg} p-6 rounded-2xl border ${s.border}">
                            <h3 class="font-bold text-lg ${s.title} mb-3 flex items-center gap-2">
                                ${block.title}
                            </h3>
                            ${block.desc ? `<p class="text-sm ${s.title} opacity-90 mb-4">${block.desc}</p>` : ''}
                            
                            <ul class="space-y-2.5">
                                ${block.items.map(item => `
                                    <li class="flex items-start text-sm text-slate-700">
                                        <span class="${s.marker} mr-2 mt-0.5">•</span>
                                        <span class="leading-relaxed">${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            
                            ${block.footer ? `
                                <div class="mt-5 p-4 bg-white/60 rounded-xl border border-white/50 text-sm text-slate-800 shadow-sm">
                                    ${block.footer}
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `,

    NotFound: () => `
        <div class="max-w-xl mx-auto text-center py-20 page-enter">
            <div class="w-20 h-20 bg-slate-100 text-slate-400 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
                🔍
            </div>
            <h2 class="text-3xl font-extrabold text-slate-900 mb-3">Сторінку не знайдено</h2>
            <p class="text-slate-500 mb-8 text-lg">Вибачте, але розділ, який ви шукаєте, ще не розроблений або переміщений.</p>
            <a href="#home" class="inline-flex items-center px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                Повернутися на головну
            </a>
        </div>
    `
};

/**
 * 3. ROUTER LAYER (Handles URL hashes and view swapping)
 */
class Router {
    constructor(rootElement, stateManager) {
        this.root = rootElement;
        this.state = stateManager;
        
        this.routes = [
            { path: /^#home$/, render: () => Components.Home() },
            { path: /^#training$/, render: () => Components.Training(this.state) },
            { path: /^#directory$/, render: () => Components.Directory() },
            { path: /^#procedures$/, render: () => Components.ProceduresList() },
            { 
                path: /^#sap\/([a-z0-9_]+)$/, 
                render: (matches) => {
                    const module = AppData.modules.find(m => m.id === matches[1]);
                    return module ? Components.ModuleDetail(module, this.state) : Components.NotFound();
                }
            },
            { 
                path: /^#procedures\/([a-z0-9_]+)$/, 
                render: (matches) => {
                    const proc = AppData.procedures.find(p => p.id === matches[1]);
                    return proc ? Components.ProcedureDetail(proc) : Components.NotFound();
                }
            }
        ];

        window.addEventListener('hashchange', () => this.navigate());
    }

    navigate() {
        const hash = window.location.hash || '#home';
        let matched = false;

        this.updateActiveNav(hash);

        for (let route of this.routes) {
            const match = hash.match(route.path);
            if (match) {
                this.root.innerHTML = route.render(match);
                matched = true;
                break;
            }
        }

        if (!matched) {
            this.root.innerHTML = Components.NotFound();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.closeMobileSidebar();
    }

    updateActiveNav(hash) {
        const baseRoute = hash.split('/')[0].replace('#', '');
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.path === baseRoute) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    closeMobileSidebar() {
        document.getElementById('sidebar').classList.add('-translate-x-full');
        document.getElementById('sidebar-backdrop').classList.add('hidden');
    }
}

/**
 * 4. APPLICATION CONTROLLER
 */
class App {
    constructor() {
        this.state = new AppState();
        const rootElement = document.getElementById('app-root');
        this.router = new Router(rootElement, this.state);
        
        this.initUIEvents();
        
        if (!window.location.hash) {
            window.location.hash = '#home';
        } else {
            this.router.navigate();
        }
        
        this.state.notifyUI();
    }

    completeModule(moduleId) {
        this.state.completeModule(moduleId);
        window.location.hash = '#training';
    }

    initUIEvents() {
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('sidebar-backdrop');
        
        const toggleMenu = () => {
            sidebar.classList.toggle('-translate-x-full');
            backdrop.classList.toggle('hidden');
        };

        document.getElementById('open-sidebar').addEventListener('click', toggleMenu);
        document.getElementById('close-sidebar').addEventListener('click', toggleMenu);
        backdrop.addEventListener('click', toggleMenu);
    }
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
