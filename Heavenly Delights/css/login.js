document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // For simplicity, just display a message
    document.getElementById('loginMessage').textContent = `Login successful for user with email ${email}.`;
  });
  