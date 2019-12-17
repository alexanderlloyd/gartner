//Tabs
const _tabs = document.querySelectorAll('[data-tab]');
const _content = document.getElementsByClassName('active');

const toggleContent = function() {
  if (!this.classList.contains("active")) {

    Array.from(_content).forEach( item => {
      item.classList.remove('active');
    });

    this.classList.add('active');

    let currentTab = this.getAttribute('data-tab'),
       _tabContent = document.getElementById(currentTab);
       _tabContent.classList.add('active');
  }
};

Array.from(_tabs).forEach( item => {
  item.addEventListener('click', toggleContent);
});

//Sticky element
const nav = document.querySelector('.sticky-element-js');
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed');
  }
}

window.addEventListener('scroll', stickyNavigation);
