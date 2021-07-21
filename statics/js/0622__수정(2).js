 
// 참석자 on 
$('.m_people').click(function(){
    $('.m_chat').removeClass('act'); // 버튼배경off
    $('.m_people').addClass('act'); // 버튼배경on

    $('.video_info').addClass('show'); // 비디오인포 전체창 on
    $('.chat_cont').removeClass('show'); // 채팅화면 off
    $('.parti_cont').addClass('show'); // 참가자화면 on
});

// 채팅 on
$('.m_chat').click(function(){
    $('.m_people').removeClass('act'); // 버튼배경off
    $('.m_chat').addClass('act'); // 버튼배경on

    $('.video_info').addClass('show'); // 비디오인포 전체창 on
    $('.parti_cont').removeClass('show'); // 참가자화면 off
    $('.chat_cont').addClass('show'); // 채팅화면 on

    $('.file_btn').addClass('off');
    $('.filelist_cont').addClass('off');
});

// 참석자 및 채팅창 닫기버튼
$('.m_close').click(function(){
    $('.video_info').removeClass('show');
    $('.info_cont').removeClass('show');
    $('.tab_on').removeClass('act'); // 0621 추가
});
