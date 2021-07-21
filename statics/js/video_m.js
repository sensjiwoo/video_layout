
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
    $('.m_chat').removeClass('act'); // 수정 3시
    $('.video_info').addClass('show');      

    $('.'+tabOn).siblings('div').removeClass('show');
    $('.'+tabOn).addClass('show');
    $('.file_btn').addClass('off');
    $('.filelist_cont').addClass('off');
});

// 채팅 on
$('.m_chat').click(function(){
    var tabOn = $(this).addClass('act').attr('data-tab');
    $('.m_people').removeClass('act'); // 수정 3시
    $('.video_info').addClass('show');      

    $('.'+tabOn).siblings('div').removeClass('show');
    $('.'+tabOn).addClass('show');
    $('.file_btn').addClass('off');
    $('.filelist_cont').addClass('off');
});

// 참석자 및 채팅창 닫기
$('.m_close').click(function(){
    $('.tab_on').removeClass('act');
    $('.video_info').removeClass('show');
});

