import re
from playwright.sync_api import Playwright, sync_playwright, expect


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False, slow_mo=800)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://uatapp.daniam.am/cas//login?service=https%3A%2F%2Fuatapp.daniam.am%2Fupv%2Flogin%2Fcas")
    page.get_by_role("textbox", name="Ծածկանուն").fill("ruzanna.makaryan")
    page.get_by_role("textbox", name="Գաղտնաբառ").click()
    page.get_by_role("textbox", name="Գաղտնաբառ").click()
    page.get_by_role("textbox", name="Գաղտնաբառ").fill("12345678")
    page.get_by_role("button", name="Մուտք").click()
    page.get_by_role("link", name="Ակտ / Արձանագրություն / Որոշում", exact=True).click()
    page.get_by_role("link", name="Մաքսանենգության դեպքի վերաբերյալ արձանագրություն").click()
    page.get_by_role("link", name="Կողմեր").click()
    page.get_by_role("link", name="Հիմնական տվյալներ").click()
    page.locator("[id=\"transportationMethods[0].transportationMethod\"]").select_option("1")
    page.locator("#transportationMethods > .iterativeElement > .code-block > div > .action-buttons > .btn").click()
    page.locator("[id=\"transportationMethods[1].transportationMethod\"]").select_option("4")
    page.locator("#transportationMethods > div > .code-block > div > .action-buttons > .btn").first.click()
    page.locator("[id=\"transportationMethods[2].transportationMethod\"]").select_option("1")
    page.get_by_role("button", name="Պահպանել").click()
    page.get_by_role("button", name="Այո").click(timeout=120000)
    page.goto("https://uatapp.daniam.am/upv/acts/show/5361?operation=store")

    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
