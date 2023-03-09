src/app/bootstrap/app-initializer.spec.ts:79:51 - error TS2769: No overload matches this call.
      Overload 1 of 3, '(object: AuthService, method: never): SpyInstance<never, never, any>', gave the following error.
        Argument of type 'string' is not assignable to parameter of type 'never'.
      Overload 2 of 3, '(object: AuthService, method: "startAuthenticationProcess" | "generateAndSaveSecurityChallenges" | "calculateAuthorizeURL" | "completeAuthenticationProcess" | ... 19 more ... | "getUserManualLocale"): SpyInstance<...>', gave the following error.
        Argument of type '"subscribe"' is not assignable to parameter of type '"startAuthenticationProcess" | "generateAndSaveSecurityChallenges" | "calculateAuthorizeURL" | "completeAuthenticationProcess" | "setSessionStorage" | "resetSessionStorage" | ... 17 more ... | "getUserManualLocale"'.

    79         let tokenObservable = jest.spyOn(service, 'subscribe');

jest.spyOn(service, 'subscribe');
service.completeAuthenticationProcess('').subscribe(async (response) => {
            console.log('phani 88888 = ', response);
        });
        
        
        service.completeAuthenticationProcess('').subscribe((response) => {
      console.log('phani 123456', response);
      expect(response).toBe(mockSuccessResponse);
    }, (err) => {
      expect(err).toBeTruthy();
    });

============================
const mockObservable = jest.fn(() => ({
  subscribe: jest.fn(callback => callback('mock value'))
}));

test('test with mock subscription', () => {
  const callback = jest.fn();
  const subscription = mockObservable().subscribe(callback);
  expect(callback).toHaveBeenCalledWith('mock value');
  subscription.unsubscribe();
});
--------------------------
const observable = new Observable(observer => {
  observer.next('value 1');
  observer.next('value 2');
});
test('test with spy subscription', () => {
  const callback = jest.fn();
  const subscription = jest.spyOn(observable, 'subscribe');
  observable.subscribe(callback);
  expect(subscription).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledWith('value 1');
  expect(callback).toHaveBeenCalledWith('value 2');
  subscription.mockRestore();
});
------------------
describe( 'MyComponent', () => {
    let fixture;
    let myServiceMock;

    beforeEach( () => {
        myServiceMock = {
            returnMyObservable: jest.fn()
        }

        fixture = new MyComponent( myServiceMock );
    });

    it ( 'should call doAThing when value is returned', () => {
        const doAThingSpy = jest.spyOn( fixture, 'doAThing' );
        myServiceMock.returnMyObservable.mockReturnValue( of( true ) );

        fixture.testFunction();

        expect( doAThingSpy ).toHaveBeenCalledWith( true );
    });
});

-------------------------------------
const myService = new MyService();
const subscriptionSpy = jest.spyOn(myService, 'subscribe');

myService.doSomethingThatShouldTriggerSubscription();
expect(subscriptionSpy).toHaveBeenCalledWith(/* expected arguments */);

const messageData = { /* some data */ };
myService.simulateMessage(messageData);

expect(subscriptionSpy.mock.calls[0][0]).toHaveBeenCalledWith(messageData);
afterEach(() => {
  subscriptionSpy.mockRestore();
});
