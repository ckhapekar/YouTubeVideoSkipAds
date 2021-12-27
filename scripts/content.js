
setInterval(skipAds, 2 * 1000)

function skipAds() {
    if($('.ytp-ad-skip-button').length > 0) {
        console.log($('.ytp-ad-skip-button-text').html());
        $('.ytp-ad-skip-button').click();
    }

    if($('.ytp-ce-element').length > 0) {
        $('.ytp-ce-element').hide();
    }

    if($('#player-ads').length > 0) {
        $('#player-ads').hide();
    }

    if($('#masthead-ad').length > 0) {
        $('#masthead-ad').hide();
    }

    
    
}



document.body.style.backgroundColor = 'orange';