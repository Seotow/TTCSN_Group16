const updateInforForm = document.getElementById('form_update-user-infor')
const updatePasswordForm = document.getElementById('form_update-user-password')
updateInforForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(updateInforForm);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch('/user/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.success) {
            showSuccessMessage(data.message);
        } else {
            showErrorMessage(data.message);
        }
    })
    .catch(err => {
        console.error(err);
        showErrorMessage(data.message)
    });
});

updatePasswordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    fetch('/user/update-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showSuccessMessage(data.message);
        } else {
            showErrorMessage(data.message);
        }
    })
    .catch(err => {
        console.error(err);
        showErrorMessage(data.message)
    });
});