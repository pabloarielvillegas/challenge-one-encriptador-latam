//Optimización 
const encryptionKey = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

// Función para encriptar una cadena de texto
function encrypt(text) {
  let encryptedText = "";
  for (const letter of text) {
    if (letter in encryptionKey) {
      encryptedText += encryptionKey[letter];
    } else {
      encryptedText += letter;
    }
  }
  return encryptedText;
}

const decryptKey = ["enter", "imes", "ai", "ober", "ufat"];

// Función para desencriptar una cadena de texto
function decrypt(text) {
  let decryptedText = "";
  let currentWord = "";
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (decryptKey.indexOf(currentWord + letter) !== -1) {
      currentWord += letter;
    } else {
      if (decryptKey.indexOf(currentWord) !== -1) {
        decryptedText += decryptKey.indexOf(currentWord);
      } else {
        decryptedText += currentWord;
      }
      currentWord = "";
      decryptedText += letter;
    }
  }
  if (decryptKey.indexOf(currentWord) !== -1) {
    decryptedText += decryptKey.indexOf(currentWord);
  } else {
    decryptedText += currentWord;
  }
  return decryptedText;
}


const decryptButton = document.getElementById("decrypt-button");
const encryptButton = document.getElementById("encrypt-button");
const inputText = document.getElementById("input-text");
const result = document.getElementById("result");

// Manejador de evento para el botón de encriptar
encryptButton.addEventListener("click", () => {
  const text = inputText.value;
  result.textContent = encrypt(text);
});

// Manejador de evento para el botón de desencriptar
decryptButton.addEventListener("click", () => {
  const text = inputText.value;
  result.textContent = decrypt(text);
});

// Manejador de evento para el botón de copiar
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  textarea.textContent = result.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
});



//transforma las mayusculas en minusculas

const textarea = document.getElementById("input-text");
    textarea.addEventListener("keyup", (event) => {
      if (event.key.match(/[A-Z]/)) {
        event.preventDefault();
        textarea.value = textarea.value.toLowerCase();
      }
    });


const resultElement = document.getElementById("result");
const buttonElement = document.getElementById("encrypt-button");

buttonElement.addEventListener("click", () => {
  let angle = -1.618;
  let time = 0;

  const interval = setInterval(() => {
    resultElement.style.transform = `rotate(${angle}deg)`;
    angle = angle * -1;
    time += 250;

    if (time >= 3000) {
      clearInterval(interval);
      resultElement.style.transform = "";
    }
  }, 50);
});
