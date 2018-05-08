document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var $document = $(document),
	$element = $('.navbar'),
	navbarDefault = 'navbar-transparent';
	navbarWhite = 'navbar-white-bg';
    navbarFullScreen = '.nav-link-style-default'
    navbarOnCollapse = '.nav-link-onCollapse'


	fadeIn = 'fadeIn';

	$document.scroll(function(){
		if ($document.scrollTop() >= 100 && $document.width() >= 992) {
			$element.addClass(navbarWhite);
			$element.removeClass(navbarDefault);
			
			$element.addClass(fadeIn);
		}
		else{
			$element.addClass(navbarDefault);
			$element.removeClass(navbarWhite);

			$element.removeClass(fadeIn);
		}
	});
    
  