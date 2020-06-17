import { Component } from "@angular/core";
import { NgControl } from "@angular/forms";
import { MatFormFieldControl } from "@angular/material/form-field";
import { Observable } from "rxjs";

@Component({
	selector: "app-tag-field",
	templateUrl: "./tag-field.component.html",
	styleUrls: ["./tag-field.component.scss"],
	providers: [{ provide: MatFormFieldControl, useExisting: TagFieldComponent }]
})
export class TagFieldComponent implements MatFormFieldControl<string> {
	public readonly autofilled: boolean;
	public readonly controlType: string;
	public readonly disabled: boolean;
	public readonly empty: boolean;
	public readonly errorState: boolean;
	public readonly focused: boolean;
	public readonly id: string;
	public readonly ngControl: NgControl | null;
	public readonly placeholder: string;
	public readonly required: boolean;
	public readonly shouldLabelFloat: boolean;
	public readonly stateChanges: Observable<void>;
	public value: string | null;

	public onContainerClick(event: MouseEvent): void {
		//
	}

	public setDescribedByIds(ids: string[]): void {
		//
	}
}
