import {NgModule, enableProdMode} from "@angular/core";
import {ServerModule} from "@angular/platform-server";
import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        ServerModule,
        AppModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppServerModule {
}

enableProdMode();
