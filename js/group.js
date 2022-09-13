/* 
	1. isOpen ֆունկցիան չի ցանկանում ճիշտ աշխատել,
	արդյունքը միշտ սխալ է ցույց տալիս, պետք է գտնել
	խնդիրը ու լուծել։

	2․ isAverageLunchPriceTrue ֆունկցիան պետք է 
	վերցնի ցանկացած երկու ուտելիքի գին մենյույի մեջից
	գումարի իրար հետ ու համեմատի averageLunchPriceի հետ

	3․ transferWaitors ֆունկցիան ստեղծվել է նրա համար, 
	որ կլոնավորի տվյալնների թեմփլեյթը ու ուղարկի այլ ռեստորանի,
	իհարկե այլ ռեստորանում պետք է լինեն ուրիշ ուտելիքներ, 
	ուրիշ գներ, ու ուրիշ մատուցողներ։ Ներկա պահին այս ֆունկցիան
	գտնվում է պատրաստման փուլում, դուք պետք է անեք այնպես, որ նոր ռեստորանում
	փոխվեն միայն մատուցողների անուններն ու տարիքները

	բայց ներկա պահին ծրագիրը աշխատացնելուց տեսնում ենք, որ ինքը 
	բավականին սխալ է աշխատում, նախ համ կլոնավորված ռեստորանն ա պարունակում
	նույն տվյալները, հետո էլ տեսնում ենք որ մատուցող Alice-ը կորում ա
	ու տեղը գալիս է ինչ-որ Mike, շտապ պետք է գտնել խնդիրը և ուղղել
	որպեսի ռեստորանները իրարից անկախ լինեն։

*/

const restorantData = {
	menu: [{
			name: 'Salad Caesar',
			price: '14$'
		},
		{
			name: 'Pizza Diavola',
			price: '9$'
		},
		{
			name: 'Beefsteak',
			price: '17$'
		},
		{
			name: 'Napoleon',
			price: '7$'
		}
	],
	waitors: [{
		name: 'Alice',
		age: 22
	}, {
		name: 'John',
		age: 24
	}],
	averageLunchPrice: '20$',
	openNow: true
};

function isOpen(prop) {
	let answer = '';
	prop ? answer = 'Открыто' : answer = 'zakrito';
	return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + (+sDish.price) < average) {
		return 'Цена ниже средней';
	} else {
		return 'Цена выше средней';
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[2], restorantData.averageLunchPrice));

function transferWaitors(data) {
	const copy = Object.assign({}, data);

	copy.waitors[0] = {
		name: 'Mike',
		age: 32
	};

	return copy;
}

//transferWaitors(restorantData);

function transferWaitors(data) {
	const copy ={};
	for(let key in data){
	  copy[key]=data[key];
	}
	return copy;
  }
  const waitors = transferWaitors(restorantData);
  restorantData.waitors =  [{
	name: 'Amely',
	age: 25
  }, {
	name: 'Bred',
	age: 30
  }];
  console.log(restorantData);
  console.log(waitors);




  const copyRestorantData = {...restorantData};
  restorantData.menu = [{
	  name: 'greek salad',
	  price: '12$'
  },
  {
	  name: 'Pizza Margarita',
	  price: '11$'
  },
  {
	  name: 'Filet Mignion',
	  price: '20$'
  },
  {
	  name: 'Ice cream',
	  price: '9$'
  }
  ];
  restorantData.waitors = [{
	  name: 'Mike',
	  age: 32
  }, 
  {
	  name: 'Steven',
	  age: 30
  }];
  restorantData.averageLunchPrice = '25$';
  
  console.log(restorantData);
  console.log(copyRestorantData);
  console.log(isOpen(copyRestorantData.isOpen));
  console.log(isAverageLunchPriceTrue(copyRestorantData.menu[1], copyRestorantData.menu[2], copyRestorantData.averageLunchPrice));
  
  
  
