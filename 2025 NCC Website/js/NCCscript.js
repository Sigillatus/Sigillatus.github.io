/*  NCCscript.js  JavaScript file - Scriptus Web Design
� 2014 Scott Stringer for North Canterbury Chess www.northcanterburychess.nz */


// quote counter
var invoke_index = true;

// Script to randomly show Quote of the Day
function Show_Quote() {

    quotes = [];
    authors = [];

    quotes[0] = "I love all positions. Give me a difficult positional game, I will play it. Give me a bad position, I will defend it.";
    authors[0] = " Hein Donner, 1950.";

    quotes[1] = "The process of rating players can be compared to the measurement of the position of a cork bobbing up and down on the surface of agitated water with a yard stick tied to a rope and which is swaying in the wind.";
    authors[1] = "Arpad Elo, Chess Life, 1962.";

    quotes[2] = "The fact that the 7 hours time control allows us to play a great deep game is not of great importance for mass-media.";
    authors[2] = "Alexei Shirov, 2000";

    quotes[3] = "In blitz, the knight is stronger than the bishop.";
    authors[3] = "Vlastimil Hort";

    quotes[4] = "Chess is so inspiring that I do not believe a good player is capable of having an evil thought during the game.";
    authors[4] = "Wilhelm Steinitz, 1896";

    quotes[5] = "Dazzling combinations are for the many, shifting wood is for the few.";
    authors[5] = "Georg Kieninger, 1950";

    quotes[6] = "We like to think.";
    authors[6] = "Gary Kasparov, when asked why he and Karpov get into time trouble";

    quotes[7] = "When you absolutely don't know what to do anymore, it is time to panic.";
    authors[7] = "John van der Wiel";

    quotes[8] = "Check. You never know, it might be mate.";
    authors[8] = "Arie Nijman, 2012";

    quotes[9] = "It's a legal move.";
    authors[9] = "Arie Nijman, 2012";

    quotes[10] = "It's over.  Finished.  Kaput.";
    authors[10] = "Arie Nijman 2013";

    quotes[11] = "Checkers is for tramps.";
    authors[11] = "Paul Morphy";

    quotes[12] = "Yes, I have played a blitz game once. It was on a train, in 1929.";
    authors[12] = "Mikhail Botvinnik, 1989";

    quotes[13] = "The pawns are the soul of chess.";
    authors[13] = "Philidor";

    quotes[14] = "I won't play with you anymore. You have insulted my friend.";
    authors[14] = "Miguel Najdorf, when an opponent cursed himself for a blunder";

    quotes[15] = "It is always better to sacrifice your opponent's men.";
    authors[15] = "Savielly Tartakower";

    quotes[16] = "Nowadays, when you're not a grandmaster at 14, you can forget about it.";
    authors[16] = "Anand Viswanathan";

    quotes[17] = "The blunders are all there on the board, waiting to be made.";
    authors[17] = "Tartakover";

    quotes[18] = "The beauty of a move lies not in its appearance but in the thought behind it.";
    authors[18] = "Aaron Nimzowitsch";

    quotes[19] = "The good thing in chess is that very often the best moves are the most beautiful ones.";
    authors[19] = "Boris Gelfand";

    quotes[20] = "Most gods throw dice, but Fate plays chess, and you don't find out til too late that he's been playing with two queens all along.";
    authors[20] = "Terry Pratchett";

    quotes[21] = "People are governed with the head; kindness of heart is little use in chess.";
    authors[21] = "Nicolas Chamfort";

    quotes[22] = "A woman can beat any man; it's difficult to imagine another kind of sport where a woman can beat a man. That's why I like chess.";
    authors[22] = "Alexandra Kosteniuk";

    quotes[23] = "Chess is the gymnasium of the mind.";
    authors[23] = "Adolf Anderssen";

    quotes[24] = "Chess, like mathematics and music, is a nursery for child prodigies.";
    authors[24] = "Jamie Murphy";

    quotes[25] = "Chess is an infinitely complex game, which one can play in infinitely numerous and varied ways.";
    authors[25] = "Vladimir Kramnik";

    quotes[26] = "Chess is ruthless: you've got to be prepared to kill people.";
    authors[26] = "Nigel Short";

    quotes[27] = "When you see a good move, look for a better one.";
    authors[27] = "Emanuel Lasker";

    quotes[28] = "The Pin is mightier than the sword.";
    authors[28] = "Fred Reinfeld";

    quotes[29] = "We cannot resist the fascination of sacrifice, since a passion for sacrifices is part of a Chessplayer's nature.";
    authors[29] = "Rudolf Spielman";

    quotes[30] = "A win by an unsound combination, however showy, fills me with artistic horror.";
    authors[30] = "Wilhelm Steinitz";

    quotes[31] = "Modern Chess is too much concerned with things like Pawn structure. Forget it, Checkmate ends the game.";
    authors[31] = "Nigel Short";

    quotes[32] = "Before the endgame the Gods have placed the middlegame.";
    authors[32] = "Siegbert Tarrasch";

    if (invoke_index) {
        //calculate a random index
        index = Math.floor(Math.random() * quotes.length);

        //display the quotation
        document.write("<q>" + quotes[index] + "</q>");
        document.write("<attrib>" + "~ " + authors[index] + "</attrib>" + "<br />&nbsp;");
    }
    invoke_index = false;
}
// End




// Script to load the Google Feeds API and display the latest posts from Chessexpress.blogspot.co.nz
// This script is loaded from the Google API server and will not work on a local file system

    //google.load("feeds", "1");

    function initialize() {
        var feed = new google.feeds.Feed("http://chessexpress.blogspot.com/feeds/posts/default", {
            api_key: 'nfjngcaj1cuat1zdder7bo3a8tabenatyyyz9tdj',
            count: 6,
            order_by: 'pubDate',
            order_dir: 'desc'
        });
        feed.load(function (result) {
            if (!result.error) {
                var container = document.getElementById("feedcontent");
                container.innerHTML = "<h4>Chessexpress.blogspot.co.nz</h4>";
                for (var i = 0; i < result.feed.entries.length; i++) {
                    var entry = result.feed.entries[i];
                    var div = document.createElement("div");
                    //div.appendChild(document.createTextNode(entry.title));
                    div.innerHTML = '<p><a href="' + entry.link + '" >' + entry.title + '</a> - ' +
                        text_truncate(entry.content, 120, "&hellip;") +
                        '<a href="' + entry.link + '" >read more&hellip;</a></p>';
                    container.appendChild(div);
                }
            }
        });
    }
    google.setOnLoadCallback(initialize);


    text_truncate = function (str, length, ending) {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };

// Function to load and display RSS feeds
function loadRSSFeed() {
    const feedURL = "https://lichess.org/blog.rss";
    const container = document.getElementById('feedContent');

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedURL)}`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.items.slice(0, 5).forEach(item => { // Show only first 5 items
                const date = new Date(item.pubDate).toLocaleDateString();
                html += `<div class="feed-item">
                    <a href="${item.link}" target="_blank">${item.title}</a>
                    <span class="feed-date">${date}</span>
                </div>`;
            });
            container.innerHTML = html;
        })
        .catch(error => {
            container.innerHTML = 'Unable to load chess news...';
            console.error('Error loading RSS feed:', error);
        });
}

