function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;
    var hostelPreference = document.querySelector('input[name="hostel"]:checked');
    var foodPreference = document.getElementById('foodPreference').value;
    var email = document.getElementById('email').value;
    var file = document.getElementById('photo').value;


    if (name.length > 10) {
      alert('Name should be within 10 characters in length.');
      return false;
    }

    if (age <= 18) {
      alert('Age should be greater than 18.');
      return false;
    }

    if (city.length !== 1) {
      alert('City should be only one character.');
      return false;
    }

    if (!hostelPreference) {
      alert('Please select a hostel preference.');
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (file === '') {
      alert('Please upload a photograph.');
      return false;
    } 
    alert('Form submitted successfully!');
    return true;
  }
