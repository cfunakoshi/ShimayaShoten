import {Component, OnInit} from "@angular/core";
import { FormBuilder, ControlGroup, Validators, Control } from "@angular/common";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { Category } from "./category";
import { ContentListComponent } from "../content/content-list.component";
import { CategoryService } from "./category.service";
import { AuthService } from "../auth/auth.service";
import {ErrorService} from "../errors/error.service";
@Component({
	selector: 'my-category',
	template: `
		<div class="row spacing">
      	<nav class="col-md-6 col-md-offset-1">              
                <ul class="nav nav-tabs">                   
                    <li *ngFor="let category of categories">
                      <div class="container">
                        <button class="btn btn-danger btn-xs round" (click)="onDelete(category)" *ngIf="isLoggedIn()">X</button>
                      </div>
                      <a [routerLink]="['./content', category.name]">{{category.name}}</a>
                    </li>
                </ul>
          </nav>
          <div class="col-md-2" *ngIf="isLoggedIn()">
            <span class="glyphicon glyphicon-arrow-left"></span>
          </div>
        <div class="col-md-3" *ngIf="isLoggedIn()">
          <div class="well">
          <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
                        <label for="category">Add Category</label>
                        <input [ngFormControl]="myForm.find('category')" type="text" id="category" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
          </form>
          </div>
        </div>
    </div>
    <div class="row spacing">
      <section>
        <router-outlet></router-outlet>
      </section>
    </div>
    `, 
	directives: [ROUTER_DIRECTIVES],
	styles: [`
        .container {
          padding-left: 0;
          padding-right: 0;
          text-align: right;
        }

        .col-md-8 {
          padding-top: 30px;
        }

        li {
          float: none;
          display: inline-block;
        }

        li a {           
            color: #000084;         
        }

        li a:hover {
            background-color: #FFCC00;
            color: #FF2400;        
        }

        .router-link-active {
            background-color: #FFCC00;
            color: white;
        }

        .btn-xs {
            font-size: 10px;
            line-height: 2;
            width: 24px;           
            text-align: center;
            border-radius: 16px;
        }
    `]
})
@Routes([
    {path: '/content/:id', component: ContentListComponent}
])
export class CategoryComponent implements OnInit {

  myForm: ControlGroup;

  constructor(private _categoryService: CategoryService, private _fb:FormBuilder, private _authService: AuthService, private _errorService: ErrorService) {}

  categories: Category[];	

	ngOnInit() {

    this.myForm = this._fb.group({
            category: ['', Validators.required]
    });

		this._categoryService.getCategory()
			.subscribe(
				 categories => {
					this.categories = categories;
					this._categoryService.categories = categories;
				},
				error => this._errorService.handleError(error)
			);
	}

  onDelete(category: Category) {
    this._categoryService.deleteCategory( category )
          .subscribe(
            data => console.log(data),             
            error => this._errorService.handleError(error)
    );
  }

  onSubmit() {
    const category:Category = new Category( this.myForm.value.category, null );
    this._categoryService.addCategory( category )
          .subscribe(
            data => {
              console.log(data);
              this._categoryService.categories.push(data);
            },
            error => this._errorService.handleError(error)
          );
  }

  isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}