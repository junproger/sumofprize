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
						let Divid = 1;
						let Minus = 1;
						let Count = 0;
						let Calc = 0;
						
						function counting(item,divid) {
							if ( item >= divid ) {
							Divid = Math.trunc(item/divid); // or (item/Divid) >> 0;
							//console.log('Divid is: ' + Divid);
								Calc += Divid;
						  //console.log('Calc is: ' + Calc);
							} else if ( item < divid ) {
							//console.log('Divid === 0 ');
									return Calc;
							} else if ( Divid < 1 || Divid === 0) {
									//console.log('Divid === 0 ');
									return Calc;
							} 
						 return Calc;
						}
						
						function checking() {
						if ((shaLength - Minus) === -1) {
													//console.log(shaLength);
													//console.log('MINUS ' + ' = ' + Minus);
													//console.log('(Length - Minus): ' + (shaLength - Minus));
													//console.log((shaLength - Minus));
													//console.log('Count is Null = 0: ' + Count + '!!!!!!' + Mm);
													Step = Step - 1;
													Prize = Step;
													console.log('Prize is Step - 1: ' + Prize);
													return Prize;
						} 
						  for (Iter = (Nn-1); Iter >= 0; Iter--) {
									if ( Divid < 1 || Divid === 0) break;
									counting(Sorting[Iter],Step);
						  }
						  //console.log('Step is: ' + Step);
						  Count = Calc;
						  prizing();
						  return Count;
						}
						
						checking();
						
						function prizing() {
						
							if ( Count < Mm ) {
									//console.log('Count is: ' + Count + '<<' + Mm);
									Prize = undefined;
									//console.log('Prize is: ' + Prize);
									Step = Step - 1*(10**(shaLength - Minus))
									Count = 0;
									Calc = 0;
									checking();
									} else if (Count > Mm) {
									//console.log('Count is: ' + Count + '>>' + Mm);
									Prize = undefined;
									//console.log('Prize is: ' + Prize);
									Step = Step + 1*(10**(shaLength - Minus));
									Minus += 1;
									Count = 0;
									Calc = 0;
									checking();
									} else if ((shaLength - Minus) === 0) {
													//console.log('Count is: ' + Count + '===' + Mm);
													Prize = Step;
													//console.log('Prize is: ' + Prize);
													return Prize;
													}	else if (Count >= Mm) {
														if ((shaLength - Minus) >= 0) {
														//console.log('Count is: ' + Count + '>>' + Mm);
														Prize = undefined;
														//console.log('Prize is: ' + Prize);
														Step = Step + 1*(10**(shaLength - Minus));
														Minus += 1;
														//console.log(shaLength);
														//console.log('MINUS ' + ' = ' + Minus);
														//console.log('(Length - Minus): ' + (shaLength - Minus));
														//console.log((shaLength - Minus));
														Count = 0;
														Calc = 0;
														checking();
													}
									}
							return Prize;
						}
						
					console.log(Prize);
					return Prize;
				}
				
				console.log(lineOutput());
				
				const stopOutput = Date.now();
				const totalOutputTime = ((stopOutput - startOutput)/1000);
				console.log('The Time of Output: ' + totalOutputTime + ' ' + 'second');