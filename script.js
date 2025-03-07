document.addEventListener('DOMContentLoaded', function() {
    // Add a project goal information element
    const helloElement = document.createElement('div');
    helloElement.id = 'project-info';
    helloElement.innerHTML = `
        <h3>Global AI Research Map</h3>
        <p>This interactive map visualizes the distribution of AI research centers across the world, 
        highlighting areas of innovation and academic excellence in artificial intelligence.</p>
        <p>Use the region toggle to switch between Europe, North America, Asia, South America, Africa, and Oceania.</p>
    `;
    document.body.appendChild(helloElement);
    
    // Add CSS for the project info and enhanced filter panel
    const customStyles = document.createElement('style');
    customStyles.textContent = `
        #project-info {
            position: fixed;
            left: 0;
            bottom: 40px; /* Position above the bottom bar */
            width: 100%;
            font-family: Arial, sans-serif;
            color: #333;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 10px 20px;
            z-index: 390; /* Below the map but above other elements */
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        #project-info h3 {
            margin: 0 0 5px 0;
            color: #4285F4;
            font-size: 16px;
        }
        #project-info p {
            margin: 5px 0;
            font-size: 12px;
            line-height: 1.3;
            max-width: 800px;
            display: inline-block;
        }
        
        /* Enhanced filter panel styles to accommodate institute details */
        .info {
            min-height: 100px;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .filter-section {
            margin-bottom: 15px;
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
    `;
    document.head.appendChild(customStyles);
    
    // Current region and filter state
    let currentRegion = 'europe';
    let showTopPerCountry = false;
    let showTop40InRegion = false;
    
    // Initialize the map centered on Europe
    let map = L.map('map').setView([50.0, 10.0], 4);
    
    // Add custom styled map with blue and white patterned water
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    // Create a single layer group for all map elements
    const mapLayers = L.layerGroup().addTo(map);
    
    // Track active layers
    let activeHeatLayer = null;
    let activeWaterLayer = null;
    let activeCountriesLayer = null;
    
    // Create a marker cluster group
    let markersLayer = L.markerClusterGroup({
        disableClusteringAtZoom: 9, // Disable clustering at higher zoom levels
        spiderfyOnMaxZoom: true,     // Use spiral layout when clicking a cluster at max zoom
        showCoverageOnHover: false,  // Don't show the area a cluster covers
        zoomToBoundsOnClick: true,   // Zoom to bounds when clicking a cluster
        maxClusterRadius: 30,        // Maximum radius of a cluster (smaller = more clusters)
        spiderfyDistanceMultiplier: 1.5, // Increase the distance between markers in the spiderfy effect
        iconCreateFunction: function(cluster) {
            // Get the number of markers in the cluster
            const count = cluster.getChildCount();
            
            // Determine the class based on the count
            let className = 'marker-cluster-';
            if (count < 5) {
                className += 'small';
            } else if (count < 10) {
                className += 'medium';
            } else {
                className += 'large';
            }
            
            // Create the icon
            return L.divIcon({ 
                html: '<div><span>' + count + '</span></div>', 
                className: 'marker-cluster ' + className,
                iconSize: new L.Point(40, 40)
            });
        }
    }).addTo(map);
    
    // Add a custom water pattern overlay
    const waterStyle = {
        fillColor: "#d1e6fa", // Softer, lighter blue
        fillOpacity: 0.25,    // Reduced opacity for softer appearance
        weight: 0.8,          // Thinner lines
        color: '#e6f2ff',     // Very light blue for the pattern lines
        dashArray: '4, 6',    // Adjusted dash pattern
        opacity: 0.6          // Reduced opacity for lines
    };
    
    // Fetch and add GeoJSON for oceans/seas with the custom pattern
    fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson')
        .then(response => response.json())
        .then(data => {
            // Water layer
            activeWaterLayer = L.geoJson(data, {
                style: waterStyle,
                className: 'water-pattern'
            }).addTo(mapLayers);
        })
        .catch(error => console.error('Error loading water pattern:', error));
    
    // Initialize event listeners for region toggle
    document.getElementById('europe-btn').addEventListener('click', function() {
        if (currentRegion !== 'europe') {
            switchRegion('europe');
        }
    });
    
    document.getElementById('north-america-btn').addEventListener('click', function() {
        if (currentRegion !== 'north-america') {
            switchRegion('north-america');
        }
    });
    
    document.getElementById('asia-btn').addEventListener('click', function() {
        if (currentRegion !== 'asia') {
            switchRegion('asia');
        }
    });
    
    document.getElementById('south-america-btn').addEventListener('click', function() {
        if (currentRegion !== 'south-america') {
            switchRegion('south-america');
        }
    });
    
    document.getElementById('africa-btn').addEventListener('click', function() {
        if (currentRegion !== 'africa') {
            switchRegion('africa');
        }
    });
    
    document.getElementById('oceania-btn').addEventListener('click', function() {
        if (currentRegion !== 'oceania') {
            switchRegion('oceania');
        }
    });
    
    // Initialize event listeners for filter toggle
    document.getElementById('all-centers-btn').addEventListener('click', function() {
        if (showTopPerCountry || showTop40InRegion) {
            showTopPerCountry = false;
            showTop40InRegion = false;
            this.classList.add('active');
            document.getElementById('top-country-btn').classList.remove('active');
            document.getElementById('top-40-btn').classList.remove('active');
            reloadCurrentRegion();
        }
    });
    
    document.getElementById('top-country-btn').addEventListener('click', function() {
        if (!showTopPerCountry || showTop40InRegion) {
            showTopPerCountry = true;
            showTop40InRegion = false;
            this.classList.add('active');
            document.getElementById('all-centers-btn').classList.remove('active');
            document.getElementById('top-40-btn').classList.remove('active');
            reloadCurrentRegion();
        }
    });
    
    document.getElementById('top-40-btn').addEventListener('click', function() {
        if (!showTop40InRegion || showTopPerCountry) {
            showTop40InRegion = true;
            showTopPerCountry = false;
            this.classList.add('active');
            document.getElementById('all-centers-btn').classList.remove('active');
            document.getElementById('top-country-btn').classList.remove('active');
            reloadCurrentRegion();
        }
    });
    
    function switchRegion(region) {
        // Update region state
        currentRegion = region;
        
        // Reset filter state
        showTopPerCountry = false;
        showTop40InRegion = false;
        
        // Update toggle buttons
        document.getElementById('europe-btn').classList.toggle('active', region === 'europe');
        document.getElementById('north-america-btn').classList.toggle('active', region === 'north-america');
        document.getElementById('asia-btn').classList.toggle('active', region === 'asia');
        document.getElementById('south-america-btn').classList.toggle('active', region === 'south-america');
        document.getElementById('africa-btn').classList.toggle('active', region === 'africa');
        document.getElementById('oceania-btn').classList.toggle('active', region === 'oceania');
        
        // Update filter buttons
        document.getElementById('all-centers-btn').classList.add('active');
        document.getElementById('top-country-btn').classList.remove('active');
        document.getElementById('top-40-btn').classList.remove('active');
        
        // Clear existing markers and heat layers
        markersLayer.clearLayers();
        
        if (activeHeatLayer) {
            mapLayers.removeLayer(activeHeatLayer);
            activeHeatLayer = null;
        }
        
        // Reset view based on region
        if (region === 'europe') {
            map.setView([50.0, 10.0], 4);
            loadRegionData(europeanResearchCenters);
        } else if (region === 'north-america') {
            map.setView([40.0, -100.0], 3);
            loadRegionData(northAmericanResearchCenters);
        } else if (region === 'asia') {
            map.setView([30.0, 100.0], 3);
            loadRegionData(asianResearchCenters);
        } else if (region === 'south-america') {
            map.setView([-15.0, -60.0], 3);
            loadRegionData(southAmericanResearchCenters);
        } else if (region === 'africa') {
            map.setView([0.0, 20.0], 3);
            loadRegionData(africanResearchCenters);
        } else if (region === 'oceania') {
            map.setView([-25.0, 135.0], 3);
            loadRegionData(oceaniaResearchCenters);
        }
        
        // Load country boundaries for the selected region
        loadCountryBoundaries();
        
        // Clear the center details panel
        document.getElementById('center-details').innerHTML = '<p>Click on a marker to see details about the research center</p>';
        
        // Ensure the map is properly updated
        map.invalidateSize();
    }
    
    function reloadCurrentRegion() {
        // Clear existing markers and heat layers
        markersLayer.clearLayers();
        
        if (activeHeatLayer) {
            mapLayers.removeLayer(activeHeatLayer);
            activeHeatLayer = null;
        }
        
        // Reload the current region with the current filter
        if (currentRegion === 'europe') {
            loadRegionData(europeanResearchCenters);
        } else if (currentRegion === 'north-america') {
            loadRegionData(northAmericanResearchCenters);
        } else if (currentRegion === 'asia') {
            loadRegionData(asianResearchCenters);
        } else if (currentRegion === 'south-america') {
            loadRegionData(southAmericanResearchCenters);
        } else if (currentRegion === 'africa') {
            loadRegionData(africanResearchCenters);
        } else if (currentRegion === 'oceania') {
            loadRegionData(oceaniaResearchCenters);
        }
    }
    
    // Function to load country boundaries based on the current region
    function loadCountryBoundaries() {
        // Clear existing country layers
        if (activeCountriesLayer) {
            mapLayers.removeLayer(activeCountriesLayer);
            activeCountriesLayer = null;
        }
        
        // Determine which data source to use based on current region
        let dataSource;
        if (currentRegion === 'europe') {
            dataSource = europeanResearchCenters;
        } else if (currentRegion === 'north-america') {
            dataSource = northAmericanResearchCenters;
        } else if (currentRegion === 'asia') {
            dataSource = asianResearchCenters;
        } else if (currentRegion === 'south-america') {
            dataSource = southAmericanResearchCenters;
        } else if (currentRegion === 'africa') {
            dataSource = africanResearchCenters;
        } else if (currentRegion === 'oceania') {
            dataSource = oceaniaResearchCenters;
        }
        
        fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson')
            .then(response => response.json())
            .then(data => {
                // Filter based on current region
                const filteredData = {
                    type: "FeatureCollection",
                    features: data.features.filter(feature => {
                        const continent = feature.properties.CONTINENT || feature.properties.continent;
                        if (currentRegion === 'europe') {
                            return continent === "Europe" || 
                                (feature.properties.NAME && Object.keys(dataSource).includes(feature.properties.NAME));
                        } else if (currentRegion === 'north-america') {
                            return continent === "North America" || 
                                (feature.properties.NAME && Object.keys(dataSource).includes(feature.properties.NAME));
                        } else if (currentRegion === 'asia') {
                            return (continent === "Asia" || continent === "Oceania") || 
                                (feature.properties.NAME && Object.keys(dataSource).includes(feature.properties.NAME));
                        } else if (currentRegion === 'south-america') {
                            return (continent === "South America" || continent === "Central America") || 
                                (feature.properties.NAME && Object.keys(dataSource).includes(feature.properties.NAME));
                        } else if (currentRegion === 'africa') {
                            return continent === "Africa" || 
                                (feature.properties.NAME && Object.keys(dataSource).includes(feature.properties.NAME));
                        } else if (currentRegion === 'oceania') {
                            return continent === "Oceania" || 
                                (feature.properties.NAME && Object.keys(dataSource).includes(feature.properties.NAME));
                        }
                        return false;
                    })
                };
                
                // Countries layer
                activeCountriesLayer = L.geoJson(filteredData, {
                    style: styleCountry,
                    onEachFeature: onEachFeature
                }).addTo(mapLayers);
                
                // Make sure countries are below markers and heat map
                activeCountriesLayer.bringToBack();
            })
            .catch(error => {
                console.error('Error loading detailed country boundaries:', error);
                
                // Fallback to simpler dataset if the detailed one fails
                fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
                    .then(response => response.json())
                    .then(data => {
                        // Filter based on current region
                        const filteredData = {
                            type: "FeatureCollection",
                            features: data.features.filter(feature => {
                                if (currentRegion === 'europe') {
                                    return Object.keys(dataSource).includes(feature.properties.name);
                                } else if (currentRegion === 'north-america') {
                                    return Object.keys(dataSource).includes(feature.properties.name);
                                } else if (currentRegion === 'asia') {
                                    return Object.keys(dataSource).includes(feature.properties.name);
                                } else if (currentRegion === 'south-america') {
                                    return Object.keys(dataSource).includes(feature.properties.name);
                                } else if (currentRegion === 'africa') {
                                    return Object.keys(dataSource).includes(feature.properties.name);
                                } else if (currentRegion === 'oceania') {
                                    return Object.keys(dataSource).includes(feature.properties.name);
                                }
                                return false;
                            })
                        };
                        
                        // Countries layer
                        activeCountriesLayer = L.geoJson(filteredData, {
                            style: styleCountry,
                            onEachFeature: onEachFeature
                        }).addTo(mapLayers);
                        
                        // Make sure countries are below markers and heat map
                        activeCountriesLayer.bringToBack();
                    })
                    .catch(error => console.error('Error loading fallback country boundaries:', error));
            });
    }
    
    // Load initial country boundaries for Europe (default)
    loadCountryBoundaries();
    
    // Function to style countries
    function styleCountry(feature) {
        return {
            fillColor: '#f8f9fa',
            weight: 1,
            opacity: 0.8,
            color: '#adb5bd',
            fillOpacity: 0.3
        };
    }
    
    // Function to handle interactions with country features
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: function(e) {
                const layer = e.target;
                layer.setStyle({
                    weight: 2,
                    color: '#666',
                    fillOpacity: 0.5
                });
                layer.bringToFront();
            },
            mouseout: function(e) {
                activeCountriesLayer.resetStyle(e.target);
            },
            click: function(e) {
                const countryName = feature.properties.NAME || feature.properties.name;
                let dataSource;
                
                if (currentRegion === 'europe') {
                    dataSource = europeanResearchCenters;
                } else if (currentRegion === 'north-america') {
                    dataSource = northAmericanResearchCenters;
                } else if (currentRegion === 'asia') {
                    dataSource = asianResearchCenters;
                } else if (currentRegion === 'south-america') {
                    dataSource = southAmericanResearchCenters;
                } else if (currentRegion === 'africa') {
                    dataSource = africanResearchCenters;
                } else if (currentRegion === 'oceania') {
                    dataSource = oceaniaResearchCenters;
                }
                
                if (dataSource[countryName]) {
                    displayCityDetails(countryName, dataSource[countryName]);
                }
            }
        });
    }
    
    // Function to load region data and create markers and heat map
    function loadRegionData(regionData) {
        // Create array to store all centers with their ratings
        let allCenters = [];
        let topCentersByCountry = new Map();
        
        // Process each country's research centers
        Object.keys(regionData).forEach(country => {
            const centers = regionData[country];
            
            // Find the top-rated center for each country
            let topCenter = centers.reduce((prev, current) => {
                const prevRating = prev.rating || 0;
                const currentRating = current.rating || 0;
                return currentRating > prevRating ? current : prev;
            }, centers[0]);
            
            // Store the top center for this country
            topCenter.country = country;
            topCentersByCountry.set(country, topCenter);
            
            // Add all centers to the array
            centers.forEach(center => {
                center.country = country;
                allCenters.push(center);
            });
        });
        
        // Sort all centers by rating for top 40 filter
        let sortedCenters = [...allCenters].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        let top40Centers = sortedCenters.slice(0, 40);
        
        // Determine which centers to show based on the filter
        let centersToShow;
        if (showTopPerCountry) {
            centersToShow = Array.from(topCentersByCountry.values());
        } else if (showTop40InRegion) {
            centersToShow = top40Centers;
        } else {
            centersToShow = allCenters;
        }
        
        // Create array to store heat map data
        const heatData = [];
        
        // Process centers to show
        centersToShow.forEach(center => {
            // Create marker for the center
            const marker = L.marker(center.coordinates, {
                title: center.name,
                riseOnHover: true
            });
            
            // Add popup with basic info
            marker.bindPopup(`<strong>${center.name}</strong><br>${center.city}, ${center.country}`);
            
            // Add click event to show detailed info
            marker.on('click', function() {
                displayCenterDetails(center, center.country);
            });
            
            // Add marker to the markers layer
            markersLayer.addLayer(marker);
            
            // Add data point to heat map data
            const intensity = center.rating || 7.5;
            heatData.push([center.coordinates[0], center.coordinates[1], intensity]);
        });
        
        // Create heat map layer
        activeHeatLayer = L.heatLayer(heatData, {
            radius: 25,
            blur: 15,
            maxZoom: 10,
            max: 10,
            gradient: {
                0.0: 'blue',
                0.3: 'cyan',
                0.5: 'lime',
                0.7: 'yellow',
                1.0: 'red'
            }
        }).addTo(mapLayers);
    }
    
    // Function to display details about a research center
    function displayCenterDetails(center, country) {
        // Set default rating if none exists
        const rating = center.rating || 7.5;
        
        // Create star rating display
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 >= 1 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<span class="star full">★</span>';
        }
        if (halfStar) {
            starsHTML += '<span class="star half">★</span>';
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<span class="star empty">☆</span>';
        }
        
        // Format center details for display
        const centerDetailsHTML = `
            <div class="center-card">
                ${center.isMain ? '<span class="badge main-badge">Main Center</span>' : ''}
                <h3>${center.name}</h3>
                <p class="location"><strong>${center.city}, ${country}</strong></p>
                <p class="description">${center.description}</p>
                <div class="rating-container">
                    <span class="rating-label">Quality Rating: ${rating.toFixed(1)}/10</span>
                    <div class="stars">${starsHTML}</div>
                </div>
                ${center.website ? `<a href="${center.website}" target="_blank" class="website-link">Visit Website</a>` : ''}
            </div>
        `;
        
        // Update the center details panel
        document.getElementById('center-details').innerHTML = centerDetailsHTML;
    }
    
    // Function to display details about all centers in a city
    function displayCityDetails(country, centers) {
        let cityDetailsHTML = `<h3>${country}</h3>`;
        
        // Group centers by city
        const citiesMap = new Map();
        centers.forEach(center => {
            if (!citiesMap.has(center.city)) {
                citiesMap.set(center.city, []);
            }
            citiesMap.get(center.city).push(center);
        });
        
        // Create HTML for each city
        citiesMap.forEach((cityCenters, city) => {
            cityDetailsHTML += `<div class="city-section"><h4>${city}</h4>`;
            
            // Add each center in the city
            cityCenters.forEach(center => {
                // Set default rating if none exists
                const rating = center.rating || 7.5;
                
                // Create star rating display
                const fullStars = Math.floor(rating / 2);
                const halfStar = rating % 2 >= 1 ? 1 : 0;
                const emptyStars = 5 - fullStars - halfStar;
                
                let starsHTML = '';
                for (let i = 0; i < fullStars; i++) {
                    starsHTML += '<span class="star full">★</span>';
                }
                if (halfStar) {
                    starsHTML += '<span class="star half">★</span>';
                }
                for (let i = 0; i < emptyStars; i++) {
                    starsHTML += '<span class="star empty">☆</span>';
                }
                
                cityDetailsHTML += `
                    <div class="center-item" onclick="map.setView([${center.coordinates[0]}, ${center.coordinates[1]}], 12)">
                        <h5>${center.name}</h5>
                        <p class="description">${center.description}</p>
                        <div class="rating-container">
                            <span class="rating-label">Quality: ${rating.toFixed(1)}/10</span>
                            <div class="stars">${starsHTML}</div>
                        </div>
                        ${center.website ? `<a href="${center.website}" target="_blank" class="website-link">Visit Website</a>` : ''}
                    </div>
                `;
            });
            
            cityDetailsHTML += `</div>`;
        });
        
        // Update the center details panel
        document.getElementById('center-details').innerHTML = cityDetailsHTML;
    }
    
    // Load initial data for Europe (default)
    loadRegionData(europeanResearchCenters);
}); 