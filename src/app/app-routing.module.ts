import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DownloadComponent } from "./download/download.component";
import { HomeComponent } from "./home/home.component";
import { PublicComponent } from "./public/public.component";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
  { path: "upload", component: UploadComponent },
  { path: "download/:id", component: DownloadComponent },
  { path: "public", component: PublicComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
