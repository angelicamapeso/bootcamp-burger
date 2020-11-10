//Devour button functionality
document.querySelectorAll('.devour').forEach(button => {
  button.addEventListener('click', function(event) {
    const id = this.parentElement.getAttribute('data-id');
    const newDevour = this.parentElement.getAttribute('data-newdevoured');

    fetch(`api/burgers/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({ devoured: newDevour }),
    }).then(response => {
      if (response.ok) location.reload();
    });
  });
});