document.getElementById('subBut').addEventListener('click', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="radioDefault1"]:checked').value;
    var email = document.getElementById('email').value;
    var problem = document.getElementById('info').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var cuotas = document.getElementById('cuotas').value;
    var notifications = document.getElementById('notifCheck').checked;

    var formData = {
      name: name,
      surname: surname,
      age: age,
      gender: gender,
      email: email,
      problem: problem,
      city: city,
      state: state,
      cuotas: cuotas,
      notifications: notifications
    };

  });