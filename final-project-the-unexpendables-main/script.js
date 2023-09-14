document.addEventListener('DOMContentLoaded', function () {
  // Get all the FAQ question and answer elements
  const faqItems = document.querySelectorAll('.faq-item');

  // Add click event listeners to each question
  faqItems.forEach(faqItem => {
    const question = faqItem.querySelector('h3'); // Updated selector to target the questions
    const answer = faqItem.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      // Toggle the 'active' class to show/hide the answer
      answer.classList.toggle('active');
    });

    // Add hover event listeners to each question
    question.addEventListener('mouseenter', () => {
      answer.classList.add('active');
    });

    question.addEventListener('mouseleave', () => {
      answer.classList.remove('active');
    });
  });
});
