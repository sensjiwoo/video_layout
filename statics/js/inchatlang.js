// 대분류 언어추가
var firstList = new Array("1","2","3","4");

// 중분류 언어

var secondList1 = new Array("Australia", "Canada", "India", "New Zealand", "South Africa", "United Kingdom", "United States");
var secondList2 = new Array("普通话 (中国大陆)", "普通话 (香港)", "中文 (台灣)");
var secondList3 = new Array("번체1", "번체2", "번체3");

// 페이지 로딩시 자동 실행  
window.onload = function(){
    var v_inchatLangSelect = document.getElementById("inchatLangSelect"); // SELECT TAG
    
    for (i =0 ; i<firstList.length; i++){//  
        // 새로운 <option value=''>값</option> 태그 생성
        var optionEl = document.createElement("option");

        // option태그에 value 속성 값으로 저장
        optionEl.value = firstList[i];
    
        // text 문자열을 새로 생성한 <option> 태그의 값으로 추가
        optionEl.appendChild (document.createTextNode(firstList[i]));
    
        // 만들어진 option 태그를 <select>태그에 추가
        v_inchatLangSelect.appendChild(optionEl);
    }

    var v_inchatLangSub = document.getElementById("inchatLangSub"); // SELECT TAG
    v_inchatLangSub.style.display = "none";  // 태그 감추기
    var v_inchatLangSub = document.getElementById("lastSelect"); // SELECT TAG
    v_inchatLangSub.style.display = "none";  // 태그 감추기

}

// 대분류 선택시
function changeinchatLangSelect(){
    var v_inchatLangSelect = document.getElementById("inchatLangSelect"); // SELECT TAG
    var idx = v_inchatLangSelect.options.selectedIndex;     // 
    
    if (idx < 1){
        return;
    }  

    inchatLangSubFill(idx);   // 중분류 생성
}


function inchatLangSubFill(idx){
    var v_inchatLangSub = document.getElementById("inchatLangSub"); // SELECT TAG
    var v_secondSelect = document.getElementById("lastSelect");

    var data = null;

    if (idx != 2 && idx !=15 && idx !=16) {
        v_inchatLangSub.style.display = "none";  // 중분류 태그 감추기
        v_secondSelect.style.display = "none";
        return;
    }

    if (idx == 2){
    data = secondList1

    }
    if (idx == 15){
    data = secondList2
    
    }
    if (idx == 16){
    data = secondList3
    
    }

    v_inchatLangSub.innerHTML = "";  // 태그 출력
    
    for (i =0 ; i<data.length; i++){ 
        // 새로운 <option value=''>값</option> 태그 생성
        var optionEl = document.createElement("option");

        // value 속성 태그에 저장
        optionEl.value = data[i];
    
        // text 문자열을 새로 생성한 <option> 태그에 추가
        optionEl.appendChild (document.createTextNode(data[i]));
    
        // 만들어진 option 태그를 <select>태그에 추가
        v_inchatLangSub.appendChild(optionEl);
    }

v_inchatLangSub.style.display = ""; // 중분류 태그 출력


}

// 대분류 선택시
function changeSecondSelect(){
    var v_inchatLangSelect = document.getElementById("inchatLangSelect"); // SELECT TAG
    var v_secondSelect = document.getElementById("inchatLangSub"); // SELECT TAG
    var idx = v_inchatLangSelect.options.selectedIndex; 
    var idx2 = v_secondSelect.options.selectedIndex;    // 선택값 0 ~ 3
    
    // alert("select: " + selText);
    if (idx < 1 && idx > 71){
        return;
    }


    // lastSelectFill(idx,idx2);   // 중분류 생성
}




