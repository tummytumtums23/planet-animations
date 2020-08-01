import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EarthComponent } from './earth/earth.component';
import { UiInfobarBottomComponent } from './ui/ui-infobar-bottom/ui-infobar-bottom.component';
import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './ui/ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './ui/ui-sidebar-right/ui-sidebar-right.component';
import { UiComponent } from './ui/ui.component';
import { MarsComponent } from './mars/mars.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { SaturnComponent } from './saturn/saturn.component';
import { MercuryComponent } from './mercury/mercury.component';
import { VenusComponent } from './venus/venus.component';
import { NeptuneComponent } from './neptune/neptune.component';

@NgModule({
  declarations: [
    AppComponent,
    EarthComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent,
    MarsComponent,
    JupiterComponent,
    SaturnComponent,
    MercuryComponent,
    VenusComponent,
    NeptuneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
