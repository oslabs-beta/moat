
const header = document.createElement('h1');
header.innerHTML = "Hello from client/index.ts"
const headDiv = document.createElement('div');
headDiv.appendChild(header);
document.body.appendChild(headDiv);

console.log('Hello from console');