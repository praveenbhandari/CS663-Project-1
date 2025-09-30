// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Interactive Demo Functions
function initializeDemo() {
    const demoButtons = document.querySelectorAll('.demo-button');
    demoButtons.forEach(button => {
        button.addEventListener('click', function () {
            const demoType = this.dataset.demo;
            runDemo(demoType);
        });
    });
}

function runDemo(demoType) {
    const resultDiv = document.querySelector('.demo-result');
    if (!resultDiv) return;

    resultDiv.innerHTML = '<div class="loading">Running demo...</div>';

    // Simulate demo execution
    setTimeout(() => {
        switch (demoType) {
            case 'edge':
                resultDiv.innerHTML = `
                    <h4>Edge Detection Results</h4>
                    <p>Canny edge detection successfully identified trace boundaries with 85% accuracy.</p>
                    <p><strong>Detection Rate:</strong> 85% | <strong>False Positives:</strong> 12%</p>
                `;
                break;
            case 'morphology':
                resultDiv.innerHTML = `
                    <h4>Morphological Analysis Results</h4>
                    <p>Erosion and dilation operations detected 3 potential defects in trace width.</p>
                    <p><strong>Defects Found:</strong> 3 | <strong>Processing Time:</strong> 0.2s</p>
                `;
                break;
            case 'template':
                resultDiv.innerHTML = `
                    <h4>Template Matching Results</h4>
                    <p>Template matching achieved 92% similarity with reference image.</p>
                    <p><strong>Similarity Score:</strong> 92% | <strong>Match Confidence:</strong> High</p>
                `;
                break;
            case 'hsv':
                resultDiv.innerHTML = `
                    <h4>HSV Segmentation Results</h4>
                    <p>HSV color segmentation successfully isolated copper traces from substrate.</p>
                    <p><strong>Segmentation Accuracy:</strong> 88% | <strong>Processing Time:</strong> 0.1s</p>
                `;
                break;
            case 'hough':
                resultDiv.innerHTML = `
                    <h4>Hough Line Detection Results</h4>
                    <p>Hough line detection identified 12 line segments with 2 potential breaks.</p>
                    <p><strong>Lines Detected:</strong> 12 | <strong>Potential Breaks:</strong> 2</p>
                `;
                break;
        }
    }, 1000);
}



// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeDemo();
});