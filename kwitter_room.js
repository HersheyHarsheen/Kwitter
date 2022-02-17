function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database(),ref(room_name).push({
        name:user_name,
        message:msg;
    });
    document.getElementById("msg").value="";
}
