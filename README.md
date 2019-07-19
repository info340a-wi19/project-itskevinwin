# Course Project

This repository contains code for an interactive web app, created for the _Client-Side Web Development_ course, INFO 340, at the University of Washington's iSchool.

The site can be viewed at <https://moviepicks-251d9.firebaseapp.com/>

## Stage 4
For stage 4 of the project, our team built upon the functionality and user-flow of the previous applications using both react and firebase. This version runs similarly to our previous iterations, paying special attention to functions which aim to improve the overall user experience and interaction. In order to improve upon functionality, we implemented user signup, log in/out and the ability for users to save their unique "watch later" list, as well as adding a search page so the user is able to search for key terms. We reduced friction by allowing the user to browse through movies and the movie's similar movie list seamlessly. To strengthen our user experience, we removed distracting elements from our application, organized our react coding style and documentation and used a consistent color scheme.

How We Improved: 

Firebase helps structure and create content for the user. A user's watchlist is now all grounded in firebase. Whenever a user adds or removes from their watchlist on any other part of the site this is reflected immediately in the database and in what is rendered. Furthermore, a user's watchlist is specific to them and will remain constant between log-ins. 

Another part of the app flow that is implemented based on feedback is the cyclical ability to find movies. When you generate a movie it will take you to a page where a main movie is displayed along with watchlist, and then similar movies. You can now click through similar movies and have them be the main center-piece to find out more about them. When this is done the similar movie list at the bottom updates. This allows users to constantly explore new movies based off the ones they select. Also, since in the last iteration the scrolling function was not as clear as we would have liked to been we have added a physical scroll bar to help indicated to the user this functionality exists and that they can use it. 

A "Watch Later" page was added where a user can click to see their name displayed and a view of their current watch list. When they are done exploring movies and just want to see what is on thier watch list this can give them a simplified view. 

A search funciton was implemented as well. A search function is helpful here because a user might have a specific movie in mind and wants to see more information about it. Or they might want to find movies similar to it. When they search for a movie, movies that are directly related to the title will appear (for example if you searched "harry potter" then harry potter movies will probably appear) but also similar movies are rendered as well. So when the user scrolls through the results they can see similar movies. So now instead of only expoloring off of generated movies which can lack user specifity at times the user has the ability to find more specific similar movies. The user can click on movies which will take them to the page like they generated a movie and they can scroll further similar from there.

Error handling is present too. If a user tries to log in in with bad information they will be thrown an error, and the same thing with signing up. An error also throws if a user searches for a movie and there are no results.

Overall, firebase implementation allowed for customization and ideal ways to deal with state. The webapp is now fully functionally and users can explore movies in many different ways and find their perfect pick!
 

**Issues fixed**: Components organized, libraries implemented, /.interacted page renamed to /.description, hours removed from footer, div.inputs have role form, <button> no longer has role button, "Content" renamed to "MovieDescription", errors handled and extraneous comments removed
