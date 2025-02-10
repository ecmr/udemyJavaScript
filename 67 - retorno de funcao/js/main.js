function falaFrase(comeco){
    function FalaResto(resto){
        return comeco + ' ' + resto;
    }
    return FalaResto;
}

const OlaMundo = falaFrase('olá');
console.log(OlaMundo('mundo!'));