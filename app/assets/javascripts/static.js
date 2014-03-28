var ready = function() {
  var pageToRender = $('#render').data('render');

  var $meSection = $('.me-section');
  var $meLink = $('#me-link');
  var meURL = '';

  var $projectsSection = $('.projects-section');
  var $projectsLink = $('#projects-link');
  var projectsURL = 'projects';

  var $contactSection = $('.contact-section');
  var $contactLink = $('#contact-link');
  var contactURL = 'contact';

  var meToHide = [$projectsSection, $contactSection];
  var projectsToHide = [$meSection, $contactSection];
  var contactToHide = [$meSection, $projectsSection];

  renderPage(pageToRender);
  attachTransition($meLink, $meSection, meToHide, meURL);
  attachTransition($projectsLink, $projectsSection, projectsToHide, projectsURL);
  attachTransition($contactLink, $contactSection, contactToHide, contactURL);

  prepareEmail();
};

function renderPage(page) {
  if (page === 'me') {
    renderFirstMe();
  }
  else if (page === 'projects') {
    renderProjects();
  }
  else if (page === 'contact') {
    renderContact();
  }
}

function renderFirstMe() {
  $('.cover-name').addClass('animated fadeInLeft');
  $('.cover-name').one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('animated fadeInDown');
      });

  $('.cover-heading').addClass('animated fadeInLeft');
  $('.cover-heading').one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('animated fadeInDown');
      });
  var $link = $('#me-link');
  setActiveLink($link);
}

function renderProjects() {
  var $sectionToShow = $('.projects-section');
  var sectionsToHide = [$('.me-section'), $('.contact-section')];
  var $link = $('#projects-link');
  prepareSection($sectionToShow, sectionsToHide);
  setActiveLink($link);
}

function renderContact() {
  var $sectionToShow = $('.contact-section');
  var sectionsToHide = [$('.me-section'), $('.projects-section')];
  var $link = $('#contact-link');
  prepareSection($sectionToShow, sectionsToHide);
  setActiveLink($link);
}

function attachTransition($link, $sectionToShow, sectionsToHide, newURL) {
  $link.click(function(event) {
    prepareSection($sectionToShow, sectionsToHide);
    setActiveLink($link);
    window.history.pushState(null, newURL, '/' + newURL);
  });
}

function setActiveLink($link) {
  $link.parent().siblings('li').removeClass('active');
  $link.parent().addClass('active');
}

function prepareSection($sectionToShow, sectionsToHide) {
  $sectionToShow.removeClass('hidden').addClass('animated fadeInDown');
  for (var i = 0; i < sectionsToHide.length; i++) {
    sectionsToHide[i].removeClass('animated fadeInDown').addClass('hidden');
  }
  event.preventDefault();
}

function prepareEmail() {
  var email = 'trevor<span class="at">@</span>strieber.org';
  $('.my-email').html(email);
}

$(document).ready(ready);
$(document).on('page:load', ready);
