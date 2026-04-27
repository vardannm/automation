import re
from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("https://uatapp.daniam.am/cas//login?service=https%3A%2F%2Fuatapp.daniam.am%2Fupv%2Flogin%2Fcas")
    page.get_by_role("textbox", name="Ծածկանուն").fill("ruzanna.makaryan")
    page.get_by_role("textbox", name="Գաղտնաբառ").click()
    page.get_by_role("textbox", name="Գաղտնաբառ").fill("12345678")
    page.get_by_role("button", name="Մուտք").click()
    page.get_by_role("link", name="Որոնել ՄԿԽ արձանագրություն").click()
    page.locator("#operationType").select_option("noDeclaration")
    page.get_by_role("button", name="Որոնել").click()
    page.get_by_role("link", name="✏").first.click()
    page.get_by_role("link", name="Խմբագրել").click()
    page.get_by_text("Մանրամասն նկարագիր *asdfg").click()
    page.locator("#essence").click()
    page.locator("#essence").fill("asdfg drtykjghrewrstdgyuhijkl ertyuio ertyuio;lkijuytrertyuio")
    page.get_by_role("button", name="Փոփոխել").click()
    with page.expect_navigation():
        page.get_by_role("button", name="Այո").click(timeout=120000)
    expect(page.get_by_role("list").filter(has_text="\" Փոփոխել \" գործողությունը կատարված է")).to_be_visible()
    expect(page.locator("#update-status-label")).to_be_visible()

