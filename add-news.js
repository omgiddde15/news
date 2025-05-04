// Add Your News functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsForm = document.getElementById('news-submission-form');
    const mediaPreview = document.getElementById('media-preview');
    const locationDisplay = document.getElementById('location-display');
    let currentMediaStream = null;

    // Handle image upload
    document.getElementById('upload-image').addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.maxWidth = '100%';
                    mediaPreview.innerHTML = '';
                    mediaPreview.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });

    // Handle video upload
    document.getElementById('upload-video').addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'video/*';
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const video = document.createElement('video');
                video.controls = true;
                video.style.maxWidth = '100%';
                video.src = URL.createObjectURL(file);
                mediaPreview.innerHTML = '';
                mediaPreview.appendChild(video);
            }
        };
        input.click();
    });

    // Handle live video
    document.getElementById('start-live').addEventListener('click', async function() {
        try {
            if (currentMediaStream) {
                currentMediaStream.getTracks().forEach(track => track.stop());
                currentMediaStream = null;
                mediaPreview.innerHTML = '';
                this.textContent = 'Start Live Video';
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            currentMediaStream = stream;
            const video = document.createElement('video');
            video.autoplay = true;
            video.style.maxWidth = '100%';
            video.srcObject = stream;
            mediaPreview.innerHTML = '';
            mediaPreview.appendChild(video);
            this.textContent = 'Stop Live Video';
        } catch (err) {
            console.error('Error accessing media devices:', err);
            alert('Error accessing camera and microphone. Please check your permissions.');
        }
    });

    // Handle location
    document.getElementById('get-location').addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const { latitude, longitude } = position.coords;
                    locationDisplay.innerHTML = `
                        <p>Latitude: ${latitude}</p>
                        <p>Longitude: ${longitude}</p>
                    `;
                },
                function(error) {
                    console.error('Error getting location:', error);
                    locationDisplay.innerHTML = '<p>Error getting location. Please check your permissions.</p>';
                }
            );
        } else {
            locationDisplay.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
        }
    });

    // Handle form submission
    newsForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', document.getElementById('news-title').value);
        formData.append('description', document.getElementById('news-description').value);
        
        // Add media if present
        const mediaElement = mediaPreview.firstChild;
        if (mediaElement) {
            if (mediaElement.tagName === 'IMG') {
                formData.append('mediaType', 'image');
                formData.append('media', mediaElement.src);
            } else if (mediaElement.tagName === 'VIDEO') {
                if (currentMediaStream) {
                    // Handle live video stream
                    const mediaRecorder = new MediaRecorder(currentMediaStream);
                    const chunks = [];
                    mediaRecorder.ondataavailable = e => chunks.push(e.data);
                    mediaRecorder.onstop = () => {
                        const blob = new Blob(chunks, { type: 'video/webm' });
                        formData.append('mediaType', 'video');
                        formData.append('media', blob);
                        submitForm(formData);
                    };
                    mediaRecorder.start();
                    setTimeout(() => mediaRecorder.stop(), 5000); // Record for 5 seconds
                } else {
                    // Handle uploaded video
                    formData.append('mediaType', 'video');
                    formData.append('media', mediaElement.src);
                    submitForm(formData);
                }
            }
        }

        // Add location if available
        const locationText = locationDisplay.textContent;
        if (locationText.includes('Latitude')) {
            formData.append('location', locationText);
        }

        if (!mediaElement) {
            submitForm(formData);
        }
    });

    function submitForm(formData) {
        // Here you would typically send the formData to your server
        console.log('Form data:', Object.fromEntries(formData));
        alert('News submitted successfully!');
        newsForm.reset();
        mediaPreview.innerHTML = '';
        locationDisplay.innerHTML = '';
        if (currentMediaStream) {
            currentMediaStream.getTracks().forEach(track => track.stop());
            currentMediaStream = null;
        }
    }
}); 