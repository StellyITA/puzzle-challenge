export function sudokuCollection() {

	let vals = [1,2,3,4,5,6,7,8,9];
	let a = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let b = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let c = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let d = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let e = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let f = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let g = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let h = vals.splice(Math.floor(Math.random() * vals.length),1)[0];
	let i = vals.pop();

	const puzzles = {
		easy: [
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,e,i,c,g,a,f,d,b],[g,f,d,i,b,h,a,e,c],
					[f,i,d,c,a,e,h,g,b],[g,b,e,i,f,h,d,a,c],[h,c,a,d,g,b,f,i,e],
					[e,d,h,i,c,a,b,f,g],[b,i,f,e,h,g,a,c,d],[c,a,g,b,d,f,e,h,i]
				],
				// 52
				puzzle: [
					["","",c,d,e,"","","",""],["","",i,"","",a,f,"",""],[g,"","","","",h,"","",""],
					["","","","","",e,h,g,""],["","","",i,"","",d,a,c],["","","",d,g,b,f,"",""],
					["",d,"",i,c,"",b,"",""],["",i,"",e,"",g,"","",""],["",a,"","","",f,"",h,""]
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[e,g,h,c,i,a,f,b,d],[f,d,i,h,b,g,a,e,c],
					[f,d,b,h,g,e,i,c,a],[g,a,c,i,d,b,h,f,e],[i,h,e,c,a,f,d,g,b],
					[b,f,h,e,i,g,c,a,d],[a,c,g,d,h,f,b,e,i],[e,i,d,b,c,a,g,f,h]
				],
				// 48
				puzzle: [
					['',b,'',d,'','',g,h,''],['','',h,c,i,'','',b,''],['','',i,h,b,'',a,e,''],
					['',d,b,h,'','','','',a],['','','','','',b,'',f,e],[i,h,'','','','',d,'',''],
					[b,'',h,'',i,'','','',''],[a,'',g,d,'','',b,'',''],['',i,'','','','','',f,h]
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[e,g,h,c,i,a,f,b,d],[f,d,i,h,b,g,a,e,c],
					[f,d,b,h,g,e,i,c,a],[g,a,c,i,d,b,h,f,e],[i,h,e,c,a,f,d,g,b],
					[b,f,h,e,i,g,c,a,d],[a,c,g,d,h,f,b,e,i],[e,i,d,b,c,a,g,f,h]
				],
				// 47
				puzzle: [
					['','','',d,e,f,'','',i],['','','',c,'','',f,b,d],['','',i,h,b,'',a,e,''],
					['','',b,h,'','',i,c,''],[g,a,'',i,'','','','',e],['',h,'',c,'','','','',''],
					[b,'',h,'',i,g,c,'',''],[a,'',g,'','','','','',i],['',i,d,'','','','',f,'']
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[g,h,d,b,c,i,a,e,f],[e,f,i,h,g,a,d,c,b],
					[b,c,e,f,d,g,i,a,h],[i,d,a,h,b,c,f,g,e],[f,h,g,i,a,e,c,b,d],
					[e,g,d,h,f,a,c,i,b],[c,f,b,d,i,g,e,a,h],[a,i,h,b,e,c,g,d,f]
				],
				// 49
				puzzle: [
					["","","","",e,f,g,h,""],["","",d,b,"","",a,e,""],["","",i,h,"",a,d,"",b],
					[b,c,"",f,d,"","","",""],[i,"",a,h,"","",f,"",""],[f,"",g,"",a,"","","",""],
					["","",d,"",f,"",c,"",""],["",f,"","","",g,"",a,h],["","","","",e,"","","",""]
				]
			}
		],
		medium: [
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[g,h,d,b,c,i,a,e,f],[e,f,i,h,g,a,d,c,b],
					[b,c,e,f,d,g,i,a,h],[i,d,a,h,b,c,f,g,e],[f,h,g,i,a,e,c,b,d],
					[e,g,d,h,f,a,c,i,b],[c,f,b,d,i,g,e,a,h],[a,i,h,b,e,c,g,d,f]
				],
				// 53
				puzzle: [
					[a,"","","",e,"",g,"",""],["",h,d,"","",i,"",e,""],["",f,i,"",g,a,"","",""],
					["",c,"","",d,"","","",h],["","","","","","",f,g,""],["","","",i,"",e,c,"",""],
					["","","","","",a,c,i,""],[c,"","",d,"","","","",""],["","",h,b,e,"","","",f]
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,g,f,a,i,c,d,e,b],[d,i,e,b,h,g,a,c,f],
					[e,d,b,h,f,g,c,i,a],[f,c,i,b,a,e,g,d,h],[g,a,h,i,d,c,f,e,b],
					[f,a,d,b,c,e,i,g,h],[e,h,g,i,f,a,c,b,d],[c,b,i,h,g,d,e,f,a]
				],
				// 52
				puzzle: [
					['','',c,d,'','','',h,i],['','','',a,i,'',d,e,''],['','',e,b,h,g,'',c,''],
					[e,'','','',f,'','','',a],['','','','','','',g,d,''],['','','',i,d,c,'','',''],
					['',a,'','',c,'','','',''],['','',g,'','',a,c,'',''],['','',i,h,'','','',f,'']
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,e,i,c,g,a,f,d,b],[g,f,d,i,b,h,a,e,c],
					[f,i,d,c,a,e,h,g,b],[g,b,e,i,f,h,d,a,c],[h,c,a,d,g,b,f,i,e],
					[e,d,h,i,c,a,b,f,g],[b,i,f,e,h,g,a,c,d],[c,a,g,b,d,f,e,h,i]
				],
				// 51
				puzzle: [
					['','','','',e,f,g,'',i],['','','',c,g,'','',d,b],['','','','',b,h,'',e,c],
					['',i,'',c,'','',h,'',''],['','',e,i,'','','',a,''],['','','',d,g,b,f,'',''],
					['',d,'','',c,'',b,'',''],['','','',e,'',g,a,'',''],[c,'','','','',f,'','','']
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,g,f,a,i,c,d,e,b],[d,i,e,b,h,g,a,c,f],
					[e,d,b,h,f,g,c,i,a],[f,c,i,b,a,e,g,d,h],[g,a,h,i,d,c,f,e,b],
					[f,a,d,b,c,e,i,g,h],[e,h,g,i,f,a,c,b,d],[c,b,i,h,g,d,e,f,a]
				],
				// 50
				puzzle: [
					[a,b,"","",e,"","","",i],["","",f,"",i,c,"","",b],["","",e,"",h,g,a,"",""],
					["","","",h,f,g,c,"",""],["","","","",a,"",g,"",h],["","","",i,d,"",f,"",b],
					[f,a,"","","",e,"","",""],["","","","",f,"",c,"",d],["",b,i,"","","","","",""]
				]
			}
		],
		hard: [
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[e,g,h,c,i,a,f,b,d],[f,d,i,h,b,g,a,e,c],
					[f,d,b,h,g,e,i,c,a],[g,a,c,i,d,b,h,f,e],[i,h,e,c,a,f,d,g,b],
					[b,f,h,e,i,g,c,a,d],[a,c,g,d,h,f,b,e,i],[e,i,d,b,c,a,g,f,h]
				],
				// 55
				puzzle: [
					['','',c,'',e,'','','',''],['','','','','',a,f,'',d],['',d,'','','',g,'','',c],
					[f,'',b,'',g,'','','',''],['','','',i,'',b,h,'',''],['',h,'','',a,'',d,'',''],
					[b,'',h,'','','','',a,''],[a,'','','',h,'',b,e,''],['','','','','',a,'',f,'']
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,e,i,c,g,a,f,d,b],[g,f,d,i,b,h,a,e,c],
					[f,i,d,c,a,e,h,g,b],[g,b,e,i,f,h,d,a,c],[h,c,a,d,g,b,f,i,e],
					[e,d,h,i,c,a,b,f,g],[b,i,f,e,h,g,a,c,d],[c,a,g,b,d,f,e,h,i]
				],
				// 54
				puzzle: [
					['','','','','','','',h,''],['','','',c,g,'','',d,b],['',f,'',i,'','',a,'',c],
					[f,'','',c,a,'','','',''],['','',e,i,'','',d,'',''],[h,'','',d,'',b,'','',''],
					['',d,'','',c,a,'','',''],[b,i,'',e,'','','','',''],['','',g,b,d,'','','','']
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,e,i,c,g,a,f,d,b],[g,f,d,i,b,h,a,e,c],
					[f,i,d,c,a,e,h,g,b],[g,b,e,i,f,h,d,a,c],[h,c,a,d,g,b,f,i,e],
					[e,d,h,i,c,a,b,f,g],[b,i,f,e,h,g,a,c,d],[c,a,g,b,d,f,e,h,i]
				],
				// 56
				puzzle: [
					['','','','',e,'',g,'',i],['','','',c,'',a,f,'',b],['','','','','','','',e,c],
					[f,'','','',a,'','','',b],['','','','','',h,'',a,''],['','','',d,g,'','',i,''],
					['','','','','',a,b,f,''],['','',f,e,h,'','','',''],['','','','',d,'','','',i]
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,i,d,g,b,a,c,f,e],[g,f,e,h,i,c,b,a,d],
					[h,c,e,b,i,a,f,g,d],[f,d,i,e,g,c,a,h,b],[a,g,b,d,h,f,c,e,i],
					[c,a,b,i,d,g,e,f,h],[i,e,h,b,a,f,d,c,g],[f,d,g,e,c,h,i,b,a]
				],
				// 57
				puzzle: [
					["","",c,"","","",g,h,""],["","","","","",a,"",f,""],[g,"",e,"","","",b,"",""],
					[h,"","","","","",f,"",d],["","",i,e,"","","","",""],["","","",d,h,"","","",""],
					[c,"",b,i,"","","","",""],["","",h,"","","",d,"",g],["","","",e,"","",i,"",a]
				]
			}
		],
		expert: [
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[g,f,d,i,h,c,b,a,e],[h,e,i,b,g,a,f,d,c],
					[h,f,a,b,i,e,c,g,d],[e,d,g,f,c,a,h,b,i],[c,i,b,d,h,g,a,f,e],
					[e,d,b,f,a,g,i,c,h],[a,g,f,c,i,h,d,e,b],[i,c,h,e,b,d,g,a,f]
				],
				// xWing,55
				puzzle: [
					['','','','','','','','',i],[g,'',d,i,'','','',a,''],[h,'','',b,'','','',d,''],
					[h,'','','','','','','',''],['',d,'',f,'','',h,b,i],['',i,'',d,'',g,a,'',''],
					['',d,b,'',a,'',i,c,''],[a,'','','','','','','',''],['','','','','','',g,'',f]
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,f,d,g,a,i,c,e,b],[e,i,g,h,b,c,d,a,f],
					[c,a,e,f,i,h,b,d,g],[d,g,f,a,b,e,i,c,h],[b,h,i,g,c,d,a,f,e],
					[i,g,a,e,c,b,h,f,d],[e,h,c,f,d,a,b,i,g],[f,d,b,i,g,h,c,e,a]
				],
				// yWing, 57, if i == 1 do not mix too much
				puzzle: [
					[a,"","","","","","",h,""],["",f,"",g,"","","","",""],["","","","",b,c,"",a,""],
					["","","","","",h,"",d,""],[d,"","",a,b,e,"","",h],["",h,"",g,"","","","",""],
					["",g,"",e,c,"","","",""],["","","","","",a,"",i,""],["",d,b,"","","","","",a]
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[h,e,g,a,c,i,b,d,f],[d,f,i,g,h,b,e,a,c],
					[h,a,b,f,i,d,e,c,g],[i,g,e,c,a,h,f,b,d],[c,d,f,b,e,g,a,i,h],
					[i,g,a,b,d,h,c,f,e],[e,f,c,g,i,a,d,h,b],[h,b,d,f,c,e,i,g,a]
				],
				// swordFish 3-3-3, 59
				puzzle: [
					[a,"","","","",f,"","",i],["",e,"","","",i,b,"",""],["","",i,"","",b,"","",""],
					["","",b,"","","",e,c,""],[i,"","","",a,"","","",d],["",d,f,"","","",a,"",""],
					["","","",b,"","",c,"",""],["","",c,g,"","","",h,""],[h,"","",f,"","","","",a]
				]
			},
			{
				solution: [
					[a,b,c,d,e,f,g,h,i],[g,h,f,a,i,b,d,e,c],[e,i,d,g,c,h,a,f,b],
					[b,d,h,c,g,e,f,i,a],[i,a,g,b,f,h,c,d,e],[f,e,c,d,a,i,h,b,g],
					[h,a,b,e,c,d,i,f,g],[f,g,i,h,b,a,e,c,d],[c,d,e,i,g,f,b,h,a]
				],
				// swordFish 2-2-3 + yWing, 53, if i == 3 do not mix too much
				puzzle: [
					["","",c,"",e,"","",h,""],["",h,"",a,"","","",e,""],[e,i,"","","",h,"",f,""],
					["","",h,c,g,"","","",""],[i,"","","","","","","",e],["","","","",a,i,h,"",""],
					["",a,"",e,"","","",f,g],["",g,"","","",a,"",c,""],["",d,"","",g,"",b,"",""]
				]
			}
		]
	};
	return puzzles
}
