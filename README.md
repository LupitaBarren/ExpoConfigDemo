For this simple Expo App, I decided I wanted to make sure every component was visually distinct from one another, so I chose a different color for each section.

The header section's code is located directly in App.js. I used a View compenent to create the section and a Text component to display the title. I styled the header (and the container for the whole display) using React Native's StyleSheet.

I made a components folder with .js files that I can call in App.js. image.js displays an image from the internet using an Image component. I chose a picture relating to Homer's 'Odyssey', which relates to my information section. Using StyleSheet, I shrunk the height and width of the image and aligned the image to look nice.

information.js contains a passage from the 'Odyssey' translated into English to ensure the content is long enough to require scrolling. I styled the section so that it would fit on my screen in conjuction with the input form.

form.js creates a form-like structure using View and TextInput components below the ScrollView. I included two TextInput fields and used props to pass the prompts for my TextInput, as they are identical except for that (The top says 'Enter Your Name' and the bottom says 'What did you think'?). I also added two submit buttons that go along with their respective TextInput field, although the button is non-functional, as this project is simply a demonstration that I understand View, Text, Image, ScrollView, and TextInput's functionality and interactivity.
