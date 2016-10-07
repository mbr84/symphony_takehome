let time = Date.parse('2017-1-1') - Date.parse(new Date);
let seconds = Math.floor((time / 1000) % 60);
let minutes = Math.floor((time / 1000 / 60) % 60)
let hours = Math.floor(time/(1000*60*60))
