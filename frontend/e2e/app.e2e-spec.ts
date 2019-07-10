import { AppPage } from "./app.po";

describe("recipes-site App", () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it("should display welcome message", () => {
		AppPage.navigateTo().catch(err => console.log(err));
		expect(AppPage.getParagraphText())
			.toEqual("Welcome to app!")
			.catch(err => console.log(err));
	});
});
