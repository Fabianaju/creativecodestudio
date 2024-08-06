document.addEventListener('DOMContentLoaded', function () {
    var typedTextElement = document.getElementById('typed-text');
    var typedTexts = ['Web Designer', 'Desenvolvedor Front-end', 'Criador de Experiências Digitais'];
    var typedTextIndex = 0;
    var charIndex = 0;
    var typingDelay = 100;
    var erasingDelay = 50;
    var newTextDelay = 2000;

    function type() {
        if (charIndex < typedTexts[typedTextIndex].length) {
            typedTextElement.textContent += typedTexts[typedTextIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.textContent = typedTexts[typedTextIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            typedTextIndex++;
            if (typedTextIndex >= typedTexts.length) typedTextIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    setTimeout(type, newTextDelay);
});
