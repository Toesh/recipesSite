import { browser, by, element } from "protractor";

export class AppPage {
	public static async navigateTo() {
		return browser.get("/");
	}

	public static async getParagraphText() {
		return element(by.css("app-root h1")).getText();
	}
}
