import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from '../REST/config/config.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  error: any;
  config: Config;
  headers: string[];

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ...resp.body };
      });
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.config = { ...data });
  }
}
