import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { LoggerConfig, NGXLogger, NGXLoggerHttpService } from 'ngx-logger';
import { Config, ConfigService } from './config.service';

describe('ConfigService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ConfigService,
				NGXLogger,
				NGXLoggerHttpService,
				LoggerConfig,
			],
		});
	});

	it('should be created', inject([ConfigService], (service: ConfigService) => {
		expect(service).toBeTruthy();
	}));

	it('should list the settings', () => {
		const configService = TestBed.get(ConfigService);
		const http = TestBed.get(HttpTestingController);
		// fake response
		const expectedConfig = [{ recipeUrl: 'http://localhost:8080/recipe' }];

		let actualConfig = [];
		configService.getConfig().subscribe((config: Config[]) => actualConfig = config);

		http.expectOne('assets/config.json').flush(expectedConfig);
		expect(actualConfig).toEqual(expectedConfig);
	});
});
