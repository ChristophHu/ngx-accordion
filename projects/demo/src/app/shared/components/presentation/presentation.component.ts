import { Component } from '@angular/core'
import html2canvas from 'html2canvas-pro'

@Component({
  selector: 'presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.sass'
})
export class PresentationComponent {

  downloadScreenshot() {
    console.log('Downloading screenshot...')
    const element = document.getElementById('capture')
    if (element) {
      html2canvas(element, { backgroundColor: null }).then(canvas => {
        const link = document.createElement('a')
        link.download = 'elementcapture.png'
        link.href = canvas.toDataURL()
        link.click()
      })
    }
  }
}
