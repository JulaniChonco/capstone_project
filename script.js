$(document).ready(function () {
    // Welcome alert
    alert("Welcome to My Restaurant!");

    // Set up "Save for Later" functionality
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    $('.save-btn').click(function () {
        const item = $(this).data('item');
        savedItems.push(item);
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
        alert(`You have ${savedItems.length} items in your Save for Later folder.`);
    });

    // Like button functionality
    let likeCount = 0;
    $('#like-btn').click(function () {
        likeCount++;
        $('#like-count').text(likeCount);
    });
    $(document).ready(function () {
        // Accordion-style drop-down menu on hover
        $(".content-section").hover(
            function () {
                // Show the dropdown menu with slideDown effect
                $(this).find(".dropdown-menu").stop(true, true).slideDown(300);
            },
            function () {
                // Hide the dropdown menu with slideUp effect
                $(this).find(".dropdown-menu").stop(true, true).slideUp(300);
            }
        );
    });
    
    // Show/hide comments section
    $('#comment-form').hide();
    $('#like-form').click(function () {
        $('#comment-form').toggle();
    });

    // Accordion-style dropdown for sections
    $(".content-section").hover(
        function () {
            $(this).find(".accordion-content").slideDown();
        },
        function () {
            $(this).find(".accordion-content").slideUp();
        }
    );

    // Animation effects for images
    $("img").hover(function () {
        $(this).fadeOut(500).fadeIn(500).css("border", "2px solid #000");
    });

    // Contact form handling
    $('#contact-form').submit(function (event) {
        event.preventDefault();
        alert("Message sent! Thank you for contacting us.");
    });

    // Fade In/Out Buttons Functionality
    $("#fade-in-btn").click(function () {
        $(".image-container img").stop(true, true).fadeIn(3000);
    });

    $("#fade-out-btn").click(function () {
        $(".image-container img").stop(true, true).fadeOut(3000);
    });

    $("#stop-animation-btn").click(function () {
        $(".image-container img").stop();
    });
});
