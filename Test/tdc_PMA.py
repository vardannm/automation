import re
from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("https://uatapp.daniam.am/trade/home/index")
    page.get_by_role("link").nth(4).click()
    with page.expect_popup() as page1_info:
        page.locator("#tdc > a > .preview-overlay-container").click()
    page1 = page1_info.value
    page1.get_by_role("textbox", name="Ծածկանուն").click()
    page1.get_by_role("textbox", name="Ծածկանուն").fill("anzhela.khachatryan")
    page1.get_by_role("textbox", name="Ծածկանուն").press("Tab")
    page1.get_by_role("textbox", name="Գաղտնաբառ").fill("12345678")
    page1.get_by_role("button", name="Մուտք").click()
    page1.get_by_role("link", name="Փաստաթղթերի խմբային արտածում").click()
    page1.get_by_role("cell").nth(1).click()
    page1.locator("a").filter(has_text="09013").click()
    page1.locator("#exportType").select_option("TDC")
    page1.locator("#issueDate").click()
    page1.get_by_text("1", exact=True).first.click()
    page1.locator("#issueDateTo").click()
    page1.get_by_text("21", exact=True).nth(1).click()
    page1.get_by_role("button", name="Արտածել").click()
    page1.get_by_role("row", name="Հայտարարագրի տեսակ Տեղափոխման/փոխադրման տեսակ").get_by_placeholder("Նշել").click()
    page1.locator("a").filter(has_text="ԱՊՐԱՆՔՆԵՐԻ ՀԱՅՏԱՐԱՐԱԳԻՐ").click()
    page1.locator("#exportType").select_option("TDC")
    page1.locator("#issueDate").click()
    page1.get_by_text("1", exact=True).first.click()
    page1.get_by_text("21", exact=True).nth(1).click()
    page1.get_by_role("button", name="Արտածել").click()
    page1.get_by_role("row", name="Հայտարարագրի տեսակ Տեղափոխման/փոխադրման տեսակ").get_by_placeholder("Նշել").click()
    page1.locator("a").filter(has_text="ՄԱՔՍԱՅԻՆ ՄՈՒՏՔԻ ՕՐԴԵՐ").click()
    page1.locator("#exportType").select_option("TDC")
    page1.locator("#issueDate").click()
    page1.get_by_text("1", exact=True).first.click()
    page1.locator("#issueDateTo").click()
    page1.get_by_text("21", exact=True).nth(1).click()
    page1.get_by_role("button", name="Արտածել").click()
