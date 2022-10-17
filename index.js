let check_phone = /^\d{2,4}\d{3}\d{3}$/;
let check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
let check_username = /^[A-Za-z0-9_]{1,20}$/;
let check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,12}$/;

function checknull(txt){
    if(txt.value.length == 0)
        return true;
    else return false;
}


function checkbox(radio){        // kiem tra checkbox
    let check = true;
    let i;
    for(i=0;i<radio.length;i++)
        if(radio[i].checked)
            check=false;
    return check;
}

function StringMatch(txt,reg){       //kiem tra du lieu co phu hop voi bieu thuc chinh quy hay khong
    return reg.test(txt.value);
}


function validateForm(f){
    let ok = 1;
    if(checknull(f.acc))
    {
        document.getElementById('spacc').innerHTML="*Mời nhập tài khoản.";
        f.acc.focus();
        ok = 0;
    }
    else {
        ok =1;
        document.getElementById('spacc').innerHTML="";
    }
    if(!StringMatch(f.email,check_email))
    {
        document.getElementById('spemail').innerHTML="*Mời nhập email.";
        f.email.value="";
        f.email.focus();
        ok = 0;
    }
    else
    {
        ok=1;
        document.getElementById('spemail').innerHTML="";
    }

    if(!StringMatch(f.pass,check_password))
    {
        document.getElementById('sppass').innerHTML="*Mời nhập mật khẩu.";
        f.pass.value="";
        f.pass.focus();
        ok = 0;
    }else{
        ok=1;
        document.getElementById('sppass').innerHTML="";
    }
    if(checknull(f.repass)){
        document.getElementById('sprepass').innerHTML = "*Vui lòng nhập lại mật khẩu."
        f.repass.value="";
        f.repass.focus();
        ok=0;
    }
    else if(f.pass.value !== f.repass.value){
        console.log(f.pass.value);
        document.getElementById('sprepass').innerHTML = "*Mật khẩu không khớp. Mời nhập lại.";
        f.repass.value="";
        f.repass.focus();
        ok = 0;
    }
    else{
        ok=1;
        document.getElementById('sprepass').innerHTML="";
    }

    if(checknull(f.name))
    {
        document.getElementById('spname').innerHTML="*Mời nhập họ tên.";
        f.name.focus();
        ok = 0;
    } else {
        ok=1;
        document.getElementById('spname').innerHTML="";
    }
    if(!StringMatch(f.phone,check_phone))
    {
        document.getElementById('spphone').innerHTML="*Mời nhập số điện thoại.";
        f.phone.value="";
        f.phone.focus();
        ok = 0;
    }else {
        ok=1;
        document.getElementById('spphone').innerHTML="";
    }

    if(checknull(f.address))
    {
        document.getElementById('spadd').innerHTML="*Mời nhập địa chỉ.";
        f.address.value="";
        f.address.focus();
        ok = 0;
    } else{
        ok=1;
        document.getElementById('spadd').innerHTML="";
    }

    if(ok)
    {
        alert("Đăng ký thành công!");
    }

}