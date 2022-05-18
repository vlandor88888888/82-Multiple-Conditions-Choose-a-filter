let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $("input").val();
    // As you're writing your if-statements, think to yourself: What is the condition? And what code should execute if the condition is met?

    // 1. Harlem - Let's do the first example together. Below is the code block we want to execute if the user types Harlem in the input. Make sure to uncomment the jQuery code.
    if (filter === "Harlem") {
        $("img").css("filter", "contrast(115%) brightness(120%)");
    }
    // 2. Bushwick - Below is the code block we want to execute if the user types Bushwick in the input. 
    else if (filter === "Bushwick") {
        $("img").css("filter", "contrast(50%) brightness(180%)");
    }
    // 3. SOMA - Below is the code block we want to execute if the user types SOMA in the input. 
    else if (filter === "Soma") {
        $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
    }
    // 4. Sunset - Below is the code block we want to execute if the user types Sunset in the input. 
    else if (filter === "Sunset") {
        $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    } else if (filter === "Victoria") {
        $("img").css("filter", "contrast(140%) hue-rotate(-15deg) saturate(200%)");
    }
});

$(".reset").click(function() {
    $("img").css("filter", "");
});