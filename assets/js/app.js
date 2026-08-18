document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("app-content");

    if (!contentArea) {
        console.error("Не знайдено #app-content");
        return;
    }

    const BASE = "sections/";

    const routes = {
        training: "training.html",
        transactions: "transactions.html",
        practice: "practice.html",
        tests: "tests.html",
        reference: "reference.html",

        // Довідник використовує reference.html
        directory: "reference.html"
    };

    // Запам'ятовуємо початкову головну сторінку
    const homeContent = contentArea.innerHTML;

    async function loadPage(page) {
        // Головна — повертаємо вбудований контент
        if (page === "home") {
            contentArea.innerHTML = homeContent;
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const file = routes[page];

        if (!file) {
            showError(`Сторінку "${page}" не знайдено.`);
            return;
        }

        contentArea.innerHTML = `
            <div class="max-w-5xl mx-auto py-12 text-center">
                <div class="text-5xl mb-4">⏳</div>
                <h2 class="text-2xl font-bold">Завантаження...</h2>
            </div>
        `;

        try {
            const response = await fetch(BASE + file, {
                cache: "no-cache"
            });

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            const html = await response.text();

            contentArea.innerHTML = html;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            console.log("Завантажено:", BASE + file);

        } catch (error) {
            console.error(error);

            showError(`
                Не вдалося завантажити:
                <b>${BASE + file}</b>
                <br><br>
                Помилка: ${error.message}
            `);
        }
    }

    async function loadSapModule(route) {
        const moduleName = route.substring(4);
        const url = `sap/${moduleName}.html`;

        contentArea.innerHTML = `
            <div class="max-w-5xl mx-auto py-12 text-center">
                <div class="text-5xl mb-4">⏳</div>
                <h2 class="text-2xl font-bold">
                    Завантаження SAP-модуля...
                </h2>
                <p class="text-slate-500 mt-2">
                    ${moduleName}
                </p>
            </div>
        `;

        try {
            const response = await fetch(url, {
                cache: "no-cache"
            });

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            const html = await response.text();

            // Захист від порожніх HTML-файлів
            if (!html.trim()) {
                throw new Error("Файл існує, але він порожній.");
            }

            contentArea.innerHTML = html;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            console.log("Завантажено SAP:", url);

        } catch (error) {
            console.error(error);

            contentArea.innerHTML = `
                <div class="max-w-3xl mx-auto py-16 text-center">
                    <div class="text-6xl mb-6">📂</div>

                    <h2 class="text-3xl font-extrabold text-slate-900 mb-4">
                        Розділ у розробці
                    </h2>

                    <p class="text-slate-600 mb-6">
                        SAP-модуль
                        <b>${moduleName}</b>
                        ще не має готового вмісту.
                    </p>

                    <p class="text-sm text-slate-400 mb-8">
                        ${error.message}
                    </p>

                    <button
                        onclick="location.hash='home'"
                        class="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
                    >
                        ← Повернутися на головну
                    </button>
                </div>
            `;
        }
    }

    function showError(message) {
        contentArea.innerHTML = `
            <div class="max-w-3xl mx-auto py-16 text-center">
                <div class="text-6xl mb-6">⚠️</div>

                <h2 class="text-3xl font-extrabold mb-4">
                    Помилка завантаження
                </h2>

                <p class="text-slate-600">
                    ${message}
                </p>

                <button
                    onclick="location.hash='home'"
                    class="mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold"
                >
                    ← На головну
                </button>
            </div>
        `;
    }

    function getRoute() {
        const hash = location.hash
            .replace("#", "")
            .trim();

        return hash || "home";
    }

    function navigate() {
        const route = getRoute();

        console.log("Маршрут:", route);

        if (route.startsWith("sap/")) {
            loadSapModule(route);
            return;
        }

        loadPage(route);
    }

    // Підтримка data-page
    document.addEventListener("click", event => {
        const element = event.target.closest("[data-page]");

        if (!element) {
            return;
        }

        event.preventDefault();

        const page = element.dataset.page;

        if (page) {
            location.hash = page;
        }
    });

    // Зміна #hash
    window.addEventListener("hashchange", navigate);

    // Перший запуск
    navigate();
});
