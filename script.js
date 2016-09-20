$(document).ready(function(){



    refreshTime();
    setInterval(refreshTime, 1000);


    function refreshTime(){
        var date = new Date();

        var seconds = date.getSeconds();
        var point = seconds % 2 != 0 ? ":" : "&nbsp;";

        var time = date.getHours() + point + date.getMinutes();

        $("#clock").html(time);
    }

});
