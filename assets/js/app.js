document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('contentArea');
    const pageTitle = document.getElementById('pageTitle');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    // Завантаження прогресу з localStorage
    let progress = parseInt(localStorage.getItem('sap_storage_progress')) || 15;
    updateProgress(progress);

    function updateProgress(val) {
        progressFill.style.width = val + '%';
        progressText.innerText = val + '% завершено';
        localStorage.setItem('sap_storage_progress', val);
    }

    // Роутинг по секціях
    async function loadSection(sectionName, title) {
        pageTitle.innerText = title;
        try {
            const response = await fetch(`sections/${sectionName}`);
            if (!response.ok) throw new Error('Сторінку не знайдено');
            const html = await response.text();
            contentArea.innerHTML = html;
        } catch (error) {
            contentArea.innerHTML = `
                <div class="card">
                    <h3>Розділ в розробці або завантажується</h3>
                    <p>Не вдалося завантажити вміст розділу ${sectionName}. Перевірте наявність файлу у папці sections/.</p>
                </div>
            `;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const sectionFile = link.getAttribute('data-section');
            const titleText = link.innerText.replace(/^[^\w\sа-яА-ЯёЁіІїЇєЄ]+/, '').trim();
            loadSection(sectionFile, titleText);
        });
    });

    // Початкове завантаження першої сторінки
    loadSection('training.html', 'Навчальний маршрут');
});