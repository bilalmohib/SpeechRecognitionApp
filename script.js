
function showSpeechToText()
{
    document.getElementById("SpeechToText").style.display="block";
    document.getElementById("TextToSpeech").style.display="none";
}


function showTextToSpeech()
{
    document.getElementById("SpeechToText").style.display="none";
    document.getElementById("TextToSpeech").style.display="block";
}

var spaceNum = 1;
var space = false;
let bold = () => {
    // let text = document.getElementById("final_span");
    // console.log("span==>", text.innerHTML);
    // text.setAttribute("class", "boldIt")



    $("#final_span").toggleClass("boldIt");


}
let italic = () => {
    // let text = document.getElementById("final_span");
    // console.log("span==>", text.innerHTML);
    // text.setAttribute("class", "italicIt")

    $("#final_span").toggleClass("italicIt");

}
let underline = () => {
    // let text = document.getElementById("final_span");
    // console.log("span==>", text.innerHTML);
    // text.setAttribute("class", "underlineIt")

    $("#final_span").toggleClass("underlineIt");

}


let tab = () => {
    // let text = document.getElementById("final_span");
    // console.log("span==>", text.innerHTML);
    // text.setAttribute("class", "underlineIt")
    console.log("In the tab tag");
    //spaceNum=3;
    space = true;
    //$("#final_span").toggleClass("tabit");
    document.getElementById("tabbtn").style.display = "none";
    document.getElementById("removetab").style.display = "block";
    spaceNum = 8;





}
let removeTab = () => {
    space = false;

    spaceNum = 1;
    document.getElementById("removetab").style.display = "none";
    document.getElementById("tabbtn").style.display = "block";
}
var fontSize;
let changeFontSize = () => {
    let e = document.getElementById("fontSize");
    fontSize = e.options[e.selectedIndex].text;
    //console.log("The font-size is: " + strUser);


}
function changeSize() {
    //let result = sell.fontsize(7);
    // let textarea = document.getElementById("final_span");

    // let len = textarea.value.length;
    // let start = textarea.selectionStart;
    // let end = textarea.selectionEnd;
    // let selectedText = textarea.value.substring(start, end);

    // // This is the selected text and alert it


    // let text=`<span></span>`;

    // // Here we are replacing the selected text with this one
    // textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(end, len);
}


var noSleep = new NoSleep();

var wakeLockEnabled = false;
var toggleEl = document.querySelector("#start_button");
toggleEl.addEventListener('click', function () {
    if (!wakeLockEnabled) {
        noSleep.enable(); // keep the screen on!
        wakeLockEnabled = true;
        toggleEl.value = "Wake Lock is enabled";
        // document.body.style.backgroundColor = "green";
    } else {
        noSleep.disable(); // let the screen turn off.
        wakeLockEnabled = false;
        //toggleEl.value = "Wake Lock is disabled";
        // document.body.style.backgroundColor = "";
    }
}, false);


// window.onbeforeunload = confirmExit;
// function confirmExit()
// {
//       return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
// }



var langs = [
    ['Afrikaans', ['af-ZA']],
    ['Bahasa Indonesia', ['id-ID']],
    ['Bahasa Melayu', ['ms-MY']],
    ['CatalÃ ', ['ca-ES']],
    ['ÄŒeÅ¡tina', ['cs-CZ']],
    ['Deutsch', ['de-DE']],
    ['English', ['en-AU', 'Australia'],
        ['en-CA', 'Canada'],
        ['en-IN', 'India'],
        ['en-NZ', 'New Zealand'],
        ['en-ZA', 'South Africa'],
        ['en-GB', 'United Kingdom'],
        ['en-US', 'United States']
    ],
    ['EspaÃ±ol', ['es-AR', 'Argentina'],
        ['es-BO', 'Bolivia'],
        ['es-CL', 'Chile'],
        ['es-CO', 'Colombia'],
        ['es-CR', 'Costa Rica'],
        ['es-EC', 'Ecuador'],
        ['es-SV', 'El Salvador'],
        ['es-ES', 'EspaÃ±a'],
        ['es-US', 'Estados Unidos'],
        ['es-GT', 'Guatemala'],
        ['es-HN', 'Honduras'],
        ['es-MX', 'MÃ©xico'],
        ['es-NI', 'Nicaragua'],
        ['es-PA', 'PanamÃ¡'],
        ['es-PY', 'Paraguay'],
        ['es-PE', 'PerÃº'],
        ['es-PR', 'Puerto Rico'],
        ['es-DO', 'RepÃºblica Dominicana'],
        ['es-UY', 'Uruguay'],
        ['es-VE', 'Venezuela']
    ],
    ['Euskara', ['eu-ES']],
    ['FranÃ§ais', ['fr-FR']],
    ['Galego', ['gl-ES']],
    ['Hrvatski', ['hr_HR']],
    ['IsiZulu', ['zu-ZA']],
    ['Ãslenska', ['is-IS']],
    ['Italiano', ['it-IT', 'Italia'],
        ['it-CH', 'Svizzera']
    ],
    ['Magyar', ['hu-HU']],
    ['Nederlands', ['nl-NL']],
    ['Norsk bokmÃ¥l', ['nb-NO']],
    ['Polski', ['pl-PL']],
    ['PortuguÃªs', ['pt-BR', 'Brasil'],
        ['pt-PT', 'Portugal']
    ],
    ['RomÃ¢nÄƒ', ['ro-RO']],
    ['SlovenÄina', ['sk-SK']],
    ['Suomi', ['fi-FI']],
    ['Svenska', ['sv-SE']],
    ['TÃ¼rkÃ§e', ['tr-TR']],
    ['Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸', ['bg-BG']],
    ['PÑƒÑÑÐºÐ¸Ð¹', ['ru-RU']],
    ['Ð¡Ñ€Ð¿ÑÐºÐ¸', ['sr-RS']],
    ['í•œêµ­ì–´', ['ko-KR']],
    ['ä¸­æ–‡', ['cmn-Hans-CN', 'æ™®é€šè¯ (ä¸­å›½å¤§é™†)'],
        ['cmn-Hans-HK', 'æ™®é€šè¯ (é¦™æ¸¯)'],
        ['cmn-Hant-TW', 'ä¸­æ–‡ (å°ç£)'],
        ['yue-Hant-HK', 'ç²µèªž (é¦™æ¸¯)']
    ],
    ['æ—¥æœ¬èªž', ['ja-JP']],
    ['Lingua latÄ«na', ['la']]
];

for (var i = 0; i < langs.length; i++) {
    select_language.options[i] = new Option(langs[i][0], i);
}
select_language.selectedIndex = 6;
updateCountry();
select_dialect.selectedIndex = 6;
showInfo('info_start');

function updateCountry() {
    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
        select_dialect.remove(i);
    }
    var list = langs[select_language.selectedIndex];
    for (var i = 1; i < list.length; i++) {
        select_dialect.options.add(new Option(list[i][1], list[i][0]));
    }
    select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}

var create_email = false;
var final_transcript = '';
var stop = false;
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
    upgrade();
} else {
    start_button.style.display = 'inline-block';
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = function () {
        stop = false;
        if (space == true) {
            spaceNum = 8;
        }
        else {
            spaceNum = 1;
        }

       // console.log("The font-size is: " + currentFontSize);
        //Creating the space between the content
        final_transcript = final_transcript + new Array(spaceNum + 1).join(" ")

        console.log("The interim results are: "+final_transcript);
        recognizing = true;
        showInfo('info_speak_now');

        document.getElementById("start_button").style.display = "none";
    };

    function runWhenNoSpeech() {
        document.getElementById("start_button").style.display = "inline-block";
        showInfo('info_no_speech');
        document.getElementById("stop").style.display = "none";
        document.getElementById("animatedMic").style.display = "none";

        ignore_onend = true;
        console.log("Koi Bola hi nahi")
    }
    function runWhenNoMic() {
        document.getElementById("start_button").style.display = "inline-block";
        showInfo('info_no_microphone');
        document.getElementById("stop").style.display = "none";
        document.getElementById("animatedMic").style.display = "none";
        ignore_onend = true;
    }

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {

            setTimeout(runWhenNoSpeech, 20000);

        }
        if (event.error == 'audio-capture') {
            setTimeout(runWhenNoMic, 20000);

        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
                showInfo('info_blocked');
            } else {
                showInfo('info_denied');
            }
            ignore_onend = true;
        }
    };


    recognition.onend = function () {
        if (space == true) {
            spaceNum = 8;
        //    final_transcript = final_transcript + "    ";
        }
        else {
            spaceNum = 1;
        }
        
        // if (space == true) {
        //     document.getElementById("tabbtn").style.display = "none";
        // }
        // else {
        //     document.getElementById("tabbtn").style.display = "initial";
        // }

        console.log(document.getElementById("final_span").innerHTML)
        //localStorage.setItem("previousText",document.getElementById("final_span").innerHTML);
        // document.getElementById("result").innerHTML=
        if (stop == false) {
            recognition.start();
        }
        else {
            console.log("The User stopped the speech");
        }

    };
    //Here the speech will end
    function endSpeechRecognition() {

        document.getElementById("butttonImp").style.display="inline-block";
        showInfo('info_start');
        //showInfo('');
        noSleep.disable(); // let the screen turn off.
        wakeLockEnabled = false;
        // final_transcript="";
        // interimResults="";
        document.getElementById("stop").style.display = "none";
        document.getElementById("animatedMic").style.display = "none";
        stop = true;
        //console.log("123")
        recognizing = false;
        recognition.stop();
        if (ignore_onend) {
            return;
        }
        document.getElementById("start_button").style.display = "inline-block";
        if (!final_transcript) {

            showInfo('info_start');
            return;
        }
        showInfo('');
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            range.selectNode(document.getElementById('final_span'));
            window.getSelection().addRange(range);
        }
        if (create_email) {
            create_email = false;
            createEmail();
        }
    }
    recognition.onresult = function (event) {
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        //final_span = final_span + new Array(1).join(" ");
        //               interim_transcript = interim_transcript + new Array(1+1).join(` `);                        
        //  final_transcript = final_transcript + new Array(1+1).join(" ")
        // console.log("This is: ",final_transcript)

        final_transcript = capitalize(final_transcript);
        final_span.innerHTML = linebreak(final_transcript);
        interim_span.innerHTML = linebreak(interim_transcript);
        if (final_transcript || interim_transcript) {
            showButtons('inline-block');
        }
    };
}

function upgrade() {
    start_button.style.visibility = 'hidden';
    //showInfo('info_upgrade');
    startButton(event);
    showInfo('info_speak_now');
    document.getElementById("start_button").style.display = "none";

}

var two_line = /\n\n/g;
var one_line = /\n/g;



function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;

function capitalize(s) {
    return s.replace(first_char, function (m) {
        return m.toUpperCase();
    });
}

function createEmail() {
    var n = final_transcript.indexOf('\n');
    if (n < 0 || n >= 80) {
        n = 40 + final_transcript.substring(40).indexOf(' ');
    }
    var subject = encodeURI(final_transcript.substring(0, n));
    var body = encodeURI(final_transcript.substring(n + 1));
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}

function copyButton() {
    if (recognizing) {
        recognizing = false;
        recognition.stop();
    }
    let copytext=document.getElementById("final-span").innerHTML;
    console.log("Ala phar copy:==> ",copytext);
    // copy_button.style.display = 'none';
    alert("Successfully copied text to clipboard");
    copy_info.style.display = 'inline-block';
    showInfo('');
}

function emailButton() {
    if (recognizing) {
        create_email = true;
        recognizing = false;
        recognition.stop();
    } else {
        createEmail();
    }
    email_button.style.display = 'none';
    email_info.style.display = 'inline-block';
    showInfo('');
}

function eraseData() {
    document.getElementById("final_span").innerHTML = "";
    final_transcript = "";
    interimResults = "";
    document.getElementById("butttonImp").style.display="none";
    endSpeechRecognition();
}

function startButton(event) {
    
    if (recognizing) {
        stop = false;
        spaceNum = 1;
        //noSleep.enable(); // keep the screen on!
        //wakeLockEnabled = true;
        //console.log("sahi==>")
        //recognition.stop();
        return;
    }
    // final_transcript = " " + final_transcript;
    recognition.lang = select_dialect.value;
    recognition.start();
    ignore_onend = false;
    //final_span.innerHTML = '';
    // interim_span.innerHTML = '';
    document.getElementById("start_button").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";
    document.getElementById("animatedMic").style.display = "flex";
    document.getElementById("erase").style.display = "inline-block";
    showInfo('info_allow');
    showButtons('none');
    start_timestamp = event.timeStamp;
}

function showInfo(s) {
    // add info so don't error
    info = document.getElementById("info");
    if (s) {
        for (var child = info.firstChild; child; child = child.nextSibling) {
            if (child.style) {
                child.style.display = child.id == s ? 'inline' : 'none';
            }
        }
        info.style.visibility = 'visible';
    } else {
        info.style.visibility = 'hidden';
    }
}

var current_style;

function showButtons(style) {
    if (style == current_style) {
        return;
    }
    document.getElementById("butttonImp").style.display="inline-block";
    current_style = style;
    copy_button.style.display = style;
    email_button.style.display = style;
    // copy_info.style.display = 'none';
    // email_info.style.display = 'none';
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("copy_button").addEventListener("click", function () {
    // Generate download of hello.txt file with some content
    var localdate = generateNameBasedTime();
    var filename = "NewSpeech" + ".txt";

    download(filename, text);
}, false);

function generatePDF() {
    const element = document.getElementById("final_span").innerHTML;
    // Choose the element and save the PDF for our user.
    let localdate = generateNameBasedTime();
    let filename01 = "NewPdf" + ".pdf";
    let opt = {
        margin: 1,
        filename: filename01,
        jsPDF: {
            unit: 'in',
            format: 'letter',
            orientation: 'portrait'
        }
    };
    html2pdf().set(opt).from(element).save();
}

function generateNameBasedTime() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const text = document.getElementById("final_span").innerHTML;
    var localdate = dateLocal.toISOString().slice(0, 19).replace('/-/g', "").replace("T", "_");
    return localdate;
}


//This is for the text editor
var oDoc, sDefTxt;
                
function initDoc() {
  oDoc = document.getElementById("final_span");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
  alert("Uncheck \"Show HTML\".");
  oDoc.focus();
  return false;
}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
    document.execCommand("defaultParagraphSeparator", false, "div");
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}

function printDoc() {
  if (!validateMode()) { return; }
  var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
  oPrntWin.document.close();
}


// user_pref("capability.policy.policynames", "allowclipboard");
// user_pref("capability.policy.allowclipboard.sites", "https://www.mozilla.org");
// user_pref("capability.policy.allowclipboard.Clipboard.cutcopy", "allAccess");
// user_pref("capability.policy.allowclipboard.Clipboard.paste", "allAccess");