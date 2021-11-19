/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector("#navbar__list");
const listOfSections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// check section if in view port
function viewPort(section){
    const pos = section.getBoundingClientRect();
    return (pos.top >= 0);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// create and add navigation list and links to navigation bar
function createNavigationLinks() {

  listOfSections.forEach(function (sec) {
    // create a new li element, and append it to the ul
    const newLi = document.createElement("li");

    // create hyberlink to every section item
    newLi.innerHTML =
      '<a class="menu__link" href="#' +
      sec.getAttribute("id") +
      '">' +
      sec.getAttribute("data-nav") +
      "</a>";
    // append the new li to the list
    navBar.appendChild(newLi);
  });
}

// Add class 'active' to section when near top of viewport

// highlit active section
function activeSection(){
    // iterate through all sections
listOfSections.forEach(function (sec) {
    // check every section view port state
    if(viewPort(sec)){
      // check if section has a class attribute has class "your-active-class"
      if (!sec.classList.contains("your-active-class")) {
          // set section as active
        sec.classList.add("your-active-class");
      } else {
          // set section as inactive
        sec.classList.remove("your-active-class");
      }
    }
});
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavigationLinks();
// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", activeSection);
