import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { LoggerConfig, NGXLogger, NGXLoggerHttpService } from 'ngx-logger';

import { ConfigService } from '../config/config.service';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RecipeService,
				HttpClient,
				HttpHandler,
				ConfigService,
				NGXLogger,
				NGXLoggerHttpService,
				LoggerConfig,
			],
		});
	});

	it('should be created', inject([RecipeService], (service: RecipeService) => {
		expect(service).toBeTruthy();
	}));
});
