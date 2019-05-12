describe('<App />', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('renders £10 goodybag as a default on first render', () => {
    cy.get('[data-cy="price"]')
    cy.contains('£10')
  })

  it('renders £12 goodybag after ">" pressed on £10 state', () => {
    cy.get('[data-cy="next"]').click()
    cy.get('[data-cy="price"]')
    cy.contains('£12')
  })	

  it('renders £7.5 goodybag after "<" pressed on £10 state', () => {
    cy.get('[data-cy="prev"]').click()
    cy.get('[data-cy="price"]')
    cy.contains('£7.5')
  })	

  it('renders £25 goodybag after "<" multiple presses on £10 state', () => {
    cy.get('[data-cy="prev"]')
      .click().get('[data-cy="prev"]') // £7.5
      .click().get('[data-cy="prev"]') // £5
      .click() // £25
    cy.get('[data-cy="price"]')
    cy.contains('£25')
  })

  it('renders £5 goodybag after ">" multiple presses on £25 state', () => {
    cy.get('[data-cy="next"]')
      .click().get('[data-cy="next"]') // £12
      .click().get('[data-cy="next"]') // £15
      .click().get('[data-cy="next"]') // £20
      .click().get('[data-cy="next"]') // £25
      .click() // £5
    cy.get('[data-cy="price"]')
    cy.contains('£5')
  })

});

  
