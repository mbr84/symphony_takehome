# symphony_takehome

#Tools
I didn't use any libraries or tools other than vanilla javascript. It's a timer, it's tiny, there's no nead for jQuery or any other external library.

#Time
It took me about 40 minutes to write +- some pretty significant bugs and the delivery of a new couch

#Bugs
Won't know for sure until 2017, but I think it should work. One note - I'm literally call console.alert to alert the client of the New Year, or if any sort of alert would do. Ultimately I decided not to do this, because I think generally speaking browser alerts are very annoying.

One very unfortunate aspect of my implementation, is that "Happy New Year" is being rendered to the screen once per second. If I were to write this again, I'd write a recursive function that used setTimeout rather than setInterval, and called itself until we reached the new year, and then stop running.

#BTW
I webpack. Clone, npm install, and webpack to run
