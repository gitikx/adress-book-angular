import {LoaderService} from './loader.service';
import {of} from "rxjs";
import {switchMap} from "rxjs/operators";

describe('LoaderServiceService', () => {
  let service: LoaderService;

  beforeEach(() => {
    service = new LoaderService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show loader on beginning', () => {
    const value = 123;
    service.processObservable(
      of(value).pipe(
        switchMap(() => {
            expect(service.showLoader).toBeTruthy();
            return of(value);
          }
        )
      )).subscribe((result) => {
      expect(result).toEqual(value)
      expect(service.showLoader).toBeFalse();
    })
  });
});
