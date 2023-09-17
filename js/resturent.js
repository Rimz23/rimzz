function menu(id) {
  if (document.getElementById("menuList" + id).style.display == "none") {
    document.getElementById("menuList" + id).style.display = "flex";
  } else {
    document.getElementById("menuList" + id).style.display = "none";
  }
}

var previousType;
var prevMenu;

function show(type, menuId) {

  if (type == 1) {
    change("breakfast" + menuId, menuId);
    previousType = "breakfast" + menuId;
    prevMenu = menuId;
  } else if (type == 2) {
    change("lunch" + menuId, menuId);
    prevMenu = menuId;
    previousType = "lunch" + menuId;
  } else if (type == 3) {
    change("dinner" + menuId, menuId);
    prevMenu = menuId;
    previousType = "dinner" + menuId;
  }
}

function change(id, mid) {
  if (
    previousType != null &&
    mid == prevMenu &&
    document.getElementById(previousType).style.display == "flex"
  ) {
    document.getElementById(previousType).style.display = "none";
  } else {
    var breakfast = "breakfast" + mid;
    var lunch = "lunch" + mid;
    var dinner = "dinner" + mid;
    if ((document.getElementById(breakfast).style.display = "flex")) {
      document.getElementById(breakfast).style.display = "none";
    }
    if ((document.getElementById(lunch).style.display = "flex")) {
      document.getElementById(lunch).style.display = "none";
    }
    if ((document.getElementById(dinner).style.display = "flex")) {
      document.getElementById(dinner).style.display = "none";
    }
  }

  if (document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "flex";
  } else {
    document.getElementById(id).style.display = "none";
  }
}
