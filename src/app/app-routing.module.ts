import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { StatsComponent } from "./pages/stats/stats.component";
import {UserComponent} from "./pages/user/user.component";


const routes: Routes = [
    {
        path: 'home',
        data: {
            breadcrumb: 'Home',
        },
        children: [
            {
                path: 'stats',
                data: {
                    breadcrumb: 'Stats',
                },
                children: [
                    {
                        path: ':id',
                        component: UserComponent,
                        data: {
                            breadcrumb: 'User',
                        },
                    },
                    {
                        path: '',
                        component: StatsComponent
                    }
                ]
            },
            {
                path: '',
                component: HomeComponent,
            },

        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
