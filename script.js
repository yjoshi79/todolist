const submit = document.getElementById("btnl");
const parentlist = document.getElementById("todo");
const clearbtn = document.getElementById("clrl");
function fun() {
    const input = document.getElementById("inp").value; // Use .value instead of .textContent
    const list = document.createElement("LI");
    const listspan = document.createElement("span");
    listspan.textContent = input;

    const clearbtn = document.createElement("button");
    clearbtn.textContent = "Clear";
    clearbtn.addEventListener('click', function () {
        parentlist.removeChild(list); // Remove the list item when "Clear" button is clicked
    });

    list.appendChild(listspan);
    list.appendChild(clearbtn);
    document.getElementById("inp").value = "";
    parentlist.appendChild(list); // Append the list item to the parent list
}
function fun2() {
    const todelete = document.getElementById('todo');
    while (todelete.firstChild) {
        todelete.removeChild(todelete.firstChild);
    }
}
clearbtn.addEventListener('click', fun2);
submit.addEventListener('click', fun);
