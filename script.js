
function showbottling() {
    document.getElementById("bottling").style.display = "block";
    document.getElementById("siphoning").style.display = "none";
}
function hidebottling() {
    document.getElementById("bottling").style.display = "none";
}

function showsiphoning() {
    document.getElementById("siphoning").style.display = "block";
    document.getElementById("bottling").style.display = "none";
}
function hidesiphoning() {
    document.getElementById("siphoning").style.display = "none";
}

function show_recipe_Apple() {
    document.getElementById("recipe_Apple").style.display = "block";
    document.getElementById("recipe_Pear").style.display = "none";
    document.getElementById("recipe_Strawberry").style.display = "none";
    document.getElementById("recipe_Plum").style.display = "none";
    document.getElementById("recipe_Jam").style.display = "none";
    document.getElementById("recipe_Cranberry").style.display = "none";
}

function show_recipe_Strawberry() {
    document.getElementById("recipe_Strawberry").style.display = "block";
    document.getElementById("recipe_Apple").style.display = "none";
    document.getElementById("recipe_Pear").style.display = "none";
    document.getElementById("recipe_Plum").style.display = "none";
    document.getElementById("recipe_Jam").style.display = "none";
    document.getElementById("recipe_Cranberry").style.display = "none";
}

function show_recipe_Pear() {
    document.getElementById("recipe_Pear").style.display = "block";
    document.getElementById("recipe_Apple").style.display = "none";
    document.getElementById("recipe_Strawberry").style.display = "none";
    document.getElementById("recipe_Plum").style.display = "none";
    document.getElementById("recipe_Jam").style.display = "none";
    document.getElementById("recipe_Cranberry").style.display = "none";
}

function show_recipe_Plum() {
    document.getElementById("recipe_Plum").style.display = "block";
    document.getElementById("recipe_Apple").style.display = "none";
    document.getElementById("recipe_Strawberry").style.display = "none";
    document.getElementById("recipe_Pear").style.display = "none";
    document.getElementById("recipe_Jam").style.display = "none";
    document.getElementById("recipe_Cranberry").style.display = "none";
}
function show_recipe_Jam() {
    document.getElementById("recipe_Apple").style.display = "none";
    document.getElementById("recipe_Pear").style.display = "none";
    document.getElementById("recipe_Strawberry").style.display = "none";
    document.getElementById("recipe_Plum").style.display = "none";
    document.getElementById("recipe_Jam").style.display = "block";
    document.getElementById("recipe_Cranberry").style.display = "none";
}
function show_recipe_Cranberry() {
    document.getElementById("recipe_Apple").style.display = "none";
    document.getElementById("recipe_Pear").style.display = "none";
    document.getElementById("recipe_Strawberry").style.display = "none";
    document.getElementById("recipe_Plum").style.display = "none";
    document.getElementById("recipe_Jam").style.display = "none";
    document.getElementById("recipe_Cranberry").style.display = "block";
}

  
function newpage_apple() {
    window.open("recipes.html",'_self',false);
}





// Hamburger menu

function show_hamburgermenu() {
    document.getElementById("hamburgermenu").style.display = "block";
    document.getElementById("Types_js").style.display = "none";
    document.getElementById("Websites_js").style.display = "none";
}
function show_types_of_wine() {
    document.getElementById("Types_js").style.display = "block";
}
function show_useful_websites() {
    document.getElementById("Websites_js").style.display = "block";
}
function hide_hamburgermenu() {
    document.getElementById("hamburgermenu").style.display = "none";
}




