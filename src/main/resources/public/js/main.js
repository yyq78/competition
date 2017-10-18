$(document).ready(function(){
    $(".choose-number").change(function(){
        var $selectedValue=$("input[name='options-number']:checked").val();
        if($selectedValue==1)
        {
            $("fieldset #person2").attr("disabled",true);
            $("fieldset #person3").attr("disabled",true);
            $("#person2").hide();
            $("#person3").hide();
        }
        if($selectedValue==2)
        {
            $("fieldset #person2").attr("disabled",false);
            $("fieldset #person3").attr("disabled",true);
            $("#person2").show();
            $("#person3").hide();
        }
        if($selectedValue==3)
        {
            $("#person2").show();
            $("#person3").show();
            $("fieldset #person2").attr("disabled",false);
            $("fieldset #person3").attr("disabled",false);
        }
    });
});

