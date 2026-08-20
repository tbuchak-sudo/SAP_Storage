const App = {
    // Елемент, куди рендериться контент
    contentArea: document.getElementById('app-content'),

    // ТУТ БУДУТЬ ТІЛЬКИ ОСНОВНІ РОЗДІЛИ (Каркаси)
    // Навчальні матеріали згодом винесемо в папку /content/
    templates: {
        'home': `
                    <div onclick="location.hash='#training'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition">
                        <div class="text-blue-600 font-bold text-sm mb-1">Модуль 3</div>
                        <h3 class="text-xl font-bold mb-2">ZEBWM & MB</h3>
                        <p class="text-slate-500 text-sm">Комірки, залишки та рухи матеріалів.</p>
                    </div>
                    <div onclick="location.hash='#procedures'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition">
                        <div class="text-green-600 font-bold text-sm mb-1">Кейси</div>
                        <h3 class="text-xl font-bold mb-2">Порядки роботи</h3>
                        <p class="text-slate-500 text-sm">Вирішення реальних виробничих проблем.</p>
                    </div>
                </div>
            </div>
        `,
        'training': `
                        <button onclick="App.openModule('zebwm')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">Вивчити</button>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900">Транзакції MB / ZMB</h3>
                                <p class="text-slate-500 text-sm">Звіти по запасах та рухи матеріалів.</p>
                            </div>
                        </div>
                        <button onclick="App.openModule('mb')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">Вивчити</button>
                    </div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">6</div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900">Принцип FIFO</h3>
                                <p class="text-slate-500 text-sm">Ротація партій та правильна видача.</p>
                            </div>
                        </div>
                        <button onclick="App.openModule('fifo')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">Вивчити</button>
                    </div>
                </div>
            </div>
        `,
        'directory': `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">COOIS</strong> — Виробничі замовлення та потреби</div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">COGI</strong> — Обробка помилок руху матеріалів</div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">ZEBWM</strong> — Складські комірки та статуси залишків</div>
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">MB51</strong> — Історія та документи рухів матеріалу</div>
                </div>
            </div>
        `,
        'procedures': `
            <div class="max-w-4xl mx-auto fade-in">
                <h1 class="text-3xl font-extrabold mb-2 text-slate-900">Порядки роботи</h1>
                <p class="text-slate-500 mb-6">Реальні робочі ситуації, алгоритми дій та виробничі кейси.</p>
                <div class="space-y-4">
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onclick="location.hash='#procedures/case001'">
                        <div class="font-bold text-slate-900 text-lg mb-1">Кейс 001: Немає матеріалу</div>
                        <div class="text-sm text-slate-600">Алгоритм дій при фізичній відсутності компонента на складі.</div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onclick="location.hash='#procedures/case002'">
                        <div class="font-bold text-slate-900 text-lg mb-1">Кейс 002: COGI-помилка</div>
                        <div class="text-sm text-slate-600">Виправлення системної помилки при списанні.</div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onclick="location.hash='#procedures/case003'">
                        <div class="font-bold text-slate-900 text-lg mb-1">Кейс 003: Невідповідність залишку</div>
                        <div class="text-sm text-slate-600">Що робити, коли SAP показує одне, а по факту інше.</div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onclick="location.hash='#procedures/case004'">
                        <div class="font-bold text-slate-900 text-lg mb-1">Кейс 004: Порушення FIFO</div>
                        <div class="text-sm text-slate-600">Як діяти при виявленні старих партій та порушенні ротації.</div>
                    </div>
                </div>
            </div>
        `,
        'tests': `
            <h1 class="text-3xl font-extrabold mb-6">📝 Тести</h1>
            <p class="text-slate-600">Тут буде система тестування знань.</p>
        `,

        // --- Демонстрація одного навчального модуля (за твоєю структурою) ---
        'sap/coois': `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <a href="#training" class="text-sm font-bold text-blue-600 hover:underline">← Назад до навчання</a>
                <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold ml-4">Модуль 2</span>
                <h1 class="text-3xl font-extrabold mt-4 mb-6">Транзакція COOIS</h1>
                <div class="text-slate-700 prose prose-blue max-w-none">
                    <p>Цей контент згодом буде завантажуватись із файлу /content/training/coois.html</p>
                </div>
            </div>
        `
    },

    // Логіка зміни сторінок
    render: function() {
        // Отримуємо хеш без символу # (наприклад, 'training')
        let route = window.location.hash.slice(1); 
        
        // Якщо хеш порожній, показуємо головну
        if (!route) route = 'home';

        // Якщо такий шаблон є, показуємо його, інакше - сторінку 404/головну
        if (this.templates[route]) {
            this.contentArea.innerHTML = this.templates[route];
        } else {
            this.contentArea.innerHTML = `<h1 class="text-2xl font-bold text-red-600">Помилка: Розділ не знайдено</h1>`;
        }
        
        window.scrollTo(0, 0);
    },

    // Метод для відкриття конкретного модуля через кнопку
    openModule: function(moduleName) {
        window.location.hash = moduleName;
    },

    // Ініціалізація додатку
    init: function() {
        // Слухаємо зміну хешу в URL
        window.addEventListener('hashchange', () => this.render());
        // Рендеримо при першому завантаженні
        this.render();
    }
};

// Запуск при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
