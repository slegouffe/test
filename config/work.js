var Keyley = window.Keyley || {};

Keyley.config = {
  	title: 'Keyley',
  	api: {
    	url: "https://127.0.0.1:1337"
  	},
  	filer: {
    	url: "https://127.0.0.1:1337/media"
  	},
  	produits:[
                {
                  descriptif:'Harley Davidson - Iron',
                  price:'11000',
                  weight:'232',
                  media:[
                    'https://pixabay.com/static/uploads/photo/2015/04/10/15/27/harley-716352_960_720.jpg'
                  ],
                  tags:[{id:1,tag:'tag 1'},{id:2,tag:'tag 2'},{id:3,tag:'tag 3'}]

                },
                {
                  descriptif:'Harley Davidson - Street Bob',
                  price:'14900',
                  weight:'232',
                  media:[
                    'http://images.mcn.bauercdn.com/upload/901/images/123699@harley-davidson-fxdb.jpg'
                  ],
                  tags:[{id:2,tag:'tag 2'},{id:3,tag:'tag 3'}]
                },
                {
                  descriptif:'Harley Davidson - Electra Glide',
                  price:'27000',
                  weight:'232',
                  media:[
                    'http://www.totalmotorcycle.com/photos/2002models/2002-Harley-Davidson-FLHTCUIUltraClassicElectraGlide.jpg'
                  ],
                  tags:[{id:1,tag:'tag 1'}]
                }
	]




};