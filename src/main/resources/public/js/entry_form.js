/**
 * Created by yyq on 2017/12/20.
 */
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
    var pattern1 = new RegExp("^201[6-9]3106[0-9][0-9][0-9][0-9]$");
    return pattern1.test(str);
}
function validate() {
    var selectedValue = getRadioBoxValue('options-number');

    var stu_name1 = document.getElementById("stu_name1").value;
    var stu_name2 = document.getElementById("stu_name2").value;
    var stu_name3 = document.getElementById("stu_name3").value;

    var stu_id1 = document.getElementById("stu_id1").value;
    var stu_id2 = document.getElementById("stu_id2").value;
    var stu_id3 = document.getElementById("stu_id3").value;
    var file=document.getElementById("file").value;
    if(selectedValue==1){
        if(isChineseName(stu_name1)==false){
            alert("姓名格式为2-4个中文!");
            document.getElementById("stu_name1").value="";
            document.getElementById("stu_name1").focus();
            return false;
        }
        if(isId(stu_id1)==false){
            alert("学号格式为12位数字!");
            document.getElementById("stu_id1").value="";
            document.getElementById("stu_id1").focus();
            return false;
        }
        if(file=="")
        {
            alert("请选择需要上传的文件！");
            return false;
        }
        alert("恭喜您，报名成功！");
        return true;
    }
    if(selectedValue==2){
        if(isChineseName(stu_name1)==false){
            alert("姓名格式为2-4个中文!");
            document.getElementById("stu_name1").value="";
            document.getElementById("stu_name1").focus();
            return false;
        }
        if(isId(stu_id1)==false){
            alert("学号格式为12位数字!");
            document.getElementById("stu_id1").value="";
            document.getElementById("stu_id1").focus();
            return false;
        }
        if(isChineseName(stu_name2)==false){
            alert("姓名格式为2-4个中文!");
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }
        if(stu_name1==stu_name2){
            alert("姓名不能重复！");
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }

        if(isId(stu_id2)==false){
            alert("学号格式为12位数字!");
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(stu_id1==stu_id2){
            alert("学号不能重复！");
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(file=="")
        {
            alert("请选择需要上传的文件！");
            return false;
        }
        alert("恭喜您，报名成功！");
        return true;
    }
    if(selectedValue==3){
        if(isChineseName(stu_name1)==false){
            alert("姓名格式为2-4个中文!");
            document.getElementById("stu_name1").value="";
            document.getElementById("stu_name1").focus();
            return false;
        }
        if(isId(stu_id1)==false){
            alert("学号格式为12位数字!");
            document.getElementById("stu_id1").value="";
            document.getElementById("stu_id1").focus();
            return false;
        }
        if(isChineseName(stu_name2)==false){
            alert("姓名格式为2-4个中文!");
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }
        if(stu_name1==stu_name2){
            alert("姓名不能重复!");
            document.getElementById("stu_name2").value="";
            document.getElementById("stu_name2").focus();
            return false;
        }
        if(isId(stu_id2)==false){
            alert("学号格式为12位数字!");
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(stu_id1==stu_id2){
            alert("学号不能重复!");
            document.getElementById("stu_id2").value="";
            document.getElementById("stu_id2").focus();
            return false;
        }
        if(isChineseName(stu_name3)==false){
            alert("姓名格式为2-4个中文!");
            document.getElementById("stu_name3").value="";
            document.getElementById("stu_name3").focus();
            return false;
        }
        if(stu_name1==stu_name3||stu_name2==stu_name3){
            alert("姓名不能重复!");
            document.getElementById("stu_name3").value="";
            document.getElementById("stu_name3").focus();
            return false;
        }
        if(isId(stu_id3)==false){
            alert("学号格式为12位数字!");
            document.getElementById("stu_id3").value="";
            document.getElementById("stu_id3").focus();
            return false;
        }
        if(stu_id1==stu_id3||stu_id2==stu_id3){
            alert("学号不能重复!");
            document.getElementById("stu_id3").value="";
            document.getElementById("stu_id3").focus();
            return false;
        }
        if(file=="")
        {
            alert("请选择需要上传的文件！");
            return false;
        }
        alert("恭喜您，报名成功！");
        return true;
    }
}




