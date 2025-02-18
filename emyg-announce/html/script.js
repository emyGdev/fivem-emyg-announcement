document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("message", (event) => {
        if (event.data.type === "openAnons") {
            const now = new Date();
            const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const dateString = now.toLocaleDateString('tr-TR', dateOptions);
            const timeString = now.toLocaleTimeString('tr-TR', timeOptions);

            const displayTime = event.data.displayTime || 5000; 

            $("#anons").html(`
                <div class='header'>
                    <img src='${event.data.logo}' class='logo'>
                    <span class='server-name'>${event.data.serverName.toUpperCase()}</span>
                    <span class='date'>${dateString}</span>
                    <span class='time'>${timeString}</span>
                    <span class='anons-text'>DUYURU</span> 
                </div>
                <p>${event.data.text}</p>
            `).fadeIn(500);

            setTimeout(() => {
                $("#anons").fadeOut(500, () => {
                    $("#anons").html("").hide();
                });
            }, displayTime);

            const audio = new Audio("beep.wav");
            audio.volume = 0.5; 
            audio.play().catch(error => console.error("Ses çalınamadı:", error));
        }
    });
});
