let plaintext = [
    'Freeze the blood of your enemies, instantly killing warm-blooded living ',
    'creatures.',
    '',
    'Using intuition, we need to describe all of our various sanities in one ',
    'long string of food.'
].join('\n');

plaintext = plaintext +' ' + `
The creation of Ahab, Melville biographer Leon Howard discovered, followed an observation by Coleridge in his lecture on Hamlet: "one of Shakespeare's modes of creating characters is to conceive any one intellectual or moral faculty in morbid excess, and then to place himself. ... thus mutilated or diseased, under given circumstances".[51] Coleridge's vocabulary is echoed in some phrases that describe Ahab. Ahab seemed to have "what seems a half-wilful over-ruling morbidness at the bottom of his nature", and "all men tragically great", Melville added, "are made so through a certain morbidness; "all mortal greatness is but disease". In addition to this, in Howard's view, the self-references of Ishmael as a "tragic dramatist", and his defense of his choice of a hero who lacked "all outward majestical trappings" is evidence that Melville "consciously thought of his protagonist as a tragic hero of the sort found in Hamlet and King Lear".`;

plaintext = [
    'Is insanity an inevitable part of the gift because of the limitations of human',
    'understanding, or is it simply that it is impossible to be fully human and also',
    'understand the gift?',
    'I fear the fully mad because it seems they went too far and lost all will to accomplish',
    'their goals, but sometimes I wonder if the fully mad are accomplishing their',
    'goals after all, and I simply cannot understand them.'
].join('\n') + plaintext;

plaintext += `
When I had written in my diary and had fortunately replaced the book and pen in my pocket I felt sleepy. The Count’s warning came into my mind, but I took a pleasure in disobeying it. The sense of sleep was upon me, and with it the obstinacy which sleep brings as outrider. The soft moonlight soothed, and the wide expanse without gave a sense of freedom which refreshed me. I determined not to return to-night to the gloom-haunted rooms, but to sleep here, where, of old, ladies had sat and sung and lived sweet lives whilst their gentle breasts were sad for their menfolk away in the midst of remorseless wars. I drew a great couch out of its place near the corner, so that as I lay, I could look at the lovely view to east and south, and unthinking of and uncaring for the dust, composed myself for sleep. I suppose I must have fallen asleep; I hope so, but I fear, for all that followed was startlingly real—so real that now sitting here in the broad, full sunlight of the morning, I cannot in the least believe that it was all sleep.`;

plaintext += 'Entrap your enemy in a world of your own making.';

function translate(text) {
    let tok = text.split(/([a-zA-Z']+)/);
    console.log(tok);

    let result = '';

    let dict = {
        'a': 'n',
        'b': 'e',
        'c': 'f',
        'd': 'g',
        'e': 'h',
        'f': 'i',
        'g': 'j',
        'h': 'k',
        'i': 'l',
        'j': 'm',
        'k': 'n',
        'l': 'o',
        'm': 'p',
        'n': 'a',
        'o': 'r',
        'p': 's',
        'q': 't',
        'r': 'u',
        's': 'g',
        't': 'k',
        'u': 'r',
        'v': 'y',
        'w': 'h',
        'x': 'a',
        'y': 'b',
        'z': 'c'
    };

    while (text.length > 0) {
        let one = text.slice(0, 1), two = text.slice(0, 2), three = text.slice(0, 3);
        let match = dict[three] || dict[two] || dict[one];
        if (match) {
            result += match;
            text = text.slice(match.length);
        } else {
            result += text.slice(0, 1);
            text = text.slice(1);
        }
    }

    result = result.replace(/[bcdfghjklmnpqrstvwxz]{4,}/g, part => part.slice(0, 2) + '\'a' + part.slice(2));

    result = result.replace(/kkh/g, 'yar');
    result = result.replace(/ ri/g, '-og');
    result = result.replace(/oo/g, 'mg');

    result = result.replace(/([aeiouy][bcdfghjklmnpqrstvwxz]+?)'g/g, (_, a) => `${a}-${a}`);

    result = result.replace(/ ([a-z]) ([a-z]{2})/g, (_, a, b) => 'nafl');

    return result;
}

console.log(plaintext);
console.log('---');
console.log(translate(plaintext));
