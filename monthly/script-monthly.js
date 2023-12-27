/////// template content from google sheets

// ur api key created on google cloud: https://console.cloud.google.com/apis/credentials
const API_KEY = 'AIzaSyB2FlJwoNn1JKC8hTUkrUY2jGSGYHfNaVY'

// id of ur google spreadsheet: https://docs.google.com/spreadsheets/d/{GET THIS CODE HERE}
const sheets_id = '1fBAOt4iYZa5ocuMGWWurktphsGQW9HgFV997QGqQsms'

// name of ur worksheet
// quickstart; default content - https://developers.google.com/sheets/api/quickstart/js
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4']


// template structure
let content = {
    spreadsheetId : sheets_id, // get ur sheets id added above
    range : 'content' // get the name of ur worksheet added above
}

// quickstart - https://developers.google.com/sheets/api/quickstart/js
function gapiLoaded() {
    gapi.load( 'client', intializeGapiClient ) // default content
}

// quickstart - https://developers.google.com/sheets/api/quickstart/js
async function intializeGapiClient() {
    await gapi.client.init( {
        apiKey: API_KEY, // get ur api key added above
        discoveryDocs: DISCOVERY_DOCS, // default content
    } );

    // post blog
    gapi.client.sheets.spreadsheets.values.get( content ) // get the variable created above
            .then( response => display_data( response.result.values )) // get the values of the worksheet
}

const post = document.querySelector('.page-content')

function display_data(template_data){
    template_data.shift()
    let post_content = ""
    for ( let item of template_data ) { // get each row
        
        const month_color = item[0]
        const month_id = item[1]
        const title = item[2]
        const permalink = item[3]
        const date = item[4]
        const author = item[5]
        const position = item[6]
        const vh2_text = item[7]
        const vh2_flourish = item[8]
        const vh3_text = item[9]
        const vh3_flourish = item[10]
        const vh4_data_point_t1 = item[11]
        const vh4_data_point_t2 = item[12]
        const vh4_text = item[13]
        const vh5_text = item[14]
        const vh5_list = item[15]
        const vh6_text = item[16]
        const vh6_list = item[17]
        const vh7_text = item[18]
        const vh7_list = item[19]
        const footer = item[20]

        post_content +=
        `
    <!-- bar project's theme -->
    <section class="flex" id="bar-logo">
        <a target="_blank" href="https://trends.google.com/home">
            <img class="trends-logo" src="../img/google_trends_logo.png" alt="Google Trends logo">
        </a>
    </section>

    
    <section class="center-text">

    <!- vh1-section -->
        <section class="container vh-section flex column month-${month_id}">
            <a href="#${permalink}" class="permalink-link" target="_blank" data-anchor="${permalink}"><h1 class="flex intro title-template">${title}</h1></a>
            <h2 class="flex intro subtitle-template">with Google Trends</h2>
            <h3 class="flex intro month-template">${date}</h3>
            <h4 class="flex intro author-template">${author}<br>${position}</h4>
        </section>
        `
        if (vh2_text != '-'){
            post_content +=
        `
        <!-- vh2-section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh2_text}</p>
            </div>
        `
        }
        if (vh2_flourish != '-'){
            post_content +=
        `
        <iframe src='https://flo.uri.sh/visualisation/${vh2_flourish}/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </section>
        `
        }
        if (vh3_text != '-'){
            post_content +=
        `
        <!-- vh3-section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh3_text}</p>
            </div>
        `
        }
        if (vh3_flourish != '-'){
            post_content +=
        `
        <iframe src='https://flo.uri.sh/visualisation/${vh3_flourish}/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </section>
        `
        }
        if (vh4_data_point_t1 != '-'){
                post_content +=
        `
        <!-- vh4-section -->
        <section class="container vh-section flex column">
            <div class="number-box flex column">
                <p class="font-${month_color}">${vh4_data_point_t1}</p>
                <p class="font-${month_color}">${vh4_data_point_t2}</p>
            </div>
        `
        }
        if (vh4_text != '-'){
            post_content +=
        `
            <div class="number-text">
                <p>${vh4_text}</p>
            </div>
        </section>
        `
        }
        if (vh5_text != '-'){
            post_content +=
        `
        <!-- vh5 section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh5_text}</p>
            </div>
        `
        }
        if (vh5_list != '-'){
                post_content +=
        `
            <div class="question-box">
                <ul>
                   ${vh5_list}
                </ul>
            </div>
        </section>
        `
        }
        if (vh6_text != '-'){
            post_content +=
        `
        <!-- vh6 section -->
        <section class="container vh-section flex column">
            <div class="content-box">
            <p>${vh6_text}</p>
            </div>
        `
        }
        if (vh6_list != '-'){
                post_content +=
        `
            <div class="question-box">
                <ul>
                    ${vh6_list}
                </ul>
            </div>
        </section>
        `
        }
        if (vh7_text != '-'){
            post_content +=
        `
        <!-- vh7 section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh7_text}</p>
            </div>
        `
        }
        if (vh7_list != '-'){
                post_content +=
        `
            <div class="question-box">
                <ul>
                    ${vh7_list}
                </ul>
            </div>
        </section>
        `
        }
        if (footer != '-'){
            post_content +=
        `
        <section class="container vh-section flex column">
            <div class="content-box footer">
                    <p>${footer}</p>
            </div>
        </section>
        `
        }
        if (title != '-'){
            post_content +=
        `
        <!-- close section center text -->
        </section>
        `
    }
    }
    post.innerHTML = post_content // add this html to section .page-content
}
