import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  /**
   * Flag that indicates about loader showing
   */
  showLoader = false;

  /**
   * Creates loader service instance
   */
  constructor() { }

  /**
   * Processes observable and shows loader
   * @param observable observable to process
   */
  processObservable<T>(observable: Observable<T>): Observable<T> {
    this.showLoader = true;
    return observable.pipe(switchMap((result: T) => {
      this.showLoader = false;
      return of(result);
    }))
  }
}
