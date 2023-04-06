$(function(){
    $(".accordion").on('click', ".accordion-control", function(e){
        console.log("something")
        e.preventDefault()
        $(this).next('.accordion-panel')
                .not(':animated')
                .slideToggle()

    })
})