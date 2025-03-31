  // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Side-scrolling for fees section
        function scrollToFee(sectionId) {
            const feeSection = document.getElementById(sectionId);
            const feeScrollContainer = document.getElementById('fee-scroll-container');
            feeScrollContainer.scrollTo({
                left: feeSection.offsetLeft,
                behavior: 'smooth'
            });
        }

        // Automatic Image Slider
        let slideIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        function showNextSlide() {
            slideIndex = (slideIndex + 1) % totalSlides;
            slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        setInterval(showNextSlide, 3000); // Change slide every 3 seconds

          // ===== NOTIFICATION SYSTEM =====
          document.addEventListener('DOMContentLoaded', function() {
            // 1. Get DOM elements
            const overlay = document.getElementById('notificationOverlay');
            const popup = document.getElementById('notificationPopup');
            const closeBtn = document.getElementById('notificationClose');
            const dismissBtn = document.getElementById('notificationDismiss');
            const actionBtn = document.getElementById('notificationAction');
            const titleEl = document.getElementById('notificationTitle');
            const contentEl = document.getElementById('notificationContent');
            
            // 2. Check if notification was already dismissed
            function wasNotificationDismissed() {
                return document.cookie.includes("notificationDismissed=true");
            }
            
            // 3. Set notification as dismissed
            function setNotificationDismissed() {
                const now = new Date();
                const expiry = new Date(now.setDate(now.getDate() + 7)); // 7 days from now
                document.cookie = `notificationDismissed=true; expires=${expiry.toUTCString()}; path=/`;
            }
            
            // 4. Show notification function
            function showNotification(title, content, actionUrl) {
                if (wasNotificationDismissed()) return;
                
                titleEl.textContent = title;
                contentEl.innerHTML = content;
                
                setTimeout(() => {
                    overlay.classList.add('active');
                    popup.classList.add('active');
                }, 2000); // Show after 2 seconds
                
                // Close handlers
                closeBtn.addEventListener('click', closeNotification);
                dismissBtn.addEventListener('click', closeNotification);
                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) closeNotification();
                });
                
                // Action handler
                actionBtn.addEventListener('click', function() {
                    closeNotification();
                    window.location.href = actionUrl;
                });
                
                // Close with ESC key
                document.addEventListener('keydown', function(e) {
                    if (e.key === "Escape") closeNotification();
                });
            }
            
            // 5. Close notification function
            function closeNotification() {
                overlay.classList.remove('active');
                popup.classList.remove('active');
                setNotificationDismissed();
            }
            
            // 6. Initialize with your notification
            showNotification(
                "Special Announcement", 
                "<p>Swimming Registration for May Registration for swimming in May is now open!</p><p>First come, first served.</p>", 
                "#announcements"
            );
            
            // ===== OPTIONAL: MANUAL TRIGGER EXAMPLE =====
            // You can call showNotification() anywhere in your code
            // For example, after a button click:
            // document.getElementById('someButton').addEventListener('click', function() {
            //     showNotification("New Offer", "Get 20% discount this week!", "#offers");
            // });
        });



     