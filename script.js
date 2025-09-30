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



// Quiz Data
const quizQuestions = [
    {
        id: 1,
        question: "What is the typical size range of open circuit defects in PCB traces?",
        options: [
            "10-100 micrometers",
            "0.1-5mm",
            "5-10mm",
            "10-50mm"
        ],
        correct: 1,
        explanation: "Open circuits typically range from 0.1mm to 5mm in size and are relatively easy to detect due to high contrast."
    },
    {
        id: 2,
        question: "Which OpenCV technique is best suited for detecting trace boundaries and breaks?",
        options: [
            "Morphological operations",
            "Template matching",
            "Canny edge detection",
            "HSV segmentation"
        ],
        correct: 2,
        explanation: "Canny edge detection is fundamental for identifying trace boundaries and detecting breaks or discontinuities in PCB traces."
    },
    {
        id: 3,
        question: "What is the primary challenge with micro-crack detection?",
        options: [
            "They are too large to detect accurately",
            "They are 10-100 micrometers wide and require high-resolution imaging",
            "They only occur in specific lighting conditions",
            "They are easy to detect with basic edge detection"
        ],
        correct: 1,
        explanation: "Micro-cracks are typically 10-100 micrometers wide, making them difficult to detect and requiring high-resolution imaging (minimum 5μm pixel size)."
    },
    {
        id: 4,
        question: "What accuracy does the hybrid system achieve in the PCB defect detection project?",
        options: [
            "78%",
            "85%",
            "92%",
            "99%"
        ],
        correct: 2,
        explanation: "The hybrid system achieves 92% accuracy at 0.2 seconds average, providing the optimal balance between speed and accuracy."
    },
    {
        id: 5,
        question: "Which color space is most effective for isolating copper traces from substrate material?",
        options: [
            "RGB",
            "Grayscale",
            "HSV",
            "CMYK"
        ],
        correct: 2,
        explanation: "HSV (Hue, Saturation, Value) color segmentation is most effective because it separates color information from brightness and is less sensitive to lighting variations."
    },
    {
        id: 6,
        question: "What is the processing time for classical CV pre-screening in the hybrid system?",
        options: [
            "0.05 seconds",
            "0.1 seconds",
            "0.5 seconds",
            "1.0 seconds"
        ],
        correct: 1,
        explanation: "Classical CV pre-screening takes 0.1 seconds and filters 80% of obvious cases, reserving expensive machine learning for complex defects only."
    },
    {
        id: 7,
        question: "Which defect type is the most difficult to detect?",
        options: [
            "Open circuits",
            "Missing traces",
            "Micro-cracks",
            "Short circuits"
        ],
        correct: 2,
        explanation: "Micro-cracks are the most difficult to detect due to their small size (10-100 micrometers) and require specialized high-resolution imaging techniques."
    },
    {
        id: 8,
        question: "What is the main advantage of YOLO v8 in the hybrid detection system?",
        options: [
            "Highest accuracy at 99%",
            "Optimal balance with 92% accuracy at 0.2 seconds",
            "Slowest but most thorough analysis",
            "Only works for large defects"
        ],
        correct: 1,
        explanation: "YOLO v8 achieves 92% accuracy at 0.2 seconds processing time, providing the optimal balance between speed and accuracy for production environments."
    },
    {
        id: 9,
        question: "How many training images were used to train the machine learning models?",
        options: [
            "500+ images",
            "1,000+ images",
            "2,000+ images",
            "3,500+ images"
        ],
        correct: 3,
        explanation: "The system was trained on 3,500+ annotated images from three established benchmark datasets: Tang et al., TDD-net, and Industrial PCB Dataset."
    },
    {
        id: 10,
        question: "What morphological operation is used to detect narrow regions in traces?",
        options: [
            "Dilation",
            "Erosion",
            "Gradient",
            "Top-hat"
        ],
        correct: 1,
        explanation: "Erosion is used to find narrow regions in traces that might indicate defects, by shrinking features and revealing weak points."
    },
    {
        id: 11,
        question: "What is the accuracy of the classical CV baseline approach?",
        options: [
            "65%",
            "78%",
            "85%",
            "92%"
        ],
        correct: 1,
        explanation: "Classical CV baseline achieves 78% accuracy, which is improved to 92% by the hybrid system combining classical CV with machine learning."
    },
    {
        id: 12,
        question: "Which deep learning model achieves the highest accuracy for defect detection?",
        options: [
            "ResNet50 (88%)",
            "YOLO v8 (92%)",
            "EfficientNet (90%)",
            "U-Net (95%)"
        ],
        correct: 3,
        explanation: "U-Net achieves 95% accuracy with pixel-level segmentation for precise defect boundaries, though it takes 0.5 seconds compared to YOLO's 0.2 seconds."
    },
    {
        id: 13,
        question: "What is the primary detection method for short circuit defects?",
        options: [
            "Edge detection",
            "Template matching",
            "Morphological operations",
            "Color segmentation"
        ],
        correct: 1,
        explanation: "Template matching is the primary method for detecting short circuits by comparing the inspected board against a reference image to identify unwanted connections."
    },
    {
        id: 14,
        question: "What percentage of cases does the classical CV pre-screening filter?",
        options: [
            "50%",
            "65%",
            "80%",
            "95%"
        ],
        correct: 2,
        explanation: "The classical CV pre-screening stage filters 80% of obvious cases in just 0.1 seconds, allowing the ML stage to focus on complex defects."
    },
    {
        id: 15,
        question: "What is the main limitation of classical computer vision methods for PCB inspection?",
        options: [
            "Too slow for production use",
            "Cannot detect any defects",
            "Sensitive to lighting variations and alignment issues",
            "Requires too much computing power"
        ],
        correct: 2,
        explanation: "The main limitation is sensitivity to lighting variations, shadows, and alignment issues, which is why the hybrid system uses machine learning to handle these complex cases."
    }
];

let userAnswers = [];
let quizCompleted = false;

// Quiz Functions
function initializeQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    userAnswers = new Array(quizQuestions.length).fill(null);
    quizCompleted = false;

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.id = `question-${q.id}`;

        let optionsHTML = '';
        q.options.forEach((option, optIndex) => {
            optionsHTML += `
                <label class="quiz-option">
                    <input type="radio" name="question-${q.id}" value="${optIndex}" 
                           onchange="checkAnswer(${index}, ${optIndex}, ${q.correct})">
                    <span class="option-text">${option}</span>
                </label>
            `;
        });

        questionDiv.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${index + 1} of ${quizQuestions.length}</span>
            </div>
            <h3 class="question-text">${q.question}</h3>
            <div class="quiz-options">
                ${optionsHTML}
            </div>
            <div class="question-feedback" id="feedback-${q.id}" style="display: none;">
                <p class="feedback-text"></p>
            </div>
        `;

        quizContainer.appendChild(questionDiv);
    });

    // Add submit button
    const submitButton = document.createElement('button');
    submitButton.className = 'btn btn-primary quiz-submit';
    submitButton.textContent = 'Submit Quiz';
    submitButton.onclick = submitQuiz;
    quizContainer.appendChild(submitButton);

    updateScore();
}

function checkAnswer(questionIndex, selectedAnswer, correctAnswer) {
    const question = quizQuestions[questionIndex];
    const feedbackDiv = document.getElementById(`feedback-${question.id}`);
    const questionDiv = document.getElementById(`question-${question.id}`);
    const options = questionDiv.querySelectorAll('.quiz-option');

    // Store user answer
    userAnswers[questionIndex] = selectedAnswer;

    // Remove previous feedback classes
    options.forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
    });

    // Show feedback
    feedbackDiv.style.display = 'block';
    const feedbackText = feedbackDiv.querySelector('.feedback-text');

    if (selectedAnswer === correctAnswer) {
        options[selectedAnswer].classList.add('correct');
        feedbackText.innerHTML = `<strong>✓ Correct!</strong> ${question.explanation}`;
        feedbackDiv.className = 'question-feedback feedback-correct';
    } else {
        options[selectedAnswer].classList.add('incorrect');
        options[correctAnswer].classList.add('correct');
        feedbackText.innerHTML = `<strong>✗ Incorrect.</strong> The correct answer is: <strong>${question.options[correctAnswer]}</strong>. ${question.explanation}`;
        feedbackDiv.className = 'question-feedback feedback-incorrect';
    }

    // Disable all options for this question
    options.forEach(opt => {
        const input = opt.querySelector('input');
        input.disabled = true;
    });

    updateScore();
}

function updateScore() {
    const correctCount = userAnswers.filter((answer, index) => 
        answer === quizQuestions[index].correct
    ).length;

    const totalQuestions = quizQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    document.getElementById('current-score').textContent = correctCount;
    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('score-percentage').textContent = percentage + '%';
}

function submitQuiz() {
    // Check if all questions are answered
    const unanswered = userAnswers.filter(a => a === null).length;
    
    if (unanswered > 0) {
        alert(`Please answer all questions before submitting. You have ${unanswered} unanswered question(s).`);
        return;
    }

    if (quizCompleted) {
        alert('Quiz already submitted!');
        return;
    }

    quizCompleted = true;

    // Calculate final score
    const correctCount = userAnswers.filter((answer, index) => 
        answer === quizQuestions[index].correct
    ).length;
    const totalQuestions = quizQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    // Determine grade
    let grade, message;
    if (percentage >= 90) {
        grade = 'A - Excellent!';
        message = 'Outstanding! You have a strong understanding of PCB defect detection techniques and machine learning approaches.';
    } else if (percentage >= 80) {
        grade = 'B - Very Good';
        message = 'Great job! You have a solid grasp of the key concepts in automated PCB inspection.';
    } else if (percentage >= 70) {
        grade = 'C - Good';
        message = 'Good work! You understand the basics. Review the tutorial sections for areas where you struggled.';
    } else if (percentage >= 60) {
        grade = 'D - Satisfactory';
        message = 'You have some understanding, but consider reviewing the tutorial materials to strengthen your knowledge.';
    } else {
        grade = 'F - Needs Improvement';
        message = 'Consider reviewing the tutorial carefully and retaking the quiz to improve your understanding.';
    }

    // Show results
    document.getElementById('final-score').textContent = `${correctCount}/${totalQuestions}`;
    document.getElementById('final-percentage').textContent = percentage + '%';
    document.getElementById('final-grade').textContent = grade;
    document.getElementById('result-message').textContent = message;
    
    // Hide quiz container and show results
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';

    // Scroll to results
    document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    // Reset state
    userAnswers = [];
    quizCompleted = false;

    // Clear and reinitialize quiz
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    quizContainer.style.display = 'block';

    document.getElementById('quiz-results').style.display = 'none';

    // Reinitialize quiz
    initializeQuiz();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeDemo();
    initializeQuiz();
});