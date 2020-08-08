//array com materias
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]
//array com dias
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]
//serve para substituir o número que se refere a materia pelo texto. O que aconteceu foi que na hora de cadastrar, quando fazia o enviar dados, no lugar da materia (texto), aparecia a posição de array. essa função receberá o parametro que é o array de materias, diminui um, para pegar a materia correta e retorna ela pelo o array subjects(materias)
function getsubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]

}
//função para converter as horas(strings) passadas no site para minutes que seguirão para  o page.js
//e para o banco de dados
function convertHourstoMinutes(time){
    //seria o mesmo que const hour = time.split(':')[0]/ const minutes = time.split(':')[1]
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}


module.exports = {
    subjects,
    weekdays,
    getsubject,
    convertHourstoMinutes
}