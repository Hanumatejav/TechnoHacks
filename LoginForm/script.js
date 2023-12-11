
const label = document.getElementById('label');
const nameEmail = document.getElementById('name_email');
const myInput = document.getElementById('myInput');
const form = document.getElementById('form');
const visible = document.getElementById('visible');
const y = document.getElementById("hide1");
const z = document.getElementById("hide2");

form.addEventListener("submit", (e) =>
{
    let messages = [];
    if(nameEmail.value === "" || nameEmail.value == null)
    {
        messages.push("Please Enter the Name or Email");
    }
    else if(myInput.value === "" || myInput.value == null || myInput.value.length < 6)
    {
        messages.push("Please Enter Your 6 characted Password");
    } 

    if(messages.length > 0)
    {
        e.preventDefault();
        label.textContent = messages.join(',');
    }
});

visible.addEventListener("click", () =>
{
    if(myInput.type === 'password')
    {
        myInput.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else
    {
        myInput.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
})


