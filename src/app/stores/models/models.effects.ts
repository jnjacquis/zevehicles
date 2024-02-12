import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import * as ModelsActions from './models.actions';
import { ModelService } from "src/app/services/model.service";

@Injectable()
export class ModelsEffects {

    constructor(private actions: Actions, private service: ModelService) { }

    getModels$ = createEffect(() =>
        this.actions.pipe(
            ofType(ModelsActions.getAllModels),
            mergeMap(() => {
                return this.service.getModels()
                    .pipe(
                        map((models) => {
                             console.log('EFfect: models ', models);
                            return ModelsActions.getAllModelsSuccess({ models });
                        }),
                        catchError(error => of(ModelsActions.getAllModelsFailure({ error: error.message })))
                    );
            })
        )
    );

    /*newModel$ = createEffect(() =>
        this.actions.pipe(
            ofType(ModelsActions.createNewModel),
            exhaustMap((action) => {
                console.log('EFfects create new model');
                return this.service.createNewModel(action.newModel)
                    .pipe(
                        map((model) => ModelsActions.createNewModelSuccess({ model })),
                        catchError(error => of(ModelsActions.createNewModelFailure({ error: error.message })))
                    )
            })
        )
    );*/
}