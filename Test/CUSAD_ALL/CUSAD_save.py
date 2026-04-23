import re
from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("https://uatapp.daniam.am/trade/home/index")
    page.get_by_role("link").nth(4).click()
    with page.expect_popup() as page1_info:
        page.locator("span").nth(4).click()
    page1 = page1_info.value
    page1.get_by_role("textbox", name="Ծածկանուն").click()
    page1.get_by_role("textbox", name="Ծածկանուն").fill("anzhela.khachatryan")
    page1.get_by_role("textbox", name="Ծածկանուն").press("Tab")
    page1.get_by_role("textbox", name="Գաղտնաբառ").fill("12345678")
    page1.get_by_role("button", name="Մուտք").click()
    page1.get_by_role("link", name="Ներմուծում").first.click()
    page1.get_by_text("Ներածել XML").click()
    from pathlib import Path
    file_path = Path.cwd() / "Test" / "CUSAD_ALL" / "cusad-15889.xml"
    page1.get_by_role("button", name="Choose File").set_input_files(str(file_path))
    page1.get_by_role("button", name="Ներմուծել XML ֆայլից").click()
    page1.get_by_role("link", name="Ստացող - ՀՎՀՀ - Դաշտը պարտադիր է լրացման").click()
    page1.locator(
        '[id="goodsShipments[0].consignee.raOrganizationFeatures.unn"]'
    ).fill("02228898")
    page1.wait_for_timeout(3000)
    page1.keyboard.press("ArrowDown")
    page1.keyboard.press("Enter")
    # page1.wait_for_selector("ul[role='listbox']")
    # page1.locator("li", has_text="Սպայկա").click()
    page1.get_by_role("link", name="Հայտարարատու - ՀՎՀՀ - Դաշտը պարտադիր է լրացման").click()
    page1.locator(
        '[id="goodsShipments[0].declarant.raOrganizationFeatures.unn"]'
    ).fill("02228898")
    page1.wait_for_timeout(3000)
    page1.keyboard.press("ArrowDown")
    page1.keyboard.press("Enter")page1.wait_for_timeout(3000)
    page1.keyboard.press("ArrowDown")
    page1.keyboard.press("Enter")
    # page1.wait_for_selector("ul[role='listbox']")
    # page1.locator("li", has_text="Սպայկա").click()
    page1.get_by_role("link", name="Գրանցման մ/մ - Դաշտը պարտադիր է լրացման").click()
    page1.locator("a").filter(has_text="05100020").click()
    page1.get_by_role("button", name="Պահպանել").click()
    page1.get_by_role("button", name="Այո").click()
