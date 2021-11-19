# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions
This is the first project in Frontend professional track at udacity.
Project requirements have been done as follow.
Interface and Architecture
Styling - Styling has been added for active states.
HTML Structure - two sections have been added to the three sections.
for smooth scrolling
html {
    scroll-behavior: smooth;
}

Landing Page Behavior
Navigation - navigation is built dynamically as an unordered list. Started with provided empty ul and dynamic navigation using appendChild and innerHTML.
Tha navigation have been created dynamically using createNavigationLinks() function 
Section Active State - have been added to highlight which section is being viewed while scrolling through the page.
activeSection() functin created to manipulate active state.
by calling document.addEventListener("scroll", activeSection) event listener.
Scroll to Anchor - When clicking an item from the navigation menu, the link scrolls to the appropriate section.

