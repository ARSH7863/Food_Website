const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
  })
);

closeIcon.addEventListener('click', () => {
  navMenu.classList.add('hidden');
});

hamburger.addEventListener('click', () => {
  navMenu.classList.remove('hidden');
});

const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const beverages = document.querySelectorAll('.beverage');
const snacks = document.querySelectorAll('.snack');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');

    const tabsVal = tab.getAttribute('data-tabs');
    // console.log(tabsVal);
    all.forEach((item) => {
      item.style.display = 'none';
    });

    if (tabsVal == 'food') {
      foods.forEach((item) => {
        item.style.display = 'block';
      });
    } else if (tabsVal == 'snack') {
      snacks.forEach((item) => {
        item.style.display = 'block';
      });
    } else if (tabsVal == 'beverage') {
      beverages.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
      all.forEach((item) => {
        item.style.display = 'block';
      });
    }
  });
});

const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up');

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove('-bottom-1/2');
    scrollUpBtn.classList.add('bottom-4');
  } else {
    scrollUpBtn.classList.add('-bottom-1/2');
    scrollUpBtn.classList.remove('bottom-4');
  }
};

window.addEventListener('scroll', scrollUp);

const scrollHeader = () => {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) {
    header.classList.add('border-b', 'border-secondaryColor');
  } else {
    header.classList.remove('border-b', 'border-secondaryColor');
  }
};

window.addEventListener('scroll', scrollHeader);
