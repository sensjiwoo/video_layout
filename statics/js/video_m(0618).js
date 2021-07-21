
// 마이크 on/off
$('.m_micset').click(function(){
    $(this).toggleClass('act');
});

// 화면 on/off
$('.m_camset').click(function(){
    $(this).toggleClass('act');
});

// 손들기
$('.m_hand').click(function(){
    $(this).toggleClass('act');
});
 
// 참석자 on 

$('.m_people').click(function(){
    var tabOn = $(this).addClass('act').attr('data-tab');
    // $(this).parent('li').siblings('li').children('.tab_on').removeClass('act'); 0621 삭제
    $('.m_chat').removeClass('act'); // 0618___추가
    $(this).addClass('act'); // 0621 추가

    $('.video_info').addClass('show');      

    $('.'+tabOn).siblings('div').removeClass('show');
    $('.'+tabOn).addClass('show');
    $('.file_btn').addClass('off');
    $('.filelist_cont').addClass('off');

});

// 채팅 on
$('.m_chat').click(function(){
    var tabOn = $(this).addClass('act').attr('data-tab');
    // $(this).parent('li').siblings('li').children('.tab_on').removeClass('act'); 0621 삭제
    $('.m_people').removeClass('act'); // 0618___추가
    $(this).addClass('act'); // 0621 추가

    $('.video_info').addClass('show');      // 0621 확인 script 내용 있는지 확인해주세요. 채팅버튼 눌렀을 때는 .video_info에 show가 붙지않습니다. 

    $('.'+tabOn).siblings('div').removeClass('show');
    $('.'+tabOn).addClass('show');
    $('.file_btn').addClass('off');
    $('.filelist_cont').addClass('off');

});

// 참석자 및 채팅창 닫기
$('.m_close').click(function(){
    // $('.tab_on').removeClass('act'); 0618___삭제
    $('.info_cont').removeClass('show'); // 0618___추가
    $('.video_info').removeClass('show');
    $(.tab_on).removeClass('act'); // 0621 추가

});

