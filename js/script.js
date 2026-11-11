
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

 
/* =========================================
   2. LANGUAGE INFORMATION FOR ALL 54 COUNTRIES

   Each entry includes:
   - The language name
   - A short explanation of its role or use

   These are selected major examples, not complete
   lists of every language spoken in each country.

   Descriptions are qualitative, not percentages.
   ========================================= */

const countryLanguages = {

    "Algeria": [
        { name: "Algerian Arabic", detail: "Everyday spoken language used by much of the population." },
        { name: "Modern Standard Arabic", detail: "Official language used in formal writing, education and government." },
        { name: "Tamazight (Amazigh)", detail: "Official language with several varieties, including Kabyle and Chaoui." },
        { name: "French", detail: "Widely used in education, business and parts of public life." }
    ],

    "Angola": [
        { name: "Portuguese", detail: "Official language and widely used in education, administration and daily communication." },
        { name: "Umbundu", detail: "Major African language, especially in central and southern regions." },
        { name: "Kimbundu", detail: "Important regional language, particularly around the northwest and Luanda." },
        { name: "Kikongo", detail: "Regional language spoken mainly in the north." }
    ],

    "Benin": [
        { name: "French", detail: "Official language used in administration and formal education." },
        { name: "Fon", detail: "Widely spoken, especially in the south." },
        { name: "Yoruba", detail: "Important community and regional language, particularly in the southeast." },
        { name: "Bariba", detail: "Major regional language in the north." }
    ],

    "Botswana": [
        { name: "Setswana", detail: "National language widely spoken throughout the country." },
        { name: "English", detail: "Official language used in government, business and education." },
        { name: "Kalanga", detail: "Important regional language, particularly in the northeast." },
        { name: "Sekgalagadi", detail: "Regional language spoken by communities in western and central areas." }
    ],

    "Burkina Faso": [
        { name: "Mooré", detail: "One of the country's most widely spoken languages, especially in central areas." },
        { name: "Dioula (Jula)", detail: "Important trade and communication language, especially in western areas." },
        { name: "Fulfulde", detail: "Widely spoken by Fulani communities and in several regions." },
        { name: "French", detail: "Used as a working language in administration and formal settings." }
    ],

    "Burundi": [
        { name: "Kirundi", detail: "National language spoken by the great majority of the population." },
        { name: "French", detail: "Official language used in administration and education." },
        { name: "English", detail: "Official language increasingly used in education and regional communication." },
        { name: "Swahili", detail: "Used especially in trade and in urban areas." }
    ],

    "Cabo Verde": [
        { name: "Cape Verdean Creole (Kriolu)", detail: "Everyday language spoken throughout the islands, with different local varieties." },
        { name: "Portuguese", detail: "Official language used in government, formal education and writing." }
    ],

    "Cameroon": [
        { name: "French", detail: "Official language widely used in administration and education, especially in francophone regions." },
        { name: "English", detail: "Official language used especially in the Northwest and Southwest regions." },
        { name: "Fulfulde", detail: "Important regional language, especially in the north." },
        { name: "Ewondo", detail: "Widely spoken in parts of the central and southern regions." }
    ],

    "Central African Republic": [
        { name: "Sango", detail: "National language and widely used everyday lingua franca." },
        { name: "French", detail: "Official language used in government and formal education." },
        { name: "Gbaya", detail: "Major community language, especially in the west." },
        { name: "Banda", detail: "Group of languages spoken by communities in central and northern areas." }
    ],

    "Chad": [
        { name: "Chadian Arabic", detail: "Widely used everyday language and an important lingua franca." },
        { name: "French", detail: "Official language used in administration and education." },
        { name: "Modern Standard Arabic", detail: "Official language used in formal writing and institutions." },
        { name: "Sara languages", detail: "Important group of languages spoken mainly in southern Chad." }
    ],

    "Comoros": [
        { name: "Comorian (Shikomori)", detail: "Main everyday language, with varieties spoken across the islands." },
        { name: "French", detail: "Official language used in administration and education." },
        { name: "Arabic", detail: "Official language associated with religion, education and formal contexts." }
    ],

    "Republic of the Congo": [
        { name: "Lingala", detail: "Widely used lingua franca, especially in Brazzaville and the north." },
        { name: "Kituba", detail: "Important lingua franca, especially in the south." },
        { name: "French", detail: "Official language used in government, education and formal communication." },
        { name: "Kikongo", detail: "Important regional language and language group." }
    ],

    "Côte d'Ivoire": [
        { name: "French", detail: "Official language widely used in education, administration and public life." },
        { name: "Dioula (Jula)", detail: "Major trade and communication language used across many communities." },
        { name: "Baoulé", detail: "Important regional language, especially in central areas." },
        { name: "Bété", detail: "Important community language in the west-central region." }
    ],

    "Democratic Republic of the Congo": [
        { name: "French", detail: "Official language used in administration, education and formal communication." },
        { name: "Lingala", detail: "Widely used lingua franca, particularly in Kinshasa and the northwest." },
        { name: "Swahili", detail: "Widely spoken in the east and southeast." },
        { name: "Tshiluba", detail: "Major regional language in the central Kasai area." },
        { name: "Kikongo ya Leta", detail: "Important regional lingua franca in the southwest." }
    ],

    "Djibouti": [
        { name: "Somali", detail: "Widely spoken everyday language among much of the population." },
        { name: "Afar", detail: "Widely spoken regional language, especially in northern and western areas." },
        { name: "French", detail: "Official language used in administration and education." },
        { name: "Arabic", detail: "Official language used in religious, cultural and formal contexts." }
    ],

    "Egypt": [
        { name: "Egyptian Arabic", detail: "Everyday spoken variety understood widely across the Arabic-speaking world." },
        { name: "Modern Standard Arabic", detail: "Official language used in formal writing, media and education." },
        { name: "Nubian languages", detail: "Spoken by Nubian communities, particularly in the south." },
        { name: "English", detail: "Commonly used in tourism, business and higher education." }
    ],

    "Equatorial Guinea": [
        { name: "Spanish", detail: "Official language widely used in education, administration and public life." },
        { name: "Fang", detail: "Major African language spoken by a large part of the population." },
        { name: "Bubi", detail: "Regional language traditionally spoken on Bioko Island." },
        { name: "French", detail: "Official language with a role in regional and international communication." },
        { name: "Portuguese", detail: "Official language, with more limited everyday use." }
    ],

    "Eritrea": [
        { name: "Tigrinya", detail: "One of the most widely spoken languages and a major language of public life." },
        { name: "Tigre", detail: "Major language spoken by communities in several regions." },
        { name: "Arabic", detail: "Used in education, religion and communication by some communities." },
        { name: "Afar", detail: "Regional language spoken mainly in the southeast." },
        { name: "English", detail: "Used in secondary and higher education." }
    ],

    "Eswatini": [
        { name: "siSwati", detail: "National language spoken by the great majority of the population." },
        { name: "English", detail: "Official language used in government, education and business." },
        { name: "Zulu", detail: "Spoken by some communities and understood in the wider region." }
    ],

    "Ethiopia": [
        { name: "Amharic", detail: "Widely used in federal government and communication across communities." },
        { name: "Oromo", detail: "One of the country's largest languages, especially in Oromia." },
        { name: "Tigrinya", detail: "Major regional language, especially in Tigray." },
        { name: "Somali", detail: "Widely spoken in the Somali Regional State." },
        { name: "Afar", detail: "Regional language spoken in the Afar Region." }
    ],

    "Gabon": [
        { name: "French", detail: "Official language widely used in education, government and daily public life." },
        { name: "Fang", detail: "One of the country's major African languages." },
        { name: "Myene", detail: "Regional language spoken by communities in parts of the coast." },
        { name: "Nzebi", detail: "Important regional language in the southeast." }
    ],

    "Gambia": [
        { name: "English", detail: "Official language used in government and formal education." },
        { name: "Mandinka", detail: "One of the most widely spoken everyday languages." },
        { name: "Wolof", detail: "Widely used in communication, especially in urban areas." },
        { name: "Fula (Pulaar)", detail: "Major language spoken by communities across the country." },
        { name: "Jola", detail: "Important regional and community language." }
    ],

    "Ghana": [
        { name: "English", detail: "Official language used in government, schools and national communication." },
        { name: "Akan (including Twi and Fante)", detail: "One of the most widely spoken language groups in the country." },
        { name: "Ewe", detail: "Major regional language, especially in the southeast." },
        { name: "Dagbani", detail: "Important language spoken in the north." },
        { name: "Ga", detail: "Regional language spoken around Accra." }
    ],

    "Guinea": [
        { name: "French", detail: "Official language used in government and formal education." },
        { name: "Pular (Fulfulde)", detail: "Widely spoken, particularly in the Fouta Djallon region." },
        { name: "Maninka", detail: "Major language spoken in Upper Guinea and beyond." },
        { name: "Susu", detail: "Widely spoken in coastal Guinea, including around Conakry." },
        { name: "Kissi", detail: "Important regional language in the forest region." }
    ],

    "Guinea-Bissau": [
        { name: "Guinea-Bissau Creole (Kriol)", detail: "Widely used everyday lingua franca across communities." },
        { name: "Portuguese", detail: "Official language used in government and formal education." },
        { name: "Balanta", detail: "Major community language." },
        { name: "Fula (Pulaar)", detail: "Widely spoken by communities, especially in the north and east." },
        { name: "Mandinka", detail: "Important regional and community language." }
    ],

    "Kenya": [
        { name: "Swahili (Kiswahili)", detail: "National language and widely used for communication across communities." },
        { name: "English", detail: "Official language used in education, government and business." },
        { name: "Kikuyu", detail: "One of the largest community languages, especially in central Kenya." },
        { name: "Luo", detail: "Important regional language, especially around Lake Victoria." },
        { name: "Kalenjin", detail: "Group of languages spoken by communities in western Kenya." }
    ],

    "Lesotho": [
        { name: "Sesotho", detail: "National language spoken by the great majority of the population." },
        { name: "English", detail: "Official language used in government, education and formal communication." },
        { name: "isiZulu", detail: "Spoken by some communities and understood in the wider region." },
        { name: "isiXhosa", detail: "Spoken by some communities, particularly in parts of the country." }
    ],

    "Liberia": [
        { name: "English", detail: "Official language used in government and education." },
        { name: "Liberian English and Kreyol varieties", detail: "Widely used forms of everyday communication." },
        { name: "Kpelle", detail: "One of the country's major indigenous languages." },
        { name: "Bassa", detail: "Important community language, especially in central areas." },
        { name: "Vai", detail: "Community language with its own historic writing system." }
    ],

    "Libya": [
        { name: "Libyan Arabic", detail: "Main everyday spoken language across much of the country." },
        { name: "Modern Standard Arabic", detail: "Official language used in formal writing and institutions." },
        { name: "Tamazight (Amazigh)", detail: "Spoken by Amazigh communities, especially in the west and southwest." },
        { name: "Tebu", detail: "Regional language spoken by communities in the south." },
        { name: "Tuareg languages", detail: "Spoken by Tuareg communities in the southwest." }
    ],

    "Madagascar": [
        { name: "Malagasy", detail: "National language spoken throughout the island, with regional varieties." },
        { name: "French", detail: "Official language used in education, administration and business." },
        { name: "English", detail: "Used in some tourism, business and international settings." }
    ],

    "Malawi": [
        { name: "Chichewa (Chinyanja)", detail: "National language and widely used for everyday communication." },
        { name: "English", detail: "Official language used in government and formal education." },
        { name: "Tumbuka", detail: "Important regional language in the north." },
        { name: "Yao", detail: "Regional language spoken mainly in the south and around Lake Malawi." },
        { name: "Lomwe", detail: "Important community language in the south." }
    ],

    "Mali": [
        { name: "Bambara (Bamanankan)", detail: "Widely used everyday language and an important lingua franca." },
        { name: "Fulfulde", detail: "Major language spoken by Fulani communities across several regions." },
        { name: "Songhai", detail: "Important regional language, especially along the Niger River." },
        { name: "Tamasheq", detail: "Language of Tuareg communities, especially in the north." },
        { name: "French", detail: "Used as a working language in administration and formal settings." }
    ],

    "Mauritania": [
        { name: "Hassaniya Arabic", detail: "Main everyday Arabic variety spoken by much of the population." },
        { name: "Pulaar", detail: "National language spoken by communities, especially in the south." },
        { name: "Soninke", detail: "National language spoken by communities in the south." },
        { name: "Wolof", detail: "National language spoken mainly in southern communities." },
        { name: "French", detail: "Used in some education, business and administrative settings." }
    ],

    "Mauritius": [
        { name: "Mauritian Creole", detail: "Main everyday language used across much of the population." },
        { name: "English", detail: "Official language used in parliament and many formal settings." },
        { name: "French", detail: "Widely used in media, culture, business and everyday communication." },
        { name: "Bhojpuri", detail: "Heritage language spoken by some communities, especially older generations." },
        { name: "Hindi", detail: "Used in cultural, religious and educational contexts." }
    ],

    "Morocco": [
        { name: "Moroccan Arabic (Darija)", detail: "Main everyday spoken language across much of the country." },
        { name: "Modern Standard Arabic", detail: "Official language used in formal writing, education and government." },
        { name: "Amazigh languages", detail: "Official language with varieties including Tarifit, Tamazight and Tashelhit." },
        { name: "French", detail: "Widely used in business, higher education and parts of public life." },
        { name: "Spanish", detail: "Used by some communities, especially in the north." }
    ],

    "Mozambique": [
        { name: "Portuguese", detail: "Official language used in government, education and national communication." },
        { name: "Emakhuwa", detail: "One of the most widely spoken African languages, especially in the north." },
        { name: "Xichangana", detail: "Important regional language, especially in the south." },
        { name: "Sena", detail: "Widely spoken in central Mozambique." },
        { name: "Elomwe", detail: "Important regional language in the north." }
    ],

    "Namibia": [
        { name: "English", detail: "Official language used in government and formal education." },
        { name: "Oshiwambo varieties", detail: "Most widely spoken group of languages in the country." },
        { name: "Khoekhoegowab", detail: "Important language spoken by Nama and Damara communities." },
        { name: "Afrikaans", detail: "Widely used as a common second language in some communities." },
        { name: "Otjiherero", detail: "Important regional language spoken by Herero communities." }
    ],

    "Niger": [
        { name: "Hausa", detail: "Widely spoken everyday language and an important lingua franca." },
        { name: "Zarma-Songhai", detail: "Major language group, especially in the west and around Niamey." },
        { name: "Tamasheq", detail: "Spoken by Tuareg communities, particularly in the north." },
        { name: "Fulfulde", detail: "Spoken by Fulani communities in several regions." },
        { name: "French", detail: "Used in administration and some formal and educational settings." }
    ],

    "Nigeria": [
        { name: "English", detail: "Official language used in government, education and national communication." },
        { name: "Hausa", detail: "Major language, especially in the north, and a regional lingua franca." },
        { name: "Yoruba", detail: "Major language spoken mainly in the southwest." },
        { name: "Igbo", detail: "Major language spoken mainly in the southeast." },
        { name: "Nigerian Pidgin", detail: "Widely used everyday lingua franca across many communities." }
    ],

    "Rwanda": [
        { name: "Kinyarwanda", detail: "National language spoken by nearly the entire population." },
        { name: "English", detail: "Official language used in education, government and business." },
        { name: "French", detail: "Official language used in some education and formal contexts." },
        { name: "Swahili", detail: "Official language used in trade and regional communication." }
    ],

    "São Tomé and Príncipe": [
        { name: "Portuguese", detail: "Official language and the main language used in public life." },
        { name: "Forro", detail: "Portuguese-based Creole spoken by communities, especially on São Tomé." },
        { name: "Angolar", detail: "Creole language spoken by the Angolar community." },
        { name: "Principense (Lunguyê)", detail: "Creole language associated with Príncipe Island." }
    ],

    "Senegal": [
        { name: "Wolof", detail: "Most widely used everyday language and a national lingua franca." },
        { name: "French", detail: "Official language used in administration and formal education." },
        { name: "Pulaar", detail: "Major language spoken by Fulani communities." },
        { name: "Serer", detail: "Important regional language, especially in central-western areas." },
        { name: "Jola", detail: "Group of languages spoken mainly in the Casamance region." }
    ],

    "Seychelles": [
        { name: "Seychellois Creole (Seselwa)", detail: "Most widely used everyday language." },
        { name: "English", detail: "Official language used in government, education and international communication." },
        { name: "French", detail: "Official language used in education, culture and public life." }
    ],

    "Sierra Leone": [
        { name: "Krio", detail: "Widely used everyday lingua franca across different communities." },
        { name: "English", detail: "Official language used in government and formal education." },
        { name: "Mende", detail: "Major regional language, especially in the south and east." },
        { name: "Temne", detail: "Major regional language, especially in the north." },
        { name: "Limba", detail: "Important community language in northern areas." }
    ],

    "Somalia": [
        { name: "Somali", detail: "Official language and the main everyday language across the country." },
        { name: "Arabic", detail: "Official language used in religion, education and formal contexts." },
        { name: "Maay", detail: "Important regional language spoken mainly in parts of the south." },
        { name: "English", detail: "Used in some education, business and international settings." }
    ],

    "South Africa": [
        { name: "isiZulu", detail: "One of the most widely spoken home languages in the country." },
        { name: "isiXhosa", detail: "Major language, especially in the Eastern Cape and Western Cape." },
        { name: "Afrikaans", detail: "Widely spoken across several communities and regions." },
        { name: "English", detail: "Widely used in business, higher education and national communication." },
        { name: "Sesotho and Setswana", detail: "Important official languages spoken in several provinces." },
        { name: "Other official languages", detail: "The country recognizes 12 official languages in total, including South African Sign Language." }
    ],

    "South Sudan": [
        { name: "English", detail: "Official language used in government and education." },
        { name: "Juba Arabic", detail: "Widely used everyday lingua franca, especially in Juba." },
        { name: "Dinka", detail: "One of the country's major indigenous language groups." },
        { name: "Nuer", detail: "Major language spoken by communities in several regions." },
        { name: "Bari", detail: "Important regional language, especially around the capital region." }
    ],

    "Sudan": [
        { name: "Sudanese Arabic", detail: "Main everyday language spoken by much of the population." },
        { name: "Modern Standard Arabic", detail: "Used in formal writing, education and official communication." },
        { name: "Beja", detail: "Important regional language in eastern Sudan." },
        { name: "Fur", detail: "Major language spoken by communities in Darfur." },
        { name: "Nubian languages", detail: "Spoken by Nubian communities in the north." }
    ],

    "Tanzania": [
        { name: "Swahili (Kiswahili)", detail: "National language and the main lingua franca used across the country." },
        { name: "English", detail: "Used in higher education, some government settings and international business." },
        { name: "Sukuma", detail: "One of the largest community languages, especially around Lake Victoria." },
        { name: "Chaga", detail: "Group of languages spoken around Mount Kilimanjaro." },
        { name: "Haya", detail: "Important regional language in the northwest." }
    ],

    "Togo": [
        { name: "French", detail: "Official language used in government, education and formal communication." },
        { name: "Ewe", detail: "Major language spoken in the south." },
        { name: "Kabye", detail: "Major language spoken especially in the north." },
        { name: "Mina (Gen)", detail: "Widely used for everyday communication in parts of the south." }
    ],

    "Tunisia": [
        { name: "Tunisian Arabic (Derja)", detail: "Everyday spoken dialect used in homes, streets, media and daily conversation." },
        { name: "Modern Standard Arabic", detail: "Official language used in formal writing, education, administration and news." },
        { name: "French", detail: "Widely used in education, business, science, medicine and parts of public life." },
        { name: "Amazigh", detail: "Living heritage language maintained by smaller communities, particularly in some southern villages." }
    ],

    "Uganda": [
        { name: "English", detail: "Official language used in government, education and formal communication." },
        { name: "Swahili", detail: "Official language used increasingly in regional communication and education." },
        { name: "Luganda", detail: "Widely spoken, especially in central Uganda and Kampala." },
        { name: "Runyankole-Rukiga", detail: "Important language group in western Uganda." },
        { name: "Acholi", detail: "Major regional language in the north." }
    ],

    "Zambia": [
        { name: "English", detail: "Official language used in government, education and national communication." },
        { name: "Bemba", detail: "One of the most widely used regional languages, especially in the north." },
        { name: "Nyanja (Chichewa)", detail: "Widely spoken, especially in Lusaka and the east." },
        { name: "Tonga", detail: "Major language spoken in the south." },
        { name: "Lozi", detail: "Important regional language in western Zambia." }
    ],

    "Zimbabwe": [
        { name: "Shona", detail: "One of the most widely spoken languages in the country." },
        { name: "isiNdebele", detail: "Major language, especially in the southwest." },
        { name: "English", detail: "Official language used in government, education and business." },
        { name: "Chewa, Tonga and other languages", detail: "Other constitutionally recognized languages spoken by different communities." }
    ]

};


// =========================================
// COUNTRY NAME ALIASES
//
// Map datasets sometimes use a different
// English name for the same country.
// These aliases help the information panel
// find the correct language entry.
// =========================================

const countryNameAliases = {
    "Cape Verde": "Cabo Verde",
    "Republic of Cabo Verde": "Cabo Verde",
    "Congo": "Republic of the Congo",
    "Republic of the Congo": "Republic of the Congo",
    "Congo, Republic of the": "Republic of the Congo",
    "Democratic Republic of Congo": "Democratic Republic of the Congo",
    "DR Congo": "Democratic Republic of the Congo",
    "Congo, Democratic Republic of the": "Democratic Republic of the Congo",
    "Ivory Coast": "Côte d'Ivoire",
    "The Gambia": "Gambia",
    "Gambia, The": "Gambia",
    "Swaziland": "Eswatini",
    "Sao Tome and Principe": "São Tomé and Príncipe",
    "Sao Tome & Principe": "São Tomé and Príncipe"
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



/* =========================================
   4. DISPLAY COUNTRY INFORMATION

   This function displays each language
   together with its explanation.
   ========================================= */

function showCountryInformation(countryName) {

    const countryInfo = document.getElementById("country-info");

    // Create the country information layout.
    countryInfo.innerHTML = `
        <p class="eyebrow">COUNTRY DISCOVERY</p>

        <h3 id="selected-country-name"></h3>

        <p id="selected-country-description"></p>

        <div class="country-languages">
            <strong>Main languages and their use:</strong>

            <ul id="selected-country-languages"
                class="country-language-list">
            </ul>
        </div>

        <p class="language-note">
            These are selected examples of major languages.
            They are not a complete list of every language
            spoken in the country.
        </p>
    `;

    // Display the selected country's name.
    document.getElementById("selected-country-name").textContent =
        countryName;

    // Check whether the map uses an alternative country name.
    // If so, find the matching name in our language database.
    const databaseCountryName =
        countryNameAliases[countryName] || countryName;

    // Retrieve the language information.
    const languages = countryLanguages[databaseCountryName];

    // Get the list where the languages will appear.
    const languageList =
        document.getElementById("selected-country-languages");

    if (languages) {

        // Display a short introduction.
        document.getElementById("selected-country-description").textContent =
            "Discover some of the languages spoken and used in this country.";

        // Create one list item for every language.
        languages.forEach((language) => {

            const listItem = document.createElement("li");

            // Create the language name.
            const languageName = document.createElement("strong");
            languageName.textContent = language.name;

            // Create its explanation.
            const languageDetail = document.createElement("p");
            languageDetail.textContent = language.detail;

            // Put the name and explanation together.
            listItem.appendChild(languageName);
            listItem.appendChild(languageDetail);

            // Add the language to the country information panel.
            languageList.appendChild(listItem);

        });

    } else {

        // This message helps us identify country-name mismatches.
        document.getElementById("selected-country-description").textContent =
            "Language information for this country is being reviewed.";

        const message = document.createElement("li");
        message.textContent =
            "We are working on adding verified language information.";

        languageList.appendChild(message);
    }
}



/* 5. DRAW THE INTERACTIVE AFRICAN MAP */
let allCountries = [];
async function createAfricaMap() {

    const mapContainer = document.getElementById("africa-map");
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

            // Use the same selection function as the search bar.
            selectCountry(country.properties.name);

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
   6. SMART COUNTRY SEARCH

   Visitors can:
   - Click the search field to see all countries.
   - Scroll through countries alphabetically.
   - Type part of a country name to filter results.
   - Select a country to highlight it on the map.
   ========================================= */

// Connect JavaScript to the HTML elements.
const countrySearch = document.getElementById("country-search");
const countrySearchButton = document.getElementById("country-search-button");
const countrySuggestions = document.getElementById("country-suggestions");
const searchMessage = document.getElementById("search-message");


// Display the matching country suggestions.
function displayCountrySuggestions(searchTerm = "") {

    // Remove spaces and ignore uppercase/lowercase differences.
    const term = searchTerm.trim().toLowerCase();

    // Get country names from the map data.
    // Filter them using the visitor's search text.
    // Sort the results alphabetically.
    const matchingCountries = allCountries
        .map(country => country.properties.name)
        .filter(name => name.toLowerCase().includes(term))
        .sort((a, b) => a.localeCompare(b));

    // Clear the previous suggestions.
    countrySuggestions.replaceChildren();

    // Show a message if no country matches.
    if (matchingCountries.length === 0) {

        const message = document.createElement("p");
        message.textContent = "No matching country found.";
        message.className = "no-country-results";

        countrySuggestions.appendChild(message);
        countrySuggestions.hidden = false;

        return;
    }

    // Create one clickable button for each country.
    matchingCountries.forEach(countryName => {

        const option = document.createElement("button");

        option.type = "button";
        option.className = "country-suggestion";
        option.textContent = countryName;
        option.setAttribute("role", "option");

        // Select the country when the visitor clicks it.
        option.addEventListener("click", () => {
            selectCountry(countryName);
        });

        countrySuggestions.appendChild(option);
    });

    // Display the suggestion panel.
    countrySuggestions.hidden = false;
}


// Select a country and update the map and information panel.
function selectCountry(countryName) {

    // Find the country in the loaded map data.
    const selectedCountry = allCountries.find(country =>
        country.properties.name === countryName
    );

    // Stop if the country cannot be found.
    if (!selectedCountry) {
        searchMessage.textContent = "Country not found.";
        return;
    }

    // Update the country information panel.
    showCountryInformation(countryName);

    // Remove the previous map selection.
    d3.selectAll(".country-shape")
        .classed("selected-country", false);

    // Highlight the selected country.
    d3.selectAll(".country-shape")
        .filter(country =>
            country.properties.name === countryName
        )
        .classed("selected-country", true);

    // Put the selected name into the search field.
    countrySearch.value = countryName;

    // Close the suggestion panel.
    countrySuggestions.hidden = true;

    // Display a small confirmation message.
    searchMessage.textContent = "Exploring " + countryName + "!";
}


// When visitors click the search field,
// display all African countries alphabetically.
countrySearch.addEventListener("focus", () => {

    displayCountrySuggestions(countrySearch.value);

});


// Update the suggestions whenever visitors type.
countrySearch.addEventListener("input", () => {

    displayCountrySuggestions(countrySearch.value);

});


// The Explore button selects an exact match,
// or a single matching suggestion.
countrySearchButton.addEventListener("click", () => {

    const searchTerm = countrySearch.value.trim().toLowerCase();

    if (!searchTerm) {
        displayCountrySuggestions();
        searchMessage.textContent = "Choose an African country.";
        return;
    }

    const matchingCountries = allCountries
        .map(country => country.properties.name)
        .filter(name => name.toLowerCase().includes(searchTerm));

    // Prefer an exact match.
    const exactMatch = matchingCountries.find(name =>
        name.toLowerCase() === searchTerm
    );

    if (exactMatch) {
        selectCountry(exactMatch);
    }

    // If there is only one result, select it automatically.
    else if (matchingCountries.length === 1) {
        selectCountry(matchingCountries[0]);
    }

    // Otherwise, let the visitor choose from the suggestions.
    else {
        displayCountrySuggestions(countrySearch.value);
        searchMessage.textContent = "Please select a country from the list.";
    }
});


// Close the suggestions when visitors click outside the search area.
document.addEventListener("click", (event) => {

    const clickedInsideSearch =
        countrySearch.contains(event.target) ||
        countrySuggestions.contains(event.target) ||
        countrySearchButton.contains(event.target);

    if (!clickedInsideSearch) {
        countrySuggestions.hidden = true;
    }
});
