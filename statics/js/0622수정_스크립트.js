 
// 참석자 on 

$('.m_people').click(function(){
    var tabOn = $(this).addClass('act').attr('data-tab');
    $('.m_chat').removeClass('act'); 
    $(this).addClass('act');
    $('.video_info').addClass('show');      

    $('.'+tabOn).siblings('div').removeClass('show');
    $('.'+tabOn).addClass('show');
    $('.file_btn').addClass('off');
    $('.filelist_cont').addClass('off');

});

// 채팅 on
$('.m_chat').click(function(){
    var tabOn = $(this).addClass('act').attr('data-tab');
    $('.m_people').removeClass('act'); 
    $(this).addClass('act'); // 

    $('.video_info').addClass('show');     

    $('.'+tabOn).siblings('div').removeClass('show');
    $('.'+tabOn).addClass('show');
    $('.file_btn').addClass('off');
    $('.filelist_cont').addClass('off');

});