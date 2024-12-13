import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatSliderModule } from '@angular/material/slider';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TempDrivenFormComponent } from './tempdrivenform/tempdrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { QuestionsService } from './question.service';
import { PalauteComponent } from './palaute/palaute.component';



export const routes: Routes = [
    { path: 'palaute', component:PalauteComponent},
    { path: 'reactiveform', component:ReactiveformComponent},
    { path: 'Tempdrivenform', component:TempDrivenFormComponent},
    { path: 'ticket', component:TicketComponent},
    { path: 'hello', component:HelloWorldComponent},  
    { path: 'calculator', component:CalculatorComponent},
    { path: 'feedback', component:FeedbackComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'feedback', component:FeedbackComponent },
    { path: 'calculator', component:CalculatorComponent },
    { path: '**', component:PageNotFoundComponent},
];