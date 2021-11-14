"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hero_list_component_1 = require('./heroes/hero-list/hero-list.component');
var hero_detail_component_1 = require('./heroes/hero-detail/hero-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: hero_list_component_1.HeroListComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map