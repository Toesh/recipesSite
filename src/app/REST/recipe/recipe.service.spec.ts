import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NGXLogger, NGXLoggerHttpService, LoggerConfig } from 'ngx-logger';

import { RecipeService } from './recipe.service';
import { ConfigService } from '../config/config.service';

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
        LoggerConfig
      ]
    });
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
