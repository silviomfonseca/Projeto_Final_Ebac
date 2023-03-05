import faker from "faker";

const cupom = require('../../fixtures/cupom.json');

class CupomPage {
    inserirCupomFaker() {
        return {
            code: faker.lorem.slug(4),
            amount: faker.random.number({ min: 1, max: 100, precision: 1 }).toString(),
            dicount_type: faker.random.arrayElement(['percent', 'fixed_cart', 'fixed_product']),
            description: faker.lorem.sentence(4)
        };
    }

    inserirCupomFixture() {
        return cupom;
    }
}

export default new CupomPage();