import { Component, OnInit } from "@angular/core";
import { ConfigService, IConfig } from "@rest/config/config.service";

@Component({
	selector: "app-config",
	templateUrl: "./config.component.html",
	styleUrls: ["./config.component.scss"]
})
export class ConfigComponent implements OnInit {
	public error: any;
	public config: IConfig;
	public headers: string[];

	constructor(private configService: ConfigService) {}

	public ngOnInit() {
		//
	}

	public clear() {
		this.config = undefined;
		this.error = undefined;
		this.headers = undefined;
	}

	public showConfigResponse() {
		this.configService
			.getConfigResponse()
			// resp is of type `HttpResponse<Config>`
			.subscribe(resp => {
				// display its headers
				const keys = resp.headers.keys();
				this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

				// access the body directly, which is typed as `Config`.
				this.config = { ...resp.body };
			});
	}

	public showConfig() {
		// TODO: fix for new version rxjs
		// this.configService.getConfig()
		//   .subscribe(data => this.config = {...data});
	}
}
