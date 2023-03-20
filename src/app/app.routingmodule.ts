import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
//import { AuthGuard } from "./auth.guard"
import { DisplayComponent } from "./display/display.component"
import { LoginComponent } from "./login/login.component"
import { MenuComponent } from "./menu/menu.component"
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'display', component: DisplayComponent },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [],
})

export class routing {

}