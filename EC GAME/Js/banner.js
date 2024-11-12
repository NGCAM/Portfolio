const resolver = {
    resolve: function resolve(options, callback) {
      // The string to resolve
      const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
      const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
      
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      
      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      };
      
      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;
  
        let iterations = options.iterations;
  
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
  
            // Ensures partialString without the random character as the final state.
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              // Replaces the last character of partialString with a random character
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }
  
            doRandomiserEffect(nextOptions, callback)
          } else if (typeof callback === "function") {
            callback(); 
          }
        }, options.timeout);
      };
      
      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, {partialString: partialString});
  
        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, {offset: offset + 1});
  
          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      };
  
      doResolverEffect(combinedOptions, callback);
    } 
  }
  
  
  const strings = [
    'こんにちは、',
    'ようこそ、G-Zoneへ！',
    'PCゲーム愛好家のための究極のゲームデスティネーションです。',
    //  '我々は、最新のゲームタイトルと独占的な体験を提供し、あなたのゲームライフを豊かにするために全力を尽くしています。',
    '次世代のゲーム体験がここに。','あなたのプレイグラウンドが始まる。',
    // 'NextGen Gaming Hubでは、PCゲームの最先端を追求しています。あなたが求めるあらゆるジャンルのゲームを手に入れることができます。',
    // '豊富なライブラリから、エキサイティングなアクションゲーム、心を揺さぶるストーリー。',
    
    '......'
  ];
  
  let counter = 0;
  
  const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 15,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の','は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
  }
  
  // Callback function when resolve completes
  function callback() {
    setTimeout(() => {
      counter ++;
      
      if (counter >= strings.length) {
        counter = 0;
      }
      
      let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
      resolver.resolve(nextOptions, callback);
    }, 2000);
  }
  
  resolver.resolve(options, callback);
  
document.querySelectorAll(".slider2").forEach((item) => {
  let clone = item.querySelector(".slider2-items2").cloneNode(true);
  clone.classList.add("clone");
  clone.ariaHidden = true;
  item.append(clone);
});

jQuery(function() {
  var shortening_text = $("p.shortened");

  shortening_text.each(function() {
    var txt = $(this).html();
    if (txt.length < 220) return;
    $(this).html(
      txt.slice(0, 220) +
        '<span>... </span><a href="#" class="show">Read more</a>' +
        '<span style="display:none;">' +
        txt.slice(800, txt.length) +
        ' <a href="#" class="less">Close</a></span>'
    );
  });

  $("a.show", shortening_text).click(function(event) {
    event.preventDefault();
    $(this)
      .hide()
      .prev()
      .hide();
    $(this)
      .next()
      .show();
  });

  $("a.less", shortening_text).click(function(event) {
    event.preventDefault();
    $(this)
      .parent()
      .hide()
      .prev()
      .show()
      .prev()
      .show();
  });
});
