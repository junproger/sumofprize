		"use strict"
		const startInput = Date.now();
		
		let lineNum = 0;
		let line = undefined;
		let Start = [];
		//console.log('Start: ' + typeof(Start) + ' ' + Start.length);
		let Nn = 1;
		let Mm = 1;
		let Unsort = [];
		//console.log('Unsort: ' + typeof(Unsort) + ' ' + Unsort.length);

				function lineFirst(line) {
						lineNum = 0;
						line = undefined;
						//console.log('lineNum' + ' = ' + lineNum);
						let first1 = (0 + (Math.floor(Math.random()*111111)));
						let first2 = (0 + (Math.floor(Math.random()*111111111)));
						line = (first1 + ' ' + first2).toString();
						//console.log('Line: ' + line + ' ' + typeof(line));
				return line;
				}
				
				// lineFirst(line);
				
				function lineSecond(line) {
						let CnArray = 0;
						CnArray = (0 + Math.floor(Math.random()*111111111111));
						line = CnArray.toString();
						// console.log(line + ' ' + typeof(line));
						// console.log('lineNum' + ' = ' + lineNum);
						lineNum += 1;
				return line;
				}
				
				// lineSecond(line);
				
				function lineThird(line) {
						if (lineNum === 0) {
						Start = Array(2);
						Start = lineFirst(line).split(' ');
						console.log('Start is: ' + Start + ' ' + typeof(Start) + ' Length is: ' + Start.length + ' Item is: ' + typeof(Start[0]) + ' ' + typeof(Start[1]));
						Nn = Number(Start[0]); // same Nn.length
						console.log('Nn' + ' = ' + Nn + ' ' + typeof(Nn));
						Mm = Number(Start[1]); // same Mm.length
						console.log('Mm' + ' = ' + Mm + ' ' + typeof(Mm));
						Unsort = Array(Nn);
						//console.log('Unsort: ' + typeof(Unsort) + ' ' + Unsort.length);
						} else {
						//console.log('lineNum' + ' = ' + lineNum);
						return false;
						}
				//console.log('lineNum' + ' = ' + lineNum);
				return line;
				}
				
				// lineThird(line);
				
				function lineInput(line) {
						lineThird(line);
						for (let i=0; i<Nn; i++) {
								if (lineNum < Nn) {
								Unsort[i] = (lineSecond(line));
								} else {
								//console.log('lineNum' + ' = ' + lineNum);
								return false;
								}
						}
						//console.log('Unsort[0]: ' + Unsort[0]);
						if (lineNum === Nn) {
						//console.log('lineNum' + ' = ' + lineNum);
						//console.log('Unsort[Nn-1]: ' + Unsort[Nn-1]);
						return false;
						}
				return line;
				}
				
				// lineInput(line);
				
				const stopInput = Date.now();
				const totalInputTime = ((stopInput - startInput)/1000);
				console.log('The Time of Input: ' + totalInputTime + ' second');