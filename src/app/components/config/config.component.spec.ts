import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import { Config, ConfigService } from '../../REST/config/config.service';

import { HttpClient, HttpHandler} from '@angular/common/http';
import { NGXLogger, NGXLoggerHttpService, LoggerConfig } from 'ngx-logger';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConfigComponent
      ],
      providers: [
        ConfigService,
        HttpClient,
        HttpHandler,
        NGXLogger,
        NGXLoggerHttpService,
        LoggerConfig
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
