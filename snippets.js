export class AccountDetailsRequest implements Action {

    readonly type = MyAccountActionType.AccountDetailsRequest;

    constructor(public payload: AccountDetailsTO) { }

}

this.store$.dispatch(new MyAccountActions.AccountDetailsRequest(accDetails));

@Effect()

accountDetails$: Observable<Action> = this.actions$.pipe(

        ofType(MyAccountActionType.AccountDetailsRequest),

        switchMap((action: AccountDetailsRequest) => this.accountService.getAccountDetails(action.payload)),

        map(accountDetails => new AccountDetailsSuccess(accountDetails))

    );

export function myAccountReducers(state: MyAccountState = initialMyAccountState, action: MyAccountActionUnion) {

    switch (action.type) { 

        case MyAccountActionType.AccountDetailsSuccess:

            return { …state, accountDetails: action.payload };

    

        default:

            return state;

    }

}