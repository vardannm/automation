import re
from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("https://uatapp.daniam.am/trade/home/index")
    page.locator("div").filter(has_text="Ծառայություններ").nth(4).click()
    with page.expect_popup() as page1_info:
        page.locator("span").nth(4).click()
    page1 = page1_info.value
    page1.get_by_role("textbox", name="Ծածկանուն").fill("mikayel.harutyunyan")
    page1.get_by_role("textbox", name="Գաղտնաբառ").click()
    page1.get_by_role("textbox", name="Գաղտնաբառ").fill("12345678")
    page1.get_by_role("button", name="Մուտք").click()
    page1.goto("https://uatapp.daniam.am/cusad/")
