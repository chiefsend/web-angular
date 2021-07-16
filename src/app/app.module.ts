import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UploadComponent } from "./upload/upload.component";
import { DownloadComponent } from "./download/download.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ApiService } from "./api/api.service";
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [AppComponent, UploadComponent, DownloadComponent, HeaderComponent, FooterComponent, PublicComponent, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [ApiService],
	bootstrap: [AppComponent],
})
export class AppModule {}
