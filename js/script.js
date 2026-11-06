
/* =========================================
   AFRICASPEAKS - MAIN JAVASCRIPT
   ========================================= */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* 2. LANGUAGE EXAMPLES FOR SELECTED COUNTRIES

   These are representative examples, not complete
   lists of all languages spoken in each country.

   Countries not included here will still appear on
   the map, but their language information will say
   that it is being prepared.
*/

const countryLanguages = {
    "Tunisia": ["Tunisian Arabic", "Arabic", "Amazigh"],
    "Morocco": ["Moroccan Arabic (Darija)", "Amazigh"],
    "Algeria": ["Algerian Arabic", "Amazigh"],
    "Senegal": ["Wolof", "Pulaar", "French"],
    "Kenya": ["Swahili", "English", "Kikuyu"],
    "Nigeria": ["Yoruba", "Hausa", "Igbo", "English"],
    "Ethiopia": ["Amharic", "Oromo", "Tigrinya"],
    "South Africa": ["Zulu", "Xhosa", "Afrikaans", "English"],
    "Ghana": ["Akan", "Ewe", "Dagbani", "English"],
    "Tanzania": ["Swahili", "English"],
    "Uganda": ["Luganda", "Swahili", "English"],
    "Egypt": ["Egyptian Arabic", "Arabic"],
    "Madagascar": ["Malagasy", "French"],
    "Cameroon": ["French", "English", "Fulfulde"],
    "Mali": ["Bambara", "Fulfulde", "Songhai"],
    "Niger": ["Hausa", "Zarma", "Tamasheq"],
    "Somalia": ["Somali", "Arabic"],
    "Rwanda": ["Kinyarwanda", "English", "French", "Swahili"],
    "Angola": ["Portuguese", "Umbundu", "Kimbundu"],
    "Mozambique": ["Portuguese", "Emakhuwa", "Tsonga"],
    "Botswana": ["Setswana", "English"],
    "Zimbabwe": ["Shona", "Ndebele", "English"],
    "Zambia": ["Bemba", "Nyanja", "Tonga", "English"],
    "Democratic Republic of the Congo": ["Lingala", "Swahili", "Kikongo", "French"],
    "Côte d'Ivoire": ["Baoulé", "Dioula", "French"],
    "Benin": ["Fon", "Yoruba", "French"],
    "Togo": ["Ewe", "Kabye", "French"]
};


/* 3. MAP COLORS

   Each African region receives a different color.
   The colors help visitors explore the continent.
*/

const regionColors = {
    "Northern Africa": "#d4a853",
    "Eastern Africa": "#82a88a",
    "Western Africa": "#c77960",
    "Middle Africa": "#a28bb8",
    "Southern Africa": "#6d9eae"
};


/* 4. DISPLAY COUNTRY INFORMATION */

function showCountryInformation(countryName) {

    const countryInfo = document.getElementById("country-info");

    // Create the heading safely
    countryInfo.innerHTML = `
        <p class="eyebrow">COUNTRY DISCOVERY</p>
        <h3 id="selected-country-name"></h3>
        <p id="selected-country-description"></p>
        <div class="country-languages">
            <strong>Example languages:</strong>
            <p id="selected-country-languages"></p>
        </div>
        <p class="language-note">
            Language examples are representative, not exhaustive.
        </p>
    `;

    document.getElementById("selected-country-name").textContent =
        countryName;

    const languages = countryLanguages[countryName];

    if (languages) {

        document.getElementById("selected-country-description").textContent =
            "Discover some of the languages spoken in this country.";

        document.getElementById("selected-country-languages").textContent =
            languages.join(" · ");

    } else {

        document.getElementById("selected-country-description").textContent =
            "This country's language information is being prepared.";

        document.getElementById("selected-country-languages").textContent =
            "More information coming soon.";
    }
}


/* 5. DRAW THE INTERACTIVE AFRICAN MAP */
let allCountries = [];
async function createAfricaMap() {

    const mapContainer = document.getElementById("africa-map");
    let allCountries = [];
    // The geographic data includes country names and boundaries.
    const mapURL =
        "https://api.mapjson.com/v1/geo?layer=countries&filter=africa&detail=medium&properties=name,subregion";

    try {

        // Download the map data
        const topology = await d3.json(mapURL);

        // Convert TopoJSON into GeoJSON features
        const countries = topojson.feature(
            topology,
            topology.objects.geo
        );
        allCountries = countries.features;
        // Set the dimensions of our map
        const width = 760;
        const height = 590;

        // Create the SVG drawing area
        const svg = d3.select("#africa-map")
            .html("")
            .append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("role", "img")
            .attr("aria-label", "Interactive map of African countries");

        // Position the map so the African continent fits nicely
        const projection = d3.geoMercator()
            .fitExtent(
                [[15, 15], [width - 15, height - 15]],
                countries
            );

        // Convert geographic boundaries into SVG paths
        const path = d3.geoPath().projection(projection);

        // Draw every country
        svg.selectAll(".country-shape")
            .data(countries.features)
            .enter()
            .append("path")
            .attr("class", "country-shape")
            .attr("d", path)
            .attr("fill", (country) => {
                const region = country.properties.subregion;
                return regionColors[region] || "#c9b7a4";
            })
            .attr("stroke", "#faf6ef")
            .attr("stroke-width", 1.2)
            .attr("tabindex", 0)
            .attr("role", "button")
            .attr("aria-label", (country) =>
                country.properties.name
            )
            .on("click", function (event, country) {

                // Highlight the selected country
                svg.selectAll(".country-shape")
                    .classed("selected-country", false);

                d3.select(this)
                    .classed("selected-country", true);

                // Update the information panel
                showCountryInformation(country.properties.name);
            })
            .on("keydown", function (event, country) {

                // Allow keyboard users to select countries
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    this.dispatchEvent(
                        new MouseEvent("click", { bubbles: true })
                    );
                }
            })
            .append("title")
            .text((country) => country.properties.name);

    } catch (error) {

        console.error("The Africa map could not load:", error);

        mapContainer.innerHTML = `
            <p class="map-loading">
                The map could not load right now.
                Please check your internet connection and refresh.
            </p>
        `;
    }
}


// Start drawing the map

createAfricaMap();
/* =========================================
   6. COUNTRY SEARCH
   ========================================= */

const countrySearch = document.getElementById("country-search");
const countrySearchButton = document.getElementById("country-search-button");
const searchMessage = document.getElementById("search-message");

function searchForCountry() {
    const searchTerm = countrySearch.value.trim().toLowerCase();

    if (!searchTerm) {
        searchMessage.textContent = "Please enter a country name.";
        return;
    }

    const matchingCountry = allCountries.find((country) =>
        country.properties.name.toLowerCase() === searchTerm
    );

    if (!matchingCountry) {
        searchMessage.textContent =
            "Country not found. Try its full English name.";
        return;
    }

    const countryName = matchingCountry.properties.name;

    // Display the selected country's information.
    showCountryInformation(countryName);

    // Highlight the selected country on the map.
    d3.selectAll(".country-shape")
        .classed("selected-country", false);

    d3.selectAll(".country-shape")
        .filter((country) =>
            country.properties.name === countryName
        )
        .classed("selected-country", true);

    searchMessage.textContent = "Exploring " + countryName + "!";

    // Bring the map into view.
    document.getElementById("africa-map").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

countrySearchButton.addEventListener("click", searchForCountry);

countrySearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchForCountry();
    }
});