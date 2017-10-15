$(document).ready(function(){
    $(".choose-number").change(function(){
        var $selectedValue=$("input[name='options-number']:checked").val();
        if($selectedValue==1)
        {
            $("#person2").hide();
            $("#person3").hide();
        }
        if($selectedValue==2)
        {
            $("#person2").show();
            $("#person3").hide();
        }
        if($selectedValue==3)
        {
            $("#person2").show();
            $("#person3").show();
        }
    });
});

