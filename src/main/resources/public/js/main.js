$(document).ready(function(){
    $(".choose-number").change(function(){
        var $selectedValue=$("input[name='options-number']:checked").val();
        if($selectedValue==1)
        {
            $("#person2").attr("disabled",true);
            $("#person3").attr("disabled",true);

        }
        if($selectedValue==2)
        {
            $("#person2").attr("disabled",false);
            $("#person3").attr("disabled",true);

        }
        if($selectedValue==3)
        {
            $("#person2").attr("disabled",false);
            $("#person3").attr("disabled",false);
        }
    });
});

