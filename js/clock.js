const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // 값이 한자리 숫자일 때 '00'으로 포맷을 맞춰주기 위해 padStart() 함수 사용
    // String.prototype.padStart(targetLength [, padString])
    // targetLength :목표 문자열 길이(현재 문자열의 길이보다 작으면 채워넣지 않고 반환)
    // padString : 현재 문자열에 채워넣을 다른 문자열. 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. defulat 값은 ' '
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 페이지가 로드되자마자 실행시키도록 처리
setInterval(getClock, 1000); // 1초마다 실행되도록 처리

// setInterval(functionName, 5000);
// 시간마다 계속 실행 
// setTimeout(sayHello, 5000);
// 시간 후에 한번 실행
