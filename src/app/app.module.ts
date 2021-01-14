import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AboutComponent } from './about/about.component';
import { FodmapListComponent } from './fodmap-list/fodmap-list.component';
import { FodmapListPageComponent } from './fodmap-list-page/fodmap-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe/recipe.component';
import { MEDietTypePipe } from './meDiet.pipe';
import { TimePipe } from './time.pipe';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { AmountPipe } from './amount.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutComponent,
    AmountPipe,
    AppComponent,
    FodmapListComponent,
    FodmapListPageComponent,
    HeaderComponent,
    HomeComponent,
    IngredientsListComponent,
    MEDietTypePipe,
    NavComponent,
    RecipeComponent,
    RecipesComponent,
    TimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
