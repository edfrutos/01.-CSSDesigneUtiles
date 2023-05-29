const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const codeElement = button.parentNode.nextElementSibling.querySelector('code');
        const code = codeElement.innerText;

        navigator.clipboard.writeText(code)
          .then(() => {
            button.querySelector('span').textContent = 'Copied!';
            setTimeout(() => {
              button.querySelector('span').textContent = 'Copy Code';
            }, 1500);
          })
          .catch(err => {
            console.error('Failed to copy code: ', err);
          });
      });
    });
