import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DownloadComponent } from "./download/download.component";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
	{ path: "upload", component: UploadComponent },
	{ path: "download/:id", component: DownloadComponent },
	{ path: "**", redirectTo: "upload" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
