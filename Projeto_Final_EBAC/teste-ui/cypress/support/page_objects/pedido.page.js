class Pedido {
    paginaProduto(id) {
        cy.get(`#primary-menu > .menu-item-${id} > a`).click();
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click();
    }

    pedido(size, color) {
        cy.get('.button-variable-item-' + size).click();
        cy.get('.button-variable-item-' + color).click();
        cy.get('.single_add_to_cart_button').click();
    }
}

export default new Pedido();