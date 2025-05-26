describe("Login Form Test", () => {
  const validUsername = "admin";
  const validPassword = "admin@123";

  beforeEach(() => {
    cy.visit("/login");
  });

  it("shows error on invalid credentials", () => {
    cy.get('input[placeholder="Username"]').type("wronguser");
    cy.get('input[placeholder="Password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();

    cy.contains("Please enter valid credentials").should("be.visible");
  });

  it("redirects on successful login", () => {
    cy.get('input[placeholder="Username"]').type(validUsername);
    cy.get('input[placeholder="Password"]').type(validPassword);
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");
    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.equal("demo-token");
      expect(win.localStorage.getItem("username")).to.equal(validUsername);
    });
  });

  it("toggles password visibility", () => {
    cy.get('input[placeholder="Password"]').type("testpass");
    cy.get(".bi-eye").click();
    cy.get('input[placeholder="Password"]').should("have.attr", "type", "text");
    cy.get(".bi-eye-slash").click();
    cy.get('input[placeholder="Password"]').should(
      "have.attr",
      "type",
      "password"
    );
  });

  it("has forgot password link", () => {
    cy.contains("Forgot Password?").should(
      "have.attr",
      "href",
      "/forgot-password"
    );
  });
});
