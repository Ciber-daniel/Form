//   variables
const btn = document.getElementById('btn')
const form = document.getElementById('contact-form')
const modal = document.getElementById('modal')
const disable = document.getElementById('btn_container')
const complet = document.getElementById('finalizado')
const load = document.getElementById('loading')


form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('qlq')
    const { name, email, phone, comment } = form;
    
    const data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        // comment: comment.value,
    }

    console.log('Deira', data)


    modal.style.display = 'flex'
    disable.innerHTML = ` <button type="submit" disabled id=btn class="btn btn-outline-dark">Enviar</button>`


    setTimeout(function () {
        complet.innerHTML = `<h2 >Tus datos han sido enviados exitosamente</h2>`
        disable.innerHTML = ` <button type="submit" id=btn class="btn btn-outline-dark">Enviar</button>`
        form.reset();
    }, 2000)

    setTimeout(function() {
          modal.style.display = 'none'
    },4000)
})



