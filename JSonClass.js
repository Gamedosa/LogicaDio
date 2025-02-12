let person  = {
 Name: "Gabriel",
 Age: 23,
 Email: "AprendendoJson@Gmail.com",
 Hobbies: "Voleibol, cantar, assitir, jogar "
}

console.log(person)

let grades = {
    grade: "Math",
    students: {
    0: ["Ana", 7],
    1: ["João", 4],
    2: ["Marcos", 8]
    }
}

for( let index in grades.students ){
    let [StudentName, StudentGrade] = grades.students[index]
    if (StudentGrade > 5 ){
        console.log(`Os alunos aprovados sâo : ${StudentName}`)
    }
     else{
        console.log(`Aluno ${StudentName} não possui nota suficiente`)
    }

}