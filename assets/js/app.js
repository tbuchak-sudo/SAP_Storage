const App = {
    progress: JSON.parse(localStorage.getItem('sap_storage_progress')) || { basics: true },
    
    // Вбудовані шаблони для всіх розділів та SAP-модулів (працює миттєво без зовнішніх fetch-запитів)
    templates: {
        'home': `
            <div class="max-w-5xl mx-auto fade-in">
                <div class="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl mb-10 relative overflow-hidden">
                    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
                    <div class="relative z-10">
                        <span class="bg-blue-600/40 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Внутрішній портал</span>
                        <h1 class="text-4xl md:text-5xl font-extrabold mt-3 mb-4">SAP Storage</h1>
                        <p class="text-slate-300 text-lg max-w-2xl leading-relaxed">Навчіться розуміти складські процеси, логіку SAP та вирішувати реальні проблеми, а не просто запам'ятовувати кнопки.</p>
                        <a href="#training" class="inline-block mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition shadow-lg shadow-blue-900/50">Розпочати навчання →</a>
                    </div>
                </div>

                <h2 class="text-2xl font-bold mb-6 text-slate-900">Головний шлях працівника</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div onclick="location.hash='#training'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition">
                        <div class="text-blue-600 font-bold text-sm mb-1">Модуль 1</div>
                        <h3 class="text-xl font-bold mb-2">Основи складу</h3>
                        <p class="text-slate-500 text-sm">Базові поняття, матеріали та рух.</p>
                    </div>
                    <div onclick="location.hash='#training'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition">
                        <div class="text-blue-600 font-bold text-sm mb-1">Модуль 2</div>
                        <h3 class="text-xl font-bold mb-2">COOIS & COGI</h3>
                        <p class="text-slate-500 text-sm">Замовлення та помилки системи.</p>
                    </div>
                    <div onclick="location.hash='#training'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition">
                        <div class="text-blue-600 font-bold text-sm mb-1">Модуль 3</div>
                        <h3 class="text-xl font-bold mb-2">ZEBWM & MB</h3>
                        <p class="text-slate-500 text-sm">Комірки, залишки та рухи матеріалів.</p>
                    </div>
                    <div onclick="location.hash='#practice'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition">
                        <div class="text-green-600 font-bold text-sm mb-1">Модуль 4</div>
                        <h3 class="text-xl font-bold mb-2">Практика</h3>
                        <p class="text-slate-500 text-sm">Вирішення реальних кейсів.</p>
                    </div>
                </div>
            </div>
        `,
        'training': `
            <div class="max-w-4xl mx-auto fade-in">
                <h1 class="text-3xl font-extrabold mb-2 text-slate-900">Навчальний маршрут</h1>
                <p class="text-slate-500 mb-8">Пройдіть кожен крок послідовно для повного розуміння складу.</p>
                <div class="space-y-4">
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900">Основи складу та SAP</h3>
                                <p class="text-slate-500 text-sm">Роль складу, матеріали та документальне оформлення.</p>
                            </div>
                        </div>
                        <button onclick="App.openModule('basics')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">Вивчити</button>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900">Транзакція COOIS</h3>
                                <p class="text-slate-500 text-sm">Аналіз виробничих замовлень та потреб матеріалів.</p>
                            </div>
                        </div>
                        <button onclick="App.openModule('coois')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">Вивчити</button>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900">Транзакція COGI</h3>
                                <p class="text-slate-500 text-sm">Обробка помилок автоматичного руху матеріалів.</p>
                            </div>
                        </div>
                        <button onclick="App.openModule('cogi')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">Вивчити</button>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900">Транзакція ZEBWM</h3>
                                <p class="text-slate-500 text-sm">Складські комірки, статуси та реальні залишки.</p>
                            </div>
                        </div>
                        <button onclick="App.openModule('zebwm')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">Вивчити</button>
                    </div>
                </div>
            </div>
        `,
        'directory': `
            <div class="max-w-4xl mx-auto fade-in">
                <h1 class="text-3xl font-extrabold mb-2 text-slate-900">Довідник SAP транзакцій</h1>
                <p class="text-slate-500 mb-6">Швидка довідка по основних інструментах.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">COOIS</strong> — Виробничі замовлення та потреби</div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">COGI</strong> — Обробка помилок руху матеріалів</div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">ZEBWM</strong> — Складські комірки та статуси залишків</div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">MB51</strong> — Історія та документи рухів матеріалу</div>
                </div>
            </div>
        `,
        'practice': `
            <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 fade-in">
                <h2 class="text-2xl font-bold mb-3 text-slate-900">Практичний кейс</h2>
                <p class="text-slate-700 mb-6">Майстер дзвонить і каже: "Немає матеріалу 100500 для замовлення 7000123!". Ваша перша дія в SAP?</p>
                <div class="space-y-3">
                    <button onclick="alert('Правильно! Спершу перевіряємо потреби через COOIS.')" class="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition font-medium">1. Відкрити транзакцію COOIS</button>
                    <button onclick="alert('Невірно. Спочатку перевіряємо систему, а не йдемо шукати очима.')" class="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:bg-red-50 transition font-medium">2. Бігти шукати матеріал по всьому складу</button>
                </div>
            </div>
        `,
        'tests': `
            <div class="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center fade-in">
                <h2 class="text-2xl font-bold mb-3 text-slate-900">Підсумковий тест</h2>
                <p class="text-slate-600 mb-6">Перевірте свої знання складської логіки SAP.</p>
                <button onclick="alert('Тест успішно пройдено на 100%!')" class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition shadow-lg">Скласти тест</button>
            </div>
        `,
        'sap/basics': `
            <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in">
                <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
                <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Модуль 1</span>
                <h1 class="text-3xl font-extrabold text-slate-900 mt-3 mb-4">Основи складу та SAP</h1>
                <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                    <p>Склад — це не просто місце зберігання коробок, це ключова ланка безперервного виробництва. Кожна фізична дія обов'язково повинна супроводжуватись документальним оформленням у SAP.</p>
                    <h3 class="text-xl font-bold text-slate-900 pt-4">Що таке матеріал?</h3>
                    <p>Кожен товар, сировина чи запчастина у SAP має свій унікальний код матеріалу (наприклад, 100500). Це єдиний ключ до розуміння залишків, вартості та місця зберігання.</p>
                    <h3 class="text-xl font-bold text-slate-900 pt-4">Топологія складу</h3>
                    <p>Склад ділиться на типи складів та складомісця (комірки). Знання точної комірки гарантує швидкий підбір товарів без втрати часу.</p>
                </div>
                <div class="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                    <button onclick="App.completeModule('basics')" class="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg">✓ Завершити модуль</button>
                </div>
            </div>
        `,
        'sap/coois': `
            <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in">
                <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
                <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Модуль 2</span>
                <h1 class="text-3xl font-extrabold text-slate-900 mt-3 mb-4">Транзакція COOIS</h1>
                <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                    <p><strong>COOIS</strong> — це головна транзакція для аналізу виробничих замовлень. Вона показує, ЩО потрібно виробити, КОЛИ і ЯКІ компоненти необхідні.</p>
                    <h3 class="text-xl font-bold text-slate-900 pt-4">Для чого вона потрібна складу?</h3>
                    <p>Склад використовує COOIS для прогнозування та підготовки матеріалів перед запуском виробничих процесів.</p>
                    <h3 class="text-xl font-bold text-slate-900 pt-4">Алгоритм роботи</h3>
                    <p>1. Введіть номер замовлення.<br>2. Перейдіть на вкладку "Компоненти".<br>3. Звірте "Потрібну кількість" та "Видану кількість". Різниця між ними — ваш план видачі.</p>
                </div>
                <div class="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                    <button onclick="App.completeModule('coois')" class="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg">✓ Завершити модуль</button>
                </div>
            </div>
        `,
        'sap/cogi': `
            <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in">
                <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
                <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Модуль 3</span>
                <h1 class="text-3xl font-extrabold text-slate-900 mt-3 mb-4">Транзакція COGI</h1>
                <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                    <p><strong>COGI</strong> фіксує записи руху матеріалів, які система намагалася провести автоматично, але сталася помилка (наприклад, через відсутність залишку на момент випуску продукції).</p>
                    <h3 class="text-xl font-bold text-slate-900 pt-4">Головне правило складу</h3>
                    <p>Список в COGI завжди має бути порожнім! Будь-який запис тут означає перекошування облікових залишків.</p>
                    <h3 class="text-xl font-bold text-slate-900 pt-4">Порядок дій</h3>
                    <p>Знайти помилку -> Прочитати текст -> Виправити залишок (через MB11 або переміщення) -> Повторити проведення в COGI.</p>
                </div>
                <div class="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                    <button onclick="App.completeModule('cogi')" class="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg">✓ Завершити модуль</button>
                </div>
            </div>
        `,
        'sap/zebwm': `
            <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in">
                <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
                <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Модуль 4</span>
                <h1 class="text-3xl font-extrabold text-slate-900 mt-3 mb-4">Транзакція ZEBWM</h1>
                <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                    <p><strong>ZEBWM</strong> — це зв'язок між системою та фізичним складом. Вона дозволяє побачити, де саме система "думає", що лежить матеріал.</p>
                    <h3 class="text-xl font-bold text-slate-900 pt-4">Що перевіряти в ZEBWM</h3>
                    <p>1. Комірку зберігання<br>2. Кількість<br>3. Статус якості (вільний чи заблокований)</p>
                </div>
                <div class="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                    <button onclick="App.completeModule('zebwm')" class="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg">✓ Завершити модуль</button>
                </div>
            </div>
        `
    },

    init() {
        window.addEventListener('hashchange', () => this.router());
        if (!window.location.hash) window.location.hash = '#home';
        this.router();
        this.updateProgressUI();
    },

    async router() {
        let hash = window.location.hash.substring(1) || 'home';
        const contentEl = document.getElementById('app-content');

        // Активні посилання у меню
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('bg-blue-50', 'text-blue-600');
            if (l.getAttribute('href') === `#${hash.split('/')[0]}`) {
                l.classList.add('bg-blue-50', 'text-blue-600');
            }
        });

        // Закриваємо мобільне меню при переході
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('sidebar-backdrop');
        if (sidebar && backdrop) {
            sidebar.classList.add('-translate-x-full');
            backdrop.classList.add('hidden');
        }

        // 1. Перевіряємо вбудовані шаблони
        if (this.templates[hash]) {
            contentEl.innerHTML = this.templates[hash];
            window.scrollTo(0, 0);
            return;
        }

        // 2. Спробуємо завантажити із папки sections/ або sap/ для GitHub Pages
        let targetPath = hash.startsWith('sap/') ? `./${hash}.html` : `./sections/${hash}.html`;
        
        try {
            const response = await fetch(targetPath);
            if (!response.ok) throw new Error('Сторінку не знайдено');
            const html = await response.text();
            contentEl.innerHTML = `<div class="fade-in">${html}</div>`;
        } catch (err) {
            // Безпечний Fallback замість білого екрана чи помилки
            contentEl.innerHTML = `
                <div class="max-w-xl mx-auto text-center py-16 fade-in">
                    <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📂</div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-2">Розділ у розробці</h2>
                    <p class="text-slate-500 mb-6">Матеріали для секції <code>${hash}</code> готуються або файл ще не додано в репозиторій.</p>
                    <a href="#home" class="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">Повернутися на головну</a>
                </div>
            `;
        }
        window.scrollTo(0, 0);
    },

    openModule(modId) {
        window.location.hash = `sap/${modId}`;
    },

    completeModule(modId) {
        this.progress[modId] = true;
        localStorage.setItem('sap_storage_progress', JSON.stringify(this.progress));
        this.updateProgressUI();
        window.location.hash = '#training';
    },

    updateProgressUI() {
        const total = 4;
        const completed = Object.keys(this.progress).length;
        const percent = Math.min(Math.round((completed / total) * 100), 100);
        
        const textEl = document.getElementById('sidebar-progress-text');
        const barEl = document.getElementById('sidebar-progress-bar');
        if (textEl) textEl.innerText = `${percent}%`;
        if (barEl) barEl.style.width = `${percent}%`;
    }
};

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar && backdrop) {
        sidebar.classList.toggle('-translate-x-full');
        backdrop.classList.toggle('hidden');
    }
}

window.onload = () => App.init();
