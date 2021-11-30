import { Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit{

  private currentUser: string[] = [];
  private permissions:string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {
    let user = JSON.parse(localStorage.getItem('token') || '')
    this.currentUser =  user.role
  }

  ngOnInit(): void {
    // let user = JSON.parse(localStorage.getItem('token') || '')
    // console.log(user.role)
    // this.currentUser =  user.role
  }

  @Input()
  set appRole(role: string[]){
    this.permissions = role;
    this.UpdateView();
  }

  private UpdateView():void {
    this.viewContainer.clear();
    if(this.checkPersmission()){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkPersmission():boolean{
    let hasPermission = false;
   if(this.currentUser && this.permissions){
    for( const checkPersmission of this.permissions ){
      const found = this.currentUser.find( item => {
       return ( item.toUpperCase() === checkPersmission.toUpperCase());
      });

      if(found){
        hasPermission =  true
        break;
      }
    }
   }


    return hasPermission;
  }

}
