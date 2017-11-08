//jQuery
$(document).ready(function(){
    $("#person2").hide();
    $("#person3").hide();
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

    })

});

//javascript

function   getRadioBoxValue(radioName)
{
    var i;
    var obj = document.getElementsByName(radioName);  //这个是以标签的name来取控件
    for(i=0; i<obj.length;i++)    {
        if(obj[i].checked){
            return   obj[i].value;
        }
    }
    return "undefined";
}
function isChineseName(str) {
    var pattern1 = new RegExp("^[\u4E00-\u9FA5]{2,4}$");
    return pattern1.test(str);
}
function isId(str) {
    var pattern1 = new RegExp("^201[6-7]31064[1-4][0-3][0-9]$");
    return pattern1.test(str);
}
function isLength(things) {
    return things.length;
}
function validate() {
    var selectedValue = getRadioBoxValue('options-number');

    var stu_name1 = document.getElementById("stu_name1").value;
    var stu_name2 = document.getElementById("stu_name2").value;
    var stu_name3 = document.getElementById("stu_name3").value;

    var stu_id1 = document.getElementById("stu_id1").value;
    var stu_id2 = document.getElementById("stu_id2").value;
    var stu_id3 = document.getElementById("stu_id3").value;

    var things1 = document.getElementById("things1").value;
    var things2 = document.getElementById("things2").value;
    if(selectedValue==1){
        if(isChineseName(stu_name1)==false){
            document.getElementById("name1_warning").style.display="inline";
            document.getElementById("stu_name1").value="";
            document.getElementById("stu_name1").focus();
            return false;
        }
        if(isId(stu_id1)==false){
            document.getElementById("name1_warning").style.display="none";
            document.getElementById("id1_warning").style.display="inline";
            document.getElementById("stu_id1").value="";
            document.getElementById("stu_id1").focus();
            return false;
        }
        if(isLength(things1)<100){
            document.getElementById("id1_warning").style.display="none";
            alert("创意描述：字数不应少于一百字");
            document.getElementById("things1").focus();
            return false;
        }
        if(isLength(things1)>300){
            document.getElementById("id1_warning").style.display="none";
            alert("创意描述：字数不应多于三百字");
            document.getElementById("things1").focus();
            return false;
        }
        if(isLength(things2)<100){
            document.getElementById("id1_warning").style.display="none";
            alert("应用前景：字数不应少于一百字");
            document.getElementById("things2").focus();
            return false;
        }
        if(isLength(things2)>300){
            document.getElementById("id1_warning").style.display="none";
            alert("创意描述：字数不应多于三百字");
            document.getElementById("things2").focus();
            return false;
        }
        alert("提交成功！");
        return true;
    }
    if(selectedValue==2){
        if(isChineseName(stu_name1)==false){
            document.getElementById("name1_warning").style.display="inline";
            document.getElementById("stu_name1").value="";
            document.getElementById("stu_name1").focus();
            return false;
        }
        if(isId(stu_id1)==false){
            document.getElementById("name1_warning").style.display="none";
            document.getElementById("id1_warning").style.display="inline";
            document.getElementById("stu_id1").value="";
            document.getElementById("stu_id1").focus();
            return false;
        }
        if(isChineseName(stu_name2)==false){
            document.getElementById("id1_warning").style.display="none";
            document.getElementById("name2_warning").style.display="inline";
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }
        if(stu_name1==stu_name2){
            document.getElementById("name2_warning").style.display="inline";
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }

        if(isId(stu_id2)==false){
            document.getElementById("name2_warning").style.display="none";
            document.getElementById("id2_warning").style.display="inline";
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(stu_id1==stu_id2){
            document.getElementById("id2_warning").style.display="inline";
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(isLength(things1)<100){
            document.getElementById("id2_warning").style.display="none";
            alert("创意描述：字数不应少于一百字");
            document.getElementById("things1").focus();
            return false;
        }
        if(isLength(things1)>300){
            document.getElementById("id2_warning").style.display="none";
            alert("创意描述：字数不应多于三百字");
            document.getElementById("things1").focus();
            return false;
        }
        if(isLength(things2)<100){
            document.getElementById("id2_warning").style.display="none";
            alert("应用前景：字数不应少于一百字");
            document.getElementById("things2").focus();
            return false;
        }
        if(isLength(things2)>300){
            document.getElementById("id2_warning").style.display="none";
            alert("创意描述：字数不应多于三百字");
            document.getElementById("things2").focus();
            return false;
        }
        alert("提交成功！");
        return true;
    }
    if(selectedValue==3){
        if(isChineseName(stu_name1)==false){
            document.getElementById("name1_warning").style.display="inline";
            document.getElementById("stu_name1").value="";
            document.getElementById("stu_name1").focus();
            return false;
        }
        if(isId(stu_id1)==false){
            document.getElementById("name1_warning").style.display="none";
            document.getElementById("id1_warning").style.display="inline";
            document.getElementById("stu_id1").value="";
            document.getElementById("stu_id1").focus();
            return false;
        }
        if(isChineseName(stu_name2)==false){
            document.getElementById("id1_warning").style.display="none";
            document.getElementById("name2_warning").style.display="inline";
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }
        if(stu_name1==stu_name2){
            document.getElementById("name2_warning").style.display="inline";
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }
        if(isId(stu_id2)==false){
            document.getElementById("name2_warning").style.display="none";
            document.getElementById("id2_warning").style.display="inline";
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(stu_id1==stu_id2){
            document.getElementById("id2_warning").style.display="inline";
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(isChineseName(stu_name3)==false){
            document.getElementById("id2_warning").style.display="none";
            document.getElementById("name3_warning").style.display="inline";
            document.getElementById("stu_name3").value="";
            document.getElementById("stu_name3").focus();
            return false;
        }
        if(stu_name1==stu_name3||stu_name2==stu_name3){
            document.getElementById("name3_warning").style.display="inline";
            document.getElementById("stu_name3").value="";
            document.getElementById("stu_name3").focus();
            return false;
        }
        if(isId(stu_id3)==false){
            document.getElementById("name3_warning").style.display="none";
            document.getElementById("id3_warning").style.display="inline";
            document.getElementById("stu_id3").value="";
            document.getElementById("stu_id3").focus();
            return false;
        }
        if(stu_id1==stu_id3||stu_id2==stu_id3){
            document.getElementById("id3_warning").style.display="inline";
            document.getElementById("stu_id3").value="";
            document.getElementById("stu_id3").focus();
            return false;
        }
        if(isLength(things1)<100){
            document.getElementById("id3_warning").style.display="none";
            alert("创意描述：字数不应少于一百字");
            document.getElementById("things1").focus();
            return false;
        }
        if(isLength(things1)>300){
            document.getElementById("id3_warning").style.display="none";
            alert("创意描述：字数不应多于三百字");
            document.getElementById("things1").focus();
            return false;
        }
        if(isLength(things2)<100){
            document.getElementById("id3_warning").style.display="none";
            alert("应用前景：字数不应少于一百字");
            document.getElementById("things2").focus();
            return false;
        }
        if(isLength(things2)>300){
            document.getElementById("id3_warning").style.display="none";
            alert("创意描述：字数不应多于三百字");
            document.getElementById("things2").focus();
            return false;
        }
        alert("提交成功！");
        return true;
    }

}




