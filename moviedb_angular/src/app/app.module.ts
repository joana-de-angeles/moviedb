import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from "./components/big-card/big-card.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { OverviewBoxComponent } from "./components/overview-box/overview-box.component";
import { TitleMainComponent } from "./components/title-main/title-main.component";
import { BannerMainComponent } from "./components/banner-main/banner-main.component";
import { SmallCardComponent } from "./components/small-card/small-card.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BigCardComponent,
        MenuBarComponent,
        OverviewBoxComponent,
        TitleMainComponent,
        BannerMainComponent,
        SmallCardComponent
    ]
})
export class AppModule { }
