"use strict";
exports.__esModule = true;
var dashboard_component_1 = require("../../pages/budget/dashboard/dashboard.component");
var remedy_lifecycle_component_1 = require("../../pages/budget/remedy-lifecycle/remedy-lifecycle.component");
exports.AppLayoutRoutes = [
    // Budget paths (Orçamento)
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'budget/dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'budget/remedy-lifecycle', component: remedy_lifecycle_component_1.RemedyLifecycleComponent }
    // Predictive paths
    // Popular Pharmacy
];
