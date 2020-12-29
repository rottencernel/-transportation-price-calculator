var btn = document.querySelector('#btn'),
out = document.querySelector('#out'),
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol'),
load = document.querySelector('#load'),
del = document.querySelector('#del'),
frag = document.querySelector('#frag'),
range = document.querySelector('#range'),
distance = document.querySelector('.distance').innerHTML = 500;
weight = document.querySelector('#weight'),
vol = document.querySelector('#vol'),
kg = 5,5,
kub = 3500,
km = 2;

//reange slider
range.onchange = function() {
    var distance = document.querySelector('.distance').innerHTML = range.value;

}

//basic function
btn.onclick = function(){
    if(weight.value != ''&& vol.value != ''){
        if(load.checked){
            load.value = 1500;
        }else{
            load.value = 0;
        }
        if(del.checked){
            del.value = 3500;
        }else{
            del.value = 0;
        } 
        if(frag.checked){
            frag.value = 2000;
        }else{
            frag.value = 0;
        }

        var sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + + Number(del.value) +Number(frag.value)+ (range.value * km);

        if(isNaN(sum)){
            alert("Введите числовое значение")
        }else{
            out.innerHTML = sum;
        }
       
    } else{
        alert("Введите вес и объъем груза")

    }
}
