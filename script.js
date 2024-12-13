$(function() {
    //show popup modal
    var myModal = new bootstrap.Modal(document.getElementById('modalPopUp'));
    myModal.show();
    // jika klik ok maka : 
    $('#btnOk').click(function() {
        var audio = new Audio("lagu.mp3");
        audio.play();
        //sembunyikan popup
        myModal.hide();
    });
});