// mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

// const topAppBar = mdc.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
// const tabBar = mdc.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

// console.log(topAppBar)

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const drawerElement = document.querySelector('.mdc-drawer');

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.mdc-drawer-app-content');
const drawerCloser = document.querySelector('.drawer-close-icon')

const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);
const drawer = mdc.drawer.MDCDrawer.attachTo(drawerElement);

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

drawerCloser.addEventListener('click', (event) => {
  drawer.open = false;
});


// document.body.addEventListener('MDCDrawer:closed', () => {
//   mainContentEl.querySelector('input, button').focus();
// });