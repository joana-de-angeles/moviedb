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
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ButtonComebackComponent } from './components/button-comeback/button-comeback.component';
import { MovieHttpInterceptor } from './interceptor/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TvComponent } from './pages/tv/tv.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContentComponent,
        ButtonComebackComponent,
        TvComponent,
        
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MovieHttpInterceptor,
        multi: true,
      },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BigCardComponent,
        MenuBarComponent,
        OverviewBoxComponent,
        TitleMainComponent,
        BannerMainComponent,
        SmallCardComponent,
        HttpClientModule,
        NgCircleProgressModule.forRoot({
          radius: 0,
          titleFontSize:'',
          unitsFontSize:'',
          outerStrokeWidth: 0,
          innerStrokeWidth: 0,
          outerStrokeColor: "",
          animationDuration: 0,
          showInnerStroke: false,
          showSubtitle: false,
          titleColor:'',
          unitsColor:''
        })
    ]
})
export class AppModule { }