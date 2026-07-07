function multiple(a, b =1, c = 0) {
    return a * b + c;
}
//매개변수 2개쓰기
const result = multiple(5, 10, 20);
document.write(`multiple(5, 10, 20):${result}`)
document.write(`<hr>`);

//매개변수 2개 쓰기 (a,b를 넣고 c에 기본값 넣기)
const result = multiple(5);
document.write(`multiple(5):${result}`)
document.write(`<hr>`);

