# AddressBook
 Nuvalence Address Book Take Home Assessment

# Deployment Instructions
Pull down the project from github. 
NPM install all dependencies
run "npm start" to start up localhost server

# Overall Approach
My idea of creating an address book is to have a responsive mat-card style app that would display the picture and important info on the front, secondary info on the back, and the full details on the deatilas page.

# Feature Implemented
What I chose to implement was a 2 page application, mainly focused on mobile, as the assesment stated.

I chose to use a mat-card style address book that would be a 2 sided card that would display quick info. The fron of the card would display the picture of the contact as well as the name, phone and email of the user. As a viusal person myself, i find it more helpful to scroll thru a list of picture to help my memory jog who i am looking for. The mat-card has the quick info that you are looking for, ie. name, phone and email. If you flip the card click to more details, there is a list view of the extra details listed in the contact-details page. I also implemented a paginnator at the bottom of the contacts that allows the user to flip through multiple pages of their contacts and resume on the page they were on if they decided to get more details about a contact and eventually come back to the contact list view. 

# Given More Time
One reqiurement I would have like to change for this assesment is instead of routing to a new page for the details, is to implement a modal popup that would have allowed the user to get the necessary extra details without leaving the page. This would help the implementation of a single page app and I dont believe would have hindered the UI/UX of the app, instead might have enhanced the UX. 

I would have also liked to full implement the css animation of flipping the card. Their was an edge case with hovering/clicking the card in the website view that was creating a bug, leading me to pull the animation. I had the animation working in the mobile view. 


