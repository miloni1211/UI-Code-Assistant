document.getElementById('code-gen-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const componentType = document.getElementById('component-type').value;
    let generatedCode = '';

    switch (componentType) {
        case 'login-form':
            generatedCode = '<form><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button type="submit">Login</button></form>';
            break;
        case 'HTML-boilerplate':
            generatedCode = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>`;
            break;
        case 'EL-JS':
            generatedCode = 'document.getElementById("myButton").addEventListener("click", function() {alert("Button clicked!");})';
            break;
        case 'Sign-Up':
            generatedCode = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sign Up</title><link rel="stylesheet" href="styles.css"></head><body><div class="container"><h2>Sign Up</h2><form action="submit_form.php" method="POST"><div class="form-group"><label for="username">Username:</label><input type="text" id="username" name="username" required></div><div class="form-group"><label for="email">Email:</label><input type="email" id="email" name="email" required></div><div class="form-group"><label for="password">Password:</label><input type="password" id="password" name="password" required></div><button type="submit">Sign Up</button></form></div></body></html>`;
            break;
        case 'form-validation':
            generatedCode = `document.getElementById("myForm").addEventListener("submit", function(e) {e.preventDefault();var t=!0;[].slice.call(document.querySelectorAll("#myForm input[required]")).forEach(function(e){""===e.value&&(t=!1,e.classList.add("error"))}),t&&this.submit()});`;
            break;
    }

    document.getElementById('generated-code').textContent = generatedCode;
});

document.getElementById('copy-code').addEventListener('click', function() {
    var generatedCode = document.getElementById('generated-code').innerText;
    navigator.clipboard.writeText(generatedCode).then(function() {
        // Code successfully copied
        alert('Code copied to clipboard');
    }, function(err) {
        // Unable to copy
        console.error('Could not copy text: ', err);
    });
});
