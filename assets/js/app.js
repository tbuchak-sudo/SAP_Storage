document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("contentArea");

    if (!contentArea) {
        console.error("Не знайдено #contentArea");
        return;
    }

    const BASE = "sections/";

    const routes = {
        home: "home.html",
        training: "training.html",
        transactions: "transactions.html",
        practice: "practice.html",
        tests: "tests.html",
        reference: "reference.html"
    };

    async function loadPage(page) {
        const file = routes[page];

        if (!file) {
            showError(`Сторінку "${page}" не знайдено`);
            return;
        }

        contentArea.innerHTML = `
            <div class="loading">
                <div>⏳ Завантаження...</div>
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

            console.log(`Завантажено: ${BASE + file}`);
        } catch (error) {
            console.error(error);

            showError(
                `Не вдалося завантажити <b>${BASE + file}</b>.<br><br>` +
                `Помилка: ${error.message}`
            );
        }
    }

    function showError(message) {
        contentArea.innerHTML = `
            <div class="error-box">
                <div style="font-size:48px;">⚠️</div>
                <h2>Помилка завантаження</h2>
                <p>${message}</p>
                <button onclick="location.hash='home'">
                    ← Повернутися на головну
                </button>
            </div>
        `;
    }

    function getRoute() {
        const hash = location.hash.replace("#", "").trim();

        if (!hash || hash === "home") {
            return "home";
        }

        return hash;
    }

    function navigate() {
        const route = getRoute();

        if (route.startsWith("sap/")) {
            loadSapModule(route);
            return;
        }

        loadPage(route);
    }

    async function loadSapModule(route) {
        const file = route.replace("sap/", "") + ".html";
        const url = "sap/" + file;

        contentArea.innerHTML = `
            <div class="loading">
                <div>⏳ Завантаження SAP-модуля...</div>
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

            contentArea.innerHTML = html;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            console.log(`Завантажено SAP: ${url}`);
        } catch (error) {
            console.error(error);

            contentArea.innerHTML = `
                <div class="error-box">
                    <div style="font-size:48px;">📂</div>

                    <h2>Розділ у розробці</h2>

                    <p>
                        Матеріали для секції
                        <b>${route}</b>
                        готуються або файл ще не додано
                        в репозиторій.
                    </p>

                    <button onclick="location.hash='home'">
                        ← Повернутися на головну
                    </button>
                </div>
            `;
        }
    }

    // Кнопки та посилання з data-page
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

    // Працюємо з URL
    window.addEventListener("hashchange", navigate);

    // Перший запуск
    navigate();
});
