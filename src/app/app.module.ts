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
import { StepsComponent } from './steps/steps.component';
import { LoaderComponent } from './loader/loader.component';
import { BufferGeometryComponent } from './buffer-geometry/buffer-geometry.component';
import { ShapeComponent } from './shape/shape.component';
import { ExtrudeComponent } from './extrude/extrude.component';
import { FcmacroComponent } from './fcmacro/fcmacro.component';

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
    TextComponent,
    StepsComponent,
    LoaderComponent,
    BufferGeometryComponent,
    ShapeComponent,
    ExtrudeComponent,
    FcmacroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
