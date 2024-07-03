document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    // Initial call to set the time
    updateTime();

    // Update the time every second
    setInterval(updateTime, 1000);
});
