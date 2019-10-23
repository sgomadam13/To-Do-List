//style object to show trash icon
var showTrashStyles = {
    width: "40px",
    opacity: "1"
};

//style object to hide trash icon
var hideTrashStyles = {
    width: "0",
    opacity: "0"
};

//when hovered on a list item show trash icon
$("body").on("mouseenter", "li", function() {
    $(this).find("span").css(showTrashStyles);
});

//When mouse out hide trash icon
$("body").on("mouseleave", "li", function() {
    $(this).find("span").css(hideTrashStyles);
});

//When new task is entered on the text box, add the item to the list
//<li><span><i class="fas fa-trash-alt"></i></span> Go Shopping</li>
$("input").on("keypress", function(event){
    if(event.which===13) {
        var toDoTask = $("input").val();
        $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> '+ toDoTask+ '</li>');
        $("input").val("");
    }
});

//When trash icon is clicked remove the list item
$("body").on("click", "span", function(){
    $(this).parent().remove();
});

//toggle text strike-through when clicked on the list item
$("body").on("click", "li", function(){
    $(this).toggleClass("toggleLineThrough");
});

//On click on + toggle input box
$("#hideInput").on("click", function(){
    $("input").toggleClass("toggleInputBox");
});

