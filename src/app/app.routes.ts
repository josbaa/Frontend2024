import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatSliderModule } from '@angular/material/slider';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: 'hello', component:HelloWorldComponent},  
    { path: 'calculator', component:CalculatorComponent},
    { path: 'feedback', component:FeedbackComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: '**', component: PageNotFoundComponent},
];