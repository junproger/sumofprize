		"use strict"
		const startOutput = Date.now();
				
				function lineOutput() {
					lineInput(line);
					let Prize = undefined;
					Unsort = Unsort.map((item,index) => Number(item));
					//console.log('Unsort is: ' + typeof(Unsort) + ' Length is: ' + Unsort.length + ' Item is: ' + typeof(Unsort[0]) + ' ' + typeof(Unsort[1]));
					const Sorting = Unsort.sort(function(a, b){return a-b}); // sorting array
					console.log('Sorting is: ' + typeof(Sorting) + ' Length is: ' + Sorting.length + ' Item is: ' + typeof(Sorting[0]) + ' ' + typeof(Sorting[1]));
					const Summa = Sorting.reduce((a, b) => a + b, 0); // summ of sorting array
					console.log('Summa' + ' = ' + Summa);
					const Maxima = Math.trunc(Summa/Mm); // or (Summa/Mm) >> 0;
					console.log('Maxima' + ' = ' + Maxima);
					const Ending = Sorting[Nn-1]; // here is Pointer! to calc with Pointer!
					console.log('Ending' + ' = ' + Ending);
					let Shares = undefined;
					let shaLength = undefined;
							
							if (Nn === 0 || Mm === 0 || Summa === 0) {
									Shares = 0;
									Prize = 0;
									console.log('Shares (0) = ' + Shares);
									console.log('Prize (0): ' + Prize);
									return Prize;
							}	if (Mm > Summa || Summa/Mm === 0 || Maxima === 0) {
									Shares = 0;
									Prize = 0;
									console.log('Shares (0) = ' + Shares);
									console.log('Prize (0): ' + Prize);
									return Prize;
							}	if (Mm === Summa || Summa/Mm === 1 || Maxima === 1) {
									Shares = 1;
									Prize = 1;
									console.log('Shares (1) = ' + Shares);
									console.log('Prize (1): ' + Prize);
									return Prize;
							}
							
							if (Mm < Summa && Maxima <= Ending) {
									shaLength = (Maxima.toString().length);
									Shares = Maxima;
									console.log('Shares = ' + Shares);
							} else if (Mm < Summa && Maxima >= Ending) {
									shaLength = (Ending.toString().length);
									Shares = Ending;
									console.log('Shares = ' + Shares);
							}
							
						console.log('Length' + ' = ' + shaLength);
						
						let Step = Shares;
						let Iter = (Nn-1);
						console.log('Iter' + ' = ' + Iter);
						let Tempor = Array(Nn);
						console.log('Tempor.length: ' + Tempor.length);
						console.log(Tempor);
						let Minus = 1;
						console.log('Minus' + ' = ' + Minus);
						let Count = 0;
						console.log('Count' + ' = ' + Count);
						
						console.log('CHECKING START!!!');
						//console.log('Step' + ' = ' + Step);
						checking();
						
						function checking() {
							Tempor = Sorting.map((item) => Math.trunc(item/Step));
							//console.log('Tempor.length: ' + Tempor.length);
							Count = Tempor.reduce((a, b) => a + b, 0);
							//console.log('Count' + ' = ' + Count);
									if (-1 === (shaLength - Minus)) {
									//console.log('Count ' +  Count + ' == ' + ' Mm ' + Mm);
											console.log('(Length - Minus): ' + (shaLength - Minus));
											console.log('MINUS MINUS' + ' === ' + Minus);
											console.log('Step - 1' + ' = ' + (Step - 1));
											Prize = Math.trunc(Step - 1);
											Count = 0;
											return true;
									} else if (Count < Mm ) {
									//console.log('Count ' +  Count + ' << ' + ' Mm ' + Mm);
											Step = Step - 1*(10**(shaLength - Minus));
											//console.log('Step' + ' = ' + Step);
											Prize = undefined;
											Count = 0;
											checking();
									} else if (Count > Mm) {
									//console.log('Count ' +  Count + ' >> ' + ' Mm ' + Mm);
											Step = Step + 1*(10**(shaLength - Minus));
											//console.log('Step' + ' = ' + Step);
											Prize = undefined;
											Minus += 1;
											//console.log('(Length - Minus): ' + (shaLength - Minus));
											//console.log('MINUS MINUS' + ' === ' + Minus);
											Count = 0;
											checking();
									} else if (Count >= Mm) {
									//console.log('Count ' +  Count + ' == ' + ' Mm ' + Mm);
											Step = Step + 1*(10**(shaLength - Minus));
											//console.log('Step' + ' = ' + Step);
											Prize = undefined;
											Minus += 1;
											//console.log('(Length - Minus): ' + (shaLength - Minus));
											//console.log('MINUS MINUS' + ' === ' + Minus);
											Count = 0;
											checking();
									} else if (Count === Mm) {
									//console.log('Count ' +  Count + ' == ' + ' Mm ' + Mm);
											console.log('(Length - Minus): ' + (shaLength - Minus));
											console.log('MINUS MINUS' + ' === ' + Minus);
											console.log('Step' + ' = ' + Step);
											Prize = Math.trunc(Step);
											Count = 0;
											return true;
									} 
							return true;
						}
						
					console.log(Prize);
					return Prize;
				}
				
				console.log(lineOutput());
				
				const stopOutput = Date.now();
				const totalOutputTime = ((stopOutput - startOutput)/1000);
				console.log('The Time of Output: ' + totalOutputTime + ' ' + 'second');