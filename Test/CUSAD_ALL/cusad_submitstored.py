import re
from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("https://uatapp.daniam.am/trade/home/index")
    page.locator("div").filter(has_text="Ծառայություններ").nth(4).click()
    with page.expect_popup() as page1_info:
        page.locator("span").nth(4).click()
    page1 = page1_info.value
    page1.get_by_role("textbox", name="Ծածկանուն").click()
    page1.get_by_role("textbox", name="Ծածկանուն").fill("anzhela.khachatryan")
    page1.get_by_role("textbox", name="Ծածկանուն").press("Tab")
    page1.get_by_role("textbox", name="Գաղտնաբառ").fill("12345678")
    page1.get_by_role("button", name="Մուտք").click()
    page1.locator("#status").select_option("Stored")
    page1.get_by_role("button", name="Որոնել").click()
    with page1.expect_popup() as page2_info:
        page1.get_by_role("link", name="✏").first.click()
    page2 = page2_info.value
    page2.get_by_role("button", name="Ներկայացնել").click()
    page2.get_by_role("button", name="Այո").click()
    page2.get_by_role("link", name="Կից փաստաթղթեր - Տարանցման Հայտարարագիրը կցված չէ: Անհրաժեշտ է կցել 09013,").click()
    page2.locator("#fakePresentedDocuments > thead > tr > .lcp-min-width > .btn").click()

    input_field = page2.locator("[id=\"fakePresentedDocuments[0].presentedDocumentModeCode\"]")

    input_field.wait_for(state="visible")  # ключевая строка
    input_field.click()
    input_field.fill("460")
   page2.locator("a").filter(has_text="ՓՈԽԱԴՐՄԱՆ ԱՄՓՈՓԱԳԻՐ").click()

    page2.locator("#ui-id-48").click()
    page2.locator("[id=\"fakePresentedDocuments[0].prDocumentNumber\"]").fill("123")
    page2.locator("div:nth-child(113) > .xdsoft_datepicker > .xdsoft_calendar > table > tbody > tr:nth-child(4) > .xdsoft_date.xdsoft_day_of_week3 > div").click()
    page2.locator("[id=\"fakePresentedDocuments[0].goodsNumbers\"]").click()
    page2.locator("[id=\"fakePresentedDocuments[0].goodsNumbers\"]").fill("1")
    page2.get_by_role("link", name="Ֆինանսական պատասխանատու - ՀՎՀՀ - Դաշտը պարտադիր է լրացման").click()
    page2.locator("[id=\"goodsShipments[0].finRespPerson.raOrganizationFeatures.unn\"]").fill("02228898")
    import re
    from playwright.sync_api import Page, expect

    def test_example(page: Page) -> None:
        page.goto("https://uatapp.daniam.am/trade/home/index")
        page.locator("div").filter(has_text="Ծառայություններ").nth(4).click()
        with page.expect_popup() as page1_info:
            page.locator("span").nth(4).click()
        page1 = page1_info.value
        page1.get_by_role("textbox", name="Ծածկանուն").click()
        page1.get_by_role("textbox", name="Ծածկանուն").fill("anzhela.khachatryan")
        page1.get_by_role("textbox", name="Ծածկանուն").press("Tab")
        page1.get_by_role("textbox", name="Գաղտնաբառ").fill("12345678")
        page1.get_by_role("button", name="Մուտք").click()
        page1.locator("#status").select_option("Stored")
        page1.get_by_role("button", name="Որոնել").click()
        with page1.expect_popup() as page2_info:
            page1.get_by_role("link", name="✏").first.click()
        page2 = page2_info.value
        page2.get_by_role("button", name="Ներկայացնել").click()
        page2.get_by_role("button", name="Այո").click()
        page2.get_by_role("link",
                          name="Կից փաստաթղթեր - Տարանցման Հայտարարագիրը կցված չէ: Անհրաժեշտ է կցել 09013,").click()
        page2.locator("#fakePresentedDocuments > thead > tr > .lcp-min-width > .btn").click()
        page2.locator("[id=\"fakePresentedDocuments[0].presentedDocumentModeCode\"]").click()
        page2.wait_for_timeout(3000)
        page2.keyboard.press("ArrowDown")
        page2.keyboard.press("Enter")
        page2.locator("[id=\"fakePresentedDocuments[0].presentedDocumentModeCode\"]").fill("460")
        page2.wait_for_timeout(3000)
        page2.keyboard.press("ArrowDown")
        page2.keyboard.press("Enter")
        page2.locator("a").filter(has_text="ՓՈԽԱԴՐՄԱՆ ԱՄՓՈՓԱԳԻՐ").click()
        page2.locator("#ui-id-48 li").first
        wait_for(state="visible")
        page2.locator("[id=\"fakePresentedDocuments[0].prDocumentNumber\"]").fill("123")
        page2.wait_for_timeout(3000)
        page2.keyboard.press("ArrowDown")
        page2.keyboard.press("Enter")
        page2.locator(
            "div:nth-child(113) > .xdsoft_datepicker > .xdsoft_calendar > table > tbody > tr:nth-child(4) > .xdsoft_date.xdsoft_day_of_week3 > div").click()
        page2.locator("[id=\"fakePresentedDocuments[0].goodsNumbers\"]").click()
        page2.locator("[id=\"fakePresentedDocuments[0].goodsNumbers\"]").fill("1")
        page2.get_by_role("link", name="Ֆինանսական պատասխանատու - ՀՎՀՀ - Դաշտը պարտադիր է լրացման").click()
        page2.locator("[id=\"goodsShipments[0].finRespPerson.raOrganizationFeatures.unn\"]").fill("02228898")
        page2.wait_for_timeout(3000)
        page2.keyboard.press("ArrowDown")
        page2.keyboard.press("Enter")
        page2.locator("a").filter(has_text="\"Սպայկա\" ՍՊԸ").click()
        page2.get_by_role("link", name="Ապրանք #1").click()
        page2.locator("#goodsDscRu").fill("treterte")
        page2.locator("#saveItem").click()
        page2.get_by_role("button", name="Ներկայացնել").click()
        page2.get_by_role("button", name="Այո").click()
    page2.locator("a").filter(has_text="\"Սպայկա\" ՍՊԸ").click()
    page2.get_by_role("link", name="Ապրանք #1").click()
    page2.locator("#goodsDscRu").fill("treterte")
    page2.locator("#saveItem").click()
    page2.get_by_role("button", name="Ներկայացնել").click()
    page2.get_by_role("button", name="Այո").click()
