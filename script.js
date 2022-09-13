window.addEventListener('DOMContentLoaded', function () {


    let audio = ''
    let gravando = false
    let lista = document.querySelector('#lista')

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {

        let fala_api = window.SpeechRecognition || window.webkitSpeechRecognition
        let gravar_audio = new fala_api()

        gravar_audio.continuous = false
        gravar_audio.interimResults = false
        gravar_audio.lang = 'pt-BR'

        gravar_audio.onstart = function(){
            gravando = true
        }

        gravar_audio.onend = function(){

            gravar_audio.start()
            gravando = false

        }
        gravar_audio.onresult = function(evt){

            audio = evt.results[0][0].transcript
            var item = document.createElement('option')
            item.text = `${audio}`
            lista.appendChild(item)

        }
        gravar_audio.start()
    }
}, false)