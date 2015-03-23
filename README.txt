
This application uses Eventbrite API to get event data, transforms and visualizes that data.
GitHub repo: https://github.com/NikhilAravind/Visualization_Example

Technologies and libraries used:

1. Node.js with Express and Jade
2. C3.js - JavaScript visualization library
3. Cal-Heatmap - JavaScript Heatmap visualization library

Node server is configured to run on port 3000

Application URL: localhost:3000

Eventbrite Visualization:

1. Setup the application on a machine with Node.js installed.
2. Start the server and navigate to localhost:3000


Home page:

Select a location from the dropdown provided.
Select a timeframe for the visualization data.
Select a type of visualization.
Click on Visualize It! button.

The applcation now fires a custom request to the API and retrieves event data.
This data is modelled into a format that can be used to render visualizations.
The requested charts and graphs are rendered on screen.


