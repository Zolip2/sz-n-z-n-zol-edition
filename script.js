var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'hu-HU';
recognition.interimResults = false;
recognition.maxAlternatives = 10;

const btn = document.querySelector('.gomb');
const mégse = document.getElementById('mégse')

recognition.onstart = function() {
    console.log('started')
}

let color = ['red', 'blue', 'pink', 'white', 'rgb(211, 112, 31)', 'yellow', 'green', 'purple']
let ellenőrzés = ['fehér', 'fekete']

let köregy = 0
let darab = 0




btn.addEventListener('click', function() {

    köregy = köregy + 1

    if (köregy == 1) {
        $('#one').css('background-color', color[Math.floor(Math.random() * 7)])
        $('#two').css('background-color', color[Math.floor(Math.random() * 7)])
        $('#three').css('background-color', color[Math.floor(Math.random() * 7)])
        $('#four').css('background-color', color[Math.floor(Math.random() * 7)])
        console.log($('#one').css('background-color'))
        console.log($('#two').css('background-color'))
        console.log($('#three').css('background-color'))
        console.log($('#four').css('background-color'))
    } else if (köregy == 2) {
        recognition.start()
        recognition.onresult = function(evente) {

            let current = evente.resultIndex;
            let transcript = evente.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(evente)
                $('#five').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(evente)
                $('#five').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(evente)
                $('#five').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(evente)
                $('#five').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(evente)
                $('#five').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(evente)
                $('#five').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(evente)
                $('#five').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(evente)
                $('#five').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 1) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#six').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#six').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#six').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#six').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#six').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#six').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#six').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#six').css('background-color', 'purple')
                    }
                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 2) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#seven').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#seven').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#seven').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#seven').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#seven').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#seven').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#seven').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#seven').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 3) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#eight').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#five').css('background-color') == $('#one').css('background-color')) {
                                        $('#jóegy').css('background-color', 'black')
                                    }

                                    if ($('#six').css('background-color') == $('#two').css('background-color')) {
                                        $('#jókettő').css('background-color', 'black')
                                    }

                                    if ($('#seven').css('background-color') == $('#three').css('background-color')) {
                                        $('#jóhárom').css('background-color', 'black')
                                    }

                                    if ($('#eight').css('background-color') == $('#four').css('background-color')) {
                                        $('#jónégy').css('background-color', 'black')
                                    }

                                    if ($('#jóegy').css('background-color') && $('#jókettő').css('background-color') && $('#jóhárom').css('background-color') && $('#jónégy').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                        location.reload()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 
    } else if (köregy == 3) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#nine').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#nine').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#nine').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#nine').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#nine').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#nine').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#nine').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#nine').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 4) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#ten').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#ten').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#ten').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#ten').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#ten').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#ten').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#ten').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#ten').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 5) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#eleven').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#eleven').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#eleven').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#eleven').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#eleven').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#eleven').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#eleven').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#eleven').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 6) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#twelve').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#nine').css('background-color') == $('#one').css('background-color')) {
                                        $('#jóöt').css('background-color', 'black')
                                    }

                                    if ($('#ten').css('background-color') == $('#two').css('background-color')) {
                                        $('#jóhat').css('background-color', 'black')
                                    }

                                    if ($('#eleven').css('background-color') == $('#three').css('background-color')) {
                                        $('#jóhét').css('background-color', 'black')
                                    }

                                    if ($('#twelve').css('background-color') == $('#four').css('background-color')) {
                                        $('#jónyolc').css('background-color', 'black')
                                    }

                                    if ($('#jóöt').css('background-color') && $('#jóhat').css('background-color') && $('#jóhét').css('background-color') && $('#jónyolc').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    else if (köregy == 4) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#thirteen').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#thirteen').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#thirteen').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#thirteen').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#thirteen').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#thirteen').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#thirteen').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#thirteen').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 7) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#fourteen').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 8) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#fifteen').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 9) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#sixteen').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#thirteen').css('background-color') == $('#one').css('background-color')) {
                                        $('#jókilenc').css('background-color', 'black')
                                    }

                                    if ($('#fourteen').css('background-color') == $('#two').css('background-color')) {
                                        $('#jótíz').css('background-color', 'black')
                                    }

                                    if ($('#fifteen').css('background-color') == $('#three').css('background-color')) {
                                        $('#jótizenegy').css('background-color', 'black')
                                    }

                                    if ($('#sixteen').css('background-color') == $('#four').css('background-color')) {
                                        $('#jótizenkettő').css('background-color', 'black')
                                    }

                                    if ($('#jókilenc').css('background-color') && $('#jótíz').css('background-color') && $('#jótizenegy').css('background-color') && $('#jótizenkettő').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 5) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#seventeen').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#seventeen').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#seventeen').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#seventeen').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#seventeen').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#seventeen').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#seventeen').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#seventeen').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 10) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#eighteen').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 11) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#nineteen').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 12) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#twenty').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#seventeen').css('background-color') == $('#one').css('background-color')) {
                                        $('#jótizenhárom').css('background-color', 'black')
                                    }

                                    if ($('#eighteen').css('background-color') == $('#two').css('background-color')) {
                                        $('#jótizennégy').css('background-color', 'black')
                                    }

                                    if ($('#nineteen').css('background-color') == $('#three').css('background-color')) {
                                        $('#jótizenöt').css('background-color', 'black')
                                    }

                                    if ($('#twenty').css('background-color') == $('#four').css('background-color')) {
                                        $('#jótizenhat').css('background-color', 'black')
                                    }

                                    if ($('#jótizenhárom').css('background-color') && $('#jótizennégy').css('background-color') && $('#jótizenöt').css('background-color') && $('#jótizenhat').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 6) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#twentyone').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#twentyone').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#twentyone').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#twentyone').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#twentyone').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#twentyone').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#twentyone').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#twentyone').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 13) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#twentytwo').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 14) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#twentythree').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 15) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#twentyfour').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#twentyone').css('background-color') == $('#one').css('background-color')) {
                                        $('#jótizenhét').css('background-color', 'black')
                                    }

                                    if ($('#twentytwo').css('background-color') == $('#two').css('background-color')) {
                                        $('#jótizennyolc').css('background-color', 'black')
                                    }

                                    if ($('#twentythree').css('background-color') == $('#three').css('background-color')) {
                                        $('#jótizenkilenc').css('background-color', 'black')
                                    }

                                    if ($('#twenty').css('background-color') == $('#four').css('background-color')) {
                                        $('#jóhúsz').css('background-color', 'black')
                                    }

                                    if ($('#jótizenhét').css('background-color') && $('#jótizennyolc').css('background-color') && $('#jótizenkilenc').css('background-color') && $('#jóhúsz').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 7) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#twentyfive').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#twentyfive').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#twentyfive').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#twentyfive').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#twentyfive').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#twentyfive').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#twentyfive').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#twentyfive').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 16) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#twentysix').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 17) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#twentyseven').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 18) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#twentyeight').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#twentyfive').css('background-color') == $('#one').css('background-color')) {
                                        $('#jóhuszonegy').css('background-color', 'black')
                                    }

                                    if ($('#twentysix').css('background-color') == $('#two').css('background-color')) {
                                        $('#jóhuszonkettő').css('background-color', 'black')
                                    }

                                    if ($('#twentyseven').css('background-color') == $('#three').css('background-color')) {
                                        $('#jóhuszonhárom').css('background-color', 'black')
                                    }

                                    if ($('#twentyeight').css('background-color') == $('#four').css('background-color')) {
                                        $('#jóhuszonnégy').css('background-color', 'black')
                                    }

                                    if ($('#jóhuszonegy').css('background-color') && $('#jóhuszonkettő').css('background-color') && $('#jóhuszonhárom').css('background-color') && $('#jóhuszonnégy').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 8) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#twentynine').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#twentynine').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#twentynine').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#twentynine').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#twentynine').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#twentynine').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#twentynine').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#twentynine').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 19) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#thirty').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#thirty').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#thirty').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#thirty').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#thirty').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#thirty').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#thirty').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#thirty').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 20) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#thirtyone').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 21) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#thirtytwo').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#twentynine').css('background-color') == $('#one').css('background-color')) {
                                        $('#jóhuszonöt').css('background-color', 'black')
                                    }

                                    if ($('#thirty').css('background-color') == $('#two').css('background-color')) {
                                        $('#jóhuszonhat').css('background-color', 'black')
                                    }

                                    if ($('#thirtyone').css('background-color') == $('#three').css('background-color')) {
                                        $('#jóhuszonhét').css('background-color', 'black')
                                    }

                                    if ($('#thirtytwo').css('background-color') == $('#four').css('background-color')) {
                                        $('#jóhuszonnyolc').css('background-color', 'black')
                                    }

                                    if ($('#jóhuszonöt').css('background-color') && $('#jóhuszonhat').css('background-color') && $('#jóhuszonhét').css('background-color') && $('#jóhuszonnyolc').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 9) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#thirtythree').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#thirtythree').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#thirtythree').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#thirtythree').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#thirtythree').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#thirtythree').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#thirtythree').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#thirtythree').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 22) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#thirtyfour').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 23) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#thirtyfive').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 24) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#thirtysix').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#thirtythree').css('background-color') == $('#one').css('background-color')) {
                                        $('#jóhuszonkilenc').css('background-color', 'black')
                                    }

                                    if ($('#thirtyfour').css('background-color') == $('#two').css('background-color')) {
                                        $('#jóharminc').css('background-color', 'black')
                                    }

                                    if ($('#thirtyfive').css('background-color') == $('#three').css('background-color')) {
                                        $('#jóharmincegy').css('background-color', 'black')
                                    }

                                    if ($('#thirtysix').css('background-color') == $('#four').css('background-color')) {
                                        $('#jóharminckettő').css('background-color', 'black')
                                    }

                                    if ($('#jóhuszonkilenc').css('background-color') && $('#jóharminc').css('background-color') && $('#jóharmincegy').css('background-color') && $('#jóharminckettő').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 10) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#thirtyseven').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 25) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#thirtyeight').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 26) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#thirtynine').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 27) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#fourty').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#thirtyseven').css('background-color') == $('#one').css('background-color')) {
                                        $('#jóharminchárom').css('background-color', 'black')
                                    }

                                    if ($('#thirtyeight').css('background-color') == $('#two').css('background-color')) {
                                        $('#jóharmincnégy').css('background-color', 'black')
                                    }

                                    if ($('#thirtynine').css('background-color') == $('#three').css('background-color')) {
                                        $('#jóharmincöt').css('background-color', 'black')
                                    }

                                    if ($('#fourty').css('background-color') == $('#four').css('background-color')) {
                                        $('#jóharminchat').css('background-color', 'black')
                                    }

                                    if ($('#jóharminchárom').css('background-color') && $('#jóharmincnégy').css('background-color') && $('#jóharmincöt').css('background-color') && $('#jóharminchat').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 11) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#fourtyone').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#fourtyone').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#fourtyone').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#fourtyone').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#fourtyone').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#fourtyone').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#fourtyone').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#fourtyone').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 28) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#fourtytwo').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 29) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#fourtythree').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 30) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#fourtyfour').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#fourtyone').css('background-color') == $('#one').css('background-color')) {
                                        $('#jóharminchét').css('background-color', 'black')
                                    }

                                    if ($('#fourtytwo').css('background-color') == $('#two').css('background-color')) {
                                        $('#jóharmincnyolc').css('background-color', 'black')
                                    }

                                    if ($('#fourtythree').css('background-color') == $('#three').css('background-color')) {
                                        $('#jóharminckilenc').css('background-color', 'black')
                                    }

                                    if ($('#fourtyfour').css('background-color') == $('#four').css('background-color')) {
                                        $('#jónegyven').css('background-color', 'black')
                                    }

                                    if ($('#jóharminchét').css('background-color') && $('#jóharmincnyolc').css('background-color') && $('#jóharminckilenc').css('background-color') && $('#jónegyven').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (köregy == 12) {
        recognition.start()
        recognition.onresult = function(event) {

            let current = event.resultIndex;
            let transcript = event.results[current][0].transcript

            if (transcript.includes('piros' || 'Piros')) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'red')
            } else if (transcript.includes('kék' || 'Kék')) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'blue')
            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'pink')
            } else if (transcript.includes('fehér' || 'Fehér')) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'white')
            }else if (transcript.includes('narancs' || 'Narancs' )) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'rgb(211, 112, 31)')
            } else if (transcript.includes('citrom' || 'Citrom')) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'yellow')
            } else if (transcript.includes('zöld' || 'Zöld')) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'green')
            } else if (transcript.includes('lila' || 'Lila')) {
                console.log(event)
                $('#fourtyfive').css('background-color', 'purple')
            }

            darab = darab + 1
            recognition.onend = function() {
                recognition.start()
            }

            if (darab == 31) {
                recognition.onresult = function(event) {
    
                    let current = event.resultIndex;
                    let transcript = event.results[current][0].transcript
        
                    if (transcript.includes('piros' || 'Piros')) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'red')
                    } else if (transcript.includes('kék' || 'Kék')) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'blue')
                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'pink')
                    } else if (transcript.includes('fehér' || 'Fehér')) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'white')
                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'rgb(211, 112, 31)')
                    } else if (transcript.includes('citrom' || 'Citrom')) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'yellow')
                    } else if (transcript.includes('zöld' || 'Zöld')) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'green')
                    } else if (transcript.includes('lila' || 'Lila')) {
                        console.log(event)
                        $('#fourtysix').css('background-color', 'purple')
                    }

                    darab = darab + 1
                    recognition.onend = function() {
                        recognition.start()
                    }

                    if (darab == 32) {
                        recognition.onresult = function(event) {
            
                            let current = event.resultIndex;
                            let transcript = event.results[current][0].transcript
                
                            if (transcript.includes('piros' || 'Piros')) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'red')
                            } else if (transcript.includes('kék' || 'Kék')) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'blue')
                            } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'pink')
                            } else if (transcript.includes('fehér' || 'Fehér')) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'white')
                            }else if (transcript.includes('narancs' || 'Narancs' )) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'rgb(211, 112, 31)')
                            } else if (transcript.includes('citrom' || 'Citrom')) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'yellow')
                            } else if (transcript.includes('zöld' || 'Zöld')) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'green')
                            } else if (transcript.includes('lila' || 'Lila')) {
                                console.log(event)
                                $('#fourtyseven').css('background-color', 'purple')
                            }

                            darab = darab + 1
                            recognition.onend = function() {
                                recognition.start()
                            }

                            if (darab == 33) {
                                recognition.onresult = function(event) {
                    
                                    let current = event.resultIndex;
                                    let transcript = event.results[current][0].transcript
                        
                                    if (transcript.includes('piros' || 'Piros')) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'red')
                                    } else if (transcript.includes('kék' || 'Kék')) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'blue')
                                    } else if (transcript.includes('rózsaszín' || 'Rózsaszín')) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'pink')
                                    } else if (transcript.includes('fehér' || 'Fehér')) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'white')
                                    }else if (transcript.includes('narancs' || 'Narancs' )) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'rgb(211, 112, 31)')
                                    } else if (transcript.includes('citrom' || 'Citrom')) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'yellow')
                                    } else if (transcript.includes('zöld' || 'Zöld')) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'green')
                                    } else if (transcript.includes('lila' || 'Lila')) {
                                        console.log(event)
                                        $('#fourtyeight').css('background-color', 'purple')
                                    }
                                    recognition.onend = function() {
                                        recognition.stop()
                                    }

                                    if ($('#fourtyfive').css('background-color') == $('#one').css('background-color')) {
                                        $('#jónegyvenegy').css('background-color', 'black')
                                    }

                                    if ($('#fourtysix').css('background-color') == $('#two').css('background-color')) {
                                        $('#jónegyvenkettő').css('background-color', 'black')
                                    }

                                    if ($('#fourtyseven').css('background-color') == $('#three').css('background-color')) {
                                        $('#jónegyvenhárom').css('background-color', 'black')
                                    }

                                    if ($('#fourtyeight').css('background-color') == $('#four').css('background-color')) {
                                        $('#jónegyvennégy').css('background-color', 'black')
                                    }

                                    if ($('#jónegyvenegy').css('background-color') && $('#jónegyvenkettő').css('background-color') && $('#jónegyvenhárom').css('background-color') && $('#jónegyvennégy').css('background-color') == $('#semmi').css('background-color')) {
                                        console.log('nyertél')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})

