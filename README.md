# Global AI Research Centers Map

This project is an interactive web-based map that showcases the main centers of AI research across the world, providing information about each research center and links to their websites.

## Features

- Interactive map showing AI research centers with clickable markers
- Region selection (Europe, North America, Asia, South America, Africa, Oceania)
- Filtering options: All Centers, Top per Country, Top 40 in Region
- Information panel displaying details about selected research centers
- Heat map visualization of research center density and quality
- Responsive design that works on desktop and mobile devices

## How to Use

1. Open the `index.html` file in your web browser
2. Select a region using the toggle buttons at the top of the map
3. Use the filter options to view all centers, top centers per country, or top 40 centers in the region
4. Click on any marker to view details about that research center
5. Click on the "Visit Website" link to open the official website of any research center

## Technologies Used

- HTML5, CSS3, and JavaScript
- [Leaflet.js](https://leafletjs.com/) - An open-source JavaScript library for interactive maps
- [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat) - A Leaflet plugin for heat map visualization
- [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) - A Leaflet plugin for clustering markers

## Hosting on GitHub Pages

To host this project on GitHub Pages:

1. Push this repository to GitHub
2. Go to the repository settings
3. Navigate to the "Pages" section
4. Select "main" branch as the source
5. Save the changes
6. Your map will be available at `https://[your-username].github.io/[repository-name]/`

## Adding More Research Centers

To add more research centers to the map, edit the appropriate region data file:
- `europe-data.js` - European research centers
- `north-america-data.js` - North American research centers
- `asia-data.js` - Asian research centers
- `south-america-data.js` - South American research centers
- `africa-data.js` - African research centers
- `oceania-data.js` - Oceania research centers

Follow the existing format when adding new entries.

## License

This project is open source and available under the MIT License.

---

Created as a resource for the AI research community to explore and connect with research institutions across the world. 