templates: {
    'home': `
        <div class="max-w-5xl mx-auto fade-in space-y-10 pb-12">
            <div class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden border border-blue-900/50">
                <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
                <div class="relative z-10">
                    <span class="bg-blue-600/30 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">Корпоративна академія SAP</span>
                    <h1 class="text-4xl md:text-6xl font-extrabold mt-4 mb-4 tracking-tight">SAP Storage</h1>
                    <p class="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">Навчіться розуміти складські процеси, логіку SAP та вирішувати реальні проблеми виробництва, а не просто запам'ятовувати кнопки.</p>
                    <div class="flex flex-wrap gap-4 mt-8">
                        <a href="#training" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition shadow-lg shadow-blue-900/50 flex items-center space-x-2">
                            <span>Розпочати навчання</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                        <a href="#directory" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl transition border border-slate-700">Довідник транзакцій</a>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-extrabold mb-6 text-slate-900">Головний шлях працівника складу</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div onclick="location.hash='#sap/basics'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition group">
                        <div class="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">Модуль 1</div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition">Основи складу</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">Базові поняття, структура матеріалів та топологія зберігання.</p>
                    </div>
                    <div onclick="location.hash='#sap/coois'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition group">
                        <div class="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">Модуль 2</div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition">COOIS & COGI</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">Аналіз виробничих замовлень та обробка системних помилок.</p>
                    </div>
                    <div onclick="location.hash='#sap/zebwm'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition group">
                        <div class="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">Модуль 3</div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition">ZEBWM & MB</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">Складські комірки, статуси залишків та рухи матеріалів.</p>
                    </div>
                    <div onclick="location.hash='#practice'" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition group">
                        <div class="text-green-600 font-bold text-xs uppercase tracking-wider mb-1">Модуль 4</div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition">Практика</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">Вирішення реальних складських кейсів у симуляторі.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    'training': `
        <div class="max-w-4xl mx-auto fade-in pb-12">
            <div class="mb-8">
                <h1 class="text-3xl md:text-4xl font-extrabold mb-2 text-slate-900">Навчальний маршрут</h1>
                <p class="text-slate-500 text-lg">Пройдіть кожен крок послідовно для глибокого розуміння складської логіки.</p>
            </div>
            <div class="space-y-4">
                <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900">Основи складу та SAP</h3>
                            <p class="text-slate-500 text-sm">Роль складу, матеріали та документальне оформлення.</p>
                        </div>
                    </div>
                    <button onclick="App.openModule('basics')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-sm">Вивчити</button>
                </div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900">Транзакція COOIS</h3>
                            <p class="text-slate-500 text-sm">Аналіз виробничих замовлень та потреб матеріалів.</p>
                        </div>
                    </div>
                    <button onclick="App.openModule('coois')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-sm">Вивчити</button>
                </div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900">Транзакція COGI</h3>
                            <p class="text-slate-500 text-sm">Обробка помилок автоматичного руху матеріалів.</p>
                        </div>
                    </div>
                    <button onclick="App.openModule('cogi')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-sm">Вивчити</button>
                </div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900">Транзакція ZEBWM</h3>
                            <p class="text-slate-500 text-sm">Складські комірки, статуси та реальні залишки.</p>
                        </div>
                    </div>
                    <button onclick="App.openModule('zebwm')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-sm">Вивчити</button>
                </div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900">Група MB та ZMB транзакцій</h3>
                            <p class="text-slate-500 text-sm">Стандартні рухи (MB11, MB51) та локальна звітність.</p>
                        </div>
                    </div>
                    <button onclick="App.openModule('mb')" class="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-sm">Вивчити</button>
                </div>
            </div>
        </div>
    `,
    'directory': `
        <div class="max-w-4xl mx-auto fade-in pb-12">
            <h1 class="text-3xl font-extrabold mb-2 text-slate-900">Довідник SAP транзакцій</h1>
            <p class="text-slate-500 mb-6">Швидка довідка по основних інструментах складу.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">COOIS</strong> — Виробничі замовлення та потреби</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">COGI</strong> — Обробка помилок руху матеріалів</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">ZEBWM</strong> — Складські комірки та статуси залишків</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">MB51</strong> — Історія та документи рухів матеріалу</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">MB11</strong> — Ручне проведення рухів матеріалу</div>
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><strong class="text-blue-600 text-lg">ZMB52</strong> — Локальний звіт по залишкам заводу</div>
            </div>
        </div>
    `,
    'practice': `
        <div class="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 fade-in">
            <h2 class="text-2xl font-bold mb-3 text-slate-900">Практичний кейс</h2>
            <p class="text-slate-700 mb-6">Майстер дзвонить і каже: "Немає матеріалу 100500 для замовлення 7000123!". Ваша перша дія в SAP?</p>
            <div class="space-y-3">
                <button onclick="alert('Правильно! Спершу перевіряємо потреби через транзакцію COOIS.')" class="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition font-medium">1. Відкрити транзакцію COOIS</button>
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
    
    // 🌟 ПЕРША ВКЛАДКА: МОДУЛЬ 1 (ОСНОВИ СКЛАДУ ТА SAP)
    'sap/basics': `
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in mb-16">
            <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-flex items-center">
                <svg class="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                Назад до навчального маршруту
            </a>
            
            <div class="flex items-center space-x-3 mt-2 mb-4">
                <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">Модуль 1</span>
                <span class="text-slate-400 text-sm font-medium">Час читання: 6 хв</span>
            </div>
            
            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Основи складу та SAP</h1>
            
            <div class="text-slate-700 leading-relaxed space-y-6 text-base md:text-lg">
                <div class="bg-blue-50/70 border-l-4 border-blue-600 p-5 rounded-r-2xl">
                    <p class="font-medium text-slate-800">Склад — це не просто місце зберігання коробок, це ключова артерія безперервного виробництва. Кожна фізична дія на складі неминуче супроводжується документальним оформленням у SAP.</p>
                </div>

                <h3 class="text-2xl font-bold text-slate-900 pt-4">1. Роль складу у виробничому ланцюжку</h3>
                <p>Складський працівник забезпечує три головні речі:</p>
                <ul class="list-disc pl-6 space-y-2 text-slate-600">
                    <li><strong>Своєчасність:</strong> матеріали мають бути на лінії до того, як вони знадобляться машинці чи збірнику.</li>
                    <li><strong>Достовірність обліку:</strong> те, що лежить на полиці, повинно збігатися з цифрами в системі SAP до останньої одиниці.</li>
                    <li><strong>Контроль якості:</strong> перевірка статусів (вільний, заблокований, брак).</li>
                </ul>

                <h3 class="text-2xl font-bold text-slate-900 pt-4">2. Що таке «Матеріал» у SAP?</h3>
                <p>Кожне найменування сировини, комплектуючих чи готової продукції має свій унікальний <strong>код матеріалу</strong> (наприклад, <code>100500</code>). Це єдиний спільний ключ для всіх відділів підприємства — від закупівель до бухгалтерії та складу.</p>
                <p>Кожен матеріал містить основні дані:</p>
                <ul class="list-disc pl-6 space-y-2 text-slate-600">
                    <li><strong>Одиниця виміру (ОВ):</strong> штуки (шт), кілограми (кг), метри (м).</li>
                    <li><strong>Група матеріалів:</strong> до якої категорії належить товар.</li>
                    <li><strong>Тип зберігання:</strong> специфіка поводження (наприклад, потребує сухих умов або охолодження).</li>
                </ul>

                <h3 class="text-2xl font-bold text-slate-900 pt-4">3. Топологія та ієрархія складу</h3>
                <p>У системі SAP склад має чітку ієрархічну структуру, яку треба чітко розуміти:</p>
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 font-mono text-sm text-slate-800">
                    <div>🏢 <strong>Завод (Plant):</strong> наприклад, <code>1000</code> (Головне підприємство)</div>
                    <div class="pl-4">└── 📦 <strong>Склад (Storage Location):</strong> наприклад, <code>1010</code> (Основний склад сировини)</div>
                    <div class="pl-8">└── 📍 <strong>Складомісце / Комірка (Storage Bin):</strong> наприклад, <code>A-03-12</code> (Ряд А, стійка 03, полиця 12)</div>
                </div>

                <h3 class="text-2xl font-bold text-slate-900 pt-4">4. Головне правило складського обліку</h3>
                <div class="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl text-amber-900">
                    <p class="font-bold mb-1">Золоте правило:</p>
                    <p>«Спочатку документ у SAP — потім фізичний рух. Або синхронно в момент видачі». Не можна переміщувати коробки без фіксації, інакше система «втратить» товар.</p>
                </div>
            </div>

            <div class="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span class="text-sm text-slate-400 font-medium">Модуль 1 із 5 завершено</span>
                <button onclick="App.completeModule('basics')" class="w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg shadow-green-200 flex items-center justify-center space-x-2">
                    <span>✓ Завершити модуль та перейти до COOIS</span>
                </button>
            </div>
        </div>
    `,
    'sap/coois': `
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in mb-16">
            <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
            <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">Модуль 2</span>
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
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in mb-16">
            <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
            <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">Модуль 3</span>
            <h1 class="text-3xl font-extrabold text-slate-900 mt-3 mb-4">Транзакція COGI</h1>
            <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                <p><strong>COGI</strong> фіксує записи руху матеріалів, які система намагалася провести автоматично, але сталася помилка (наприклад, через відсутність залишку на момент випуску продукції).</p>
                <h3 class="text-xl font-bold text-slate-900 pt-4">Головне правило складу</h3>
                <p>Список в COGI завжди має бути порожнім! Будь-який запис тут означає перекошування облікових залишків.</p>
            </div>
            <div class="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <button onclick="App.completeModule('cogi')" class="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg">✓ Завершити модуль</button>
            </div>
        </div>
    `,
    'sap/zebwm': `
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in mb-16">
            <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
            <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">Модуль 4</span>
            <h1 class="text-3xl font-extrabold text-slate-900 mt-3 mb-4">Транзакція ZEBWM</h1>
            <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                <p><strong>ZEBWM</strong> — це зв'язок між системою та фізичним складом. Вона дозволяє побачити, де саме система "думає", що лежить матеріал.</p>
            </div>
            <div class="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <button onclick="App.completeModule('zebwm')" class="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg">✓ Завершити модуль</button>
            </div>
        </div>
    `,
    'sap/mb': `
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 fade-in mb-16">
            <a href="#training" class="text-sm font-bold text-blue-600 hover:underline mb-6 inline-block">← Назад до навчального маршруту</a>
            <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">Модуль 5</span>
            <h1 class="text-3xl font-extrabold text-slate-900 mt-3 mb-4">Транзакції групи MB та ZMB</h1>
            <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                <p>Транзакції MB51 та MB11 дозволяють переглядати історію рухів та виконувати ручні проведення відповідно.</p>
            </div>
            <div class="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <button onclick="App.completeModule('mb')" class="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-lg">✓ Завершити курс</button>
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
    const total = 5;
    const completed = Object.keys(this.progress).length;
    const percent = Math.min(Math.round((completed / total) * 100), 100);
    
    const textEl = document.getElementById('sidebar-progress-text');
    const barEl = document.getElementById('sidebar-progress-bar');
    if (textEl) textEl.innerText = `${percent}%`;
    if (barEl) barEl.style.width = `${percent}%`;
}
