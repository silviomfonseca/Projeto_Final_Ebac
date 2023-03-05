/// <reference types="cypress" />

import pedidoPage from '../support/page_objects/pedido.page';

const pedido = require('../fixtures/pedido.json');
const produto = require('../fixtures/produto.json');

describe('Adicionar itens ao carrinho', () => {
    before(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        });
    });

    context('Dado que eu acesse a página de um produto', () => {
        before(() => {
            pedidoPage.paginaProduto(produto.id);
        });

        context(`Quando eu adicionar ${pedido.filter(item => item.processar).length} itens diferentes de um produto ao carrinho`, () => {
            pedido.filter(item => item.processar)
                .forEach(item => {
                    before(() => {
                        pedidoPage.pedido(item.tamanho, item.cor);
                    });
                });

            it('Então deve retornar uma mensagem de sucesso', () => {
                cy.get('.woocommerce-message').should('contain', `“${produto.titulo}” foi adicionado no seu carrinho.`);
            });
        });
    });

    afterEach(() => {
        cy.screenshot();
    });
});
