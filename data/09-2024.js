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
    range : '09-2024' // get the name of ur worksheet added above
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
        const vh2_note = item[9]
        const vh3_text = item[10]
        const vh3_flourish = item[11]
        const vh3_note = item[12]
        const vh4_data_point_t1 = item[13]
        const vh4_data_point_t2 = item[14]
        const vh4_text = item[15]
        const vh5_text = item[16]
        const vh5_flourish = item[17]
        const vh5_note = item[18]
        const vh6_text = item[19]
        const vh6_list = item[20]
        const vh7_text = item[21]
        const vh7_flourish = item[22]
        const vh7_note = item[23]
        const vh8_text = item[24]
        const vh8_list = item[25]
        const vh9_text = item[26]
        const vh9_flourish = item[27]
        const vh9_note = item[28]
        const vh10_text = item[29]
        const vh10_list = item[30]
        const footer = item[31]

        post_content +=
        `
    <!-- bar project's theme -->
    <section class="flex" id="bar-logo">
        <a target="_blank" href="https://trends.google.com/home">
            <img class="trends-logo" src="img/google_trends_logo.png" alt="Google Trends logo">
        </a>
    </section>

    
    <section class="center-text">

    <header>
    <a href="../index.html">
        <div class="menu flex column">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </a>
    </header>

    <!- vh1-section -->
        <section class="container vh-section flex column month-${month_id}">
            <h1 class="flex intro title-template">${title}</h1>
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
            <div class="content-box">
                <p class="footnote">${vh2_note}</p>
            </div>
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
            <div class="content-box">
                <p class="footnote">${vh3_note}</p>
            </div>
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
        <!-- vh5-section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh5_text}</p>
            </div>
        `
        }
        if (vh5_flourish != '-'){
            post_content +=
        `
        <iframe src='https://flo.uri.sh/visualisation/${vh5_flourish}/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
            <div class="content-box">
                <p class="footnote">${vh5_note}</p>
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
        <!-- vh7-section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh7_text}</p>
            </div>
        `
        }
        if (vh7_flourish != '-'){
            post_content +=
        `
        <iframe src='https://flo.uri.sh/visualisation/${vh7_flourish}/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
            <div class="content-box">
                <p class="footnote">${vh7_note}</p>
            </div>
        </section>
        `
        }
        if (vh8_text != '-'){
            post_content +=
        `
        <!-- vh8 section -->
        <section class="container vh-section flex column">
            <div class="content-box">
            <p>${vh8_text}</p>
            </div>
        `
        }
        if (vh8_list != '-'){
                post_content +=
        `
            <div class="question-box">
                <ul>
                    ${vh8_list}
                </ul>
            </div>
        </section>
        `
        }
        if (vh9_text != '-'){
            post_content +=
        `
        <!-- vh9-section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh9_text}</p>
            </div>
        `
        }
        if (vh9_flourish != '-'){
            post_content +=
        `
        <iframe src='https://flo.uri.sh/visualisation/${vh9_flourish}/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
            <div class="content-box">
                <p class="footnote">${vh9_note}</p>
            </div>
        </section>
        `
        }
        if (vh10_text != '-'){
            post_content +=
        `
        <!-- vh10 section -->
        <section class="container vh-section flex column">
            <div class="content-box">
                <p>${vh10_text}</p>
            </div>
        `
        }
        if (vh10_list != '-'){
                post_content +=
        `
            <div class="question-box">
                <ul>
                    ${vh10_list}
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
