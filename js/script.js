// - github.com/Vauth/web-translate - //

// Version details
const Version = 'v1.0.0'

// Country list [{code, name}]
const countryCodes = [
    // { code: 'en', name: 'English' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'sq', name: 'Albanian' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hy', name: 'Armenian' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'bn', name: 'Bengali' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'ca', name: 'Catalan' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'nl', name: 'Dutch' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estonian' },
    { code: 'tl', name: 'Filipino' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'gl', name: 'Galician' },
    { code: 'ka', name: 'Georgian' },
    { code: 'de', name: 'German' },
    { code: 'el', name: 'Greek' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ht', name: 'Haitian Creole' },
    { code: 'ha', name: 'Hausa' },
    { code: 'haw', name: 'Hawaiian' },
    { code: 'iw', name: 'Hebrew' },
    { code: 'hi', name: 'Hindi' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'is', name: 'Icelandic' },
    { code: 'ig', name: 'Igbo' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ga', name: 'Irish' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'jw', name: 'Javanese' },
    { code: 'kn', name: 'Kannada' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'km', name: 'Khmer' },
    { code: 'ki', name: 'Kikuyu' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'rn', name: 'Kirundi' },
    { code: 'ko', name: 'Korean' },
    { code: 'ku', name: 'Kurdish' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'lo', name: 'Lao' },
    { code: 'la', name: 'Latin' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lu', name: 'Luba-Katanga' },
    { code: 'lb', name: 'Luxembourgish' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'ms', name: 'Malay' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'mt', name: 'Maltese' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'my', name: 'Burmese' },
    { code: 'ne', name: 'Nepali' },
    { code: 'no', name: 'Norwegian' },
    { code: 'ny', name: 'Nyanja' },
    { code: 'or', name: 'Odia' },
    { code: 'ps', name: 'Pashto' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'ro', name: 'Romanian' },
    { code: 'ru', name: 'Russian' },
    { code: 'sm', name: 'Samoan' },
    { code: 'gd', name: 'Scottish Gaelic' },
    { code: 'sr', name: 'Serbian' },
    { code: 'sn', name: 'Shona' },
    { code: 'si', name: 'Sinhalese' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'so', name: 'Somali' },
    { code: 'es', name: 'Spanish' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'sv', name: 'Swedish' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'th', name: 'Thai' },
    { code: 'tr', name: 'Turkish' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'ur', name: 'Urdu' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'cy', name: 'Welsh' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: "Yiddish" },
    { code: 'zu', name: 'Zulu' },
];

// Pop-up information
function InfoPop() {
    document.getElementById('error').style.color = '#277EE2';
    document.getElementById('error').style.backgroundColor = 'rgba(0, 149, 255, 0.121)';
    document.getElementById('error').style.boxShadow = '0px 0px 10px rgba(0, 149, 255, 0.341)';
    document.getElementById('error').style.width = '30%';
    document.getElementById('error').textContent = 'Loading...'; 
};

// Pop-up Error
function ErrorPop() {
    document.getElementById('error').style.color = 'red';
    document.getElementById('error').style.backgroundColor = 'rgba(255, 0, 0, 0.121)';
    document.getElementById('error').style.boxShadow = '0px 0px 10px rgba(255, 0, 0, 0.268)';
    document.getElementById('error').style.width = '50%';
    document.getElementById('error').textContent = 'Please enter a valid URL.'; 
};

// Append all countries
function AppendCountry() {
    const selectElement = document.getElementById('country-codes');
    countryCodes.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.name} (${country.code})`;
        selectElement.appendChild(option);
    });
}; AppendCountry();

// GET /?url=URL&lang=LANG parameter
function RedirectURL() {
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('url')) {
        const urlInput = urlParams.get('url'); let Lang;
        const langInput = urlParams.get('lang') || 'en';
        const pattern = /^(https?:\/\/[^\s]+|www\.[^\s]+)$/;

        if (countryCodes.some(country => country.code === langInput) || langInput == 'en') {Lang = langInput}
        else {return document.getElementById('error').textContent = 'Please enter a valid language.';};

        document.getElementById('urlInput').value = urlInput;
        document.getElementById('country-codes').value = Lang;

        if (pattern.test(urlInput)) {
            const translatedUrl = `https://translate.google.com/translate?sl=auto&tl=${Lang}&hl=en-US&u=${encodeURIComponent(urlInput)}&client=webapp`;
            InfoPop(); location.href = translatedUrl;
        } else {
            return ErrorPop();
        }
    }
}; RedirectURL();

// Press enter to redirect
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const button = document.getElementById('submitBtn');
        button.click();
    }
});

// Handle translate button
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const urlInput = document.getElementById('urlInput').value;
    const pattern = /^(https?:\/\/[^\s]+|www\.[^\s]+)$/;

    if (pattern.test(urlInput)) {
        const Lang = document.getElementById('country-codes').selectedOptions[0].value;
        const translatedUrl = `https://translate.google.com/translate?sl=auto&tl=${Lang}&hl=en-US&u=${encodeURIComponent(urlInput)}&client=webapp`;
        InfoPop(); location.href = translatedUrl;
    } else {
        return ErrorPop();
    }
});
