document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const scheduleToggle = document.getElementById('toggle-schedule');
    const scheduleContent = document.getElementById('schedule-content');

    // Theme Toggle
    themeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });

    // Schedule Toggle
    scheduleToggle.addEventListener('click', function () {
        if (scheduleContent.style.display === 'none' || scheduleContent.style.display === '') {
            scheduleContent.style.display = 'block';
            scheduleToggle.textContent = 'Hide Schedule -';
        } else {
            scheduleContent.style.display = 'none';
            scheduleToggle.textContent = 'Show Schedule +';
        }
    });

    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('June 6, 2024 09:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = 'The event has started!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>${days}d
            ${hours}h
            ${minutes}
            ${seconds}s</div>
        `;
    };

    const interval = setInterval(updateCountdown, 1000);

    // Speaker Slider
    let currentIndex = 0;
    const speakers = document.querySelectorAll('.speaker-card');
    const totalSpeakers = speakers.length;

    function showNextSpeaker() {
        speakers.forEach((speaker, index) => {
            if (index === currentIndex) {
                speaker.style.transform = `translateX(-${index * 100}%)`;
            } else {
                speaker.style.transform = `translateX(${100}%)`;
            }
        });
        currentIndex = (currentIndex + 1) % totalSpeakers;
    }

    setInterval(showNextSpeaker, 3000);
});
