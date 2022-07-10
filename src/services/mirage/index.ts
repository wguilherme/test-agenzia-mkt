import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker'

type Coupon = {
	name: string;
	email: string;
	created_at: string;
}

export const makeServer = () => {
	const server = createServer({
		models: {
			coupon: Model.extend<Partial<Coupon>>({} as Coupon),
		},
		factories: {
			coupon: Factory.extend({
				code() {
					return faker.random.alphaNumeric(3).toUpperCase()
				},
				type(){
					return faker.helpers.arrayElement(['special', 'common'])
				}
			})
		},
		seeds(server) {
			server.createList('coupon', 5);
		},

		routes() {
			this.passthrough('https://gateway.marvel.com/v1/public')
			this.passthrough('https://gateway.marvel.com/*')
			
			this.urlPrefix = 'http://localhost:3000';
			this.namespace = 'mock';
			this.timing = 750; 
			// this.post('/users');
      // this.get('/users')
      this.get('/coupons')
			this.passthrough('https://gateway.marvel.com/*')
		}
	})

	return server;
}