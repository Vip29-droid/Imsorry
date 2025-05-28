  const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        const sadGif = document.getElementById('sadGif');
        const loveGif = document.getElementById('loveGif');
        const gifContainer = document.getElementById('gifContainer');
        
        let currentSize = 200; // Starting width in pixels
        const maxSize = 800;   // Maximum size before "No" turns into "Yes"
        
        // Function to show love message
        function showLove() {
            // Show love GIF
            sadGif.classList.remove('active');
            loveGif.classList.add('active');
            loveGif.style.width = '100%';
            
            // Change text
            document.querySelector('.forgive-text').textContent = "I LOVE YOU EDRIELLE ALLY PASTORIL";
            
            // Hide buttons
            yesBtn.style.display = 'none';
            noBtn.style.display = 'none';
        }
        
        // When clicking Yes
        yesBtn.addEventListener('click', showLove);
        
        // When clicking No
        noBtn.addEventListener('click', () => {
            // Make GIF bigger by 30% each time
            currentSize *= 1.3;
            sadGif.style.width = currentSize + 'px';
            
            // Move the No button randomly
            const randomX = Math.random() * 200 - 100;
            const randomY = Math.random() * 200 - 100;
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            // If reached max size, turn "No" into "Yes"
            if (currentSize >= maxSize) {
                noBtn.textContent = "Yes";
                noBtn.style.backgroundColor = "#4caf50";
                noBtn.style.transform = "translate(0, 0)";
                noBtn.onclick = showLove; // Now acts like the "Yes" button
            }
        });