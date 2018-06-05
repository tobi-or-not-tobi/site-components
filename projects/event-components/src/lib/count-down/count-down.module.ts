import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountDownComponent } from "./count-down.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CountDownComponent],
  exports: [CountDownComponent]
})
export class CountDownModule {}
