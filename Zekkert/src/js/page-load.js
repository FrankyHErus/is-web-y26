// if you need IIFE - uncomment ¯\_(ツ)_/¯
// (() => console.log('IIFE demonstration'))()

let dateTimeStart = Date.now()

window.addEventListener('load', function () {
    this.document.getElementById("loadedTime").innerText = `This page loaded in ${(Date.now() - dateTimeStart) / 1000} s`
})