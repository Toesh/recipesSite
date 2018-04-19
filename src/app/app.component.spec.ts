import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ConfigService } from './REST/config/config.service';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ConfigComponent
      ],
      imports: [
        HttpClientModule,
        LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
      ],
      providers: [
        ConfigService
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
