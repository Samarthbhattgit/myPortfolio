import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsiveDirective]'
})
export class ResponsiveDirectiveDirective {

  constructor(
    private element: ElementRef,
    private breakPointObserver: BreakpointObserver
  ) {
    // we make use of breakPointObserver for make our website responsive 
    // breakpointobserver have one observe method and it's take paramatere as a array and we pass two element in array
    // here we make use of two brakpoint as handsetportrait and weblansacpe
    // this.breakPointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.WebLandscape]).subscribe(
    //   {
    //     next: (res) => {
    //       for (let breakPoint of Object.keys(res.breakpoints)) {
    //         if (res.breakpoints[breakPoint]) {
    //           if(breakPoint === Breakpoints.HandsetLandscape) {
    //             this.elementRef.nativeElement.classList.remove('pc');
    //           } 
    //           if ( breakPoint === Breakpoints.WebLandscape) {
    //             this.elementRef.nativeElement.classList.add('pc');
    //           }
    //         }
    //       }
    //     }
    //   }
    // );

    this.breakPointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) => {
        for (let breakpoint of Object.keys(result.breakpoints))
          if (result.breakpoints[breakpoint]) {
            if (breakpoint === Breakpoints.HandsetPortrait)
              this.element.nativeElement.classList.remove('pc');

            if (breakpoint === Breakpoints.WebLandscape)
              this.element.nativeElement.classList.add('pc');
          }
      },
    });
   }
}
