const pokemon = [{"name":"bulbasaur","stats":{"speed":45,"special-defense":65,"special-attack":65,"defense":49,"attack":49,"hp":45},"moves":[{"id":"13","name":"razor-wind"},{"id":"15","name":"cut"},{"id":"20","name":"bind"},{"id":"22","name":"vine-whip"},{"id":"29","name":"headbutt"},{"id":"33","name":"tackle"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"70","name":"strength"},{"id":"72","name":"mega-drain"},{"id":"75","name":"razor-leaf"},{"id":"76","name":"solar-beam"},{"id":"80","name":"petal-dance"},{"id":"99","name":"rage"},{"id":"124","name":"sludge"},{"id":"130","name":"skull-bash"},{"id":"173","name":"snore"},{"id":"188","name":"sludge-bomb"},{"id":"189","name":"mud-slap"},{"id":"202","name":"giga-drain"},{"id":"210","name":"fury-cutter"},{"id":"237","name":"hidden-power"},{"id":"249","name":"rock-smash"},{"id":"263","name":"facade"},{"id":"282","name":"knock-off"},{"id":"290","name":"secret-power"},{"id":"331","name":"bullet-seed"},{"id":"345","name":"magical-leaf"},{"id":"402","name":"seed-bomb"},{"id":"412","name":"energy-ball"},{"id":"437","name":"leaf-storm"},{"id":"438","name":"power-whip"},{"id":"474","name":"venoshock"},{"id":"496","name":"round"},{"id":"497","name":"echoed-voice"},{"id":"520","name":"grass-pledge"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","types":["poison","grass"]},{"name":"ivysaur","stats":{"speed":60,"special-defense":80,"special-attack":80,"defense":63,"attack":62,"hp":60},"moves":[{"id":"15","name":"cut"},{"id":"20","name":"bind"},{"id":"22","name":"vine-whip"},{"id":"29","name":"headbutt"},{"id":"33","name":"tackle"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"70","name":"strength"},{"id":"72","name":"mega-drain"},{"id":"75","name":"razor-leaf"},{"id":"76","name":"solar-beam"},{"id":"99","name":"rage"},{"id":"173","name":"snore"},{"id":"188","name":"sludge-bomb"},{"id":"189","name":"mud-slap"},{"id":"202","name":"giga-drain"},{"id":"210","name":"fury-cutter"},{"id":"237","name":"hidden-power"},{"id":"249","name":"rock-smash"},{"id":"263","name":"facade"},{"id":"282","name":"knock-off"},{"id":"290","name":"secret-power"},{"id":"331","name":"bullet-seed"},{"id":"402","name":"seed-bomb"},{"id":"412","name":"energy-ball"},{"id":"474","name":"venoshock"},{"id":"496","name":"round"},{"id":"497","name":"echoed-voice"},{"id":"520","name":"grass-pledge"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png","types":["poison","grass"]},{"name":"venusaur","stats":{"speed":80,"special-defense":100,"special-attack":100,"defense":83,"attack":82,"hp":80},"moves":[{"id":"15","name":"cut"},{"id":"20","name":"bind"},{"id":"22","name":"vine-whip"},{"id":"29","name":"headbutt"},{"id":"33","name":"tackle"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"63","name":"hyper-beam"},{"id":"70","name":"strength"},{"id":"72","name":"mega-drain"},{"id":"75","name":"razor-leaf"},{"id":"76","name":"solar-beam"},{"id":"80","name":"petal-dance"},{"id":"89","name":"earthquake"},{"id":"99","name":"rage"},{"id":"173","name":"snore"},{"id":"188","name":"sludge-bomb"},{"id":"189","name":"mud-slap"},{"id":"200","name":"outrage"},{"id":"202","name":"giga-drain"},{"id":"210","name":"fury-cutter"},{"id":"237","name":"hidden-power"},{"id":"249","name":"rock-smash"},{"id":"263","name":"facade"},{"id":"282","name":"knock-off"},{"id":"290","name":"secret-power"},{"id":"331","name":"bullet-seed"},{"id":"338","name":"frenzy-plant"},{"id":"402","name":"seed-bomb"},{"id":"412","name":"energy-ball"},{"id":"416","name":"giga-impact"},{"id":"431","name":"rock-climb"},{"id":"474","name":"venoshock"},{"id":"496","name":"round"},{"id":"497","name":"echoed-voice"},{"id":"520","name":"grass-pledge"},{"id":"523","name":"bulldoze"},{"id":"572","name":"petal-blizzard"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png","types":["poison","grass"]},{"name":"charmander","stats":{"speed":65,"special-defense":50,"special-attack":60,"defense":43,"attack":52,"hp":39},"moves":[{"id":"5","name":"mega-punch"},{"id":"7","name":"fire-punch"},{"id":"9","name":"thunder-punch"},{"id":"10","name":"scratch"},{"id":"15","name":"cut"},{"id":"25","name":"mega-kick"},{"id":"29","name":"headbutt"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"44","name":"bite"},{"id":"52","name":"ember"},{"id":"53","name":"flamethrower"},{"id":"66","name":"submission"},{"id":"70","name":"strength"},{"id":"83","name":"fire-spin"},{"id":"91","name":"dig"},{"id":"99","name":"rage"},{"id":"126","name":"fire-blast"},{"id":"129","name":"swift"},{"id":"130","name":"skull-bash"},{"id":"157","name":"rock-slide"},{"id":"163","name":"slash"},{"id":"173","name":"snore"},{"id":"189","name":"mud-slap"},{"id":"200","name":"outrage"},{"id":"210","name":"fury-cutter"},{"id":"223","name":"dynamic-punch"},{"id":"225","name":"dragon-breath"},{"id":"231","name":"iron-tail"},{"id":"232","name":"metal-claw"},{"id":"237","name":"hidden-power"},{"id":"242","name":"crunch"},{"id":"246","name":"ancient-power"},{"id":"249","name":"rock-smash"},{"id":"257","name":"heat-wave"},{"id":"263","name":"facade"},{"id":"264","name":"focus-punch"},{"id":"280","name":"brick-break"},{"id":"290","name":"secret-power"},{"id":"314","name":"air-cutter"},{"id":"315","name":"overheat"},{"id":"317","name":"rock-tomb"},{"id":"332","name":"aerial-ace"},{"id":"337","name":"dragon-claw"},{"id":"394","name":"flare-blitz"},{"id":"406","name":"dragon-pulse"},{"id":"407","name":"dragon-rush"},{"id":"421","name":"shadow-claw"},{"id":"424","name":"fire-fang"},{"id":"481","name":"flame-burst"},{"id":"488","name":"flame-charge"},{"id":"496","name":"round"},{"id":"497","name":"echoed-voice"},{"id":"510","name":"incinerate"},{"id":"517","name":"inferno"},{"id":"519","name":"fire-pledge"},{"id":"612","name":"power-up-punch"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png","types":["fire"]},{"name":"charmeleon","stats":{"speed":80,"special-defense":65,"special-attack":80,"defense":58,"attack":64,"hp":58},"moves":[{"id":"5","name":"mega-punch"},{"id":"7","name":"fire-punch"},{"id":"9","name":"thunder-punch"},{"id":"10","name":"scratch"},{"id":"15","name":"cut"},{"id":"25","name":"mega-kick"},{"id":"29","name":"headbutt"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"52","name":"ember"},{"id":"53","name":"flamethrower"},{"id":"66","name":"submission"},{"id":"70","name":"strength"},{"id":"83","name":"fire-spin"},{"id":"91","name":"dig"},{"id":"99","name":"rage"},{"id":"126","name":"fire-blast"},{"id":"129","name":"swift"},{"id":"130","name":"skull-bash"},{"id":"157","name":"rock-slide"},{"id":"163","name":"slash"},{"id":"173","name":"snore"},{"id":"189","name":"mud-slap"},{"id":"200","name":"outrage"},{"id":"210","name":"fury-cutter"},{"id":"223","name":"dynamic-punch"},{"id":"225","name":"dragon-breath"},{"id":"231","name":"iron-tail"},{"id":"232","name":"metal-claw"},{"id":"237","name":"hidden-power"},{"id":"249","name":"rock-smash"},{"id":"257","name":"heat-wave"},{"id":"263","name":"facade"},{"id":"264","name":"focus-punch"},{"id":"280","name":"brick-break"},{"id":"290","name":"secret-power"},{"id":"315","name":"overheat"},{"id":"317","name":"rock-tomb"},{"id":"332","name":"aerial-ace"},{"id":"337","name":"dragon-claw"},{"id":"406","name":"dragon-pulse"},{"id":"421","name":"shadow-claw"},{"id":"424","name":"fire-fang"},{"id":"481","name":"flame-burst"},{"id":"488","name":"flame-charge"},{"id":"496","name":"round"},{"id":"497","name":"echoed-voice"},{"id":"510","name":"incinerate"},{"id":"517","name":"inferno"},{"id":"519","name":"fire-pledge"},{"id":"612","name":"power-up-punch"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png","types":["fire"]},{"name":"charizard","stats":{"speed":100,"special-defense":85,"special-attack":109,"defense":78,"attack":84,"hp":78},"moves":[{"id":"5","name":"mega-punch"},{"id":"7","name":"fire-punch"},{"id":"9","name":"thunder-punch"},{"id":"10","name":"scratch"},{"id":"15","name":"cut"},{"id":"17","name":"wing-attack"},{"id":"19","name":"fly"},{"id":"25","name":"mega-kick"},{"id":"29","name":"headbutt"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"52","name":"ember"},{"id":"53","name":"flamethrower"},{"id":"63","name":"hyper-beam"},{"id":"66","name":"submission"},{"id":"70","name":"strength"},{"id":"76","name":"solar-beam"},{"id":"83","name":"fire-spin"},{"id":"89","name":"earthquake"},{"id":"91","name":"dig"},{"id":"99","name":"rage"},{"id":"126","name":"fire-blast"},{"id":"129","name":"swift"},{"id":"130","name":"skull-bash"},{"id":"157","name":"rock-slide"},{"id":"163","name":"slash"},{"id":"173","name":"snore"},{"id":"189","name":"mud-slap"},{"id":"200","name":"outrage"},{"id":"210","name":"fury-cutter"},{"id":"211","name":"steel-wing"},{"id":"223","name":"dynamic-punch"},{"id":"225","name":"dragon-breath"},{"id":"231","name":"iron-tail"},{"id":"232","name":"metal-claw"},{"id":"237","name":"hidden-power"},{"id":"239","name":"twister"},{"id":"249","name":"rock-smash"},{"id":"257","name":"heat-wave"},{"id":"263","name":"facade"},{"id":"264","name":"focus-punch"},{"id":"280","name":"brick-break"},{"id":"290","name":"secret-power"},{"id":"307","name":"blast-burn"},{"id":"314","name":"air-cutter"},{"id":"315","name":"overheat"},{"id":"317","name":"rock-tomb"},{"id":"332","name":"aerial-ace"},{"id":"337","name":"dragon-claw"},{"id":"394","name":"flare-blitz"},{"id":"403","name":"air-slash"},{"id":"406","name":"dragon-pulse"},{"id":"411","name":"focus-blast"},{"id":"416","name":"giga-impact"},{"id":"421","name":"shadow-claw"},{"id":"424","name":"fire-fang"},{"id":"466","name":"ominous-wind"},{"id":"481","name":"flame-burst"},{"id":"488","name":"flame-charge"},{"id":"496","name":"round"},{"id":"497","name":"echoed-voice"},{"id":"507","name":"sky-drop"},{"id":"510","name":"incinerate"},{"id":"517","name":"inferno"},{"id":"519","name":"fire-pledge"},{"id":"523","name":"bulldoze"},{"id":"525","name":"dragon-tail"},{"id":"612","name":"power-up-punch"},{"id":"693","name":"brutal-swing"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png","types":["flying","fire"]},{"name":"squirtle","stats":{"speed":43,"special-defense":64,"special-attack":50,"defense":65,"attack":48,"hp":44},"moves":[{"id":"5","name":"mega-punch"},{"id":"8","name":"ice-punch"},{"id":"25","name":"mega-kick"},{"id":"29","name":"headbutt"},{"id":"33","name":"tackle"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"44","name":"bite"},{"id":"55","name":"water-gun"},{"id":"56","name":"hydro-pump"},{"id":"57","name":"surf"},{"id":"58","name":"ice-beam"},{"id":"59","name":"blizzard"},{"id":"61","name":"bubble-beam"},{"id":"66","name":"submission"},{"id":"70","name":"strength"},{"id":"91","name":"dig"},{"id":"93","name":"confusion"},{"id":"99","name":"rage"},{"id":"127","name":"waterfall"},{"id":"130","name":"skull-bash"},{"id":"145","name":"bubble"},{"id":"173","name":"snore"},{"id":"189","name":"mud-slap"},{"id":"196","name":"icy-wind"},{"id":"205","name":"rollout"},{"id":"223","name":"dynamic-punch"},{"id":"229","name":"rapid-spin"},{"id":"231","name":"iron-tail"},{"id":"237","name":"hidden-power"},{"id":"249","name":"rock-smash"},{"id":"250","name":"whirlpool"},{"id":"252","name":"fake-out"},{"id":"263","name":"facade"},{"id":"264","name":"focus-punch"},{"id":"280","name":"brick-break"},{"id":"290","name":"secret-power"},{"id":"291","name":"dive"},{"id":"317","name":"rock-tomb"},{"id":"323","name":"water-spout"},{"id":"330","name":"muddy-water"},{"id":"352","name":"water-pulse"},{"id":"362","name":"brine"},{"id":"396","name":"aura-sphere"},{"id":"401","name":"aqua-tail"},{"id":"406","name":"dragon-pulse"},{"id":"428","name":"zen-headbutt"},{"id":"453","name":"aqua-jet"},{"id":"496","name":"round"},{"id":"503","name":"scald"},{"id":"518","name":"water-pledge"},{"id":"612","name":"power-up-punch"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","types":["water"]},{"name":"wartortle","stats":{"speed":58,"special-defense":80,"special-attack":65,"defense":80,"attack":63,"hp":59},"moves":[{"id":"5","name":"mega-punch"},{"id":"8","name":"ice-punch"},{"id":"25","name":"mega-kick"},{"id":"29","name":"headbutt"},{"id":"33","name":"tackle"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"44","name":"bite"},{"id":"55","name":"water-gun"},{"id":"56","name":"hydro-pump"},{"id":"57","name":"surf"},{"id":"58","name":"ice-beam"},{"id":"59","name":"blizzard"},{"id":"61","name":"bubble-beam"},{"id":"66","name":"submission"},{"id":"70","name":"strength"},{"id":"91","name":"dig"},{"id":"99","name":"rage"},{"id":"127","name":"waterfall"},{"id":"130","name":"skull-bash"},{"id":"145","name":"bubble"},{"id":"173","name":"snore"},{"id":"189","name":"mud-slap"},{"id":"196","name":"icy-wind"},{"id":"205","name":"rollout"},{"id":"223","name":"dynamic-punch"},{"id":"229","name":"rapid-spin"},{"id":"231","name":"iron-tail"},{"id":"237","name":"hidden-power"},{"id":"249","name":"rock-smash"},{"id":"250","name":"whirlpool"},{"id":"263","name":"facade"},{"id":"264","name":"focus-punch"},{"id":"280","name":"brick-break"},{"id":"290","name":"secret-power"},{"id":"291","name":"dive"},{"id":"317","name":"rock-tomb"},{"id":"352","name":"water-pulse"},{"id":"362","name":"brine"},{"id":"401","name":"aqua-tail"},{"id":"406","name":"dragon-pulse"},{"id":"428","name":"zen-headbutt"},{"id":"496","name":"round"},{"id":"503","name":"scald"},{"id":"518","name":"water-pledge"},{"id":"612","name":"power-up-punch"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png","types":["water"]},{"name":"blastoise","stats":{"speed":78,"special-defense":105,"special-attack":85,"defense":100,"attack":83,"hp":79},"moves":[{"id":"5","name":"mega-punch"},{"id":"8","name":"ice-punch"},{"id":"25","name":"mega-kick"},{"id":"29","name":"headbutt"},{"id":"33","name":"tackle"},{"id":"34","name":"body-slam"},{"id":"36","name":"take-down"},{"id":"38","name":"double-edge"},{"id":"44","name":"bite"},{"id":"55","name":"water-gun"},{"id":"56","name":"hydro-pump"},{"id":"57","name":"surf"},{"id":"58","name":"ice-beam"},{"id":"59","name":"blizzard"},{"id":"61","name":"bubble-beam"},{"id":"63","name":"hyper-beam"},{"id":"66","name":"submission"},{"id":"70","name":"strength"},{"id":"89","name":"earthquake"},{"id":"91","name":"dig"},{"id":"99","name":"rage"},{"id":"127","name":"waterfall"},{"id":"130","name":"skull-bash"},{"id":"145","name":"bubble"},{"id":"157","name":"rock-slide"},{"id":"173","name":"snore"},{"id":"189","name":"mud-slap"},{"id":"196","name":"icy-wind"},{"id":"200","name":"outrage"},{"id":"205","name":"rollout"},{"id":"223","name":"dynamic-punch"},{"id":"229","name":"rapid-spin"},{"id":"231","name":"iron-tail"},{"id":"237","name":"hidden-power"},{"id":"249","name":"rock-smash"},{"id":"250","name":"whirlpool"},{"id":"263","name":"facade"},{"id":"264","name":"focus-punch"},{"id":"280","name":"brick-break"},{"id":"290","name":"secret-power"},{"id":"291","name":"dive"},{"id":"308","name":"hydro-cannon"},{"id":"317","name":"rock-tomb"},{"id":"324","name":"signal-beam"},{"id":"352","name":"water-pulse"},{"id":"362","name":"brine"},{"id":"399","name":"dark-pulse"},{"id":"401","name":"aqua-tail"},{"id":"406","name":"dragon-pulse"},{"id":"411","name":"focus-blast"},{"id":"416","name":"giga-impact"},{"id":"419","name":"avalanche"},{"id":"428","name":"zen-headbutt"},{"id":"430","name":"flash-cannon"},{"id":"431","name":"rock-climb"},{"id":"479","name":"smack-down"},{"id":"496","name":"round"},{"id":"503","name":"scald"},{"id":"518","name":"water-pledge"},{"id":"523","name":"bulldoze"},{"id":"525","name":"dragon-tail"},{"id":"612","name":"power-up-punch"}],"sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png","types":["water"]}];

module.exports = pokemon;