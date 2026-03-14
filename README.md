IMD1005 Assignment 03 — Interactive Website

Name: Khalid Oyebode  
Student Number: 101367092  
Course/Section: IMD1005B — Web Development  
Semester: Winter 2026  

Site Purpose
This website is for an independent musician (K3soulja).  
The goal is to give fans one place to:
- Stream the latest release
- View music videos
- Browse merch
- Contact for bookings or collaborations

This matches the client goals from Assignment 1 and builds on Assignment 2 by adding interactivity with JavaScript.

Pages
- Home (index.html): Landing page with hero section, featured release, upcoming show, and quote of the day from an API
- Videos (videos.html): Embedded YouTube videos displayed in a grid layout
- Merch (merch.html): Merch items rendered with JavaScript, plus filtering, search, and FAQ accordion
- Contact (contact.html): Form page with validation and error messages
- Credits (credits.html): Credits and sources

Design / Site Changes From Assignment 2 (and why)
Compared to my Assignment 2 site, I made these changes while building Assignment 3:
- Combined the styling into one shared CSS file to keep the website more organized
- Added a responsive navigation menu so the site works better on smaller screens
- Improved the layout so the new interactive features fit better on each page
- Added more spacing and structure to make the pages easier to use

Feature Checklist

- [x] Responsive Navigation with Hamburger Menu  
  On screens 768px and below, the nav links are hidden and replaced with a hamburger button. Clicking it opens and closes the menu. On desktop the full nav shows normally.

- [x] Form Validation with Error Messages  
  The contact form checks for empty fields, invalid email format, and short messages. Error messages show beside the fields, and a success message appears when the form is filled out correctly.

- [x] Back to Top Button  
  A back to top button appears after scrolling down the page. Clicking it smoothly scrolls back to the top.

- [x] Dynamic Content Rendering from Data  
  The merch section uses a JavaScript array of objects and renders the merch cards on page load instead of writing each one directly in HTML.

- [x] Accordion FAQ Section  
  The merch page includes an FAQ accordion. Clicking one question opens it, and only one answer stays open at a time.

- [x] Live Filtering / Search  
  The merch page includes category filter buttons and a search bar. The items re-render based on the selected filter or search term.

- [x] Fetch and Display Data from a Public API  
  The home page fetches a random quote using the Fetch API. A loading message appears while it loads, and an error message shows if the request fails.

Challenges
One challenge was making sure the JavaScript worked across different pages without causing errors.  
I solved this by checking if certain elements existed before running the code for that feature.

Another challenge was keeping the site organized as more features were added.  
Using one CSS file and one JavaScript file made it easier to manage.

AI Usage 
Tools used: ChatGPT  

What I used it for:
- Helped explain responsive hamburger menu logic
- Helped explain form validation with custom error messages
- Helped explain how to render content from a JavaScript array
- Helped explain filtering and search with Array.filter()
- Helped explain accordion logic
- Helped explain Fetch API with loading and error handling

What I learned:
- How to use classList to open and close a mobile menu
- How to validate forms using JavaScript and event.preventDefault()
- How to render repeating content from data instead of hard-coding it in HTML
- How to filter and search content with JavaScript
- How to fetch data from a public API and handle loading/errors

AI-assisted sections are marked in code comments where used.

