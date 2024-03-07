document.addEventListener('DOMContentLoaded', function () {
    const inputArea = document.getElementById('input-area');
    const cryptBtn = document.querySelector('.crypt-btn');
    const decryptBtn = document.querySelector('.decrypt-btn');
    const responseContainer = document.querySelector('.response-container');
    const noMsgImg = document.querySelector('.no-msg-img');
    const noMsgTitle = document.querySelector('.no-msg-title');
    const noMsgParagraph = document.querySelector('.no-msg-paragraph');

    function hasAccentChars(text) {
        return /[áàâãéèêíïóôõöúç]/i.test(text);
    }

    function hasUpperCase(text) {
        return /[A-Z]/.test(text);
    }

    function encryptText(text) {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    }

    function decryptText(text) {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }

    cryptBtn.addEventListener('click', function () {
        const inputText = inputArea.value.trim();
        if (inputText && inputText.toLowerCase() === inputText && !hasAccentChars(inputText) && !hasUpperCase(inputText)) {
            const encryptedText = encryptText(inputText);
            responseContainer.style.display = 'block';
            noMsgImg.style.display = 'none';
            noMsgTitle.style.display = 'none';
            noMsgParagraph.style.display = 'none';
            responseContainer.classList.add('response-text');
            responseContainer.textContent = encryptedText;
        } else {
            if (inputText !== '') {
                responseContainer.classList.add('warning');
                responseContainer.textContent = 'Apenas letras minúsculas e sem acento.';
            }
        }
    });

    decryptBtn.addEventListener('click', function () {
        const inputText = inputArea.value.trim();
        if (inputText && inputText.toLowerCase() === inputText && !hasAccentChars(inputText) && !hasUpperCase(inputText)) {
            const decryptedText = decryptText(inputText);
            responseContainer.style.display = 'block';
            noMsgImg.style.display = 'none';
            noMsgTitle.style.display = 'none';
            noMsgParagraph.style.display = 'none';
            responseContainer.classList.add('response-text');
            responseContainer.textContent = decryptedText;
        } else {
            if (inputText !== '') {
                responseContainer.classList.add('warning');
                responseContainer.textContent = 'Apenas letras minúsculas e sem acento.';
            }
        }
    });
});
