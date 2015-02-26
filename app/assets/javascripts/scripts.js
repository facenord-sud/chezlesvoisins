// JavaScript Document

// MENU
function menuShow()
{
    var menuKnopf = document.getElementById("menuKnopf");
    var menu = document.getElementById("menu");
    menuKnopf.style.display = "none";
    menu.style.display = "block";
}

//OpenBrWindow
function OpenBrWindow(theURL,winName,w,h,features) { //v2.0
    var winl = (screen.width - w) / 2;
    var wint = (screen.height - h) / 2;

    window.open(theURL,winName,'height='+h+',width='+w+',top='+wint+',left='+winl+','+features);
}

//Start Music Player
function start_music_player() {
    var w = 530;
    var h = 280;

    var winl = (screen.width - w) / 2;
    var wint = (screen.height - h) / 2;

    var music_player_url = 'content/services/music_player.php';

    if(typeof music_player_window == 'undefined')
    {
            music_player_window = window.open('','music_player_window','height='+h+',width='+w+',right=99999,scrollbars=no');
            if(music_player_window.closed) {
              music_player_window = window.open(music_player_url,'music_player_window','height='+h+',width='+w+',top='+wint+',left='+winl+','+',scrollbars=no');
            } else {
              if (music_player_window.location.pathname!='/'+music_player_url) {
                music_player_window = window.open(music_player_url,'music_player_window','height='+h+',width='+w+',top='+wint+',left='+winl+','+',scrollbars=no');
                music_player_window.focus();
              } else {
                music_player_window.focus();
              }
            }
    }
    else if(music_player_window.closed)
    {
            music_player_window = window.open(music_player_url,'music_player_window','height='+h+',width='+w+',top='+wint+',left='+winl+','+',scrollbars=no');
            music_player_window.focus();
    }
    else
    {
            music_player_window.focus();
    }
}

//Change Image of Soundbutton
function change_soundbutton(color,state) {
    if (document.soundbutton.src.match(/active/)) {
       document.soundbutton.src='images/soundbutton_'+color+'_active_'+state+'.gif';
    } else {
       document.soundbutton.src='images/soundbutton_'+color+'_'+state+'.gif';
    }
}

function getInnerWindowWidth()
{
    var window_width = 0;
    if ( typeof( window.innerWidth ) == 'number' )
       window_width = window.innerWidth;
    else
    if (
         document.documentElement
      && document.documentElement.clientWidth
       )
       window_width = document.documentElement.clientWidth;
    else
    if (
         document.body
      && document.body.clientWidth
       )
       window_width = document.body.clientWidth;

    return window_width;
}

function resizePic()
{
    var int_width = getInnerWindowWidth();
    var window_dimensions = document.viewport.getDimensions();

    // if we are not on startpage, we have to
    // reduce the viewport size by the menu height,
    // because the image will start below the menu.

    if (false == global_on_startpage) {
        window_dimensions['height'] -= 146;
    }

    var image_aspect =  global_int_arr_imagesize[0] / global_int_arr_imagesize[1];
    var window_aspect =  window_dimensions['width'] / window_dimensions['height'];

    if (window_dimensions['width'] / image_aspect >= window_dimensions['height']) {
        document.getElementById("pic").width = window_dimensions['width'];
        document.getElementById("pic").height = window_dimensions['width'] / image_aspect;
    } else {
        document.getElementById("pic").width = window_dimensions['height'] * image_aspect
        document.getElementById("pic").height = window_dimensions['height'];
    }
}

function emailCheck (emailStr) {

/* The following variable tells the rest of the function whether or not
to verify that the address ends in a two-letter country or well-known
TLD.  1 means check it, 0 means don't. */

var checkTLD=1;

/* The following is the list of known TLDs that an e-mail address must end with. */

var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;

/* The following pattern is used to check if the entered e-mail address
fits the user@domain format.  It also is used to separate the username
from the domain. */

var emailPat=/^(.+)@(.+)$/;

/* The following string represents the pattern for matching all special
characters.  We don't want to allow special characters in the address.
These characters include ( ) < > @ , ; : \ " . [ ] */

var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";

/* The following string represents the range of characters allowed in a
username or domainname.  It really states which chars aren't allowed.*/

var validChars="\[^\\s" + specialChars + "\]";

/* The following pattern applies if the "user" is a quoted string (in
which case, there are no rules about which characters are allowed
and which aren't; anything goes).  E.g. "jiminy cricket"@disney.com
is a legal e-mail address. */

var quotedUser="(\"[^\"]*\")";

/* The following pattern applies for domains that are IP addresses,
rather than symbolic names.  E.g. joe@[123.124.233.4] is a legal
e-mail address. NOTE: The square brackets are required. */

var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;

/* The following string represents an atom (basically a series of non-special characters.) */

var atom=validChars + '+';

/* The following string represents one word in the typical username.
For example, in john.doe@somewhere.com, john and doe are words.
Basically, a word is either an atom or quoted string. */

var word="(" + atom + "|" + quotedUser + ")";

// The following pattern describes the structure of the user

var userPat=new RegExp("^" + word + "(\\." + word + ")*$");

/* The following pattern describes the structure of a normal symbolic
domain, as opposed to ipDomainPat, shown above. */

var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");

/* Finally, let's start trying to figure out if the supplied address is valid. */

/* Begin with the coarse pattern to simply break up user@domain into
different pieces that are easy to analyze. */

var matchArray=emailStr.match(emailPat);

if (matchArray==null) {

/* Too many/few @'s or something; basically, this address doesn't
even fit the general mould of a valid e-mail address. */

//alert("Email address seems incorrect (check @ and .'s)");
return false;
}
var user=matchArray[1];
var domain=matchArray[2];

// Start by checking that only basic ASCII characters are in the strings (0-127).

for (i=0; i<user.length; i++) {
if (user.charCodeAt(i)>127) {
//alert("Ths username contains invalid characters.");
return false;
   }
}
for (i=0; i<domain.length; i++) {
if (domain.charCodeAt(i)>127) {
//alert("Ths domain name contains invalid characters.");
return false;
   }
}

// See if "user" is valid

if (user.match(userPat)==null) {

// user is not valid

//alert("The username doesn't seem to be valid.");
return false;
}

/* if the e-mail address is at an IP address (as opposed to a symbolic
host name) make sure the IP address is valid. */

var IPArray=domain.match(ipDomainPat);
if (IPArray!=null) {

// this is an IP address

for (var i=1;i<=4;i++) {
if (IPArray[i]>255) {
//alert("Destination IP address is invalid!");
return false;
   }
}
return true;
}

// Domain is symbolic name.  Check if it's valid.

var atomPat=new RegExp("^" + atom + "$");
var domArr=domain.split(".");
var len=domArr.length;
for (i=0;i<len;i++) {
if (domArr[i].search(atomPat)==-1) {
//alert("The domain name does not seem to be valid.");
return false;
   }
}

/* domain name seems valid, but now make sure that it ends in a
known top-level domain (like com, edu, gov) or a two-letter word,
representing country (uk, nl), and that there's a hostname preceding
the domain or country. */

if (checkTLD && domArr[domArr.length-1].length!=2 &&
domArr[domArr.length-1].search(knownDomsPat)==-1) {
//alert("The address must end in a well-known domain or two letter " + "country.");
return false;
}

// Make sure there's a host name preceding the domain.

if (len<2) {
//alert("This address is missing a hostname!");
return false;
}

// If we've gotten this far, everything's valid!
return true;
}
