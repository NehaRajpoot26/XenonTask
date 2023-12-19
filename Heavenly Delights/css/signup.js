document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // For simplicity, just display a message
    document.getElementById('signupMessage').textContent = `Signup successful for ${username} with email ${email}.`;
  });
  