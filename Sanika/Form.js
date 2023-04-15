function validate()
{
    var First=document.forms["myform"]["fname"].value;
    var Last=document.forms["myform"]["lname"].value;
    var Date=document.forms["myform"]["Date"].value;
    var Email=document.forms["myform"]["email"].value;
    var phone=document.forms["myform"]["phone"].value;
    var gender=document.forms["myform"]["gender"].value;
    var address=document.forms["myform"]["address"].value;
    var state=document.forms["myform"]["state"].value;
    var hobby=document.getElementById("hobby");

    if (First =="")
    {
        alert("enter the name");
        return false;
    }

    if (lisNaN(First))
    {
        alert("name should be in character");
        return false;
    }
    if (Last =="")
    {
        alert("enter the name");
        return false;
    }

    if (lisNaN(Last))
    {
        alert("name should be in character");
        return false;
    }
    if (Date =="")
    {
        alert("enter date");
        return false;
    }
    var at = email.indexof("@");
    var dot = email.lastindexof(".");

    if(at<1/dot<at+2/dont+2 >=email.lenght)
    {
        alert("not a valid email");
        return false
    }
    if(phone =="")
    {
        alert("enter phone no.");
        return false;
    }
    if(isNaN(phone))
    {
        alert("phone no.should be in digit.");
        return false;
    }
    if (phone.length !=10)
    {
        alert("must be 10 digit no.");
        return false;
    }
    if (gender=="");
    {
        alert("seelct a gender");
        return false;
    }
    if(address == "");
    {
        alert("enter address");
        return false;
    }
    if(state=="select a state")
    {
       alert("select a state");
       return false; 
    }
    if(hobby.checked)
    {
        alert("select a hobby");
        return false;
    }
}
