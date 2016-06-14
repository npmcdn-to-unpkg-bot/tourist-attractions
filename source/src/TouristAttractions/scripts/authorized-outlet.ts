﻿import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';
import {LoginComponent} from './login';

@Directive({
    selector: 'router-outlet'
})
export class AuthorizedOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    constructor(_viewContainerRef: ViewContainerRef, _loader: DynamicComponentLoader,
        _parentRouter: Router, @Attribute('name') nameAttr: string) {
        super(_viewContainerRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        // The Boolean following each route below 
        // denotes whether the route requires authentication to view
        this.publicRoutes = {
            'Login': true,
            'SignUp': true
        };
    }

    activate(instruction: ComponentInstruction) {
        let url = instruction.urlPath;
        if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
            this.parentRouter.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }
}