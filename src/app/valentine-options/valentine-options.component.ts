import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-valentine-options',
  templateUrl: './valentine-options.component.html',
  styleUrl: './valentine-options.component.css'
})
export class ValentineOptionsComponent {
    @Output() yesOut = new EventEmitter<string>()
    text1: string = "Yes";
    text2 = "No";
    sad: boolean = false;
    originNo = 50
    originYes = 50

    yesClicked(){
      this.yesOut.emit(this.text1)
    }

    noClicked(){
      this.sad = true;
      if(this.originNo >= 20){
        this.originNo = this.originNo - 10;
      }
      if(this.originYes <= 100){
        this.originYes = this.originYes + 10;
      }
      this.text2 = "按错了宝"
      console.log(this.originNo);
      console.log(this.originYes);
    }

    getWidth1(){
      if(this.sad){
        return this.originYes
      }

    }

    getWidth2(){
      if(this.sad){
        return this.originNo
      }
    }
}
