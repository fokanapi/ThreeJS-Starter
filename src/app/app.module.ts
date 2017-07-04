import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SphereComponent } from './sphere/sphere.component';
import { TriangleComponent } from './triangle/triangle.component';
import { OrbitControlComponent } from './orbit-control/orbit-control.component';
import { LineComponent } from './line/line.component';
import { BoxComponent } from './box/box.component';
import { BaseComponent } from './base/base.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SphereComponent,
    TriangleComponent,
    OrbitControlComponent,
    LineComponent,
    BoxComponent,
    BaseComponent,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
