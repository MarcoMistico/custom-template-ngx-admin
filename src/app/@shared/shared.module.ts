import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeModule } from "../@theme/theme.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbAutocompleteModule,
  NbButtonModule,
  NbCalendarModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbOptionModule,
  NbPopoverModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbTreeGridModule,
  NbUserModule,
  NbWindowModule,
} from "@nebular/theme";
import { AlertPopupComponent } from "./components/alert-popup/alert-popup.component";

@NgModule({
  declarations: [
    AlertPopupComponent
  ],
  imports: [
    CommonModule,
    NbMenuModule,
    ThemeModule,
    NbAlertModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbSelectModule,
    NbTabsetModule,
    NbPopoverModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    FormsModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbTooltipModule,
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    ReactiveFormsModule,
    NbAutocompleteModule,
    NbDatepickerModule.forRoot(),
    NbCalendarModule,
    NbAccordionModule,
    NbOptionModule,
    NbTreeGridModule,
  ],
  exports: [
  ],
  entryComponents: [
  ],
})
export class ToolsComponentsModule {}
