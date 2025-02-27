import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'sample-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>A sample UI implementation with templating and additional elements.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <div class="flex flex-col items-center">
                <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
                <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
                <p-inputotp [(ngModel)]="value" [length]="6">
                    <ng-template #input let-token let-events="events" let-index="index">
                        <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
                        <div *ngIf="index === 3" class="px-4">
                            <i class="pi pi-minus"></i>
                        </div>
                    </ng-template>
                </p-inputotp>
                <div class="flex justify-between mt-8 self-stretch">
                    <p-button label="Resend Code" [link]="true" class="p-0" />
                    <p-button label="Submit Code" />
                </div>
            </div>
        </div>
        <app-code [code]="code" selector="input-otp-sample-demo"></app-code>
    `,
    styles: [
        `
            .p-inputotp {
                gap: 0;
            }

            .custom-otp-input {
                width: 48px;
                height: 48px;
                font-size: 24px;
                appearance: none;
                text-align: center;
                transition: all 0.2s;
                border-radius: 0;
                border: 1px solid var(--p-inputtext-border-color);
                background: transparent;
                outline-offset: -2px;
                outline-color: transparent;
                border-right: 0 none;
                transition: outline-color 0.3s;
                color: var(--p-inputtext-color);
            }

            .custom-otp-input:focus {
                outline: 2px solid var(--p-focus-ring-color);
            }

            .custom-otp-input:first-child,
            .custom-otp-input:nth-child(5) {
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }

            .custom-otp-input:nth-child(3),
            .custom-otp-input:last-child {
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
                border-right-width: 1px;
                border-right-style: solid;
                border-color: var(--p-inputtext-border-color);
            }
        `
    ]
})
export class SampleDoc {
    value: any;

    code: Code = {
        basic: `<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
    <p-inputotp [(ngModel)]="value" [length]="6">
        <ng-template #input let-token let-events="events" let-index="index">
            <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
            <div *ngIf="index === 3" class="px-4">
                <i class="pi pi-minus"></i>
            </div>
        </ng-template>
    </p-inputotp>
    <div class="flex justify-between mt-8 self-stretch">
        <p-button label="Resend Code" [link]="true" class="p-0"/>
        <p-button label="Submit Code"/>
    </div>
</div>`,

        html: `<div class="card flex justify-center">
    <div class="flex flex-col items-center">
        <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
        <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
        <p-inputotp [(ngModel)]="value" [length]="6">
            <ng-template #input let-token let-events="events" let-index="index">
                <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
                <div *ngIf="index === 3" class="px-4">
                    <i class="pi pi-minus"></i>
                </div>
            </ng-template>
        </p-inputotp>
        <div class="flex justify-between mt-8 self-stretch">
            <p-button label="Resend Code" [link]="true" class="p-0"/>
            <p-button label="Submit Code"/>
        </div>
    </div>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'input-otp-sample-demo',
    templateUrl: './input-otp-sample-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtpModule, ButtonModule],
    styles: [
        \`
            .p-inputotp {
                gap: 0;
            }

            .custom-otp-input {
                width: 48px;
                height: 48px;
                font-size: 24px;
                appearance: none;
                text-align: center;
                transition: all 0.2s;
                border-radius: 0;
                border: 1px solid var(--p-inputtext-border-color);
                background: transparent;
                outline-offset: -2px;
                outline-color: transparent;
                border-right: 0 none;
                transition: outline-color 0.3s;
                color: var(--p-inputtext-color);
            }

            .custom-otp-input:focus {
                outline: 2px solid var(--p-focus-ring-color);
            }

            .custom-otp-input:first-child,
            .custom-otp-input:nth-child(5) {
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }

            .custom-otp-input:nth-child(3),
            .custom-otp-input:last-child {
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
                border-right-width: 1px;
                border-right-style: solid;
                border-color: var(--p-inputtext-border-color);
            }
        \`
    ],
})
export class InputOtpSampleDemo {
    value: any;
}`
    };
}
