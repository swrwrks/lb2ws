//1. Данные
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

//2 Prog(Denis): Вычисление среднего балла.
function calculateAverage(data) {
    const totalScore = data.reduce((sum, student) => sum + student.score, 0);
    return totalScore / data.length;
}

//3 Prog(Anna): Поиск студента с максимальным баллом.
function findTopStudent(data) {
    const top = data.reduce((max, student) => student.score > max.score ? student : max, data[0]);
    return top.name + " (" + top.score + ")";
}

//4 Prog(Dasha): Фильтрация должников. 
function filterFailed(data, passScore = 60)  {
    return data.filter(student => student.score < passScore).map(student => student.name);
}

//5 Prog(X): Добавление буквенной оценки.
function addLetterGrade(data) {
    return data.map(student => {
        if (student.score >= 90) return "A";
        if (student.score >= 75) return "B";
        return "C";
    });
}