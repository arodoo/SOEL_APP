import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import path from "path";
import { HomeComponent } from "./home/home.component";

export const UI_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];