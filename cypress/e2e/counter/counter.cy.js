/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("webpack-react-enterprise application test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("처음 렌더링시 로그인 버튼과 언어 선택버튼이 존재함", () => {
    cy.findByText("로그인").should("exist");
    cy.findByText("언어").should("exist");
  });

  it("메뉴에 있는 버튼을 누르면 해당 페이지로 이동 한다", () => {
    cy.findByText("MSW").click();
    cy.url().should("eq", "http://localhost:3000/msw");
    cy.findByText("mocking").should("exist");
  });

  it("로그인 하지 않은 상태에서는 profile 페이지에 갈 수 없고 메인 페이지로 리다이렉트 됨", () => {
    cy.findByText("Profile").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
