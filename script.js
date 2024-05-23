let startTime;
        let intervalId;

        function treeees() {
            startTime = Date.now();
            intervalId = setInterval(updateStopwatch, 1000);
        }

        function updateStopwatch() {
            const now = Date.now();
            const elapsedTime = now - startTime;

            const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

            const formattedTime = 
                `${hours.toString().padStart(2, '0')}:` +
                `${minutes.toString().padStart(2, '0')}:` +
                `${seconds.toString().padStart(2, '0')}`;

            document.getElementById('clock').textContent = formattedTime;
        }

        function stopStopwatch() {
            clearInterval(intervalId);
        }

        treeees();
        setTimeout(stopStopwatch, 86400000); 