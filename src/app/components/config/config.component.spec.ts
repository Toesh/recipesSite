import { HttpClient, HttpHandler } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConfigService } from "@rest/config/config.service";
import { ConfigComponent } from "./config.component";

describe("ConfigComponent", () => {
	let component: ConfigComponent;
	let fixture: ComponentFixture<ConfigComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ConfigComponent],
			providers: [ConfigService, HttpClient, HttpHandler]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConfigComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
