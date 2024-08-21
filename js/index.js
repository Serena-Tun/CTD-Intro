// Select the body element
const body = document.body;

// Create a footer element
const footer = document.createElement('footer');

// Append the footer to the body
body.appendChild(footer);

// Create a variable named today and assign it a new Date object
const today = new Date();

// Create a variable named thisYear and assign it the current year
const thisYear = today.getFullYear(); 

// Create a variable named copyright and use it to create a new paragraph element
const copyright = document.createElement('p');

// Set the inner HTML of the copyright element to display my name and the current year
// Use the Unicode entity &copy; to include the copyright symbol
copyright.innerHTML = `&copy; ${thisYear} Hlaing Ei Tun`;

// Append the copyright element to the footer
footer.appendChild(copyright);

// Create an array of skills
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

// Create a variable named skillsSection and Select the skills section by ID
const skillsSection = document.querySelector('#Skills');

// Create a variable named skillsList and Select the <ul> element within the skills section
const skillsList = skillsSection.querySelector('ul');

// Loop through the skills array
for (let i = 0; i < skills.length; i++) {
    // Create a new list item (li) element
    const skill = document.createElement('li');
    
    // Set the inner text of the list item to the current skill
    skill.innerText = skills[i];
    
    // Append the list item to the skills list
    skillsList.appendChild(skill);
}
