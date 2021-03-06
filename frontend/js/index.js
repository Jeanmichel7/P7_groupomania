const signup = async function () {
    try {
        // évènement click bouton du formulaire
        document.getElementById("btnSubmit").addEventListener('click', e => {

            // Récupère valeur inputs form
            let inputLastName = document.getElementById('inputLastName').value
            let inputFirstName = document.getElementById('inputFirstName').value
            let inputPassword = document.getElementById('inputPassword').value
            let inputEmail = document.getElementById('inputEmail').value
            // Post les données attendu à l'API
            fetch("http://localhost:3000/api/users/signup", {
                method: "POST",
                body: JSON.stringify({

                    // objet contact tiré du forulaire
                    first_name: inputFirstName,
                    last_name: inputLastName,
                    email: inputEmail,
                    password: inputPassword
                }),
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }
            }, true)
                .then(response => response.json())
                .then(function (response) {

                    // on vérifie la réponse
                    console.log(response);

                    window.location.href = "login.html";
                })
                .catch(function (error) {
                    console.error(error)
                });
        })
    } catch (e) {
        console.error(e)
    }
}

signup()