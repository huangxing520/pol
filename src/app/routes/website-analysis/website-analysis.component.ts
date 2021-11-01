import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-analysis',
  templateUrl: './website-analysis.component.html',
  styleUrls: ['./website-analysis.component.css']
})
export class WebsiteAnalysisComponent implements OnInit {
history=[200,300,400];
  constructor() { }

  ngOnInit(): void {
    let counters:NodeListOf<HTMLElement> = document.querySelectorAll('.counter')
    counters.forEach(counter  => {
      counter.innerText = '0'

      const updateCounter = () => {

        // @ts-ignore
        const target = this.history[+counter.getAttribute('data-target')]

        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`
          setTimeout(updateCounter, 0.1)
        } else {
          counter.innerText = String(target)
        }


      }

      updateCounter();
    })
  }

}
